//Exception Handling : error handling การจัดการข้อผิดพลาด
//try-catch
//try-catch-finally

console.log('-------------------------');
try{
    //let data1 = 'Hello Aphasara'; //ถ้ามีบรรทัดนี้จะไม่ error
    console.log(data1) //ความผิดพลาดมันเกิดขึ้นอยู่แต่จะทำให้ผู้ใช้ไม่เห็น เอา try ไปครอบตรงที่คิดว่าจะเกิดข้อผิดพลาด
}catch(err){
    console.log('พบปัญหาติดต่ออาจารย์เลยจ้าาาาา'); // error แล้วให้ทำอะไร // ถ้าไม่มี error จะไม่แสดง
    //console.log(err); // แสดง error ออกมา
    //console.log(err.name); // แสดง error ออกมา
    console.log(err.message); // แสดง error ออกมา
    //console.log(err.stack); // แสดง error ออกมา
}finally{
    console.log('โอนเงินมาเดี๋ยวนี้'); // ไม่ว่าจะ error หรือไม่ error ก็จะทำงาน 
}