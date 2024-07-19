const user = {
  fistName : "Rômulo",
  lastName : "Nunes",
  age: 25,
  instagram: "www.insta.com.br",
  skills: ["Backend", "Devops", "DB"],
  active: false
}

const updateUser = {
...user,
skills: [...user.skills, 'Marketing'],
active: true,
}

console.log(user)
console.log(updateUser)
