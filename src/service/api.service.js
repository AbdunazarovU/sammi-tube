import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': 'e6493c4934msh2b691e668fb637fp11395cjsna9b1e1d48379',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const ApiService = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options)
    return response.data
  },
}