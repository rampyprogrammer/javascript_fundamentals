function fetchData(){
  return new Promise((resolve,reject)=>{
    const data ={ dad:"veerabasappa",mom:"susheelamma"}
    if(data){
      resolve(data)
    }
    else{
      reject(console.log("error occured"))
    }
  },2000)
}

async function fetchTheData(){
  
  try{
    let result = await fetchData()
    console.log(`the data is succefully fetched`,result);
  }
  catch{
    console.log("errror");
  }
}

fetchTheData()