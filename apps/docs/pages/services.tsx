import { Button } from "ui";

export default function Docs() {
  for(var i = '0'; i <= 10; i++){
    console.log('i ', i);
  }

  let abc = ' abcd ';

  let isFalse = !(abc === 'abc');
  console.log('isFalse ', isFalse);

  return (
    <div>
      <h1>Docs</h1>
    </div>
  );
}
