class Animal{
    alive =true;
    eating(){
        console.log(`${this.name} is eating`);
    }
    sleeping(){
        console.log(`${this.name} is sleeping`);
    }

}
class rabbit extends Animal{
    name = 'rabbit';
    run(){
        console.log(`${this.name} is running..`);
    }
}

class fish extends Animal{
    name = 'fish';
    swim(){
        console.log(`${this.name} is swimmig..`);
    }
}

class parrot extends Animal{
    name = 'parrot';
    fly(){
        console.log(`${this.name} is flying..`);
    }
}

const par = new parrot()
const fis = new fish()
const rab = new rabbit()

// console.log(par.sleeping());
par.sleeping()
rab.sleeping()
fis.swim()

