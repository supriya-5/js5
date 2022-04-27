
//-------------------------------------------------------------------

//loops

//for

for(let i=0; i<10; i++){
    console.log(i);
} // first it initialize the variable and check the condition and starts execution untill the it reaches lesser than 10.

let a=10;
while(a>0){
    console.log(a);
    a--;
}

for(let e=2; e<=10; e++){
   console.log(e*2);
}

let f=2;
while(f<=10){
    console.log(f);
    f=f+2;
}

let g=2;
do{
    console.log(g);
    g=g+2;
}while (g <= 20);
//first initialize the variable and print that and check the conditions and last it executes.



let games = ["tennis","circket","badminton","football"];

// for(let index in games){
//     console.log(index); //fetch the index
// }
// for(let values of games){
//     console.log(values); //fetch the values
// }

games.forEach((values,index)=>{
    console.log(index,values)
})//the first parameters accepts the values of the array and the second parameter accepts the index of the array.