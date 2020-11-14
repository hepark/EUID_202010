async function fetchData(apiAddress, successCb, errorCb, method = 'json') {
  try {
    const response = await (await fetch(apiAddress))[method]();
    successCb(response);
  } catch (error) {
    errorCb(error);
  }
}

export default fetchData;
