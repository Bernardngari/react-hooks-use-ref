import React, { useEffect, useState,useRef } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
   const pricer = useRef(price);
  let prevPrice= pricer.current

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  useEffect(()=> {
  if(prevPrice > price){
    setColor("red")
  }else if(prevPrice < price){
    setColor("green")
  }else{
    setColor("black")
  }
  pricer.current=price;
  },[price])
  console.log(prevPrice,price);
  const elementRef = useRef();

  return (
    <div ref={elementRef}>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
