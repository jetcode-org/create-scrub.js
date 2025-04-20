import {Stage} from 'jetcode-scrubjs';

import {NpcSprite} from '../sprites/npc.sprite.js';
import {HeroSprite} from '../sprites/hero.sprite.js';

export class MainStage extends Stage {
    init() {
        this.backgroundColor = 'lightblue';

        // Usual sprite example
        const npc = new NpcSprite(this);
        npc.direction = 90;

        // Singleton example
        const hero = HeroSprite.getInstance(this);
        hero.y = 0;

        this.forever(this.control(npc, hero));
    }

    control(npc, hero) {
        return () => {
            if (npc.touchSprite(hero)) {
                npc.talk();

                this.timeout(() => {
                    this.forever(this.control(npc, hero));
                }, 3000);

                return false;
            }

            npc.move(5);
            npc.bounceOnEdge();
        }
    }
}
