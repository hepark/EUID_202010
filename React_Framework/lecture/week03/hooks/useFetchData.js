import { useState, useEffect } from 'react';

// 커스텀 훅: useFetchData
export default function useFetchData(endpoint, methodName = 'json') {
  const [state, setState] = useState([]);
  // Promise 활용
  // useEffect(() => {
  //   fetch(endpoint)
  //     .then((response) => response[methodName]())
  //     .then((json) => setState(json))
  //     .catch((error) => console.error(error.message));
  // }, []);

  // Async 함수 활용
  useEffect(async () => {
    try {
      const response = await fetch(endpoint);
      const json = await response[methodName]();
      // const json = await (await fetch(endpoint))[methodName]();
      setState(json);
    } catch (error) {
      console.error(error.message);
    }
  });

  return state;
}
