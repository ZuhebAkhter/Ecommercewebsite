import axios from 'axios'

const BASE_URL='https://asos2.p.rapidapi.com'

const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: '0',
    categoryId: '4209',
    limit: '48',
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
  headers: {
    'X-RapidAPI-Key': 'cb10548f74msh711a638f9c9f2d8p1a7f06jsnd26b29ab46d0',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
  }
};


  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };