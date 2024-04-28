import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState<number>(0);

  const CountD = () => {
    setCount(count - 1);
  };
  const CountI = () => {
    setCount(count + 1);
  };

  return { count, CountI, CountD };
};

export {useCounter};
