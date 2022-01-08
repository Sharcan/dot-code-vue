const a = [1, 2, 3];
const b = [];
function multiply(c) { 
	c.forEach(x => function {
        b.push(x * 2);
    });
} 
multiply(a)
console.log(b)