import React,{useState ,useEffect}from 'react'

export default function UseFetch(url) {

    const [data,setData] =useState(null);
    const [loading,setloading] =useState(true);
    const [error,setError] =useState(null);
  
  
  useEffect(()=>{
  setTimeout(() => {
    fetch(url)
    .then((res)=>{
      if (!res.ok) {
        throw Error("fecthing is not successful");
      }
      else{
      return res.json()
      }
    })
    .then((data)=>{
      setData(data);
      setError(null);
      setloading(false);
     
      
    })
    .catch((error)=>{
      setError(error.message);
      setloading(false);
    })
  }, 2000);
  
  },[url])
 
  return{
    data,loading,error
  }
}
