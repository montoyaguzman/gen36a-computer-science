const sum = (num1 = 0, num2 = 0, num3 = []) => {
    console.log(num1);
    console.log(num2);
    console.log(...num3);
};

sum(90, 20, [56, 12, 3, 99]);