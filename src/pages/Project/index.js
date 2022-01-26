import React from 'react';
import Button from '../../common/Button';
import ProjectDetails from './components/ProjectDetails';

const Project = () => {
  return (
    <>
     <div className='px-0 md:px-12 lg:px-24 w-full max-w-7xl'>
        <div className='w-full flex justify-end gap-8 py-8 px-4 md:px-0'>
          <div className='block'>
            <Button type='outline' onClick={() => {}}>
              astrogen.near
            </Button>
          </div>
        </div>
        <div className='bg-white pt-12 pb-24 rounded-md'>
          <ProjectDetails />
        </div>
      </div>
    </>
  )
}

export default Project;