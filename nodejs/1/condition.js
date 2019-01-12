/// if else 

const isMature = false;
console.log("對這個水梨：");

if(isMature == true) {
    console.log("採收");
} else {
    console.log("加裝保護套")
}

// ==============================================
///  else if 

const score = 75;
if(score >= 80) {
    console.log("A");
} else if(score >= 50) {
    console.log("B");
} else {
    console.log("C");
}

// ==============================================
/// many conditions

const score = 75;
if(score >= 50 && score < 80) {
    console.log("符合 B 等第");
}

// ==============================================
//// 
a = true
if(a == true) {
  console.log("YA")
}

if(a) {
  console.log("YA")
}

if(a)
  console.log("YA")

/* if(a) 是 false 的條件為：
false
<= 0
'' 或 "" (空字串)
null
undefined
NaN (例如 1/0 的結果)

if(5) // true
if(1) // true
if(true) // true
if("hi") // true
if(0) // false
if(-3) // false
if(null) // false
if(undefined) // false
*/

// ==============================================
/// Ternary operator
a = 6

a = a < 7? 8: 9;

// ==============================================
// exercise 
/*

目前使用的格里高利曆閏年規則如下:
    公元年分除以4不可整除，為平年。
    公元年分除以4可整除但除以100不可整除，為閏年。
    公元年分除以100可整除但除以400不可整除，為平年。

*/