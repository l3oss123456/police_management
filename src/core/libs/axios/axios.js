import axios from "axios";

const http = async (method, pathUrl, body, isBaseUrl) => {
  try {
    const resp = await axios({
      url: !isBaseUrl
        ? `${process.env.REACT_APP_BASEURL}${pathUrl}`
        : `${pathUrl}`,
      data: body,
      method,
      headers: {
        Authorization: "",
        "content-type": "application/json",
      },
    });
    return resp;
  } catch (error) {
    return error.response;
  }
};
export default http;
