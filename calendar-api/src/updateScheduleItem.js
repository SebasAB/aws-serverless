const AWS = require("aws-sdk");

const updateScheduleItem = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { dayName, activity, id } = event;

  await dynamodb
    .update({
      TableName: "ScheduleTable",
      Key: { id },
      UpdateExpression: "set dayName = :dayName, activity = :activity",
      ExpressionAttributeValues: {
        ":dayName": dayName,
        ":activity": activity,
      },
      ReturnValues: "ALL_NEW",
    })
    .promise();

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
  updateScheduleItem,
};
