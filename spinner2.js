const spinnerSteps = ['|', '/', '-', '\\', '|'];
const delay = 200;
spinnerSteps.forEach((step, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${step}   `);
  }, index * delay);
});
