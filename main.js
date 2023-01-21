// EX-2

// 1.
const z = [1,2,3,4,5];
const newZ = z.map(num=>num*2);
console.log(newZ);

// 2.
let ages = [4,56,23,43];
let stringAges = ages.map(age=>`${age}`);

console.log(stringAges);

// 3.
function capitalize(str){
    let splitted = str.split('');
    let capitalized=''
    splitted = splitted.map(letter=>capitalized += letter.toUpperCase());
    console.log(capitalized);
    return
}

capitalize("hello");
capitalize("going to dance");
capitalize("goodbye");

// 4.
const employees = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 35}
    ];

const employeesName = [];
employees.map(employee => employeesName.push(employee.name));
console.log(employeesName);

// 5. (4)
function multiplyByIndex(arr){
    let multipliedArr=[]
    arr.forEach((element,index) => {
        multipliedArr.push(element*index);
    });
    return multipliedArr;
}

console.log(multiplyByIndex([1,2,3,4,5]));

// EX-3
// 1.
function sumIt(arr){
    let sum=0;
    arr.forEach(num=>sum+=num);
    return sum;
}
console.log(sumIt([3,5,6,7]));

// 2.

function doubleValues(arr){
    let doubledArr=[]
    arr.forEach(num=>doubledArr.push(num*2));
    return doubledArr;
}

console.log(doubleValues([1,2,3]));

// 3.

// function xTheVowles(arr){
//     let splittedArr = [];
//     arr.forEach(str=> splittedArr.push(str.split('')));
//     console.log(splittedArr);
//     splittedArr.forEach(str => function(str){
//         str.forEach(char=>function(){
//             if (char=='i'){char='X'; console.log(char);
//         });
//     });
    //     let splitted = str.split('');
    //     let xVowles = splitted.map(char=>function(){
    //         if(char=='a'||char=='e'||char=='i'||char=='u'||char=='o'){char='X'}
    //         console.log(char);
    //     });
    // });
// }
// xTheVowles(['hello','good']);

// 4.
const employeez = [
    { name: "John", age: 30 },
    { name: "Jane", age: 15 },
    { name: "Bob", age: 35 },
    ];

function checkAge(arr){
    arr.forEach(function(employee, index) {
        if(employee.age<20){
            console.log(`Sorry employee at index ${index} is too young.`)
        }else{
            console.log('OK.')
        }
    } );
}
checkAge(employeez)

// 5.

function updateEmployees(arr){
    arr.forEach(function(employee) {
        if(employee.age>25){
            employee.isAdult = true;
        }else{
            employee.isAdult = false;
        }
    } );
}

updateEmployees(employeez);
console.log(employeez);

// EX4 (filter practice)
// 1.

function evensOnly(arr){
    let evens = arr.filter(num=>num%2==0);
    return evens;
}

console.log(evensOnly([1,2,3,4,5,6]));

// 2.

function fiveAndGreater(arr){
    return arr.filter(str=>str.length>4)
}

console.log(fiveAndGreater(['hi','something','hello','word','more than five']));

// 3.
const people = [{ name: "Angelina Jolie", isClubMember: true },
    { name: "Eric Jones", isClubMember: false },
    { name: "Paris Hilton", isClubMember: true },
    { name: "Kayne West", isClubMember: false },
    { name: "Bob Ziroll", isClubMember: true }];

function onlyMembers(people){
    return people.filter(personObj => personObj.isClubMember==true);
}

console.log(onlyMembers(people));

// EX-4 (find practice)
// 1.
const array1 = [5, 12, 8, 130, 44];
console.log(array1.find(item => item>10));

// 2.
const students = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 29 },
      { name: 'Bob', age: 32 },
      { name: 'Alice', age: 25 },
      { name: 'Julie', age: 28 }
   ];

function findByName(students, name){
    return students.find(student => student.name == name);
}
console.log(findByName(students, 'Bob'));

function olderThan23(students){
    return students.find(student => student.age>23);
}

console.log(olderThan23(students));

// Reduce practice
// 1.

const input = [-1,-4,-56,-6,-43,-20];

function sumOfPositives(arr){
    positiveArr = arr.filter(num=>num>=0);
    console.log(positiveArr);
    return positiveArr.reduce((num, total)=>total+num, 0);
    
}

console.log(sumOfPositives(input));

// 2.

function calcFactorial(num){
    let arr=[];
    for (let i = num; i>0; i--){
        arr.push(i);
    }

    factorial = arr.reduce((accumulator, currentValue)=>accumulator*currentValue);
    return factorial;
}

console.log(calcFactorial(6));
console.log(calcFactorial(10));

// 3.
function findOldestStudent(students){
    const maxAgedStudent = students.reduce((max, current)=>{
        if(current.age>max.age){return current}else{return max}
    });
    return maxAgedStudent;
}

console.log(findOldestStudent(students));

