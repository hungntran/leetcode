const fs = require('fs');
const prompts = require('prompts');

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
    cb();
  });
}

exports.default = initProblem;
