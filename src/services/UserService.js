const GITHUB_ACCESS_TOKEN = `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`

export const getUsers = async (query) => {
  return await fetch(`https://api.github.com/search/users?q=${query}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
  })
}
