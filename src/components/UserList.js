import axios from 'axios';
import React, { useEffect, useState } from 'react';
export default function UserList(){
    const[user,setUser]=useState([])
 useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response=>{
        console.log(response.data)
        setUser(response.data)
    })
 },[])
 //delete
 const deleteRow=(id,e)=>{  
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
       setUser(user.filter(item => item.id !== id));  
    }) }

     return(
        <div>
            <h1>user list</h1>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>#</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>operation</th>
                    </tr>
                </thead>
                <tbody>
            {  user.map(function(item){
                    return(
                     <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={(e) =>deleteRow(item.id, e)}>Delete</button>  
                            </td>
                         </tr>
                    )
                })
            }
            </tbody>
         </table>
        </div>
    )
}