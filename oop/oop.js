// class Rectangle {

//   constructor(size) {
//     this.size = size;
//   }
//   constructor(size, color) {
//     this.size = size;
//     this.color = color;
//   }
//   draw () {
//     console.log('You now have ' + this.color + ' rectangle, with a size of ' + this.size)
//   }
// }

// let rectangle = new Rectangle(10)
// let rectangleTwo = new Rectangle(20)

// let redRectangle = new Rectangle(30, 'red');




// class Animal {
//   constructor(age, color, weight) {
    
//     this.age = age
//     this.color = color
//     this.weight = weight;
//   }

//   talk() {
//     return 'Weird animal sound...'
//   }
// }


// class AnimalWithBreed extends Animal {
//   constructor(age, color, weight, breed) {
//     super(age, color, weight)
//     this.breed = breed
//   }
// }

// class Cat extends AnimalWithBreed {
//   constructor(age, color, weight, breed, hasClaws) {
//     super(age, color, weight, breed)
//     this.hasClaws = hasClaws
    
//   }
  
//   talk() {
//     return 'Meow'
//   }
// }


// class Hippo extends AnimalWithBreed {
  
//   constructor(age, color, weight, isPeaceful) {
//     super(age, color, weight)
//     this.isPeaceful = isPeaceful
  
//   } 

//   talk(){
//     return 'Grooowowoll'
//   }
// }

// class Dog extends AnimalWithBreed {

//   constructor(age, color, weight, breed) {
//     super(age, color, weight)
//     this.breed = breed
//   }

//   talk() {
//     return 'Woof!'
//   }
// }



// class Direction {
//   constructor(dir) {
//     this.dir = dir
//   } 
// }

// class CareGiver {

//   constructor(name, age, yearsExperience) {
//     this.name = name;
//     this.age = age;
//     this.yearsExperience = yearsExperience;
//   }

//   introduction() {
//     return `Hello! My name is ${this.name}, and I am ${this.age} years old. \nI have ${this.yearsExperience} years of experience!`
//   }
// }

// class CaregiverInfo {
//   constructor(personName, personAge, personYearsOfExperience) {
//   this.personName = personName
//   this.personAge = personAge
//   this.personYearsOfExperience = personYearsOfExperience
//   }
// }

// class NationalPark {
    
//   constructor(name) {

//       this.name = name

//       this.southHabitat = []
//       this.westHabitat  = []
//       this.northHabitat = [] 
//       this.eastHabitat  = []
//       this.unassignedAnimals = []
      
//       this.availableCaregivers = []
//       this.busyCaregivers = []
//     }

//     assignCareGiverToPark(CareGiverInfo) {
//       let caregiver = new CareGiver(CareGiverInfo.personName, CareGiverInfo.personAge, CareGiverInfo.yearsExperience)
//       this.availableCaregivers.push(caregiver)
//     }

//     putAnimalToHabitat(dirObject, animal) {
//       let dir = dirObject.dir.toLowerCase()
//       let caregiver = this.availableCaregivers.pop();
//       if (!caregiver) {
//         console.log('No available caregivers found')
//         return
//       }

//       this.busyCaregivers.push(caregiver)

//       switch(dir) {
//         case 'north':
//           this.northHabitat.push(animal)
//           break
//         case 'south':
//           this.southHabitat.push(animal)
//           break
//         case 'west': 
//           this.westHabitat.push(animal)
//           break
//         case 'east':
//           this.eastHabitat.push(animal)
//           break
//         default:
//           this.unassignedAnimals.push(animal)
//       }
//       console.log(`${animal.color} is put into the ${dir} habitat`)
//     }
// }

// let catGarden = [];

// const minAge = 1;
// const maxAge = 20;

// for (let i = 0; i < 10; i++) {
//   let randomAge = Math.floor(Math.random() * maxAge) + 1;
//   let cat = new Cat(randomAge)
//   catGarden.push(cat)
// }


// let hippoOne = new Hippo(false)
// let np = new NationalPark('Yellow Stone')

// let careGiverInfoOne = new CaregiverInfo('Albert', 70, 33)
// let careGiverInfoTwo = new CaregiverInfo('Hoffman', 60, 55)

// np.assignCareGiverToPark(careGiverInfoOne)
// np.assignCareGiverToPark(careGiverInfoTwo)

// let dog = new Dog(10, 'brown', 20, 'Bloodhound')
// let cat = new Cat(5, 'white', 10, 'Siam', true)
// let hippo = new Hippo(40, 'gray', 15, true)


// np.putAnimalToHabitat(new Direction('north'), dog)
// np.putAnimalToHabitat(new Direction('north'), cat)
// np.putAnimalToHabitat(new Direction('south'), hippo)







let canvas = document.getElementById('myCanvas')
let ctx = canvas.getContext('2d')



// ctx.beginPath()
// ctx.moveTo(0, 0)
// ctx.lineTo(800, 600)
// ctx.moveTo(0, 600)
// ctx.lineTo(800, 0)
// ctx.stroke()



const Center_Point = {
  x: canvas.width / 2,
  y: canvas.height / 2
}




let currentPosition = Center_Point
ctx.beginPath()
let step = 20

// for (let i = 0; i < 500; i++) {
//   let firstStep = step
//   ctx.moveTo(currentPosition.x, currentPosition.y)
//   ctx.lineTo(currentPosition.x, currentPosition.y - step)
//   ctx.lineTo(currentPosition.x, currentPosition.y)
//   step += 10 
//   ctx.lineTo(currentPosition.x + step, currentPosition.y + step)
//   ctx.lineTo(currentPosition.x + firstStep - step, currentPosition.y + step)
//   step += 10
//   currentPosition = {
//     x: currentPosition.x + firstStep - step, y: currentPosition.y + step
//   }
//   ctx.stroke()
// }


ctx.arc(Center_Point.x, Center_Point.y, 100, 0, 2 + Math.Pi, false)
ctx.stroke()


class Circle {
  constructor(middleX, middleY, radius) {
    this.middleX = middleX;
    this.middleY = middleY;
    this.radius = radius
  }

  setColor(color) {
    this.color = color
  }

  draw() {
    ctx.beginPath()
    
    // if (this.color) {
    //   ctx.fillStyle = 'red'
    // }
    ctx.arc(this.middleX, this.middleY, this.radius, 0, 2 * Math.PI, false)
    // ctx.fill()
    ctx.stroke()

  }
}

let circleOne = new Circle(100, 300, 50)

circleOne.draw()

for (let i = 0; i < 100; i++) {
  let randomX = Math.floor(Math.random() * canvas.width)
  let randomY = Math.floor(Math.random() * canvas.height)
  let randomRadius = Math.floor(Math.random() * 100)
  
  let circle = new Circle(randomX, randomY, randomRadius)
  circle.draw()
}





class MusicInstrument {

  constructor(size, color) {
    this.size = size
    this.color = color
  }

  play() {
    console.log('lalalala')
  }
}


class Violin extends MusicInstrument {
  
  constructor(size, color, type) {
    super(size, color)
    this.type = type
  } 

  play() {
    console.log('viuviuviu')
  }
}


class Piano extends MusicInstrument {
  
  constructor(size, color, type) {
    super(size, color)
    this.type = type
  }
}




class Orchestra {
  constructor(name, musicians){
    this.musicians = []
  }

  addMusician(musician) {
      this.musicians.push(musician) 
  }

  playTogether() {
    for (let musician of this.musicians) {
        musician.perform()  
    }

  }

}

class Musician {
  constructor(instrument, name) {
    this.instrument = instrument
    this.name = name
  }
  perform() {
    this.instrument.play()
    console.log(`${this.name} has performed to an audience`)
  }
}

class MusicalEnterprise {

  
  constructor(orchestras) {
    this.orchestras = orchestras
    this.salaries = new Map()

    this.wage = 1000
  }
  makePerform(nameOfOrchestra) {
     let orchestra = this.orchestras.get(nameOfOrchestra)
     orchestra.playTogether()
    let salary = this.salaries.get(orchestra.name)
    if (salary) {
        this.salaries.set(orchestra.name, salary + this.wage)
    } else {
      this.salaries.set(orchestra.name, this.wage)
    }
      console.log(`Wage of ${this.wage} was paid to the orchestra`)
      console.log(`Total salary for orchestra ${orchestra.name} is ${this.salaries.get(orchestra.name)}`)
  }
}

let firstViolin = new Violin(3, 'brown', 'wood')
let firstPiano  = new Piano('small', 'white', 'electronic')

let musicianOne = new Musician(firstPiano, 'Jack')
let musicianTwo = new Musician(firstViolin, 'Greta')

musicianOne.perform()
musicianTwo.perform()


let orchestra = new Orchestra('White Eagle', musicians)

orchestra.addMusician(new Musician(new Violin('medium', 'green', 'rare'), 'Paul' ))
orchestra.playTogether()


let orchestras = new Map()
orchestras.set(orchestra.name, orchestra)

let musicPlace = new MusicalEnterprise(orchestras)
musicPlace.makePerform('White Eagle')

// let myMap = new Map()

// myMap.set('abc@gmail.com', 'ABC')
// myMap.set('wer@gmail.com', 'UHJ')

// let abc = myMap.get['abc@gmail.com']
// console.log(abc)
