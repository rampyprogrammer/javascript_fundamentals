class Player{
    constructor (name){
        this.name = name

    }
    score =0 ;
    pause(){
        console.log(`${this.name} passed the game`);
    
    
    }
    exit(){
        console.log(`${this.name} exited the game`);
    }
}

const player1=new Player('Mahi')
const player2=new Player('virat')
const player3=new Player('rohith')
player1.score+=1
console.log(`${player1.name} scored ${player1.score}`);

console.log(`${player2.name}  scored ${player2.score}`);
player1.pause()
player2.pause()
player1.exit()

