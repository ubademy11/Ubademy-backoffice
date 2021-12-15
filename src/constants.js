
//export const USER_SERVICE_BASE_URL = "http://localhost:3002";
//export const COURSE_SERVICE_BASE_URL = "http://localhost:3003";

export const USER_SERVICE_BASE_URL = "https://ubademy--user-service.herokuapp.com";
export const COURSE_SERVICE_BASE_URL = "https://ubademy-course-service.herokuapp.com";

// USER SERVICE
export const LOGIN_URL = USER_SERVICE_BASE_URL + "/user/login/admin";
export const USER_INFO_URL = USER_SERVICE_BASE_URL + "/user/me";
export const SEARCH_USER_BY_PARAMS_URL = USER_SERVICE_BASE_URL + "/user/byParams";

// COURSE SERVICE
export const COURSE_LIST_URL = COURSE_SERVICE_BASE_URL + "/course";
export const SEARCH_COURSE_BY_PARAMS_URL = COURSE_SERVICE_BASE_URL + "/course/byParams";

