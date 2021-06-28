import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  countOppositeState,
  countState,
  oppositeCountState,
} from '../../store/count';

interface CounterProps {}

const Counter: React.FC<CounterProps> = ({}) => {
  const setCount = useSetRecoilState(countState);
  const count = useRecoilValue(oppositeCountState);
  const [isOpposite, setIsOpposite] = useRecoilState(countOppositeState);

  return (
    <div>
      <div>Current Count: {count}</div>
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
