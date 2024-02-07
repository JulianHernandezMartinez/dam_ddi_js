import {name1, sayHello, Person} from "./importingModule.js";


function show(){
    const pers1 = new Person("Leovigildo");
    console.log(`imprimiendo  re-exportado ${name1}`);
    sayHello(pers1.name);
    console.log(name1);
}

export {show};

