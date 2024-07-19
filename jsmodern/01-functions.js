
function myfunc(){
//tem seu proprio this.
  this.name = "romulin";
  // return this.name
  const myfuncArrow = () => {
    //tem o this no escopo que é criada.
    this.sobrenome = "silva";

  }
  myfuncArrow()
}

console.log(new myfunc())
console.log(this)

function soma(arg1, arg2){
  console.log(arguments)
  return arg1 + arg2

}

console.log(soma(2,3))

const sum = () => {
  console.log("Corpo da função.")
}

sum()
