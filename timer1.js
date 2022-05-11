
const myArgs = process.argv.slice(2);
const timer = function(arg) {
  for (let item of arg) {
    if ((Number(item) < 0) || (isNaN(Number(item)))) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log(Number(item));
      },Number(item) * 1000);
    }
  }
};
timer(myArgs);

