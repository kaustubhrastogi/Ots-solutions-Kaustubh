console.log("Patterns")
/*

*
* *
* * *
* * * *
* * * * *

*/
// let n = 5
// let pattern1=""
// for (let i = 1; i <= n; i++) {
//     for(let j=1;j<=i;j++){
//         pattern1+="*";
//     }
//     pattern1+="\n"
// }
// console.log(pattern1)

/*

* * * *
* * *
* *
*

*/
// let pattern2=""
// for (let i = 0; i < n; i++) {
//     for(j=n;j>i;j--){
//         pattern2+="*"
//     }
//     pattern2+="\n"
// }
// console.log(pattern2)

/*
     *
    **
   ***
  ****
 ***** 
*/
// let pattern3=""
// for (let i = 0; i < n; i++) {
//     for(j=n-1;j>i;j--){
//         pattern3+=" "
//     }
//     for(k=0;k<=i;k++){
//         pattern3+="*"
//     }
//     pattern3+="\n"
// }
// console.log(pattern3)
// let pattern3=""
/*

*
**
***
****
*****
****
***
**
*

*/
// let n=5
// let pattern4=""
// for(let row=1;row<=2*n-1;row++){
//     let totalCol=row<n?row:2*n-row
//     for(let col=1;col<=totalCol;col++){
//         pattern4+="*"
//     }
//     pattern4+="\n"
// }
// console.log(pattern4)

/*

    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
    
*/
let n=5
let pattern5=""
for(let row=1; row<=2*n-1; row++){
    let totalSpace=row>n?row-n:n-1
    for(let spc=totalSpace;spc>=row;spc--){
        pattern5+=" "
    }
    let totalCol=row>n?2*n-row:row;
    for(let col=1;col<=totalCol;col++){
        pattern5+="*"
    }
    pattern5+="\n"
}
console.log(pattern5)