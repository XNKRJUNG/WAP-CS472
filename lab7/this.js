//Question #1
//Arrow function
console.log("Q#1:")
console.log("Using Arrow function: ");
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(student => {
            console.log(this.title + ": " + student);
        });
    }
};

group.showList();


//.bind
console.log("Using .blind: ");
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};

group1.showList();

//self
console.log("Using self: ");
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        let self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student);
        });
    }
};

group2.showList();

//.call
console.log("Using .call: ");
let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((stu) => {
            (function (student){
                console.log(this.title + ": " + student);
            }).call(this, stu)
        });
    }
};

group3.showList();

//.apply
console.log("Using .apply: ");
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((stu) => {
            (function (student){
                console.log(this.title + ": " + student);
            }).call(this, [stu])
        });
    }
};

group4.showList();


//Question #2
console.log("Q#2: ");

let i = 0;

setTimeout(()=> console.log(i),100);

for (let j =0; j < 100000000; j++){
    i++;
}