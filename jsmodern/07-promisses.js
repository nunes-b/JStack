const apiCall= new Promise((resolve, reject)=>{
  // console.log("Dentro da promisse")
  setTimeout(() => {
    resolve("Deu bom!");
  }, 2000);
});

// apiCall.then((response)=>{
//   console.log(response)
// })
// .catch((err)=>{
//   console.log(err)
// });

async function run () {
  try {
    const resposta = await apiCall
    console.log(resposta)
  }
  catch(error){
    console.log(error)
  }

}
run()
