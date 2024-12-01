import React from 'react'
import { useLoaderData,Link } from 'react-router-dom'

export default function Careers() {
  const careers = useLoaderData();
  return (
    <div className='careers'>
        {careers.map(career =>(
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based In {career.location}</p>
          </Link>
        ))}
    </div>
  )
}

export const careersLoader = async ()=>{
  const res = await fetch('http://localhost:4000/careers')
  if(!res.ok){
    throw new Error("Couldn't get the desired data please try again later...!")
  }
  return res.json();
}
