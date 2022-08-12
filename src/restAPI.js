import axios from "axios";

axios.defaults.headers["interview-id"] = "uniqueId";
axios.defaults.baseURL = "https://crud-challenge.herokuapp.com";

export function POST(url, requestPayload) {
  const result = axios({
    method: "post",
    url,
    data: requestPayload,
  });
  return result
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.warn(err);
    });
}

export function GET(url) {
  const result = axios({
    method: "get",
    url,
  });
  return result
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.warn(err);
    });
}
export function DELETE(url) {
  const result = axios({
    method: "delete",
    url,
  });
  return result
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.warn(err);
    });
}
