const API = 'http://localhost:3000/user'
export const getTasks = async ()=>{
  const res = await fetch(API)
  return await res.json()  
}