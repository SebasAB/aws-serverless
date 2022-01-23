const AWS = require("aws-sdk");

const deleteTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event;

  await dynamodb
    .delete({
      TableName: "TaskTable",
      Key: { id },
    })
    .promise();

  const result = await dynamodb
    .scan({
      TableName: "TaskTable",
    })
    .promise();

  const tasks = result.Items;

  return {
    status: 200,
    body: {
      tasks,
    },
  };
};

module.exports = {
  deleteTask,
};
