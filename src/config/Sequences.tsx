export interface SequencesProps {
  name: string;
  id: string;
  moves: string[][];
}

export const Sequences: SequencesProps[] = [
  {
    name: "King's Pawn Opening",
    id: "Kings_Pawn_Opening",
    moves: [
      ["e2", "e4"],
    ]
  },{
    name: "King's Knight Opening",
    id: "Kings_Knight_Opening",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["g1", "f3"],
      ["b8", "c6"],
    ]
  },
  {
    name: "French Defense",
    id: "French Defense",
    moves: [
      ["e2", "e4"],
      ["e7", "e6"],
    ]
  },
  {
    name: "Nimzowitsch Defense",
    id: "Nimzowitsch_Defense",
    moves: [
      ["e2", "e4"],
      ["b8", "c6"],
    ]
  },
  {
    name: "Anderssen Opening",
    id: "Anderssen_Opening",
    moves: [
      ["a2", "a3"],
    ]
  },
  {
    name: "Bird Opening",
    id: "Bird_Opening",
    moves: [
      ["f2", "f4"],
    ]
  },
  {
    name: "Grob Opening",
    id: "Grob_Opening",
    moves: [
      ["g2", "g4"],
    ]
  },
  {
    name: "Clemenz Opening",
    id: "Clemenz_Opening",
    moves: [
      ["h2", "h3"],
    ]
  },
  {
    name: "Amar Opening",
    id: "Amar_Opening",
    moves: [
      ["g1", "h3"],
    ]
  },
  {
    name: "Sandomierz Gambit",
    id: "Sandomierz_Gambit",
    moves: [
      ["b1", "c3"],
      ["g8", "f6"],
      ["c3", "b1"],
      ["f6", "h5"],
      ["b1", "c3"],
      ["h5", "g3"],
      ["c3", "b1"],
      ["g3", "h1"],
      ["b1", "c3"],
      ["h1", "g3"],
      ["c3", "b1"],
      ["g3", "f1"],
      ["b1", "c3"],
      ["f1", "g3"],
      ["c3", "b1"],
      ["g3", "h5"],
      ["b1", "c3"],
      ["h5", "f4"],
      ["c3", "b1"],
      ["f4", "h3"],
      ["b1", "c3"],
      ["h3", "g1"],
      ["c3", "b1"],
      ["g1", "h3"],
      ["b1", "c3"],
      ["h3", "f4"],
      ["c3", "b1"],
      ["f4", "h5"],
      ["b1", "c3"],
      ["h5", "f6"],
      ["c3", "b1"],
      ["f6", "g8"],
    ]
  },
  {
    name: "Evans Gambit",
    id: "Evans_Gambit",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["g1", "f3"],
      ["b8", "c6"],
      ["f1", "c4"],
      ["f8", "c5"],
      ["b2", "b4"],
    ]
  },
  {
    name: "Vienna Game",
    id: "Vienna_Game",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["b1", "c3"],
    ]
  },
  {
    name: "Vienna Game Falkbeer Variation",
    id: "Vienna_Game_Falkbeer_Variation",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["b1", "c3"],
      ["g8", "f6"],
    ]
  },
  {
    name: "Vienna Game Frankenstein-Dracula Variation",
    id: "Vienna_Game_Frankenstein-Dracula_Variation",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["b1", "c3"],
      ["g8", "f6"],
      ["f1", "c4"],
      ["f6", "e4"],
    ]
  },
  {
    name: "Vienna Gambit",
    id: "Vienna_Gambit",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["b1", "c3"],
      ["g8", "f6"],
      ["f2", "f4"],
    ]
  },
  {
    name: "English Opening",
    id: "English_Opening",
    moves: [
      ["c2", "c4"],
    ]
  },
  {
    name: "Italian Game",
    id: "Italian_Game",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["g1", "f3"],
      ["b8", "c6"],
      ["f1", "c4"],
    ]
  },
  {
    name: "Sicilian Defense",
    id: "Sicilian_Defense",
    moves: [
      ["e2", "e4"],
      ["c7", "c5"],
    ]
  },
  {
    name: "Smith-Morra Gambit",
    id: "Smith-Morra_Gambit",
    moves: [
      ["e2", "e4"],
      ["c7", "c5"],
      ["d2", "d4"],
      ["c5", "d4"],
      ["c2", "c3"],
    ]
  },
  {
    name: "Sicilian Defense Najdorf Variation",
    id: "Sicilian_Defense_Najdorf_Variation",
    moves: [
      ["e2", "e4"],
      ["c7", "c5"],
      ["g1", "f3"],
      ["d7", "d6"],
      ["d2", "d4"],
      ["c5", "d4"],
      ["f3", "d4"],
      ["g8", "f6"],
      ["b1", "c3"],
      ["a7", "a6"],
    ]
  },
  {
    name: "Sicilian Defense Dragon Varation",
    id: "Sicilian_Defense_Dragon_Varation",
    moves: [
      ["e2", "e4"],
      ["c7", "c5"],
      ["g1", "f3"],
      ["d7", "d6"],
      ["d2", "d4"],
      ["c5", "d4"],
      ["f3", "d4"],
      ["g8", "f6"],
      ["b1", "c3"],
      ["g7", "g6"],
    ]
  },
  {
    name: "King's Gambit",
    id: "Kings_Gambit",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["f2", "f4"],
    ]
  },
  {
    name: "Bishop's Opening",
    id: "Bishops_Opening",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["f1", "c4"],
    ]
  },
  {
    name: "Spanish Game",
    id: "Spanish_Game",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["g1", "f3"],
      ["b8", "c6"],
      ["f1", "b5"],
    ]
  },
  {
    name: "Knight Attack",
    id: "Knight_Attack",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["g1", "f3"],
      ["b8", "c6"],
      ["f1", "c4"],
      ["g8", "f6"],
      ["f3", "g5"],
    ]
  },
  {
    name: "Fried Liver Attack",
    id: "Fried_Liver_Attack",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["g1", "f3"],
      ["b8", "c6"],
      ["f1", "c4"],
      ["g8", "f6"],
      ["f3", "g5"],
      ["d7", "d5"],
      ["e4", "d5"],
      ["f6", "d5"],
      ["g5", "f7"],
    ]
  },
  {
    name: "Petrov Defense",
    id: "Petrov_Defense",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["g1", "f3"],
      ["g8", "f6"],
    ]
  },
  {
    name: "Alekhine Defense",
    id: "Alekhine_Defense",
    moves: [
      ["e2", "e4"],
      ["g8", "f6"],
      
    ]
  },
  {
    name: "Budapest Gambit",
    id: "Budapest_Gambit",
    moves: [
      ["d2", "d4"],
      ["g8", "f6"],
      ["c2", "c4"],
      ["e7", "e5"],
      
    ]
  },
  {
    name: "Sodium Attack",
    id: "Sodium_Attack",
    moves: [
      ["b1", "a3"],
    ]
  },
  {
    name: "Durkin Gambit",
    id: "Durkin_Gambit",
    moves: [
      ["b1", "a3"],
      ["e7", "e5"],
      ["a3", "c4"],
      ["b8", "c6"],
      ["e2", "e4"],
      ["f7", "f5"],
    ]
  },
  {
    name: "Birmingham Gambit",
    id: "Birmingham_Gambit",
    moves: [
      ["b2", "b4"],
      ["c7", "c5"],
    ]
  },
  {
    name: "Caro-Kann Defense",
    id: "Caro-Kann_Defense",
    moves: [
      ["e2", "e4"],
      ["c7", "c6"],
      
    ]
  },
  {
    name: "Caro-Kann Defense Advance Variation",
    id: "Caro-Kann_Defense_Advance_Variation",
    moves: [
      ["e2", "e4"],
      ["c7", "c6"],
      ["d2", "d4"],
      ["d7", "d5"],
      ["e4", "e5"],
      
    ]
  },
  {
    name: "Caro-Kann Defense Exchange Variation",
    id: "Caro-Kann_Defense_Exchange_Variation",
    moves: [
      ["e2", "e4"],
      ["c7", "c6"],
      ["d2", "d4"],
      ["d7", "d5"],
      ["e4", "d5"],
      
    ]
  },
  {
    name: "Caro-Kann Defense Classic Variation",
    id: "Caro-Kann_Defense_Classic_Variation",
    moves: [
      ["e2", "e4"],
      ["c7", "c6"],
      ["d2", "d4"],
      ["d7", "d5"],
      ["b1", "c3"],
      
    ]
  },
  {
    name: "Stafford Gambit",
    id: "Stafford_Gambit",
    moves: [
      ["e2", "e4"],
      ["e7", "e5"],
      ["g1", "f3"],
      ["g8", "f6"],
      ["f3", "e5"],
      ["b8", "c6"],
    ]
  },
  {
    name: "Queen's Gambit",
    id: "Queens_Gambit",
    moves: [
      ["d2", "d4"],
      ["d7", "d5"],
      ["c2", "c4"],
    ]
  },
  {
    name: "Queen's Gambit Accepted",
    id: "Queens_Gambit_Accepted",
    moves: [
      ["d2", "d4"],
      ["d7", "d5"],
      ["c2", "c4"],
      ["d5", "c4"],
    ]
  },
  {
    name: "Queen's Gambit Declined",
    id: "Queens_Gambit_Declined",
    moves: [
      ["d2", "d4"],
      ["d7", "d5"],
      ["c2", "c4"],
      ["e7", "e6"],
    ]
  },
  {
    name: "Queen's Gambit Declined Marshall Defense",
    id: "Queens_Gambit_Declined_Marshall_Defense",
    moves: [
      ["d2", "d4"],
      ["d7", "d5"],
      ["c2", "c4"],
      ["g8", "f6"],    
    ]
  },
  {
    name: "Polish Opening",
    id: "Polish_Opening",
    moves: [
      ["b2", "b4"],
    ]
  },
  {
    name: "Polish Defense",
    id: "Polish_Defense",
    moves: [
      ["d2", "d4"],
      ["b7", "b5"],
    ]
  },
  {
    name: "Polish Gambit",
    id: "Polish_Gambit",
    moves: [
      ["e2", "e4"],
      ["b7", "b5"],
      ["f1", "b5"],
      ["c8", "b7"],
    ]
  },
  {
    name: "Dutch Defense",
    id: "Dutch_Defense",
    moves: [
      ["d2", "d4"],
      ["f7", "f5"],
    ]
  },
  {
    name: "Reti Opening",
    id: "Reti_Opening",
    moves: [
      ["g1", "f3"],
    ]
  },
  {
    name: "Indian Game",
    id: "Indian_Game",
    moves: [
      ["d2", "d4"],
      ["g8", "f6"],
    ]
  },
  {
    name: "Indian Game Normal Variation",
    id: "Indian_Game_Normal_Variation",
    moves: [
      ["d2", "d4"],
      ["g8", "f6"],
      ["c2", "c4"],
      
    ]
  },
  {
    name: "Old Indian Defense",
    id: "Old_Indian_Defense",
    moves: [
      ["d2", "d4"],
      ["g8", "f6"],
      ["c2", "c4"],
      ["d7", "d6"],
      
    ]
  },
  {
    name: "Benoni Defense",
    id: "Benoni_Defense",
    moves: [
      ["d2", "d4"],
      ["g8", "f6"],
      ["c2", "c4"],
      ["c7", "c5"],
      
    ]
  },
  
];

