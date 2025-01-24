import { takeAChance } from './take-a-chance.js';

takeAChance('trey')
  .then((resolve: any) => console.log(resolve))
  .catch((error: any) => console.error(error.message));
