import inquirer from 'inquirer';
import { isNotEmpty, containsSpecialChars } from './';


export const inquirerPause = async () => {
  const question = [{
    type: 'input',
    name: 'enter',
    message: 'Press ENTER to continue...'
  }];
  console.log('\n');
  await inquirer.prompt(question)
};

export const inquirerReadInput = async (message: string): Promise<string> => {
  const question = [{
    type: 'input',
    name: 'desc',
    message,
    validate(value: string) {
      // required
      if (!isNotEmpty(value)) return 'Please, enter a string!';
      // must contain at least 1 special char
      if (!containsSpecialChars(value)) return 'The string to reverse must contain at least 1 special character!';
      return true;
    }
  }];

  const { desc } = await inquirer.prompt(question);
  return desc;
}

export const inquirerMenu = async (): Promise<number> => {
  console.clear();
  console.log('==========================================');
  console.log('\t N5 Logical Test - Main Menu');
  console.log('==========================================');

  const { option } = await inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Select an option',
      choices: [
        { value: 1, name: `1) Run challenge` },
        { value: 2, name: `2) Exit` }
      ]
    },
  ]);
  return option;
}
