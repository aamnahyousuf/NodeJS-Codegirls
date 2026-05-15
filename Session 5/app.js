// for(var i = 1; i <=5; i++){
//     setTimeout(function (){
//         console.log(i)
//     }, i * 1000);          
// }


let i = 1;

const timer = () => {
    if (i <= 5) {
        console.log(i);
        i++;
        setTimeout(timer, 1000);
    }
};

timer();