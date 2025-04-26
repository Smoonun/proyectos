import React, { useEffect, useState } from 'react';
export default function Validacion (){
 const [data , setData ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/datos')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
      }, [])
     
        for(let i=0 ;i<5; i++){
            for(let j=0 ;j<5; j++){
            console.log(data[i][j])
            console.log(data[i][j])
 }}
    return (
        <div>xd</div>
    )
        }
