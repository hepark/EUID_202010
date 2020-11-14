import logError from './logError';

// const fetchData = (
//   apiAddress,
//   successCb,
//   failCb = ({ message }) => logError(message),
//   method = 'json'
// ) => {
//   fetch(apiAddress)
//     .then((response) => response[method]())
//     .then(successCb)
//     .catch(failCb);
// };

// export default fetchData;

const fetchData = async (
  apiAddress,
  successCb,
  failCb = ({ message }) => logError(message),
  method = 'json'
) => {
  try {
    const response = await fetch(apiAddress);
    const responseData = await response[method]();
    // const responseData = await (await fetch(apiAddress))[method]();
    successCb(responseData);
  } catch ({ message }) {
    failCb(message);
  }
};

export default fetchData;
