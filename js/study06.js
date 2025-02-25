//Control Flow : Loop/Iteration/Repetition
//ใช้ในการทำงานเดิมๆซ้ำๆ
//while, for, do-while, forEach

//while  พิสูจน์ก่อนแล้วค่อยทำ
let x = 2;
while(x <= 5){
    //console.log(x,'Good',true);
    //console.log(x + ' Good' + true); 
    console.log(`${x} Good ${true}`); //แนะนำให้ใช้แบบนี้
    x++;
}
console.log('-------------------------')

//do-while  ทำก่อนแล้วค่อยพิสูจน์
let y = 2;
do{
    console.log(`${y} OMG ${true}`);
    y++;
}while(y <= 5);
console.log('-------------------------')

//for  ใช้เมื่อทราบจำนวนรอบที่แน่นอน ถ้าทำ 100 ครั้งเปลี่ยนเลข 5 เป็น 100
for(let z = 3; z <= 5; z++){
    console.log(`${z} Stopppppp ${true}`);
}
console.log('-------------------------')