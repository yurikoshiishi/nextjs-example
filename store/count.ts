import { atom, selector } from 'recoil';

export const countState = atom({
  key: 'count',
  default: 0,
});

export const countOppositeState = atom({
  key: 'countOppositeState',
  default: false,
});

export const oppositeCountState = selector({
  key: 'oppositeCountState',
  get: ({ get }) => {
    const count = get(countState);
    const isOpposite = get(countOppositeState);

    return count * (isOpposite ? -1 : 1);
  },
});
