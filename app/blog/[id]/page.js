import React from 'react'

const page = async({params}) => {
const  {id} = params;
const res = await fetch(
  `https://jsonplaceholder.typicode.com/posts?id=${id}`
);
const data = await res.json();
console.log(data)
  return (
    <div className='py-10'>
         
        <div  className="card  bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-center">
            {data[0]?.title}
          </h2>
          <p className='text-center'>{data[0]?.body}</p>
        
        </div>
      </div>
   
    </div>
  )
}

export default page
