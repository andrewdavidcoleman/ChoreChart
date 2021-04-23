import axios from 'axios'

export default axios.create({
    baseURL: 'https://chorechartapi.azurewebsites.net/api/chorechart'
  });