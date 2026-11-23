/* 
- ให้เขียน Function ที่ชื่อว่า sumNegativeNumbers ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers
        1. numbers เป็น Array ที่บรรจุตัวเลข
    - Function นี้จะนำเฉพาะตัวเลขที่มีค่าน้อยกว่าศูนย์มารวมกัน แล้ว Return ค่าออกมา
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

function sumNegativeNumbers(numbers){
    return numbers
    .filter((num) => num < 0)
    .reduce((acc, cur) => acc + cur, 0);
}

const numbers1 = [3,-5,10,12,-7,0,8,2];
console.log(sumNegativeNumbers(numbers1));

const numbers2 = [0,-4,-1,-5,6,5,0];
console.log(sumNegativeNumbers(numbers2));

// acc ย่อมาจากผลรวม ในที่นี้คือตัวแปร num

const numbers =  [10,20,30];
const result = numbers.reduce((acc,cur) => acc + cur,0);
console.log(result);

let total = 0;
for (let num of numbers){
    total += num;
}

console.log(total);
