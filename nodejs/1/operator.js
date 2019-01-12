// calculate + - * / %

1 + 2
2 - 3
4 * 5
6 / 7
12 % 5

1 + 2 * 3 / 4 + 2

// ==============================================
// compare > < == >= <= !=

2 > 1 //true
3 < 8 //true
4 == 4 //true 
true != true //false
3 >= 1 // true

// ==============================================
// << >>

1 << 0 // (1)_2, 1
1 << 2 // (100)_2, 4
1 << 3 // (1000)_2, 8

a = 3; // 11
a = a << 2 // (1100)_2, 12
a = a >> 1 // (110)_2, 6

// ==============================================
// += -= /= %= <<=

a = 1;
a += 1; // 2
a *= 4; // 8
a >>= 1; // 4

// ==============================================
// ! || &&
!true

!(20>10)

true || false

false && true

// ==============================================
// ++, --

a = 6;
a++; // 7
a--; // 6

--a; // 5
++a; // 6

a = 1;
console.log(++a)
console.log(a)

a = 1;
console.log(a++)
console.log(a)

// ==============================================
// exercise

a = 30
b = 40
(a < 34) && (b > 43) // ?
(a != 30) || (b <= 40) // ?
(a != 30) && !(b >= 40) // ?
