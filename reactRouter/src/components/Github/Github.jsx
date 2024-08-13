import React from 'react'
import { useState,useEffect } from 'react'

function Github() {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github/users/hiteshchoudhary')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])

    return (
        <div className='text-center m-4 bg-gray-300 text-white'> GitHub followers:{data.followers}
        <img src="data.avatar_url" alt="github image" width ={300}/>
        </div>
    )
}

export default Github
