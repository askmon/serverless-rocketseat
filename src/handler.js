const articleRepository = require('./repository/article')

const create = async event => {
  const article = JSON.parse(event.body);
  const result = await articleRepository.create(article)
  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}

const get = async event => {
  const { id } = event.pathParameters
  const result = await articleRepository.get(id)
  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}

module.exports = {
  create,
  get
}
