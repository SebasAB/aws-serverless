const AWS = require("aws-sdk");

const deleteScheduleItem = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event;

  await dynamodb
    .delete({
      TableName: "ScheduleTable",
      Key: { id },
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
  deleteScheduleItem,
};
