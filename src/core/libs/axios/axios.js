import axios from "axios";

const http = async (method, pathUrl, body) => {
  const baseUrl = "https://police-cloud.herokuapp.com/";
  try {
    const resp = await axios({
      url: `${baseUrl}${pathUrl}`,
      data: body,
      method,
      headers: {
        Authorization: ""
      }
    });
    return resp;
  } catch (error) {
    return error.response;
  }
};
export default http;
