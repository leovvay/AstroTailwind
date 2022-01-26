import axios from 'axios';
import queryString from 'querystring';

const makeUrl = (uri, params) => {
  if (params && Object.keys(params).length) {
    return `${uri}?${queryString.stringify(params)}`;
  }

  return uri;
};


const getAccessToken = () => { 
  localStorage.setItem('crypto-accounting-app', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IlNoYW0iLCJsYXN0X25hbWUiOiJSYWkiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2MzgyODAwODN9.ozpYBBsvxNz-LDqa7NYZn8ZifzACvfc2tFL2SpJQFGo");
  return localStorage.getItem('crypto-accounting-app')
};

export {
  axios,
  makeUrl,
  getAccessToken
}
