const user = {
  fistName : "Rômulo",
  lastName : "Nunes",
  age: 25,
  instagram: "www.insta.com.br",
  skills: ["Backend", "Devops", "DB"]
}

const {skills, ...rest} = user;
const [primary, ...restSkills] = skills

console.log( primary, rest, restSkills)
