import axios from 'axios'

const BASE_URL='https://aliexpress-datahub.p.rapidapi.com'

const options = {
  method: 'GET',
  url: 'https://aliexpress-datahub.p.rapidapi.com/item_search',
  params: {
    q: 'iphone',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': 'cb10548f74msh711a638f9c9f2d8p1a7f06jsnd26b29ab46d0',
    'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
  }
};
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };