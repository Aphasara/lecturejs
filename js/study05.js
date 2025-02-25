//Control Flow : Condition/Decision/Selection
//ใช้พิสูจน์ตรวจสอบก่อนทำงานใดๆ
//if, if-else, if-else-if, switch-case

//if จริงทำเท็จไม่ทำ
let a = 10;
if(a == '10'){
    console.log('wow');
}
console.log('-------------------------')

//if-else จริงทำหลัง if เท็จทำหลัง else
let b = 'Aphasara'
if(b < 'Aphasaroo'){
    console.log('จริงจ้ะ');
}else{
    console.log('ไม่จริงจ้า');
}
console.log('-------------------------')

//if-else-if
let score = 56
if(score >= 80){
    console.log('A');
}else if(score >= 60){
    console.log('B');
}else if(score >= 40){
    console.log('C');
}else{
    console.log('D');
}
console.log('-------------------------')

//switch-case  จะพิสูจน์ได้ว่าเท่ากันหรือไม่เท่ากันเท่านั้น มากกว่าน้อยกว่าไม่ได้
let day = 2
switch(day){
    case 1:console.log('จันทร์');break;
    case 2:console.log('อังคาร');break;
    case 3:console.log('พุธ');break;
    case 4:console.log('พฤหัสบดี');break;
    case 5:console.log('ศุกร์');break;
    case 6:console.log('เสาร์');break;
    case 7:console.log('อาทิตย์');break;
    default:console.log('ไม่เป็นวันทํางาน');break;
}

