import { inquirerMenu, inquirerPause, inquirerReadInput, reverseStringWithoutAffectingSpecialChars as reverseStr } from './helpers';

const main = async () => {
  console.clear();

  let opt: number;

  do {
    opt = await inquirerMenu();
    switch(opt) {
      case 1: 
        const sentence = await inquirerReadInput('Enter the string to reverse:');
        const reversed = reverseStr(sentence);
        console.log('String reversed:', reversed);
        break;
    }

    if (opt !== 2) await inquirerPause();
  } while (opt !== 2);
};

main();