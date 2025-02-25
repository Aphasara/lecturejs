//Function Expression มี 2 กลุ่มใหญ่ๆ คือ การเอาฟังก์ชั่นไปเก็บไว้ในตัวแปร

const aa = 'Hey';

//Anonymus function ไม่มีชื่อฟังก์ชั่น
const xxx = function() {
    console.log('Aphasara')
}
//Arrow function
const yyy = () => {
    console.log('Mahawan')
}

const zzz = (a, b) => {
    console.log(a + b);
}

const mmm = (a) => {
    return a * 2;
}

const nnn = () => console.log('OMG');
// const nnn = () => {
//     console.log('OMG');
// }

const ooo = (x,y) => x ** y;
// const ooo = (x,y) => {
//     return x ** y;
// }

console.log(aa);
xxx()
yyy()
zzz(10,20)
console.log(mmm(10));