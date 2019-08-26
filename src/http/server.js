import axios from 'axios';
import qs from 'qs';

const http = {
  postJson: "",
  postForm: "",
  get: ""
}

const headers ={

}

http.postJson = function (api, data) {
  let params =  qs.stringify(data);
  return new Promise((resolve, reject) => {
    axios.post(api,params).then((res) => {
      resolve(res);
    })
  })
}

http.postForm = function (api, data) {
  return new Promise((resolve, reject) => {
    axios.post(
      api,
      data,
      {headers:{'Content-Type':'application/x-www-form-urlencoded'}}
      ).
    then((res) => {
      resolve(res);
    })
  })
}



http.get = function (api, data) {
  let params = qs.stringify(data);
  return new Promise((resolve, reject) => {
    axios.get(api, params).then((res) => {
      resolve(res);
    })
  })
}

export default http;
