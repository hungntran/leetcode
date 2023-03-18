const fs = require('fs');
const prompts = require('prompts');

const TEST_CONTENT = `import { yourFunctionName } from '.';

it('Example case 1', () => {
  const input = '';
  const output = ''
  expect(yourFunctionName(input)).toBe(output);
});`;

async function initProblem(cb) {
  const response = await prompts([
    {
      type: 'select',
      name: 'difficult',
      message: 'Pick difficult',
      choices: [
        { title: 'Easy', value: 'Easy' },
        { title: 'Medium', value: 'Medium' },
        { title: 'Hard', value: 'Hard' },
      ],
    },
    {
      type: 'text',
      name: 'name',
      message: 'Enter problem name',
    },
  ]);

  const path = `./src/${response.difficult}/${response.name}`;
  fs.mkdir(path, () => {
    fs.writeFileSync(`${path}/index.js`, '');
    fs.writeFileSync(`${path}/index.test.js`, new Buffer.from(TEST_CONTENT));
    cb();
  });
}

exports.default = initProblem;
