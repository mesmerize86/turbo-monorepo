import { Button } from "ui";

export default function Web() {
  const test = ' test ';
  const isTest = !(test === 'abc');
  for(var i = 0; i <= 10; i++){
    console.log('i ', i);
  }
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
