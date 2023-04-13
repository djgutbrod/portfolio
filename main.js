import Phaser from 'phaser';

class ForestScene extends Phaser.Scene {
  constructor() {
    super('ForestScene');
  }

  preload() {
    // Replace 'path/to' with the actual paths to your assets
    this.load.image('background', 'tree');
    this.load.spritesheet('fox', 'lowpolfoxshape.png', { frameWidth: 32, frameHeight: 32 });
    this.load.image('animal', 'lowpolfoxshape.png' , { frameWidth: 32, frameHeight: 32 });
  }
  

  create() {
    // Add the background
    this.add.image(0, 0, 'background').setOrigin(0, 0);
  
    // Add the fox sprite and animations
    this.fox = this.physics.add.sprite(50, 500, 'fox');
    this.anims.create({
      key: 'walkRight',
      frames: this.anims.generateFrameNumbers('fox', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'walkLeft',
      frames: this.anims.generateFrameNumbers('fox', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });
  
    // Set up keyboard input for movement
    this.cursors = this.input.keyboard.createCursorKeys();
  
      // Add an animal character
  this.animal = this.physics.add.sprite(300, 500, 'animal');
  this.animal.setInteractive();
  this.animal.on('pointerdown', () => {
    // Display dialogue or information learned from the animal
    console.log('Animal interaction');
  });

  // Set up camera control
  this.cameras.main.setBounds(0, 0, this.sys.game.config.width, this.sys.game.config.height);
  this.cameras.main.startFollow(this.fox);
}

  

update() {
    // Reset fox's velocity
    this.fox.setVelocityX(0);
  
    // Move the fox based on keyboard input
    if (this.cursors.left.isDown) {
      this.fox.setVelocityX(-200);
      this.fox.anims.play('walkLeft', true);
    } else if (this.cursors.right.isDown) {
      this.fox.setVelocityX(200);
      this.fox.anims.play('walkRight', true);
    } else {
      this.fox.anims.stop();
    }
  }
  
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: ForestScene,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);

