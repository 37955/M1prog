// beginwaarden
let a = 0, b = 1;

// a kleiner dan of gelijk aan 10000000
while (a <= 10000000) {
    console.log(a);
    let Test = a;
    a = b;
    b = Test + b;
}

while (a <= 10000000) {
    console.log(a);
    let Test = a;
    a = b;
    b = Test + b;
}