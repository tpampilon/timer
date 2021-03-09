const input = process.argv.slice(2);

for(let i = 0; i < input.length; i++) {
  if(input[i] <= 0 || input[i] === '' || Number.isInteger(input[i]) === false){
    continue;
  } else {
    setTimeout(() => {
    process.stdout.write('\x07')
    console.log(`${input[i]} seconds !`);
    }, (input[i] * 1000));
  }
}