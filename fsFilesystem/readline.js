import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: fs.createReadStream('dummy.txt'),
//   crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`Line: ${line}`);
});

rl.on('close', () => {
  console.log('Finished reading file');
});



