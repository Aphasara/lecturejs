//value of variable ค่าที่เก็บอยู่ในตัวแปร
let data1 = 'Hello Aphasara';
let data2 = 30; //number: integer จํานวนเต็ม, float จํานวนจริงเลขที่มีทศนิยม
let data3 = true; //boolean: true false
//index number 0,1,2,3,4
let data4 = [10,20,30,40,50];
let data5 = {
    name: 'Aphasara',
    age: 2,
    color: ['black','red'],
    address: {
        no:51,
        soi:'soi 77/5',
        home: 'suranee603',
    }
}

let data8 = null;
let data9; //undefined มีตัวแปร แต่ไม่มีค่า

console.log(data8)
console.log(data9)
console.log('-------------------------')

console.log(data5.name);
console.log(data5.age);
console.log(data5.color[1]);
console.log(data5.address.home)
console.log('-------------------------')

console.log(data1);
console.log(data2);
console.log(data3);
console.log('-------------------------')
console.log(data4[2]);
console.log(data4[3]);
data4[2] = 333
console.log(data4[2]);
console.log('-------------------------')

//เข้าถึงข้อมูลทุกตัวของ array
data4.forEach((value) => {
    console.log(value);
})