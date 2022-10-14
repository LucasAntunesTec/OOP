var objeto= { foo: "bar", age: 42}

const objeto_aqui = Object.freeze(objeto)

console.log("O que está em foo é = " + objeto_aqui.foo + "\n")
console.log("A idade do objeto é = " + objeto_aqui.age + "\n")

Object.keys(objeto_aqui).forEach(key => {
    console.log(key, objeto_aqui[key]);

});

