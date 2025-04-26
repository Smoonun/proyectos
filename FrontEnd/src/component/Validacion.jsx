import React, { useEffect, useState } from 'react';
export default function Validacion (){
 const [data , setData ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/datos')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
      }, [])
  
    
    return (<>
        data.map((item) => {
            item.email 
        }
        </>
    )
        }
