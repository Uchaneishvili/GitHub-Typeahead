const GITHUB_ACCESS_TOKEN = process.env.REACT_APP_GITHUB_ACCESS_TOKEN

export const getUsers = async (query) => {
  return await fetch(`https://api.github.com/search/users?q=${query}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
  })
}
