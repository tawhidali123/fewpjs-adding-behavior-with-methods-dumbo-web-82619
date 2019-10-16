// Your code here
class Cat {
    constructor(name){
        this.name = name;
    }

    speak(){
        return `i am ${this.name}`
    }

  }
   


  class Dog {
    constructor(name){
        this.name = name
    }

    speak(){
        return `i am ${this.name}`
    }

  }
   
  class Bird {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    speak(){
        if(this.gender !== "male"){
            return `squak`;
        } else return `its me! ${this.name} the parrot`;
        
    }

  }

  let cat1 = new Cat("billy")
  let dog1 = new Dog("woofwoof")
  let bird1 = new Bird("timmy", "male")
  let bird2 = new Bird("lana", "female")