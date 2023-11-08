//Question #1
//Arrow function
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach( (student)=> {
            console.log(this.title + ": " + student);
        });
    }
};

group.showList();

//.bind
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
let i = 0;

setTimeout(()=> console.log(i),100);

for (let j =0; j < 100000000; j++){
    i++;
}