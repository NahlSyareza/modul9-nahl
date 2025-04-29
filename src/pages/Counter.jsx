import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Counter() {
  const [getCount, setCount] = useState(0);

  useEffect(() => {
    if (getCount % 10 == 0) {
      alert(
        `${getCount} is divisible by 10! ${
          getCount == 0 ? "(yes I know this is annoying...)" : ""
        }`
      );
    }
  }, [getCount]);

  return (
    <div className="w-full h-screen bg-slate-500 font-mono overflow-x-hidden">
      <Navbar selected="counter" />
      <div className="flex flex-col items-center content-center">
        <p className="m-2 text-xl font-bold">Counter</p>
        <p className="m-2 text-3xl">{getCount}</p>
        <div className="m-2 flex w-36 justify-between">
          <div
            className="bg-green-400 rounded-md px-2"
            onClick={(e) => {
              setCount(getCount + 1);
            }}
          >
            +
          </div>
          <div
            className="bg-yellow-400 rounded-md px-2"
            onClick={(e) => {
              setCount(0);
            }}
          >
            reset
          </div>
          <div
            className="bg-red-400 rounded-md px-2"
            onClick={(e) => {
              setCount(getCount - 1);
            }}
          >
            -
          </div>
        </div>
      </div>
    </div>
  );
}
