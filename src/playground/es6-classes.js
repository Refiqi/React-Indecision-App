class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. Im ${this.name}!`
    }

    getDescription() {
        return `Hi. My name is ${this.name} and Im ${this.age}`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
        description += ` Majoring in ${this.major}`
    }

    return description;
    }

}

class Traveler extends Student {
    constructor(name, age, major, support) {
        super(name, age, major);
        this.support = support;
    }

    homeLocation() {
        return !!this.support;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation()) {
            greeting += ` Major in ${this.major} I'm visiting from ${this.support}`
        }
        
        return greeting;
    }

}

const me = new Traveler('Refiqi', 19, 'IPA', 'SMI');

console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());