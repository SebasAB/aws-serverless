const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addScheduleItem = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  // const { day, activity } = JSON.parse(event.body);
  const { day, activity } = event;
  const id = v4();

  const newScheduleItem = {
    id,
    day,
    activity,
  };

  await dynamodb
    .put({
      TableName: "ScheduleTable",
      Item: newScheduleItem,
    })
    .promise();

  return {
    statusCode: 200,
    body: {
      newScheduleItem,
    },
  };
};

module.exports = {
  addScheduleItem,
};
