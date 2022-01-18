export const DivideId = (id: string) => {
  let posLetter = "";
  let posNumber = 0;

  posLetter = id.substring(0,1);
  posNumber = parseInt(id.substring(1,2)); 

  return {
    letter: posLetter,
    number: posNumber
  }
}