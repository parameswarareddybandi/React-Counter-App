import { useState } from "react";
import './App.css';

function App(){
  let [counter, updateCounter] = useState(0);
  let limit = 10;
  let date = new Date();
  var Day = date.getDay();
  let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
  var TodayDate = date.getDate();
  var Month = date.getMonth()+1;
  var Year = date.getFullYear();

  return(
    <div id='container'>
      <h1>{arr[Day]}, {TodayDate}/{Month}/{Year}</h1>
      <h2>Counter App Using React</h2>
      <button id='minus' disabled={counter === 0} onClick={()=>{
          if(counter > 0){
            updateCounter(--counter);
          }
      }}> - </button>
      <h3>{counter}</h3>
      <button id='plus' disabled={counter === limit} onClick={()=>{
          if(counter < limit){
            updateCounter(++counter);
          }
      }}> + </button>
    </div>
  )
}

export default App;