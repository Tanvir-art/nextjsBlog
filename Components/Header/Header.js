import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="h-[600px] flex flex-col justify-center gap-6 items-center bg-gray-100">
        <h2 className="text-2xl md:text-4xl font-bold">Explore the Unseen, Understand the Unknown</h2>
        <Link href="/blog">
        <button className="bg-[#333] text-white py-3 px-6 rounded">Explore</button>

        </Link>
      </div>
    </div>
  )
}

export default Header
