import axios from 'axios'

export const getUsers = async (query) => {
  return await axios.get(`https://api.github.com/search/users?q=${query}`)
}
