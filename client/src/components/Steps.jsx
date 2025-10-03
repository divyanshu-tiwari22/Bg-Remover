import React from 'react'
import { assets } from '../assets/assets'

const Steps = () => {
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent'>
        Steps to remove background <br/> image in seconds
      </h1>
      <div className='flex items-start flex-wrap gap-4 mt-12 xl:mt-24 pb-10 justify-center'>

        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-5 pb-8 rounded hover:scale-105 transition-all duration-500'>
          <img className='max-w-9' src={assets.upload_icon} alt='' />
          <div>
            <p className='text-xl font-medium'>Upload Image</p>
            <p className='text-sm text-neutral-500'>Upload your images here.<br/> Click and see the magic.</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-5 pb-8 rounded hover:scale-105 transition-all duration-500'>
          <img className='max-w-9' src={assets.remove_bg_icon } alt='' />
          <div>
            <p className='text-xl font-medium'>Remove Background</p>
            <p className='text-sm text-neutral-500'>Removing background has never<br/> been this simple</p>
          </div>
        </div>
        <div className='flex items-start gap-4 bg-white border drop-shadow-md p-5 pb-8 rounded hover:scale-105 transition-all duration-500'>
          <img className='max-w-9' src={assets.download_icon} alt='' />
          <div>
            <p className='text-xl font-medium'>Download Image</p>
            <p className='text-sm text-neutral-500'>Easy download so that you can<br/> take your magic with you.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
