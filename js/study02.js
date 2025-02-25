//Block Scope ของ js คือ {........}

//variable ตัวแปร
//var let เปลี่ยนค่าได้
var myData1 = 'Hello World'; //เปลี่ยนค่าไดเ เป็น Global ใช้ที่ไหนก็ได้
let myData2 = 20; //เปลี่ยนค่าได้ เป็น Local

//const ไม่สามารถเปลี่ยนค่าได้
const myData3 = 'wow'; //เปลี่ยนค่าไม่ได้เป็น local

myData1 = 'Hello Aphasara';
myData2 = 30;
// myData3 = 'wow...';

{
    var a = 1;
    let b = 2;
    const c = 3;
    {
        var x = 4;
        let y = 5;
        const z = 6;
        console.log(a);
        console.log(x)
        console.log(b,c);
        console.log(y,z);
    }
    console.log(a);
    console.log(x)
    console.log(b,c);
    //console.log(y,z); //error
}
console.log(a);
console.log(x);
//console.log(b,c); //error
//console.log(y,z); //error