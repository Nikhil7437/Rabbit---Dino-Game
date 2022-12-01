let dino =document.querySelector('.dino')

let obstacle = document.querySelector('.obstacle')
let gameover =document.querySelector('.gameover')
let dinox;
let score =0;
let constscore =0;
let cross =true;
let play=document.querySelector(".play");



let audiobg=new Audio('song/s1.mp3');
let audiogo=new Audio('song/s2.mp3');

play.addEventListener('click',function()
{
    this.style.visibility='hidden'
    document.querySelector('.obstacle').classList.add('obstacleani')

    setTimeout(()=>
    {
    audiobg.play();
    },-1000);
    
    document.onkeydown = function(e)
    {
        // console.log("key code is:", e.key)
        if(e.key=='ArrowUp')
        {
            
        dino.classList.add('animatedino');
        setTimeout(() => {
            dino.classList.remove('animatedino')
        }, 700);
        }
        if(e.key=='ArrowRight')
        {
        
        dinox= parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
        dino.style.left=(dinox+100)+"px";
       
        }
        if(e.key=='ArrowLeft')
        {
            
        dinox= parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
        dino.style.left=(dinox-100)+"px";
        console.log(dinox)
       
        }
       
    }
    setInterval(() => {
        
    let dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    let dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"))
    let ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
    let oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"))
    // console.log("value is: ",dx)
    let offsetx = Math.abs(dx-ox)
    let offsety = Math.abs(dy-oy)
    // console.log(offsetx , offsety)
  
    
    
    if(offsetx<120 && offsety<100 )
    {
        gameover.style.visibility ='visible';
        
        obstacle.classList.remove('obstacleani');
    setTimeout(()=>
    {
        audiobg.pause()
       
    },500)
    
    audiogo.play()

    document.querySelector('.playstate').innerHTML="Play again";
        play.style.visibility='visible';
        if(constscore<score)
        {
            constscore = score;
        }
        document.getElementById('constscore').innerHTML=`Highest score is : ${constscore}`
        // document.getElementById('constscore').style.visibility='visible'
        play.addEventListener('click',function()
        {
            gameover.style.visibility ='hidden';
            
            obstacle.classList.add('obstacleani');
            score=0
            updatescore(score)
            audiobg.play()


        })
        
    }
    else if(offsetx<150 && cross){
        score +=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
    }
    
    
    }, 100);
    
    function updatescore(score)
    {
        
        scorecount.innerHTML='your score : '+ score;
    }
    




})

