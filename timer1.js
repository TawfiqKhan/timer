const args = process.argv.slice(2);
const timer = function(arr) {
  if (!arr.length)
    return;
  for (let item of arr) {
    if (Number(item)) {
      if (item > 0) {
        setTimeout(() => {
          console.log(`Beeped at ${item}sec`);
        }, item * 1000);
      }
    }
  }
};

timer(args);