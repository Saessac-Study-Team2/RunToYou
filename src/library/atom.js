import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {},
});

export const UserAvataState = atom({
  key: "userAvataState",
  default: null,
});
export const userPlaceState = atom({
  key: "userPlaceState",
  default: [],
});

export const userIDState = atom({
  key: "userIDState",
  default: null,
});
export const nicknameState = atom({
  key: "nicknameState",
  default: null,
});
export const aboutMeState = atom({
  key: "aboutMeState",
  default: null,
});

export const isUserState = atom({
  key: "isUserState",
  default: null,
});

export const postsState = atom({
  key: "PostsState",
  default: [],
});
export const locationListState = atom({
  key: "LocationListState",
  default: [],

});
export const postsLengthState = atom({
  key: "postsLengthState",
  default: 0,
});



