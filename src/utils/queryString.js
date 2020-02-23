const objectToQueryString = obj => {
  let str = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key]) {
      str.push(key + "=" + obj[key]);
    }
  }
  return str.join("&");
};

export default objectToQueryString;
