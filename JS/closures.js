// console.log("Using var:");

// for (var i = 0; i < 3; i++) {
//     console.log('initial : ',i);
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

console.log("Using let:");

for (let i = 0; i < 3; i++) {
    console.log("initial : ", i);
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
