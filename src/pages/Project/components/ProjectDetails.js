import React from 'react';
import Button from '../../../common/Button';

const ProjectDetails = () => {
  return (
    <>
      <div className='px-4 lg:px-14 flex flex-col lg:flex-row gap-8 lg:gap-16'>
        <div className='lg:max-w-sm'>
          <h3 className='pb-2'>Project Page</h3>
          <p className='body2'>
            You can launch right away or pick a day to go live. After launching,
            you can start minting your generative NFT.
          </p>
          <Button
            className={'mt-6'}
            type={'solid'}
            onClick={() => { }}
          >
            Go To Mint Page
          </Button>
        </div>
        <div className='flex flex-col gap-4 lg:min-w-350px lg:mt-10 pl-4'>
          <div>
            <p className='body2 !text-[#818181]'>NFT Collection Name</p>
            <p className='body1 !text-[#565379]'>NFT Collection Name</p>
          </div>
          <div>
            <p className='body2 !text-[#818181]'>NFT Total Supply</p>
            <p className='body1 !text-[#565379]'>8888</p>
          </div>
          <div>
            <p className='body2 !text-[#818181]'>Mint Amount</p>
            <p className='body1 !text-[#565379]'>1 NEAR</p>
          </div>
          <div>
            <p className='body2 !text-[#818181]'>Collection Description</p>
            <p className='body1 !text-[#565379]'>
              NFT Collection Name  are 6,969 unique piggies on the NEAR blockchain. 69% of royalties go to holders - let's make it fly together.
            </p>
          </div>
          <div>
            <p className='body2 !text-[#818181]'>Launch Date</p>
            <p className='body1 !text-[#565379]'>Sat, Dec 25, 2021</p>
          </div>
          <div>
            <p className='body2 !text-[#818181]'>Launch Time</p>
            <p className='body1 !text-[#565379]'>23:59 PM</p>
          </div>
          <div>
            <p className='body2 !text-[#818181]'>End Date</p>
            <p className='body1 !text-[#565379]'>Sat, Dec 25, 2021</p>
          </div>
          <div>
            <p className='body2 !text-[#818181]'>End Time</p>
            <p className='body1 !text-[#565379]'>23:59 PM</p>
          </div>
          <div className='relative'>
            <p className='body2 !text-[#818181] absolute z-10 bg-white'>Mint Page</p>
            <div className='py-3 px-4 bg-background rounded flex flex-col lg:flex-row justify-between items-end lg:items-center w-full absolute left-[-15px] top-[14px]'>
              <p className='body1 !text-[#565379] w-full lg:w-auto'>
                Astrogen.com/Collection Name
              </p>
              <Button
                className={'!py-1 px-4 mt-4 lg:mt-0'}
                type={'solid'}
                onClick={() => { }}
              >
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetails;