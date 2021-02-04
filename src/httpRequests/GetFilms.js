import axios from "axios";
import base_url from "../utils/constants";

const GetFilms = () => {
  return axios.get(`${base_url}films/`);
};

export default GetFilms;
