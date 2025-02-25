//Function ***** คือการทำงานหนึ่งๆ จะไม่ทำงานถ้าไม่เรียกใช้ (call function)
//มี 4 ประเภท 
//1. no parameter (สิ่งที่อยู่ในวงเล็บ) no return (คือคำสั่ง)
function funcA() {
    console.log('Sawaddee');
}
//2. have parameter-no return
function funcB( a,b) {
    console.log(a + b);
}
//3. no parameter-have return
function funcC() {
    console.log('SAU');
    return 10;
}
//4. have parameter-have return
function funcD(a,b,c,d) {
    console.log(a,b,c,d);
    return a * b * c * d;
}
console.log('-------------------------');
funcA();
funcB(10,20); //ข้อมูลที่ส่งให้ parameter เรียกว่า argument
console.log(funcC());
console.log(funcD(1,2,3,4));