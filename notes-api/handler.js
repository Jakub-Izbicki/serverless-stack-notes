import { v4 as uuid } from 'uuid';

export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v2.0! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
    }),
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay) ${uuid()}`);
  }, time * 1000)
);
