import axios from "axios";

const http = async (method, pathUrl, body, isBaseUrl) => {
  const baseUrl = "https://police-cloud.herokuapp.com/";
  try {
    const resp = await axios({
      url: !isBaseUrl ? `${baseUrl}${pathUrl}` : `${pathUrl}`,
      data: body,
      method,
      headers: {
        Authorization: "",
        "content-type": "application/json"
      }
    });
    return resp;
  } catch (error) {
    return error.response;
  }
};
export default http;
