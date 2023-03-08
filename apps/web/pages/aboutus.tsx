import { Button } from "ui";

export default function About() {

  const returnTypeFunction = (param1:boolean, param2:boolean)  => {
    const abc = true;
      const def = true;
      const ghi = true;
    const jkl = true;
    const mno = true;
    if(abc && def && ghi && jkl && mno){
      if(def){
        console.log('def is true');
      } else {
        console.log('def is false');
      }
    }
    if(param1 && param2){
      return 'param1 and param2 are true'
    }
    return;
  }

  returnTypeFunction(true , true);
  return (
    <>
    <div>
      <h1>Web</h1>
      <Button />
    </div>
    </>
  );
}
