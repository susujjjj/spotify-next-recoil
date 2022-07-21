import { atom } from 'recoil';

export const playlistState = atom({
  key: 'playlistState',
  default: null,
});

export const playlistIdState = atom({
  key: 'playlistIdState',
  default: 'qj7rjvsoqiwgiotx54rgc73z3', //one of the playlists id (wanna be you)
});
