const Func = () => {

}

Func.prototype.method1 = () => {
    console.log('hi');
}

const myFunc = new Func();
myFunc.method1();