const AWS = require("aws-sdk");

const getScheduleItems = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb
    .scan({
      TableName: "ScheduleTable",
    })
    .promise();

  const scheduleItems = result.Items;

  return {
    status: 200,
    body: {
      scheduleItems,
    },
  };
};

module.exports = {
  getScheduleItems,
};
