const { setTimeout } = window;

const delay = (timeout = 0) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default delay;
