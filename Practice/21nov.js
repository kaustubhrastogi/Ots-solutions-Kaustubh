const API = async()=>{
    const response = await fetch('https://reqres.in/api/users')
    console.log(response)
  }
  API()