import {NpcSprite} from '../sprites/npc.sprite.js';
import {HeroSprite} from '../sprites/hero.sprite.js';

export class MainStage extends Stage {
    init() {
        this.backgroundColor = 'lightblue';

        // Usual sprite example
        const cat = new NpcSprite(this);
        cat.direction = 90;

        // Singleton example
        const hero = HeroSprite.getInstance(this);

        this.forever(this.control(cat, hero));
    }

    control(cat, hero) {
        return () => {
            cat.move(5);
            cat.bounceOnEdge();

            // hero.move(3);
            // hero.bounceOnEdge();
        }
    }
}
