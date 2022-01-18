export const ChangePosition = (
    prevPosId: string,
    posId: string,
    _initialGame: string[][],
    prevPosId2: string = "x1",
    posId2: string = "x1",
  ) => {
    
    let prevArr: string[] = [];
    let prevArr2: string[] = [];
  
    _initialGame.map(function (e) {
      if (e[0] == prevPosId) {
        prevArr = e;
      }
      if (e[0] == prevPosId2) {
        prevArr2 = e;
      }
    });
  
    let _initialGameTemp: any = [];
  
    if(prevPosId2 != "x1" && posId2 != "x1")
    {
      _initialGame.map(function (e) {
        if (e[0] == prevPosId) {
          _initialGameTemp.push([e[0], "", e[2]]);
        } else if (e[0] == posId) {
          _initialGameTemp.push([e[0], prevArr[1], e[2]]);
        } 
        else if (e[0] == prevPosId2) {
          _initialGameTemp.push([e[0], "", e[2]]);
        } else if (e[0] == posId2) {
          _initialGameTemp.push([e[0], prevArr2[1], e[2]]);
        } 
        else {
          _initialGameTemp.push(e);
        }
      });
    }
    else
    {
      _initialGame.map(function (e) {
        if (e[0] == prevPosId) {
          _initialGameTemp.push([e[0], "", e[2]]);
        } else if (e[0] == posId) {
          _initialGameTemp.push([e[0], prevArr[1], e[2]]);
        } else {
          _initialGameTemp.push(e);
        }
      });
    }
  
    
  
    return _initialGameTemp;
  };