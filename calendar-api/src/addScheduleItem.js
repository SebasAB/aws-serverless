const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const addScheduleItem = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  // const { day, activity } = JSON.parse(event.body);
  const { dayName, activity } = event;
  const id = v4();

  const newScheduleItem = {
    id,
    dayName,
    activity,
  };

  await dynamodb
    .put({
      TableName: "ScheduleTable",
      Item: newScheduleItem,
    })
    .promise();

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
  addScheduleItem,
};
