import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countState } from '../../store/count';

interface CounterProps {}

const Counter: React.FC<CounterProps> = ({}) => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      <div>Current Count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
