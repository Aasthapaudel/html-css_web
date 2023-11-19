// // console.log("welcome to tut")
// // let today = new Date();
// // console.log(typeof today);
// // // let otherDate = new Date('8-4-2003 04:54:08')
// // otherDate = new Date('june 13 1976')
// // let a;
// // a = otherDate.getDay();
// // a = otherDate.getMinutes()
// // a = otherDate.getSeconds()
// // a = otherDate.getHours()
// // a = otherDate.getTime()
// // a = otherDate.getMilliseconds()
// // a = otherDate.setDate(23)
// // console.log(a)
// // otherDate.setMonth(0)
// // otherDate.setFullYear(1900)
// // otherDate.setMinutes(2)
// // otherDate.setSeconds(1);


// // console.log(otherDate)??
// const Student = [
//     { name: "harry", subject: "Javascript" },
//     { name: "aastha", subject: 'machinelearing' }
// ]

// function enrollStudent(student, callback) {
//     setTimeout(function() {
//         Student.push(Student);
//         console.log(enrollStudent);
//     }, 3000);
// }

// function getStudent() {
//     setTimeout(function() {
//         let str = "";
//         Student.forEach(function(Student) {
//             str += `<li>${Student.name}</li>`
//         });
//         document.getElementById('Student').innerHtml = str;

//     }, 1000);
// }
// let newStudent = { name: "sunny", subject: "python" }
// enrollStudent(newStudent);
// getStudent();
// return new Promise.then() & Promise.catch()

function func1() {
    return new promise(function(resolve, reject) {
        settimeout(() => {
            const error = true;
            if (!error) {
                console.log('your promise has been resolved');
                resolved();
            } else {
                console.log('your promise has not been resolved')
                reject('sorry not fulfilled ')

            }
        }, 2000);
    })
}