import axios from "axios";
import base_url from "../utils/constants";

const GetInfo = (info) => {
  if (info === "planets") {
    return axios.get(`${base_url}${info}/?format=wookiee`);
  }
  return axios.get(`${base_url}${info}/`);
};

export default GetInfo;
