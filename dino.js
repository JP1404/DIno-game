let board;
let boardHeight = 250;
let boardWidth = 750;
let context;

// dino parameter
let dinoHeight = 94;
let dinoWidth = 88;
let dinoX = 50;
let dinoY=boardHeight-dinoHeight;
let dinoImg;
let dino = {
    x:dinoX,
    y:dinoY,
    height:dinoHeight,
    width:dinoWidth ,
    img:dinoImg

}; 

//cactus
let cactus1Img;
let cactus2Img;
let cactus3Img;
let cactusX =700;

let cactusHeight = 70;
let cactusY = boardHeight-cactusHeight;
let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width =102 ;
let cactusArray = [];
let gravity = 0.4;
let velocityX = -8;
let velocityY = 0;
let gameOver=false;
let score= 0;

window.onload =()=>{
    board = document.getElementById('board');
    board.height  = boardHeight;
    board.width = boardWidth;

 
    context = board.getContext("2d");
    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = ()=>{
       
        context.drawImage(dinoImage, dino.x, dino.y,
             dino.width, dino.height);
        console.log(1);
    } 
    cactus1Img = new Image();
    cactus1Img.src = "./img/cactus1.png";
    cactus2Img = new Image();
    cactus2Img.src = "./img/cactus2.png";
    cactus3Img = new Image();
    cactus3Img.src = "./img/cactus3.png";
    requestAnimationFrame(update); 
    setInterval(placeCactus,1000);

document.addEventListener("keydown", moveDino); 

}
const update = ()=>{
    requestAnimationFrame(update);
     context.clearRect(0,0,boardWidth,boardHeight);
    velocityY+=gravity;
    dino.y = Math.min(dinoY,velocityY+dino.y);
    
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    
    for(let i=0;i<cactusArray.length;i++)
        {
            let cactus  = cactusArray[i];
            cactus.x +=velocityX;
            context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
            if(detectCollision(dino,cactus))
                {
                    gameOver =true;
                    dinoImg.src= "./img/dino-dead.png";
                    dinoImg.onload =()=>{
                        context.drawImage(dinoImg,dino.x,dino.y,dinoWidth,dinoHeight);
                    }
                }
            
        } 
        if(!gameOver){
        score++;
    }
        context.font ="20px courier"
        context.fillText(score,5,20);
    

} 
const moveDino=(e)=>{
    if(gameOver)
        {
            return;
        } 
        if((e.code=="ArrowUp"||e.code=="Space")&&(dino.y==dinoY))
            {
                velocityY=-10;
            }
        else if((e.code=="ArrowDown")&&(dino.y==dinoY)){
            dinoImg.src ="./img/dinoduck1.png";
            dinoImg.onload=()=>{
                context.drawImage(dinoImg,dino.x,dino.y,dinoWidth,dinoHeight);
            }

        }
    
}
const placeCactus = ()=>{
    if(gameOver)
        {
            return;
        } 
    let cactus = {
        x:cactusX,
        y:cactusY,
        width:null,
        height:cactusHeight,
        img:null
      
    }  
    let p = Math.random();
    if(p>0.9)
        {
            cactus.width = cactus3Width;
            cactus.img = cactus3Img;
            cactusArray.push(cactus); 
        }
        else if(p>0.7)
            {
                cactus.width = cactus2Width;
                cactus.img = cactus2Img;
                cactusArray.push(cactus); 
            } 
         else if(p>0.5)
                {
                    cactus.width = cactus1Width;
                    cactus.img = cactus1Img;
                    cactusArray.push(cactus); 
                } 
                // cactusArray.push(cactus); 
               let board;
let boardHeight = 250;
let boardWidth = 750;
let context;

// dino parameter
let dinoHeight = 94;
let dinoWidth = 88;
let dinoX = 50;
let dinoY=boardHeight-dinoHeight;
let dinoImg;
let dino = {
    x:dinoX,
    y:dinoY,
    height:dinoHeight,
    width:dinoWidth ,
    img:dinoImg

}; 

//cactus
let cactus1Img;
let cactus2Img;
let cactus3Img;
let cactusX =700;

let cactusHeight = 70;
let cactusY = boardHeight-cactusHeight;
let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width =102 ;
let cactusArray = [];
let gravity = 0.4;
let velocityX = -8;
let velocityY = 0;
let gameOver=false;
let score= 0;

window.onload =()=>{
    board = document.getElementById('board');
    board.height  = boardHeight;
    board.width = boardWidth;

 
    context = board.getContext("2d");
    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = ()=>{
       
        context.drawImage(dinoImage, dino.x, dino.y,
             dino.width, dino.height);
        console.log(1);
    } 
    cactus1Img = new Image();
    cactus1Img.src = "./img/cactus1.png";
    cactus2Img = new Image();
    cactus2Img.src = "./img/cactus2.png";
    cactus3Img = new Image();
    cactus3Img.src = "./img/cactus3.png";
    requestAnimationFrame(update); 
    setInterval(placeCactus,1000);

document.addEventListener("keydown", moveDino); 

}
const update = ()=>{
    requestAnimationFrame(update);
     context.clearRect(0,0,boardWidth,boardHeight);
    velocityY+=gravity;
    dino.y = Math.min(dinoY,velocityY+dino.y);
    
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    
    for(let i=0;i<cactusArray.length;i++)
        {
            let cactus  = cactusArray[i];
            cactus.x +=velocityX;
            context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
            if(detectCollision(dino,cactus))
                {
                    gameOver =true;
                    dinoImg.src= "./img/dino-dead.png";
                    dinoImg.onload =()=>{
                        context.drawImage(dinoImg,dino.x,dino.y,dinoWidth,dinoHeight);
                    }
                }
            
        } 
        if(!gameOver){
        score++;
    }
        context.font ="20px courier"
        context.fillText(score,5,20);
    

} 
const moveDino=(e)=>{
    if(gameOver)
        {
            return;
        } 
        if((e.code=="ArrowUp"||e.code=="Space")&&(dino.y==dinoY))
            {
                velocityY=-10;
            }
        else if((e.code=="ArrowDown")&&(dino.y==dinoY)){
            dinoImg.src ="./img/dinoduck1.png";
            dinoImg.onload=()=>{
                context.drawImage(dinoImg,dino.x,dino.y,dinoWidth,dinoHeight);
            }

        }
    
}
const placeCactus = ()=>{
    if(gameOver)
        {
            return;
        } 
    let cactus = {
        x:cactusX,
        y:cactusY,
        width:null,
        height:cactusHeight,
        img:null
      
    }  
    let p = Math.random();
    if(p>0.9)
        {
            cactus.width = cactus3Width;
            cactus.img = cactus3Img;
            cactusArray.push(cactus); 
        }
        else if(p>0.7)
            {
                cactus.width = cactus2Width;
                cactus.img = cactus2Img;
                cactusArray.push(cactus); 
            } 
         else if(p>0.5)
                {
                    cactus.width = cactus1Width;
                    cactus.img = cactus1Img;
                    cactusArray.push(cactus); 
                } 
                // cactusArray.push(cactus); 
                if(cactusArray.length>5)
                    {
                        cactusArray.shift();
                    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
} 


}



