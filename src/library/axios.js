import axios from "axios";
import { getLoginCookie } from "./cookie";

const DOMAIN = "https://saessac.kro.kr:80";
export const checkID = (id) => {
  const config = {
    method: "get",
    url: `https://saessac.kro.kr:80/checkid?userid=${id} `,
    headers: {},
  };

  return axios(config)
    .then((res) => res.data.msg)
    .catch((error) => console.log("signUp error", error));
};

export const signup = (ID, PW) => {
  const config = {
    method: "post",
    url: `${DOMAIN}/user/insert`,
    data: {
      userid: ID,
      userpassword: PW,
    },
  };
  return axios(config)
    .then((res) => res.data.msg)
    .catch((error) => console.log("signUp error", error));
};

export const login = (ID, PW) => {
  const config = {
    method: "post",
    url: `${DOMAIN}/user/login`,
    data: { userid: ID, userpassword: PW },
  };

  return axios(config)
    .then((res) => res.data)
    .catch((error) => console.log("login error", error));
};

export const getProfile = () => {
  const config = {
    method: "get",
    url: `${DOMAIN}/user`,
    headers: { Authorization: getLoginCookie() },
  };

  return axios(config) //
    .then((res) => {
      if (res.data.msg) {
        const data = res.data.data;
        return data;
      }
    })
    .catch((error) => console.log("getProfile error", error));
};

export const getUsers = () => {
  const config = {
    method: "get",
    url: `${DOMAIN}/user/list`,
    headers: {},
  };

  return axios(config) //
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((error) => console.log("getUsers error", error));
};

export const getPlace = () => {
  const config = {
    method: "get",
    url: `${DOMAIN}/location/list`,
    headers: {},
  };

  return axios(config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("getPlace error", error);
    });
};

export const deleteImg = () => {
  const config = {
    method: "put",
    url: `${DOMAIN}/user/picture`,
    headers: { Authorization: getLoginCookie() },
    data: {},
  };
  return axios(config).catch((error) => console.log("deletImg error", error));
};

export const addImg = (compressedFile) => {
  const config = {
    method: "post",
    url: `${DOMAIN}/user/picture`,
    headers: {
      Authorization: getLoginCookie(),
      "Content-Type": "multipart/form-data",
    },
    data: {
      profileImg: compressedFile,
    },
  };
  return axios(config).catch((error) => console.log("addImg error", error));
};

export const deletePlace = (locationid) => {
  const config = {
    method: "delete",
    url: `${DOMAIN}/favoritlocation?lid=${locationid}`,
    headers: { Authorization: getLoginCookie() },
  };
  return axios(config).catch((error) =>
    console.log("deletePlace error", error)
  );
};

export const addProfile = (nickname, info) => {
  const config = {
    method: "put",
    url: `${DOMAIN}/user`,
    headers: { Authorization: getLoginCookie() },
    data: { nickname, info },
  };
  return axios(config).catch((error) => console.log("addProfile error", error));
};

export const updatePW = (currentuserpassword, userpassword) => {
  const config = {
    method: "put",
    url: `${DOMAIN}/user/password`,
    headers: { Authorization: getLoginCookie() },
    data: {
      currentuserpassword,
      userpassword,
    },
  };
  return axios(config)
    .then((res) => res.data.msg)
    .catch((error) => console.log("updatePW error", error));
};

export const addPlace = (locationid) => {
  const config = {
    method: "post",
    url: `${DOMAIN}/favoritlocation/insert`,
    headers: { Authorization: getLoginCookie() },
    data: { locationid },
  };

  return axios(config)
    .then((res) => console.log("addPlace success", res.data))
    .catch((error) => console.log("addPlace error", error));
};

export const deleteAccount = () => {
  const config = {
    method: "delete",
    url: `${DOMAIN}/user`,
    headers: { Authorization: getLoginCookie() },
  };
  return axios(config)
    .then((res) => console.log("deleteAccount success", res))
    .catch((error) => console.log("deleteAccount error", error));
};

export const getPosts = () => {
  const config = {
    method: "get",
    url: `${DOMAIN}/topic/list`,
    headers: {},
  };
  return axios(config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("getPlace error", error);
    });
};
