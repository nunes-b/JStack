const user = {
  fistName : "Rômulo",
  lastName : "Nunes",
  age: 25,
  instagram: "www.insta.com.br",
  skills: ["Backend", "Devops", "DB"]
}

const { fistName, age: idade, skills} = user;
const [primary, secondary, third] = skills

console.log(fistName, idade, secondary)
