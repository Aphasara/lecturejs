//Operator ตัวดำเนินการ
//+ - * / % ** ++ -- += -= *= /= %= **= += -= *= /= %= **= += -= *= /= %= **=

console.log(10**2)

let a = 10;
let b = "10";
//python a*b จะได้ error
//java a*b จะได้ error
//javascript a*b จะได้ 100
console.log(a * b);
//เปรียบว่าเท่ากันใช่ไหม
console.log(a == b); //ไม่สนใจประเภท
console.log(a === b); //สนใจประเภท ข้างในเหมือนกัน แต่ประเภทไม่เหมือนกัน เลยได้ false
console.log('-------------------------')

//เปรียบว่าไม่เท่ากันใช่ไหม
console.log(a != b); //ไม่สนใจประเภท
console.log(a !== b); //สนใจประเภท
console.log('-------------------------')

a = 'Eye'
console.log(a)
console.log('-------------------------')

console.log('much' > 'March');
console.log('-------------------------')

//ternary operator
//_____?______:______
//เงื่อนไข ? ทำเมื่อจริง : ทำเมื่อเท็จ
let score = 45
let grade = score > 55 ? 'A' : 'B';
console.log(grade);
console.log('-------------------------')

//nullish coalescing operator ??
//_____??______
//หน้าเครื่องหมาย ?? เป็น null หรือ undefined จะได้ค่าหลังเครื่องหมาย ?? 
//แต่ถ้าหน้าเครื่องหมาย ?? ไม่เป็น null หรือ undefined จะได้ค่าหน้าเครื่องหมาย ??
let data1 = null;
console.log(data1 ?? 'nullจ้า');
let data2 = 2222;
console.log(data2 ?? 'eye');
let data3;
console.log(data3 ?? 'undefinedจ้าา');
console.log('-------------------------')