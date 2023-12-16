import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    {/* import image */}
    <div className='home flex justify-center items-center flex-col  h-screen bg-gray-100 '>
      <h1 className='text-4xl uppercase font-black text-neutral-950 m-4'>Search Your Next Home </h1>
      <p>Find new & featured property located in your local city. Voluptatibus excepturi velit quae officiis</p>
      <input type="text" placeholder='Search Your Home' className=' w-96 p-3 border-spacing-3 mt-5'/>
      <button className='bg-black text-white p-4 mt-4'>Search More </button>
     
    </div>

    </>
  )
}

export default Home
