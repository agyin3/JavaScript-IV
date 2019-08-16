// CODE here for your Lambda Classes

// Person Class

class Person {
    constructor(attrs) {
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// Instructor Class 

class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = `Don't forget the homies`;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    giveScore(student) {
        let check = Math.floor(Math.random() * 3);
        if(check > 0) {
            student.grade += Math.floor(Math.random() * 25);
            return `${student.name} did great! Your new grade is ${student.grade}`
        }else {
            student.grade -= Math.floor(Math.random() * 25);
            return `${student.name} looks like you struggled a bit. I'm sorry but your new grade is ${student.grade}`
        }
    }
}

// Student Class

class Student extends Person {
    constructor(stuAttrs) {
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
        this.grade = stuAttrs.grade;
    }

    listsSubjects() {
        return this.favSubjects.forEach(entry => console.log(entry));
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate() {
        if(this.grade >= 70) {
            return `Congrats, you have graduated from ${this.className} with a ${this.grade}%`;
        }else{
            return `Sorry but your grade is ${this.grade}. You need to get back to studying`;
        }
    }
}

// TL Class

class TeamLead extends Instructor {
    constructor(tlAttrs) {
        super(tlAttrs);
        this.gradClassName = tlAttrs.gradClassName;
        this.favInstructor = tlAttrs.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

// Creating Lambda

const buddy = new Student({
    name: 'Buddy',
    age: 26,
    location: 'Salt Lake City, UT',
    previousBackground: 'customer Support',
    className: 'WebPT9',
    favSubjects: ['Javascript', 'HTML', 'CSS'],
    grade: 50
});

const pace = new Instructor({
    name: 'Pace',
    age: 32,
    location: 'Gilbert, AZ',
    specialty: 'redux',
    favLanguage: 'Javascript'
});

const jess = new TeamLead({
    name: 'Jess',
    age: 33,
    location: 'East Coast',
    specialty: 'debugging',
    favLanguage: 'React',
    gradClassName: 'Web18',
    favInstructor: 'Dan'
})

console.log(buddy.speak());
console.log(buddy.listsSubjects());
console.log(buddy.PRAssignment('advanced css'));
console.log(buddy.sprintChallenge('Javascript'));
console.log(pace.grade(buddy, 'Javascript'));
console.log(jess.standUp('WebPT9'));
console.log(jess.debugsCode(buddy, 'React'));
console.log(jess.grade(buddy, 'HTML'));
console.log(jess.speak());
console.log(buddy.grade);
console.log(jess.giveScore(buddy));
console.log(jess.giveScore(buddy));
console.log(jess.giveScore(buddy));
console.log(jess.giveScore(buddy));
console.log(jess.giveScore(buddy));
console.log(jess.giveScore(buddy));
console.log(jess.giveScore(buddy));
console.log(buddy.graduate());
