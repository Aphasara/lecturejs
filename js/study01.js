console.log("Hello Aphasara");
console.log(123456)
console.log(true)

//ตัวแปร
var a = 10; //var let เปลี่ยนค่าได้ แต่ var เป็นตัวแปรแบบ global คือใช้ที่ไหนก็ได้
let b = 20; //let เป็นตัวแปรแบบ local ใช้ได้เฉพาะในปีกกาหนึ่งๆเท่านั้น
const c = 30; //ตัวแปรแบบ const ไม่สามารถเปลี่ยนค่าได้ {local}

let data01 = "wow"
let data02 = 1234

//เวลาเอาข้อมูลหลากหลายแบบมาใช้ร่วมกัน
console.log('aaaaa' + 5555 + data01 + data02);
console.log(`aaaaa ${5555} ${data01} ${data02}`);