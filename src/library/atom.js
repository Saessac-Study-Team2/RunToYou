import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {},
});

export const userPlaceState = atom({
  key: 'userPlaceState',
  default: [],
});

export const userIDState = atom({
  key: 'userIDState',
  default: null,
});
export const nicknameState = atom({
  key: 'nicknameState',
  default: null,
});
export const aboutMeState = atom({
  key: 'aboutMeState',
  default: null,
});

export const isUserState = atom({
  key: 'isUserState',
  default: null,
});
