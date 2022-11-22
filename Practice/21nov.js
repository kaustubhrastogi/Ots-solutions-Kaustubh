const API = async()=>{
    const response = await fetch('https://reqres.in/api/users')
    console.log(response)
  }
  API()

// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en

let Position = ()=>{
  let location = navigator.geolocation.getCurrentPosition((e)=>console.log(e))
  console.log(location)
}
Position()