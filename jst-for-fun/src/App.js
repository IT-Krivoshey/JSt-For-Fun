import React from "react";
import ColorButton from "./ColorButton";
import InfoButton from "./InfoButton";
import NameButton from "./NameButton";
import SummButton from "./SummButton";
import IfElseButton from "./IfElseButton";
import "./App.css";

function App() {
  function palindrome(str) {
    let orig = str;
    let rev = str.split("").reverse().join("");
    if (orig === rev) console.log(true);
    else console.log(false);
  }
  //palindrome("car"); // console -> falce
  //palindrome("racecar"); // console -> true

  function repeatify(str, times) {
    let newstr = "";
    for (let i = 0; i < times; i++) {
      newstr += str;
    }
    console.log(newstr);
  }
  //  repeatify("hello", 3); // console -> hellohellohello

  function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz");
    else if (num % 3 === 0) console.log("Fizz");
    else if (num % 5 === 0) console.log("Buzz");
    else console.log(num);
  }
  // for(let i = 0; i < 100; i++)
  //   fizzbuzz(i);
  // console -> from 1 to 100 fizz or buzz or fizzbuzz or num

  function evenNums(num) {
    for (let i = 1; i <= num; i++) {
      if (i % 2 !== 0) continue;
      console.log(i);
    }
  }
  // evenNums(100);

  function primeNums(num) {
    let i = 0;
    // Main
    outer: for (i = 0; i <= num; i++) {
      // If prime <= i
      for (let j = i - 1; j !== 1; j--)
        // If NO prime break for
        if (i % j === 0) continue outer;
      console.log(i);
    }
  }
  // primeNums(100);

  function min(a, b) {
    return a < b ? a : b;
  }
  // console.log(min(3, -3));

  function pow(x, n) {
    let sum = 1;
    for (let i = 0; i < n; i++) sum *= x;
    return sum;
  }
  // console.log(pow(6, 6));
  
  let copyPow = pow;
  // console.log(copyPow(6, 6));

  return (
    <div className="app">
      <InfoButton />
      <NameButton />
      <SummButton />
      <IfElseButton />
      <ColorButton />
    </div>
  );
}

export default App;
