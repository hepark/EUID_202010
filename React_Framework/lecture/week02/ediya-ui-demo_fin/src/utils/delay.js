const delay = (timeout = 0) =>
  new Promise((resolve, reject) => window.setTimeout(resolve, timeout))

export default delay
