//class = a blueprint for creating objs define
//          what properties and methods they have
// use a constructor fir unique properties 

class player{
    score=0;


    pause(){
        console.log('u paused');
    }


    exit(){
        console.log(`u exited the game with ${this.score}`);
    }
}


const p1=new player();
const p2=new player();



p1.score+=1;
console.log(p1.score);
p1.pause();
p1.exit();
p2.pause();
p2.exit();
player.exit


console.log(p2.score);

