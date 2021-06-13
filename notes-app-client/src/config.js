const config = {
  s3: {
    REGION: "eu-west-1",
    BUCKET: "notes-bucket",
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://10jq6r9bdg.execute-api.eu-west-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_JvKNV0I08",
    APP_CLIENT_ID: "3noth02617epd51qdglc3tqh52",
    IDENTITY_POOL_ID: "eu-west-1:c01fe50c-d611-4989-82f5-09eb37dc237c",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};

export default config;
