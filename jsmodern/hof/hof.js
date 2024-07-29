const products = [
  {name: "Iphone", price: 3000, quantity: 1},
  {name: "Macbook Air", price: 5000, quantity: 3},
  {name: "Magic Mouse", price: 1000, quantity: 5}
]

// .find
const find = products.find(((product) =>{
  return product.name === "Magic Mouse";
}))
// .findIndex
const findIndex = products.findIndex(((product) =>{
  return product.name === "Magic Mouse";
}))

// console.log(findIndex)
// console.log(find)

// .some - algum
const some = products.some(((product) =>{
  return product.price > 3000;
}))

// console.log(some)

// .every - todos
const every = products.every(((product) =>{
  return product.price >= 1000;
}))
// console.log(every)

// .map
const map = products.map(((product) =>{
  return {...product, subtotal: product.price * product.quantity}
}))
// console.log(map)

// .filter
const filter = products.filter(((product) =>{
  return product.quantity > 1;
}))
// console.log(filter)

// .reduce
const reduce = products.reduce(((accumulator, current) =>{
  return accumulator + current.quantity * current.price
}), 0)
// console.log(reduce)
