const a = [1, 2, 3];
function multiply(c) { 
    const b = [];
	c.forEach(x => function {
        b.push(x * 2);
    });
    return b;
}
console.log(multiply(a))