import axios from "axios";

const apiKEY = import.meta.env.VITE_APIKEY;

const apiEP = `https://www.omdbapi.com/?apikey=${apiKEY}&`;
// const posterApiEP = `http://img.omdbapi.com/?apikey=${apiKEY}&`;

export const fetchFromAPI = async (str) => {
  try {
    const url = apiEP + "t=" + str;
    const response = await axios.get(url);
    //  console.log(response);
    // console.log("test fetched api...");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
