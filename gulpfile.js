const fs = require('fs');
const argv = require('yargs').argv;

function initProblem(cb) {
  const testContent = `import { yourFunctionName } from '.';

it('Example case 1', () => {
  const input = '';
  expect(yourFunctionName(input)).toBe(0);
});

it('Example case 2', () => {
  const input = '';
  expect(yourFunctionName(input)).toBe(0);
});`;

  const path = `./src/${argv.level.toUpperCase()}/${argv.name}`;
  fs.mkdir(path, () => {
    fs.writeFileSync(`${path}/index.js`, '');
    fs.writeFileSync(`${path}/index.test.js`, new Buffer.from(testContent));
    cb();
  });
}

exports.default = initProblem;
