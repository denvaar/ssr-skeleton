function apiSimulator() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 800);
  });
}

export async function getHelloWorld() {
  var result = await apiSimulator();
  return "hello world";
}
