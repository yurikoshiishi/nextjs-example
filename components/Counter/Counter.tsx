import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  countOppositeState,
  countState,
  oppositeCountState,
} from '../../store/count';

interface CounterProps {}

const Counter: React.FC<CounterProps> = ({}) => {
  const [count, setCount] = useRecoilState(countState);
  const oppositeCount = useRecoilValue(oppositeCountState);
  const [isOpposite, setIsOpposite] = useRecoilState(countOppositeState);

  return (
    <div>
      <div>Current Count: {oppositeCount}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </div>
      <div>
        <button onClick={() => setIsOpposite(!isOpposite)}>
          show opposite count
        </button>
      </div>
    </div>
  );
};

export default Counter;
