//different js files which are linked to the main js file are known as modules.
//es6 modules will be used
//two types of modules are there: common js modules and es6 modules.
//es6 modules include import and export. it also has types.
//common js uses modules.export.
//two types of export and import: default and named.
// we ned to mention type module in script tag to enable es6 modules.
//default is used when we want to import single material from a file.
//named is used when we want to import multiple variables and functions.
//when we import any function , we can change the name of the function.
// same for named import expprt too



//default import
console.log("This is anjali");
import module1 from "./module1.js";
console.log(module1(10,20));

//changing name:
import demo from "./module1.js";
console.log(demo(9,1));

//named import

import { add , sub } from "./module2.js";
add();
sub();

//creating copies of the function:
import { add as sum , sub as fun } from "./module2.js";
sum();
fun();

import { mul } from "./module2.js";
mul()