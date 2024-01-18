const GITHUB_ACCESS_TOKEN = `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`

export const getUsers = async (query) => {
  return await fetch(`https://api.github.com/search/users?q=${query}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
  })
}
