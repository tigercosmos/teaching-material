// ex1. for

for(let i = 0; i < 5; i++) {
  console.log("Hello!");
}
// ==============================================
// ex2. counter

for(let i = 0; i < 5; i++) {
  console.log(i);
}
// ==============================================

// ex3. REVERSE
for(let i = 5; i > 0; i--) {
  console.log(i);
}

// ==============================================
// ex4. sum

let sum = 0
for(let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// ==============================================
//ex5.  while counter 

let i = 0;
while(i < 5) {
    console.log(i);
    i += 1;
}

// ==============================================
// ex6. demo, cannot run

let isOn = true;
while(isOn) { 

    foo();
    
    if(result == "the end"){
        isOn = false;
    }
}

// ==============================================
// ex7. while sum

let i = 0;
let sum = 0;
while(i <= 100) {
    sum += i; // 等同 sum = sum + i
    i += 1;
}
console.log(sum);

// ==============================================
// ex8. break

while(true) {
  const result = foo();
  if(result == "find it"){
      console.log("找到了，結束迴圈")
      break;
  }
}

// ==============================================
// ex9, break

for(let i = 0; i <= 100; i++){
  console.log(`正在找第 ${i} 件褲子`);
  if(i == 50){
      console.log("找到了，結束迴圈")
      break;
  }
}


// ==============================================
// ex9, continue
for(let i = 0; i <= 10; i++){
  console.log(`This is: ${i}`);
  if(i % 2 == 1){
      console.log("奇數不要")
      continue;
  }
  console.log("留下來")
}

// ==============================================
// ex10, multi-loop
console.log("ijk"); // 方便對照
for(let i = 0; i <= 2; i++){
    for(let j = 0; j <= 2; j++){
        for(let k = 0; k <= 2; k++){
            console.log(`${i}${j}${k}`);
        }
    }
}

// ==============================================
/*  exercise


1. how to get N!, which is 1*2*3*....*N?
2. print 
  *
 ***
*****

// ==============================================
/* Homework

1. Prime number up to 1000
   tip:
   1. you might need to loops
   2. just check the numbers under Math.sqrt(N) 


2. PI/4 = sigma(from n = 0 to n = k){ (-1)^n/(2n+1) }
   how could we get PI?

3. use Math.random() to get lot of numbers in square (0, 0), (0, 1), (1, 0), (1, 1)
   count how many points in the circle which center is (0.5, 0.5) and radius is 0.5
   you can use the information of these points to get PI.