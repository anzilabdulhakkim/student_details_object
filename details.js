function Student(name, roll_no, class_, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = class_;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printTop3Subjects = function () {
        let sortedSubjects = Object.keys(this.marks_of_5_subjects).sort(
            (a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]
        );
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]}`);
        }
    };

    this.printReportCard = function () {
        let totalMarks = Object.values(this.marks_of_5_subjects).reduce(
            (acc, curr) => acc + curr,0
        );
        let percentage = (totalMarks / 500) * 100;

        console.log("") 
        console.log("+-----------------------+");
        console.log("|      REPORT CARD      |");
        console.log("+-----------------------+");
        console.log(`| Name     - ${this.name}      |`);
        console.log(`| Roll no. - ${this.roll_no}          |`);
        console.log(`| Class    - ${this.class}        |`);
        console.log(`| Section  - ${this.section}          |`);
        console.log(`| Science  - ${this.marks_of_5_subjects.science}         |`);
        console.log(`| Maths    - ${this.marks_of_5_subjects.maths}         |`);
        console.log(`| S.Sc     - ${this.marks_of_5_subjects.social_science}         |`);
        console.log(`| English  - ${this.marks_of_5_subjects.english}         |`);
        console.log(`| Hindi    - ${this.marks_of_5_subjects.hindi}         |`);
        console.log(`| Percentage - ${percentage.toFixed(1)} %   |`);
        console.log("+-----------------------+");
    };
}


let student1 = new Student("Anzil", 6, "XII", "A", {
    science: 80,
    maths  : 75,
    social_science: 91,
    english: 95,
    hindi: 85
});

student1.printTop3Subjects();
student1.printReportCard();
