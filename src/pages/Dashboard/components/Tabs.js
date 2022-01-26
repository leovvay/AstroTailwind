import React from 'react';

const Tabs = ({ activeTab }) => {
  const menu = [
    {
      title: 'Basic Information',
      id: 1,
      key: 'basics',
    },
    {
      title: 'Upload Trait Layers',
      id: 2,
      key: 'upload',
    },
    {
      title: 'Assign Rarity',
      id: 3,
      key: 'assign',
    },
    {
      title: 'Layer Preview',
      id: 4,
      key: 'layer',
    },
    {
      title: 'Launch Project',
      id: 5,
      key: 'launch',
    },
  ];
  return (
    <>
      <div className='w-full px-4 py-10 lg:pl-[70px] lg:pr-13 overflow-auto'>
        <div className='flex'>
          <div className='relative flex gap-10'>
            {menu.map((item) => (
              <div
                key={item.key}
                className={`p-4 border-b-4 relative overflow-hidden whitespace-nowrap ${
                  activeTab === item.id
                    ? 'border-primary text-primary z-10'
                    : 'border-white'
                }`}
              >
                {item.title}
              </div>
            ))}
            <div
              className='w-full absolute bg-primaryInactive'
              style={{ height: '2px', bottom: '1px' }}
            />
          </div>
          <span />
        </div>
      </div>
    </>
  );
};

export default Tabs;
