//break ใน loop ทำงานเมื่อไหร่จบเลย
//continue ใน loop ทำงานเมื่อไหร่ถือว่าจบรอบนั้น ไปรอบต่อไป

for (let i = 1; i < 3; i++) {
    console.log(i, 'oh my god');
}
console.log('-------------------------');

for (let i = 1; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i, 'oh my god');
}
console.log('-------------------------');

for (let i = 1; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i, 'oh my god');
}
console.log('-------------------------');