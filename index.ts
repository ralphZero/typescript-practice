let firstnNme: string = 'damian';
let age: number = 5;
let active: boolean = true;

let names: string[] = ['john', 'mary', 'tom', 'fred', 'bob'];

enum studentTypes {
    pending,
    active,
    graduated,
    tas,
    teacher,
}

const myStatus = studentTypes.graduated;

console.log(myStatus);
if(myStatus === studentTypes.graduated) {
    console.log(`the student is graduated`);   
}

let code: string | number = 11;
code = 0;

const sum = (arr: number[]): number => {
    return arr.reduce((total: number, num: number) => total + num)
}
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(sum(numbers));

let complexItem: any  = {name: 'damian'};

complexItem = {title: 9}

console.log("complexItem", complexItem);
enum bloodType {
    aPositive,
    aNegative,
    bPositive,
    bNegative,
    oPositive,
    oNegative,
}
interface human {
    name: string,
    age: number,
    height: string,
    bloodType: bloodType
}
const me: human = {
    'age': 4,
    'bloodType': bloodType.aNegative,
    'height': '4',
    'name': "igag"
}
