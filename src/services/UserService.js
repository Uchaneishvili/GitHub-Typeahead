export const getUsers = async (query) => {
  return await fetch(`https://api.github.com/search/users?q=${query}`, {
    method: 'get',
  })
}
