//function
//defult parameter
const zz = (a, b = 20, c = 30) => {
    console.log(a, b, c);
    console.log('คำตอบ =',a + b + c);
}
zz(10);
console.log('-------------------------');
zz(10, 40);
console.log('-------------------------');
zz(10, 40, 50);
console.log('-------------------------');

//Callback function
const aa = () => {
    console.log('eye');
}

const bb = (xx) => {
    console.log('Umm');
    xx();
}

bb(aa);
bb(() => {
    console.log('Oh my god');
});