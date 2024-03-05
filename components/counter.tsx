// @ts-nocheck
"use client";

import { useState, useEffect } from "react";
import React from "react";
import {Progress} from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export const Counter = () => {
  const [count, setCount] = useState(0.00001);
  const maxValue = 0.1; // Set your desired maximum value

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= maxValue) {
          clearInterval(intervalId); // Stop the counter when maxValue is reached
          return prevCount;          // Don't update the state 
        } else {
          return prevCount + 0.00001;
        }
      });
    }, 10); 

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="flex items-center justify-center">
		  <Button color="success">
			  $ {count.toFixed(2)}/{maxValue}
		  </Button>
    </div>
  );
};

export const ProgressCounter = () => {
	const [count, setCount] = useState(0.00001);
	const maxValue = 0.1; // Set your desired maximum value
  
	useEffect(() => {
	  const intervalId = setInterval(() => {
		setCount((prevCount) => {
		  if (prevCount >= maxValue) {
			clearInterval(intervalId); // Stop the counter when maxValue is reached
			return prevCount;          // Don't update the state 
		  } else {
			return prevCount + 0.00001;
		  }
		});
	  }, 10); 
  
	  return () => clearInterval(intervalId);
	}, []); 
  
	return (
	  <div>
		<Progress color="success" size="xs" aria-label="Loading..." value={count.toFixed(5)} maxValue={maxValue} />
	  </div>
	);
  };

  export const BodyCounter = () => {
	const [count, setCount] = useState(0.00001);
	const maxValue = 0.1; // Set your desired maximum value
  
	useEffect(() => {
	  const intervalId = setInterval(() => {
		setCount((prevCount) => {
		  if (prevCount >= maxValue) {
			clearInterval(intervalId); // Stop the counter when maxValue is reached
			return prevCount;          // Don't update the state 
		  } else {
			return prevCount + 0.00001;
		  }
		});
	  }, 10); 
  
	  return () => clearInterval(intervalId);
	}, []); 
  
	return (
	  <div>
		<div></div>
		<h1 className="flex justify-center">BALANCE</h1>
		<h1 className="flex justify-center">{maxValue}</h1>
		<div className="mt-5"></div>
		<h1 className="flex justify-center">MINE</h1>
		<h1 className="flex justify-center">{count.toFixed(5)}</h1>
		<div className="mt-5"></div>
		<h1 className="flex justify-center">REFERAL EARNED</h1>
		<h1 className="flex justify-center">{maxValue} User / {count.toFixed(5)} Univer</h1>
		<div className="mb-5"></div>
		<Progress color="success" className="flex justify-center max-w-md" size="lg" aria-label="Loading..." value={count.toFixed(5)} maxValue={maxValue} />
	  </div>
	);
  };
  