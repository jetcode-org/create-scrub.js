export class HeroSprite extends Sprite {
    static instance;

    constructor(stage) {
        super(stage);

        if (HeroSprite.instance) {
            throw new Error('Hero class: use getInstance() method instead.');
        }
    }

    static getInstance(gameStage) {
        if (!HeroSprite.instance) {
            HeroSprite.instance = new HeroSprite(gameStage);

        } else {
            HeroSprite.instance.setStage(gameStage);
        }

        return HeroSprite.instance;
    }

    init() {
        // Custom configure here

        this.name = 'Hero';

        this.drawCostume(this.crabCostume, {
            width: 80,
            height: 80,
        });

        this.forever(this.control);
    }

    crabCostume(ctx) {
        const colors = [
            'rgba(0,0,0,0)', // 0 - transparent
            '#e63946',       // 1 - red
            '#22223b',       // 2 - black/dark blue
            '#ffd60a',       // 3 - yellow
            '#f1faee'        // 4 - white
        ];

        // Карта пикселей (16x16)
        const pixelMap = [
            [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 0, 0],
            [0, 1, 1, 1, 2, 4, 2, 1, 1, 2, 4, 2, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 3, 3, 0, 0, 1, 1, 1, 1, 0, 0, 3, 3, 0, 0],
            [0, 3, 3, 3, 0, 0, 0, 1, 1, 0, 0, 0, 3, 3, 3, 0],
            [0, 3, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 3, 3, 0],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
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

    control() {
        if (this.game.keyPressed('w')) {
            this.y -= 5;
        }

        if (this.game.keyPressed('s')) {
            this.y += 5;
        }

        if (this.game.keyPressed('d')) {
            this.x += 5;
        }

        if (this.game.keyPressed('a')) {
            this.x -= 5;
        }
    }
}
