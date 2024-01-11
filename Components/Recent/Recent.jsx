"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Recent = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12");
        const data = await res.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='py-10'>
      <h2 className='text-3xl font-bold text-center'>Recent Post</h2>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 py-10">
      {post.slice(0,4).map((iteam) => (
        <Link href={`blog/${iteam.id}`}>
        <div key={iteam.id} className="card  bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {iteam?.title}
          </h2>
        
        </div>
      </div>
      </Link>
      ))}
    </div>


    </div>
  );
};

export default Recent;
