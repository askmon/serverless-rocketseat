const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk')

const ARTICLES_TABLE = 'articles'
const dynamoDb = new AWS.DynamoDB.DocumentClient()

const create = async article => {
    const articleId = uuidv4()
    const newArticle = {
        articleId,
        ...article
    }

    const params = {
        TableName: ARTICLES_TABLE,
        Item: newArticle
    }

    await dynamoDb.put(params).promise()

    return newArticle
}

const get = async articleId => {
    const params = {
        TableName: ARTICLES_TABLE,
        Key: {
            articleId
        }
    }

    const result = await dynamoDb.get(params).promise()

    return result.Item
}

module.exports = {
    create,
    get
}