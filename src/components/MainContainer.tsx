import { useEffect, useRef, useState } from "react";
import { initialGame, initialGameBlack } from "../config/Positions";
import { ChangePosition } from "./ChangePosition";
import "./MainContainer.css";
import { DivideId } from "./Utilities";
import { Sequences, SequencesProps } from "../config/Sequences";
import { IonContent } from "@ionic/react";
import { isPlatform } from "@ionic/core";

interface ContainerProps {}

const MainContainer: React.FC<ContainerProps> = () => {
  const [_initialGame, _setInitialGame] = useState(initialGame);
  //kliknięta figura
  const [firstPiece, setFirstPiece] = useState<string[]>([]);
  //możliwe ruchy klikniętej figury
  const [firstPieceMove, setFirstPieceMove] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("Choose your opening");
  const [openingsArrState, setOpeningsArrState] = useState<SequencesProps[]>(
    Sequences.sort(function (a, b) {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1; //nameA comes first
      }
      if (nameA > nameB) {
        return 1; // nameB comes first
      }
      return 0; // names must be equal
    })
  );
  const [currentOpening, setCurrentOpening] = useState<string[][]>([]);
  const [moveCounter, setMoveCounter] = useState<number>(0);
  const [currentColor, setCurrentColor] = useState<string>("white");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [tempOpening, setTempOpening] = useState<string[]>([]);
  const [playAs, setPlayAs] = useState<string>();
  const [correctOpen, setCorrectOpen] = useState<boolean>(false);
  const [wrongOpen, setWrongOpen] = useState<boolean>(false);
  const [blockChessboard, setBlockChessboard] = useState<boolean>(true);
  const [blockOpenings, setBlockOpenings] = useState<boolean>(false);

  interface Divided {
    number: number;
    letter: string;
  }
  const PieceClick = (array: string[]) => {
    if (firstPiece.length > 0) {
      if (firstPieceMove.includes(array[0])) {
        if (moveCounter < currentOpening.length) {
          if (
            currentOpening[moveCounter][0] == firstPiece[0] &&
            currentOpening[moveCounter][1] == array[0]
          ) {
            // ruch wybraną bierką
            let temp_initialGame = ChangePosition(
              firstPiece[0],
              array[0],
              _initialGame
            );
            _setInitialGame(temp_initialGame);

            //sprawdzenie czy czarny może się poruszyć
            if (moveCounter + 1 < currentOpening.length) {
              setTimeout(() => {
                // ruch przeciwnika
                _setInitialGame(
                  ChangePosition(
                    currentOpening[moveCounter + 1][0],
                    currentOpening[moveCounter + 1][1],
                    temp_initialGame
                  )
                );
              }, 500);
            }
            if (moveCounter + 2 >= currentOpening.length) {
              setCorrectOpen(true);
              setBlockChessboard(true);
            }

            setMoveCounter(moveCounter + 2);
          } else {
            _setInitialGame(
              ChangePosition(firstPiece[0], array[0], _initialGame)
            );
            setWrongOpen(true);
            setBlockChessboard(true);
          }
        }

        setFirstPiece([]);
        setFirstPieceMove([]);
      } else {
        setFirstPiece([]);
        setFirstPieceMove([]);
      }
    } else {
      if (array[1]) {
        setFirstPiece(array);
      } else {
        setFirstPiece([]);
        setFirstPieceMove([]);
      }
    }
  };

  // wykrywanie kolizji
  const isCollisionBetweenColors = (first: Divided, second: string): any => {
    const _first = FindPositionInChessboardByDivided(
      first.letter,
      first.number
    );
    const _second = FindPositionInChessboardById(second);

    if (Boolean(_first) && Boolean(_second)) {
      if (_first[1].includes("white") && _second[1] === "blackKing") {
        return true;
      } else {
        if (_first[1].includes("white") && _second[1].includes("black")) {
          return false;
        } else if (
          _first[1].includes("black") &&
          _second[1].includes("white")
        ) {
          return false;
        } else if (_first[1].includes("black") && _second[1] == "") {
          return false;
        } else if (_first[1] == "" && _second[1].includes("black")) {
          return false;
        } else if (_first[1].includes("white") && _second[1] == "") {
          return false;
        } else if (_first[1] == "" && _second[1].includes("white")) {
          return false;
        } else {
          return true;
        }
      }
    } else {
      return true;
    }
  };

  const PawnMove = (initDivided: Divided, retArr: string[], c: number) => {
    let numberAttack = initDivided.number - 1 * c;
    let attackIds = [
      LetterCalc(initDivided.letter, -1) + numberAttack,
      LetterCalc(initDivided.letter, 1) + numberAttack,
    ];
    _initialGame.map((e) => {
      if (attackIds.includes(e[0])) {
        if (e[1]) {
          let toPush = e[0];
          if (!isCollisionBetweenColors(initDivided, toPush)) {
            retArr.push(toPush);
          }
        }
      }
      // sprawdzenie czy jest figura jedno pole przed
      else if (e[0] == initDivided.letter + (initDivided.number - 1 * c)) {
        // jeżeli nie ma figury to pushujemy
        if (!e[1]) {
          let toPush = initDivided.letter + (initDivided.number - 1 * c);
          if (!isCollisionBetweenColors(initDivided, toPush)) {
            retArr.push(toPush);
          }
        }
      }
      // sprawdzenie czy jest figura dwa pola przed
      else if (e[0] == initDivided.letter + (initDivided.number - 2 * c)) {
        // sprawdzamy czy jest w wierszu początkowym
        if (initDivided.number == 7 || initDivided.number == 2) {
          // jeżeli nie ma figury to pushujemy
          if (
            // jeżeli nie ma figury o dwa pole przed
            !e[1] &&
            // jeżeli nie ma figury o jedno pole przed
            !FindPositionInChessboardByDivided(
              DivideId(e[0]).letter,
              Number(DivideId(e[0]).number + 1 * c)
            )[1]
          ) {
            // pokazanie możliwej pozycji o dwa pola
            let toPush =
              initDivided.letter + Number(initDivided.number - 2 * c);
            if (!isCollisionBetweenColors(initDivided, toPush)) {
              retArr.push(toPush);
            }
          }
        }
      }
    });
  };

  const RookMove = (
    initDivided: Divided,
    retArr: string[],
    id: Divided,
    iteration: number = 8
  ) => {
    const possibleRookMoves: string[][] = [[], [], [], []];
    for (let i = 1; i <= iteration; i++) {
      //poruszanie w prawo
      if (
        letters.indexOf(LetterCalc(initDivided.letter, i)) <= 9 &&
        letters.indexOf(LetterCalc(initDivided.letter, i)) > -1
      ) {
        possibleRookMoves[0].push(
          LetterCalc(initDivided.letter, i) + initDivided.number
        );
        //ruchy niemożliwe do wykonania
      } else {
        possibleRookMoves[0].push("x1");
      }
      //poruszanie w lewoo
      if (letters.indexOf(LetterCalc(initDivided.letter, -i)) >= 0) {
        possibleRookMoves[1].push(
          LetterCalc(initDivided.letter, -i) + initDivided.number
        );
      } else {
        possibleRookMoves[1].push("x1");
      }
      //poruszanie w dół
      if (initDivided.number - i > 0) {
        possibleRookMoves[2].push(
          initDivided.letter + (initDivided.number - i)
        );
      } else {
        possibleRookMoves[2].push("x1");
      }
      //poruszannie w góre
      if (initDivided.number + i < 9) {
        possibleRookMoves[3].push(
          initDivided.letter + (initDivided.number + i)
        );
      } else {
        possibleRookMoves[3].push("x1");
      }
    }

    // mapowanie po tablicach możliwych ruchów wieży
    possibleRookMoves.map((e) => {
      let ret = true;
      //mapowanie po każdej diagonali
      e.map((_e) => {
        if (_e === "x1") {
          ret = false;
        }
        if (ret) {
          if (!isCollisionBetweenColors(id, _e)) {
            retArr.push(_e);
          }
        }
        if (ret) {
          if (FindPositionInChessboardById(_e)[1]) {
            ret = false;
          }
        }
      });
    });
  };

  const BishopMove = (
    initDivided: Divided,
    retArr: string[],
    id: Divided,
    iteration: number = 8
  ) => {
    const possibleBishopMoves: string[][] = [[], [], [], []];
    for (let i = 1; i <= iteration; i++) {
      //diagonala lewa dół
      //sprawdzenie czy ruchy nie wychodza poza szachownice
      if (
        initDivided.number - i > 0 &&
        letters.indexOf(LetterCalc(initDivided.letter, -i)) >= 0
      ) {
        possibleBishopMoves[0].push(
          LetterCalc(initDivided.letter, -i) + (initDivided.number - i)
        );
      } else {
        possibleBishopMoves[0].push("x1");
      }

      //diagonala lewa góra
      if (
        initDivided.number + i < 9 &&
        letters.indexOf(LetterCalc(initDivided.letter, -i)) >= 0
      ) {
        possibleBishopMoves[1].push(
          LetterCalc(initDivided.letter, -i) + (initDivided.number + i)
        );
      } else {
        possibleBishopMoves[1].push("x1");
      }

      //diagonala prawa góra
      if (
        initDivided.number + i < 9 &&
        letters.indexOf(LetterCalc(initDivided.letter, i)) <= 9 &&
        letters.indexOf(LetterCalc(initDivided.letter, i)) > -1
      ) {
        possibleBishopMoves[2].push(
          LetterCalc(initDivided.letter, i) + (initDivided.number + i)
        );
      } else {
        possibleBishopMoves[2].push("x1");
      }
      //diagonala prawa dół
      if (
        initDivided.number - i > 0 &&
        letters.indexOf(LetterCalc(initDivided.letter, i)) <= 9 &&
        letters.indexOf(LetterCalc(initDivided.letter, i)) > -1
      ) {
        possibleBishopMoves[3].push(
          LetterCalc(initDivided.letter, i) + (initDivided.number - i)
        );
      } else {
        possibleBishopMoves[3].push("x1");
      }
    }

    possibleBishopMoves.map((e) => {
      let ret = true;
      //mapowanie po każdej diagonali
      e.map((_e) => {
        if (_e.startsWith("x")) {
          ret = false;
        }
        if (ret) {
          if (!isCollisionBetweenColors(id, _e)) {
            retArr.push(_e);
          }
        }
        if (ret) {
          // dlaczego tam jest index 1?? i co to robi
          if (FindPositionInChessboardById(_e)[1]) {
            ret = false;
          }
        }
      });
    });
  };

  const QueenMove = (initDivided: Divided, retArr: string[], id: Divided) => {
    RookMove(initDivided, retArr, id);
    BishopMove(initDivided, retArr, id);
  };

  const KingMove = (initDivided: Divided, retArr: string[], id: Divided) => {
    RookMove(initDivided, retArr, id, 1);
    BishopMove(initDivided, retArr, id, 1);
  };

  const KnightMove = (initDivided: Divided, retArr: string[], id: Divided) => {
    let toPush: string[] = [
      LetterCalc(initDivided.letter, 1) + (initDivided.number - 2),
      LetterCalc(initDivided.letter, 1) + (initDivided.number + 2),
      LetterCalc(initDivided.letter, 2) + (initDivided.number + 1),
      LetterCalc(initDivided.letter, 2) + (initDivided.number - 1),
      LetterCalc(initDivided.letter, -1) + (initDivided.number - 2),
      LetterCalc(initDivided.letter, -1) + (initDivided.number + 2),
      LetterCalc(initDivided.letter, -2) + (initDivided.number + 1),
      LetterCalc(initDivided.letter, -2) + (initDivided.number - 1),
    ];

    toPush.map((e) => {
      //zapobieganie np b8 + 2 = b10//po divideId wyszłoby b1
      if (e.endsWith("10")) {
        e = "x1";
      }
      let tmpDivided = DivideId(e);

      if (
        !isCollisionBetweenColors(
          initDivided,
          tmpDivided.letter + tmpDivided.number.toString()
        )
      ) {
        retArr.push(tmpDivided.letter + tmpDivided.number);
      } else {
        retArr.push("x1");
      }
    });
  };

  const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const LetterCalc = (letter: string, num: number) => {
    const letterIndex = letters.indexOf(letter);

    if (letterIndex + num < letters.length && letterIndex + num >= 0) {
      return letters[letterIndex + num];
    } else {
      return "x";
    }
  };

  // funkcja szukająca pozycji za pomocą DividedId
  const FindPositionInChessboardByDivided = (letter: string, num: number) => {
    return _initialGame.filter((arr) => {
      return arr[0] == letter + num;
    })[0];
  };
  // funkcja szukająca pozycji za pomocą Id
  const FindPositionInChessboardById = (id: string) => {
    return _initialGame.filter((arr) => {
      return arr[0] == id;
    })[0];
  };

  // funkcja określająca możliwe pozycje
  const GetPossiblePos = (array: string[]) => {
    let retArr: string[] = [];

    let dividedId = DivideId(array[0]);

    if (array[1].endsWith("Pawn")) {
      if (array[1].startsWith("black")) {
        PawnMove(dividedId, retArr, 1);
      } else if (array[1].startsWith("white")) {
        PawnMove(dividedId, retArr, -1);
      }
    } else if (array[1].endsWith("Rook")) {
      RookMove(dividedId, retArr, dividedId);
    } else if (array[1].endsWith("Bishop")) {
      BishopMove(dividedId, retArr, dividedId);
    } else if (array[1].endsWith("Queen")) {
      QueenMove(dividedId, retArr, dividedId);
    } else if (array[1].endsWith("King")) {
      KingMove(dividedId, retArr, dividedId);
    } else if (array[1].endsWith("Knight")) {
      KnightMove(dividedId, retArr, dividedId);
    }

    return retArr;
  };

  const SearchOpening = (e: string) => {
    const searchOpening = e;
    let _openingsArr = Sequences.filter((el) =>
      el.name.toLowerCase().includes(searchOpening)
    );

    setOpeningsArrState(_openingsArr);
  };

  //obsługa wybrania debiutu
  //zmiana ustawień na domyślne(początkowe)
  const OpeningChoose = (name: string, id: string, block = false) => {
    if (currentColor === "white") {
      _setInitialGame(initialGame);
      setMoveCounter(0);
    } else {
      _setInitialGame(initialGameBlack);
      setMoveCounter(1);
    }

    setFirstPiece([]);
    setFirstPieceMove([]);
    setTitle(name);
    setBlockChessboard(block);

    let _currentOpening: string[][] = [[]];

    Sequences.filter((el) => {
      if (el.id == id) {
        _currentOpening = el.moves;
        setCurrentOpening(el.moves);
      }
    });

    return _currentOpening;
  };

  const GetOpeningChoose = (name: string, id: string) => {
    let _currentOpening: string[][] = [[]];
    Sequences.filter((el) => {
      if (el.id == id) {
        _currentOpening = el.moves;
      }
    });
    return _currentOpening;
  };

  const AutoPlay = () => {
    let _currentOpening = OpeningChoose(tempOpening[0], tempOpening[1], true);

    console.log(_currentOpening);

    let tempInitGame = initialGame;

    let i = 0;

    let interval = setInterval(() => {
      if (i < _currentOpening.length) {
        tempInitGame = ChangePosition(
          _currentOpening[i][0],
          _currentOpening[i][1],
          tempInitGame
        );
        _setInitialGame(tempInitGame);
        i++;
      } else {
        clearInterval(interval);
        setBlockOpenings(false);
      }
    }, 650);
  };

  const contentRef = useRef<HTMLIonContentElement>(null);

  // zwracany html
  return (
    <IonContent ref={contentRef} fullscreen>
      <div className="site">
        <div className="title">{title}</div>
        <div className="playAs" style={{ marginBottom: "10px" }}>
          {playAs}
        </div>
        <div className="chessboard-container">
          <section className={"chessboard " + (blockChessboard ? "block" : "")}>
            {_initialGame.map(function (e) {
              return (
                <div
                  id={e[0]}
                  className={
                    e[1] +
                    " " +
                    e[2] +
                    " " +
                    (firstPiece[0] == e[0] || firstPieceMove.includes(e[0])
                      ? "piece-active"
                      : "")
                  }
                  onClick={() => {
                    if (e[1].startsWith(currentColor)) {
                      setFirstPieceMove(GetPossiblePos(e));
                      PieceClick(e);
                      return;
                    }

                    if (firstPiece.length > 0) {
                      if (firstPiece[1].startsWith(currentColor)) {
                        setFirstPieceMove(GetPossiblePos(e));
                        PieceClick(e);
                        return;
                      }
                    }
                  }}
                ></div>
              );
            })}
          </section>
        </div>
        <input
          type="text"
          placeholder="Search opening database..."
          onInput={(e) => {
            const _e = e.nativeEvent.target as HTMLInputElement;
            SearchOpening(_e.value.toLowerCase());
          }}
        ></input>
        <section className="opening-container">
          {openingsArrState.map((e) => {
            return (
              <div
                className={"opening-box " + (blockOpenings ? "block" : "")}
                onClick={() => {
                  if (isPlatform("mobile")) {
                    contentRef.current?.scrollToPoint(0, 0);
                  }
                  setModalOpen(true);
                  setTempOpening([e.name, e.id]);
                }}
              >
                <p>{e.name}</p>
              </div>
            );
          })}
        </section>
        <div className={"modal " + (modalOpen ? "animated" : "")}>
          <p className="modalP">Play as?</p>
          <button
            type="button"
            className="whiteButton"
            onClick={() => {
              setCurrentColor("white");
              OpeningChoose(tempOpening[0], tempOpening[1]);
              setModalOpen(false);
              setPlayAs(`You play as white`);
              _setInitialGame(initialGame);
            }}
          ></button>

          {GetOpeningChoose(tempOpening[0], tempOpening[1]).length > 1 ? (
            <button
              type="button"
              className="blackButton"
              onClick={() => {
                setCurrentColor("black");
                let _currentOpening = OpeningChoose(
                  tempOpening[0],
                  tempOpening[1]
                );
                setModalOpen(false);
                setPlayAs(`You play as black`);
                let tempInitGame = ChangePosition(
                  _currentOpening[0][0],
                  _currentOpening[0][1],
                  initialGameBlack
                );

                _setInitialGame(tempInitGame);
                setMoveCounter(moveCounter + 1);
              }}
            ></button>
          ) : (
            <></>
          )}
          <button
            type="button"
            className="checkButton"
            onClick={() => {
              //setBlockChessboard(true);
              AutoPlay();
              setModalOpen(false);
              setPlayAs(`Checking`);
              setBlockOpenings(true);
              setCurrentColor("white");
            }}
          >
            check opening
          </button>
        </div>

        <div className={"correct modal " + (correctOpen ? "animated" : "")}>
          Correct!
          <button
            type="button"
            className="tryAgainButton"
            onClick={() => {
              OpeningChoose(tempOpening[0], tempOpening[1]);
              setCorrectOpen(false);
              if (currentColor === "black") {
                let _currentOpening = OpeningChoose(
                  tempOpening[0],
                  tempOpening[1]
                );
                setPlayAs(`You play as black`);
                let tempInitGame = ChangePosition(
                  _currentOpening[0][0],
                  _currentOpening[0][1],
                  initialGameBlack
                );

                _setInitialGame(tempInitGame);
              }
            }}
          >
            Play again
          </button>
        </div>

        <div className={"wrong modal " + (wrongOpen ? "animated" : "")}>
          Wrong!
          <button
            type="button"
            className="tryAgainButton"
            onClick={() => {
              OpeningChoose(tempOpening[0], tempOpening[1]);
              setWrongOpen(false);
              if (currentColor === "black") {
                let _currentOpening = OpeningChoose(
                  tempOpening[0],
                  tempOpening[1]
                );
                setPlayAs(`You play as black`);
                let tempInitGame = ChangePosition(
                  _currentOpening[0][0],
                  _currentOpening[0][1],
                  initialGameBlack
                );

                _setInitialGame(tempInitGame);
              }
            }}
          >
            Try again
          </button>
        </div>
      </div>
    </IonContent>
  );
};

export default MainContainer;
