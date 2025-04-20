import {Game} from 'jetcode-scrubjs';

import {MainStage} from './stages/main.stage.js';

export const game = new Game(800, 600);

const mainStage = new MainStage();

game.run(mainStage);
