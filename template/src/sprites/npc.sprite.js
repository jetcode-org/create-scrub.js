import {Sprite} from 'jetcode-scrubjs';

export class NpcSprite extends Sprite {
    phrases = [
        'Bring your games to life in the browser — fast and easy!',
        'Unleash your creativity with ScrubJS — your gaming sidekick!',
        'Stop waiting — start creating 2D games with ScrubJS today!',
        'ScrubJS — your superhero in the world of HTML5 gaming!',
        'Level up your skills and build the game of your dreams with ScrubJS!',
        'Small code — huge possibilities! ScrubJS for your 2D adventures.',
        'Create, play, share — with ScrubJS, everything becomes reality!',
        'ScrubJS — the library that turns ideas into browser hits!',
        'From beginner to pro — ScrubJS guides you to success in game development!',
        'Write code that plays! ScrubJS — the perfect start for your 2D game.',
    ];
    phraseIndex = 0;

    init() {
        // Custom configure here

        this.rotateStyle = 'leftRight';
        this.name = 'NPC';

        this.drawCostume(this.crabCostume, {
            width: 80,
            height: 80,
        });
    }

    crabCostume(ctx) {
        const colors = [
            'rgba(0,0,0,0)',   // 0 - red
            '#2a9d8f',         // 1 - green
            '#264653',         // 2 - dark blue
            '#f25c05',         // 3 - red
            '#f4f1de',         // 4 - white
            '#000000'          // 5 - black
        ];

        // Map (16x16)
        const pixelMap = [
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 0],
            [0, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0],
            [0, 1, 1, 2, 4, 2, 1, 1, 1, 2, 4, 2, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 3, 3, 0, 0, 1, 1, 1, 1, 0, 0, 3, 3, 0, 0],
            [0, 3, 3, 3, 0, 0, 0, 1, 1, 0, 0, 0, 3, 3, 3, 0],
            [0, 3, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 3, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0],
            [0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        const pixelSize = 5;

        for (let y = 0; y < pixelMap.length; y++) {
            for (let x = 0; x < pixelMap[y].length; x++) {
                const colorIndex = pixelMap[y][x];
                if (colorIndex !== 0) {
                    ctx.fillStyle = colors[colorIndex];
                    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                }
            }
        }
    }

    talk() {
        this.say(this.phrases[this.phraseIndex], 3000);
        this.phraseIndex++;

        if (this.phraseIndex >= this.phrases.length) {
            this.phraseIndex = 0;
        }
    }
}
