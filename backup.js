var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 1000,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var nave;
var cursors;
var n=50;
var techo;
var cama;
var cama2;
var vel=200;
var naso;
var mueble;
var pared;
var sofa;
var w=10;
var h=10;
var text;
var text1;
var tec;
var tec1;
var nx;
var sof;
var sof1;


function preload ()
{
    this.load.image('piso', 'tiles/piso.jpg');
    this.load.image('fondo', 'tiles/vacia61.png');
    this.load.image('cuad', 'tiles/cuad.png');
   
    this.load.image('ss', 'tiles/ss.png');
    
    this.load.image('cama', 'tiles/cama1.png');
    this.load.image('cama2', 'tiles/cama2.png');
    
    this.load.image('techo', 'tiles/vacia6-techo.jpg');
    this.load.image('tele', 'tiles/tele.png');
    this.load.image('mesatv', 'tiles/mesatv.png');
    this.load.image('sofa', 'tiles/sofa.png');
    this.load.image('tina', 'tiles/tina.png');
    this.load.image('pared', 'tiles/cuad.png');
    this.load.spritesheet('tim', 'tiles/tim.png',{ frameWidth: 500, frameHeight: 500 });
    this.load.spritesheet('nave', 'tiles/ssh.png',{ frameWidth: 573, frameHeight: 560 });
    
  //  this.load.image('tapia', 'tiles/tapia.png')

    
}
function create ()
{




    
    this.add.image(700, 400, 'piso').setDisplaySize(6000, 6000);
    casa=this.add.image(750, 400, 'fondo').setDisplaySize(1300, 800);
    ss=this.add.image(430, 490, 'ss').setDisplaySize(100, 50);
   
    cama=this.physics.add.sprite(430, 490, 'cama').setDisplaySize(230, 200).setImmovable();
    cama2=this.physics.add.image(1107, 248, 'cama2').setDisplaySize(180, 180).setImmovable();
    mtv=this.physics.add.image(440, 355, 'mesatv').setDisplaySize(100, 70).setImmovable();
    mtv1=this.physics.add.image(1110, 355, 'mesatv').setDisplaySize(100, 60).setImmovable();
    this.physics.add.image(438, 355, 'tele').setDisplaySize(150, 50);
    this.physics.add.image(1110, 355, 'tele').setDisplaySize(150, 50);
    sofa1=this.physics.add.image(350, 235, 'sofa').setDisplaySize(60, 60).setImmovable();
    sofa= this.physics.add.image(520, 235, 'sofa').setDisplaySize(60, 60).setImmovable();
    tina=this.physics.add.image(625, 235, 'tina').setDisplaySize(100, 70).setImmovable();
    tim = this.physics.add.sprite(100, 1000, 'tim').setDisplaySize(60, 60).setDrag(10000, 10000);   
    nave = this.physics.add.sprite(w, h, 'nave').setDisplaySize(n, n).setDrag(1000, 1000); 
  //  tapia=this.physics.add.image(750, 400, 'tapia').setDisplaySize(1300, 800).setImmovable();
  cuad=this.add.image(100, 100, 'cuad').setDisplaySize(100, 100);
  techo=this.add.image(750, 400, 'techo').setDisplaySize(1200, 700);

    {
    pared=this.physics.add.image(270, 430, 'pared').setAlpha(1).setDisplaySize(100, 550).setImmovable();
    pared1=this.physics.add.image(310, 175, 'pared').setAlpha(1).setDisplaySize(200, 50).setImmovable();
    pared2=this.physics.add.image(500, 670, 'pared').setAlpha(1).setDisplaySize(550, 70).setImmovable();
    pared3=this.physics.add.image(1030, 115, 'pared').setAlpha(1).setDisplaySize(570, 70).setImmovable();
    pared4=this.physics.add.image(1260, 240, 'pared').setAlpha(1).setDisplaySize(100, 320).setImmovable();
    pared5=this.physics.add.image(990, 470, 'pared').setAlpha(1).setDisplaySize(70, 200).setImmovable();
    pared6=this.physics.add.image(760, 610, 'pared').setAlpha(1).setDisplaySize(40, 190).setImmovable();
    pared7=this.physics.add.image(775, 485, 'pared').setAlpha(1).setDisplaySize(10, 190).setImmovable();
    pared8=this.physics.add.image(775, 185, 'pared').setAlpha(1).setDisplaySize(10, 190).setImmovable();
    pared9=this.physics.add.image(560, 220, 'pared').setAlpha(1).setDisplaySize(10, 100).setImmovable();
    pared10=this.physics.add.image(450, 385, 'pared').setAlpha(1).setDisplaySize(400, 10).setImmovable();
    pared11=this.physics.add.image(900, 550, 'pared').setAlpha(1).setDisplaySize(250, 60).setImmovable();
    pared12=this.physics.add.image(1150, 390, 'pared').setAlpha(1).setDisplaySize(250, 40).setImmovable();
    pared13=this.physics.add.image(660, 175, 'pared').setAlpha(1).setDisplaySize(350, 50).setImmovable();
    pared14=this.physics.add.image(680, 385, 'pared').setAlpha(1).setDisplaySize(60, 10).setImmovable();
    pared15=this.physics.add.image(627, 280, 'pared').setAlpha(1).setDisplaySize(140, 10).setImmovable();
    pared16=this.physics.add.image(450, 150, 'pared').setAlpha(1).setDisplaySize(90, 10).setImmovable();
    pared17=this.physics.add.image(730, 280, 'pared').setAlpha(1).setDisplaySize(80, 10).setImmovable();
    pared18=this.physics.add.image(740, 385, 'pared').setAlpha(1).setDisplaySize(60, 10).setImmovable();
    pared19=this.physics.add.image(560, 327, 'pared').setAlpha(1).setDisplaySize(10, 100).setImmovable();
    pared20=this.physics.add.image(983, 150, 'pared').setAlpha(1).setDisplaySize(20, 125).setImmovable();
    pared21=this.physics.add.image(983, 380, 'pared').setAlpha(1).setDisplaySize(20, 125).setImmovable();
    }   
    
    {

    coli=this.physics.add.collider(nave, pared);
    coli1=this.physics.add.collider(nave, pared1);
    coli2=this.physics.add.collider(nave, pared2);
    coli3=this.physics.add.collider(nave, pared3);
    coli4=this.physics.add.collider(nave, pared4);
    coli5=this.physics.add.collider(nave, pared5);
    coli6=this.physics.add.collider(nave, pared6);
    coli7=this.physics.add.collider(nave, pared7);
    coli8=this.physics.add.collider(nave, pared8);
    coli9=this.physics.add.collider(nave, pared9);
    coli10=this.physics.add.collider(nave, pared10);
    coli11=this.physics.add.collider(nave, pared11);
    coli12=this.physics.add.collider(nave, pared12);
    coli13=this.physics.add.collider(nave, pared13);
    coli14=this.physics.add.collider(nave, pared14);
    coli15=this.physics.add.collider(nave, pared15);
    coli16=this.physics.add.collider(nave, pared16);
    coli17=this.physics.add.collider(nave, pared17);
    coli18=this.physics.add.collider(nave, pared18);
    coli19=this.physics.add.collider(nave, pared19);
    coli20=this.physics.add.collider(nave, pared20);
    coli21=this.physics.add.collider(nave, pared21);
    }

    {
    coli=this.physics.add.collider(tim, pared);
    coli1=this.physics.add.collider(tim, pared1);
    coli2=this.physics.add.collider(tim, pared2);
    coli3=this.physics.add.collider(tim, pared3);
    coli4=this.physics.add.collider(tim, pared4);
    coli5=this.physics.add.collider(tim, pared5);
    coli6=this.physics.add.collider(tim, pared6);
    coli7=this.physics.add.collider(tim, pared7);
    coli8=this.physics.add.collider(tim, pared8);
    coli9=this.physics.add.collider(tim, pared9);
    coli10=this.physics.add.collider(tim, pared10);
    coli11=this.physics.add.collider(tim, pared11);
    coli12=this.physics.add.collider(tim, pared12);
    coli13=this.physics.add.collider(tim, pared13);
    coli14=this.physics.add.collider(tim, pared14);
    coli15=this.physics.add.collider(tim, pared15);
    coli16=this.physics.add.collider(tim, pared16);
    coli17=this.physics.add.collider(tim, pared17);
    coli18=this.physics.add.collider(tim, pared18);
    coli19=this.physics.add.collider(tim, pared19);
    coli20=this.physics.add.collider(tim, pared20);
    coli21=this.physics.add.collider(tim, pared21);
    }








    this.physics.add.collider(nave, cama2);
    this.physics.add.collider(nave, mtv);
    this.physics.add.collider(nave, mtv1);
    this.physics.add.collider(nave, sofa);
    this.physics.add.collider(nave, sofa1);    
    this.physics.add.collider(nave, tina);

   
    cursors = this.input.keyboard.createCursorKeys();
    keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);  
    keyX = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);
    keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

    this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers('nave', { start: 0, end: 1 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'up1',
        frames: this.anims.generateFrameNumbers('tim', { start: 0, end: 9 }),
        frameRate: 10,
        repeat: -1
    });
    
	var style = { font: "65px Arial", fill: "#00ff00", align: "center" };
    bmpText = this.add.text(200, 200,"aita", style)
    
function cami(){
    graphics = this.add.graphics();

    follower = follower.create(100, 1000, 'cuad');

    follower.setData('cuad', new Phaser.Math.Vector2());
    //  The curves do not have to be joined
    line1 = new Phaser.Curves.Line([ 100, 1000, 120, -150 ]);
    line2 = new Phaser.Curves.Line([ 120, -150, 500, -100 ]);
    line3 = new Phaser.Curves.Line([ 500, -100, 700, 20 ]);
    line4 = new Phaser.Curves.Line([ 700, 20, 1500, 20 ]);
    line5 = new Phaser.Curves.Line([ 1500, 20, 1500, 1300 ]);
    line6 = new Phaser.Curves.Line([ 1500, 1300, 100, 1000 ]);

    path = this.add.path();

    // path = new Phaser.Curves.Path();

    path.add(line1);
    path.add(line2);
    path.add(line3);
    path.add(line4);
    path.add(line5);
    path.add(line6);

    this.tweens.add({
        targets: follower,
        t: 1,
        ease: 'Linear',
        duration: 6000,
        yoyo: true,
        repeat: -1
    });

}
   
}

function update ()
{
  
    this.cameras.main.zoom = 0.3;
    this.cameras.main.setBounds(0, -200);
    this.cameras.main.startFollow(nave, 0, 0, -400, -400);


    this.physics.add.collider(nave, mtv);
    this.physics.add.collider(nave, mtv1);
    sof=this.physics.add.collider(nave, sofa);
    sof1=this.physics.add.collider(nave, sofa1);    
    this.physics.add.collider(nave, tina);
   

    if (cursors.left.isDown)
    {
        nave.setAngularVelocity(-150);
    }

    
    else if (cursors.right.isDown)
    {
        nave.setAngularVelocity(150);
    }
    else
    {
        nave.setAngularVelocity(0);
    }

    if (cursors.up.isDown)
    {
        this.physics.velocityFromRotation(nave.rotation, vel, nave.body.acceleration);
        nave.anims.play('up', true);
    }
    else
    {
        nave.setAcceleration(0);
        nave.anims.play('up', false);
    }

    if(keyX.isDown){nave.setDisplaySize (n--, n--)};
    if(keyZ.isDown){nave.setDisplaySize (n++, n++)};
    
    if(n<10){nave.setDisplaySize(10, 10),n=10};
    if(n>50){nave.setDisplaySize(50, 50),n=50};

    //if(n<20){ this.physics.world.colliders.destroy(coli)};
    //if(n>20){coli=this.physics.add.collider(nave, cama)};

    //if(n>20){ this.physics.world.colliders.destroy(coli2)};
    //if(n<20){coli2=this.physics.add.collider(nave, cama2)};







    //tim mov

    if (Phaser.Math.Distance.BetweenPoints(tim, nave) <700){
        
        this.physics.moveToObject(tim, nave, 400);
        tim.anims.play('up1', true);

        // target or player's x, y
        const tx = nave.x
        const ty = nave.y

        // enemy's x, y
        const x = tim.x
        const y = tim.y

        tim.rotation = Phaser.Math.Angle.Between(x, y, tx, ty)
    }
    
    
    if (Phaser.Math.Distance.BetweenPoints(tim, nave) <50){

        
        nave.visible=false;
        
    }

    // ifs
    
    if  (Phaser.Math.Distance.BetweenPoints(nave, techo) <700 ){
       // techo.visible=false;
        this.cameras.main.zoom = 0.3;
        this.cameras.main.setBounds(0, -200);
        this.cameras.main.startFollow(nave, 0, 0, -400, -400);
   







    }
    
    else{techo.visible=false};

    if  (Phaser.Math.Distance.BetweenPoints(nave, cama) <150 && n<25)
        {cama.setAlpha(0.4)}
    else{cama.setAlpha(1)};


    if  (Phaser.Math.Distance.BetweenPoints(nave, ss) <50 && n<25 ){
        ss.visible=false
        vel=1000;
        }
    //colisiomes:

    if  (Phaser.Math.Distance.BetweenPoints(nave, pared17) <50 && n<35 )
        {this.physics.world.colliders.destroy(coli17);}

    else if  (Phaser.Math.Distance.BetweenPoints(nave, pared19) <50 && n<35 )
        {this.physics.world.colliders.destroy(coli19);}

    else if  (Phaser.Math.Distance.BetweenPoints(nave, pared16) <50 && n<35){
         this.physics.world.colliders.destroy(coli16)
         }

    else if  (Phaser.Math.Distance.BetweenPoints(nave, pared14) <50 && n<35 )
        {this.physics.world.colliders.destroy(coli14);}
    
    else{
            coli=this.physics.add.collider(nave, pared);
            coli1=this.physics.add.collider(nave, pared1);
            coli2=this.physics.add.collider(nave, pared2);
            coli3=this.physics.add.collider(nave, pared3);
            coli4=this.physics.add.collider(nave, pared4);
            coli5=this.physics.add.collider(nave, pared5);
            coli6=this.physics.add.collider(nave, pared6);
            coli7=this.physics.add.collider(nave, pared7);
            coli8=this.physics.add.collider(nave, pared8);
            coli9=this.physics.add.collider(nave, pared9);
            coli10=this.physics.add.collider(nave, pared10);
            coli11=this.physics.add.collider(nave, pared11);
            coli12=this.physics.add.collider(nave, pared12);
            coli13=this.physics.add.collider(nave, pared13);
            coli14=this.physics.add.collider(nave, pared14);
            coli15=this.physics.add.collider(nave, pared15);
            coli16=this.physics.add.collider(nave, pared16);
            coli17=this.physics.add.collider(nave, pared17);
            coli18=this.physics.add.collider(nave, pared18);
            coli19=this.physics.add.collider(nave, pared19);
            coli20=this.physics.add.collider(nave, pared20);
            coli21=this.physics.add.collider(nave, pared21);
        }



        //TIM

        if  (Phaser.Math.Distance.BetweenPoints(tim, pared17) <50 && n<35 )
        {this.physics.world.colliders.destroy(coli17);}

    else if  (Phaser.Math.Distance.BetweenPoints(tim, pared19) <50 && n<35 )
        {this.physics.world.colliders.destroy(coli19);}

    else if  (Phaser.Math.Distance.BetweenPoints(tim, pared16) <50 && n<35){
         this.physics.world.colliders.destroy(coli16)
         }

    else if  (Phaser.Math.Distance.BetweenPoints(tim, pared14) <50 && n<35 )
        {this.physics.world.colliders.destroy(coli14);}
    
    else{
            coli=this.physics.add.collider(tim, pared);
            coli1=this.physics.add.collider(tim, pared1);
            coli2=this.physics.add.collider(tim, pared2);
            coli3=this.physics.add.collider(tim, pared3);
            coli4=this.physics.add.collider(tim, pared4);
            coli5=this.physics.add.collider(tim, pared5);
            coli6=this.physics.add.collider(tim, pared6);
            coli7=this.physics.add.collider(tim, pared7);
            coli8=this.physics.add.collider(tim, pared8);
            coli9=this.physics.add.collider(tim, pared9);
            coli10=this.physics.add.collider(tim, pared10);
            coli11=this.physics.add.collider(tim, pared11);
            coli12=this.physics.add.collider(tim, pared12);
            coli13=this.physics.add.collider(tim, pared13);
            coli14=this.physics.add.collider(tim, pared14);
            coli15=this.physics.add.collider(tim, pared15);
            coli16=this.physics.add.collider(tim, pared16);
            coli17=this.physics.add.collider(tim, pared17);
            coli18=this.physics.add.collider(tim, pared18);
            coli19=this.physics.add.collider(tim, pared19);
            coli20=this.physics.add.collider(tim, pared20);
            coli21=this.physics.add.collider(tim, pared21);
        }
   
       if (Phaser.Math.Distance.BetweenPoints(tim, nave)>700){
        this.physics.moveToObject(tim, pared16, 400);
        tim.anims.play('up1', true);
       }




        bmpText.text = nave.y;
    
        graphics.clear();
    graphics.lineStyle(2, 0xff00ff, 1);

    
    path.draw(graphics);

    path.getPoint(follower.t, follower.vec);

    graphics.fillStyle(0xff0000, 1);
    graphics.fillRect(follower.vec.x, follower.vec.y, 16, 16);
}


