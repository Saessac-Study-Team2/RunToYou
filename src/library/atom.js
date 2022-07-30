import { atom } from 'recoil';

import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist({
  key: 'User',
  storage: localStorage,
});

export const userState = atom({
  key: 'userState',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const UserAvataState = atom({
  key: 'userAvataState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
export const userPlaceState = atom({
  key: 'userPlaceState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const userIDState = atom({
  key: 'userIDState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
export const nicknameState = atom({
  key: 'nicknameState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
export const aboutMeState = atom({
  key: 'aboutMeState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const isUserState = atom({
  key: 'isUserState',
  default: null,
});

export const postsState = atom({
  key: 'PostsState',
  default: [],
});
export const locationListState = atom({
  key: 'LocationListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
export const postsLengthState = atom({
  key: 'postsLengthState',
  default: 0,
});
