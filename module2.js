function add() {
    console.log("this is add function");
}

function sub() {
    console.log("this is sub function");
}
//named export function inside "{}"
export {add, sub};

export function mul(){
    console.log("this is multiplication");
}