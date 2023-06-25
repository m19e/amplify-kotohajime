/* Amplify Params - DO NOT EDIT
	API_KOTOHAJIME_BOARDTABLE_ARN
	API_KOTOHAJIME_BOARDTABLE_NAME
	API_KOTOHAJIME_GRAPHQLAPIENDPOINTOUTPUT
	API_KOTOHAJIME_GRAPHQLAPIIDOUTPUT
	API_KOTOHAJIME_GRAPHQLAPIKEYOUTPUT
	API_KOTOHAJIME_PERSONTABLE_ARN
	API_KOTOHAJIME_PERSONTABLE_NAME
	ENV
	REGION
	STORAGE_S3KOTOHAJIMESTORAGEFA52AE71_BUCKETNAME
Amplify Params - DO NOT EDIT */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const AWS = require("aws-sdk")
const table = "Board-ypmayfwctbbdzh3k2prsrzw3pe-staging"

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async event => {
  const db = new AWS.DynamoDB.DocumentClient()
  const data = await db.scan({ TableName: table }).promise()

  console.log(`EVENT: ${JSON.stringify(event)}`)
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify(data),
  }
}
