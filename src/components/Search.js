import React, { useEffect, useState } from 'react';
import axios from 'axios'
export default function Search(){
 const[user,setUser]=useState([]);

 useEffect((key)=>{
    axios.get(`https://jsonplaceholder.typicode.com/users?q=${key}`)  
    .then(res => {  
       console.log(res.data)
       setUser(res.data)
    })},[])

  const search=(key)=>{
      console.log(key)
      axios.get("https://jsonplaceholder.typicode.com/users?q="+key)
        .then(response=>{
            console.log(response.data)
            setUser(response.data)
        }) 
  }
    return(
        <div>
            <input type="text"  placeholder="Search here" onChange={(e)=>search(e.target.value)}/>
            <div>
                <h1> search result here</h1>
                {
                    user.map(function(item){
                        return(
                            <div>
                             <p> {item.name}</p>   
                               
                           </div>
                        )
                    })
                }
            </div>
        </div>
    )
}