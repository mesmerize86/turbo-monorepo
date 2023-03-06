import { Button } from "ui";

export default function About() {

  const returnTypeFunction = (param1:boolean, param2:boolean)  => {
    if(param1 && param2){
      return 'param1 and param2 are true'
    }
  }
  const age = 5;

  returnTypeFunction(true , true);
  console.log('return string ', returnTypeFunction(true , true));
  console.log('return undefined', returnTypeFunction(true , false));

  return (
    <>
    <div>
      <h1>Web</h1>
      <Button />
    </div>
    {age && {age}}
    </>
  );
}
