import React from 'react'
import { Link } from 'react-router'

const Landpage = () => {
  return (
    <div className='container mx-auto bg-[#86DFFF]'>
        <div className='flex justify-between gap-10'>
        <div className='p-5'>
            <h2 className='text-4xl p-5'>
                Build your job-giving Resume in minutes
            </h2>
          <Link to="/resume"> <button className='bg-[#044DBA] text-white p-3 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-500'>Build Resume</button></Link>
        </div>

        <div className='w-[600px]'>
            <img src="/public/images/resumify hero's.png" alt="hero's image" />
        </div>
        </div>
        
        <div className='flex justify-between mt-10'>
            <div>

                <h2 className='text-4xl'>Let's get you hired.Join us Now and build your first way to success.</h2>
            <Link to="/signup"><button className='bg-[#044DBA] text-white p-3 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-500'>Get Started</button></Link>
            </div>

            <div className='w-[600px]'>
                <img src="./public/images/resume.jpg" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Landpage