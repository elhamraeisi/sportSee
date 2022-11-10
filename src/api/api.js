import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "./data";

const BASE_URL = "http://localhost:3000/user/";
const MOCKED_DATA = false;

export function getUserData(userId) {
  if (MOCKED_DATA) {
    const index = USER_MAIN_DATA.findIndex((el) => el.id === Number(userId));
    return new Promise((resolve) => {
      resolve({ data: USER_MAIN_DATA[index] });
    });
  } else {
    return fetch(BASE_URL + userId).then((res) => res.json());
  }
}

export function getUserActivity(userId) {
  if (MOCKED_DATA) {
    const index = USER_MAIN_DATA.findIndex((el) => el.id === Number(userId));
    return new Promise((resolve) => {
      resolve({ data: USER_ACTIVITY[index] });
    });
  } else {
    return fetch(BASE_URL + userId + "/activity").then((res) => res.json());
  }
}

export function getUserPerformance(userId) {
  if (MOCKED_DATA) {
    const index = USER_MAIN_DATA.findIndex((el) => el.id === Number(userId));
    return new Promise((resolve) => {
      resolve({ data: USER_PERFORMANCE[index] });
    });
  } else {
    return fetch(BASE_URL + userId + "/performance").then((res) => res.json());
  }
}

export function getUserAverageSessions(userId) {
  if (MOCKED_DATA) {
    const index = USER_MAIN_DATA.findIndex((el) => el.id === Number(userId));
    return new Promise((resolve) => {
      resolve({ data: USER_AVERAGE_SESSIONS[index] });
    });
  } else {
    return fetch(BASE_URL + userId + "/average-sessions").then((res) =>
      res.json()
    );
  }
}
