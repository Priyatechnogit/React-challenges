import { useState } from "react";

function useChronicle(initialValue) {
  const [timeline, setTimeline] = useState([initialValue]);

  const setState = (newValue) => {
    setTimeline((prevTimeline) => [...prevTimeline, newValue]);
  };

  const resetState = () => {
    setTimeline((prevTimeline) => {
      if (prevTimeline.length < 2) return prevTimeline; //if only one value left, do nothing to prevent removing the initial value
      return prevTimeline.slice(0, -1); // removes the last item and prev becomes current
    });
  };

  const currentValue = timeline.at(-1); //gets the last item in the array, which is the current value shown in the input.

  return [currentValue, setState, resetState]; 
  //returns the current value,the function to add a new value,the function to undo.
}

export default useChronicle;