import React, { useEffect, useState } from 'react';
import Button from '../../../common/Button';
import { ReactComponent as RightArrow } from '../../../asset/svg/RightArrow.svg';
import { ReactComponent as ArrowDown } from '../../../asset/svg/ArrowDown.svg';
import Table from '../../../common/Table';
import { Carousel } from '@trendyol-js/react-carousel';

const LayerPreview = ({
    register,
    errors,
    control,
    watch,
    setValue,
    getValues,
    setActiveTab,
    activeTab,
    assignRarity
}) => {

    const [isOpenBackgroundTab, setIsOpenBackgroundTab] = useState(true);
    const [isOpenClothesTab, setIsOpenClothesTab] = useState(false);
    const [isOpenHatTab, setIsOpenHatTab] = useState(false);
    const [isOpenMouthTab, setIsOpenMouthTab] = useState(false);
    const [isOpenMusicTab, setIsOpenMusicTab] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);


    const calcViewportSize = () => {
        setIsMobile(window.innerWidth <= 600);
        setIsTablet(window.innerWidth > 600 && window.innerWidth <= 768);
    }

    useEffect(() => {
        calcViewportSize();
        window.addEventListener('resize', calcViewportSize);
    },[]);

    let slideCount = isMobile ? 1.5 : isTablet ? 2.5 : 4.5;

    const svgStyle = {
        width: '16px',
        height: '16px'
    }

    const renderRow = (key, t1, t2, t3) => {
        return (<div className='px-[12px] flex gap-[32px] sm:px-[32px]'>
            <h4 className='flex-1 sm:block min-w-[40px] sm:max-w-[40px] invisible'>num</h4>
            <p className='flex-1 body2 min-w-[176px] sm:min-w-[0px] pl-[22px]'>{t1}</p>
            <p className='flex-1 body2 min-w-[176px] sm:min-w-[0px]'>{t2}</p>
            <p className='flex-1 body2 min-w-[176px] sm:min-w-[0px]'>{t3}</p>
           
        </div>)
    }

    const renderSimpleRow = (key, text, total) => {
        return (
            <div className='px-[12px] flex gap-[32px] sm:px-[32px]'>
                <h4 className='flex-1 sm:block min-w-[40px] sm:max-w-[40px] invisible'>num</h4>
                <h5 className='flex-1 min-w-[176px] sm:min-w-[0px] pl-[22px]'>{text}</h5>
                <h5 className='flex-1 min-w-[176px] sm:min-w-[0px]'>{total}/100</h5>
                <h4 className='hidden flex-1 sm:block min-w-[176px] sm:min-w-[0px] invisible'>num</h4>
            </div>
        )
    }

    const renderChildren = (key) => {
        return (
            <>
               {renderRow(key, 'Red.png', assignRarity[key][0], '15 Combos')}
               {renderRow(key, 'Yellow.png', assignRarity[key][1], '15 Combos')}
               {renderRow(key, 'Purple.png', assignRarity[key][2], '15 Combos')}
               {renderSimpleRow(key, 'Total', (parseInt(assignRarity[key][0]) + parseInt(assignRarity[key][1]) + parseInt(assignRarity[key][2])))}
            </>
        )
    }

    const handleContinue = () => {
        setActiveTab(activeTab + 1);
    }

    return (
        <>
            <div className='lg:px-13 flex flex-col lg:flex-row gap-10 xl:gap-20'>
                <div className='flex-1 px-4 sm:px-0'>
                    <h3 className='pb-2'>Layers Preview</h3>
                    <p className='body2'>
                        An opportunity to see how your traiit layers arrangment looks like before you launch to the public. Once you launch, you won’t be able to make any changes.
                        <br /> <br />You can drag and rearrange these layers up and down.
                    </p>
                </div>
                <div className='flex flex-col gap-4 overflow-x-auto sm:overflow-hidden lg:w-tableWidth'>
                    <Table 
                        headers={[
                            { name: '', classes: 'min-w-[16px] sm:min-w-[0px] sm:max-w-[40px]' },
                            { name: 'Trait', classes: 'min-w-[176px] sm:min-w-[0px] ' },
                            { name: 'Rarity', classes: 'min-w-[176px] sm:min-w-[0px]' },
                            { name: 'NFT Combination', classes: 'min-w-[176px] sm:min-w-[0px]' },
                        ]}
                        headerContainerStyles='w-[700px] sm:w-full'
                        rows={[
                            {
                                rowsColumns: [
                                    { data: '01', classes: 'sm:block min-w-[40px] sm:max-w-[40px]' },
                                    { data: <>{isOpenBackgroundTab ? <ArrowDown className='inline' style={svgStyle}/> : <RightArrow className='inline' style={svgStyle} />}<span>Background</span></>, classes: 'flex items-center space-x-2 min-w-[176px] sm:min-w-[0px]' },
                                    { data: 'Percentage (%)', classes: 'min-w-176px sm:min-w-[0px]' },
                                    { data: 'Combinations', classes: 'min-w-176px sm:min-w-[0px]' }
                                ],
                                classes: '',
                                isOpen: isOpenBackgroundTab,
                                childRows: renderChildren('background'),
                                onClick: () => setIsOpenBackgroundTab(!isOpenBackgroundTab)
                            },
                            {
                                rowsColumns: [
                                    { data: '02', classes: 'sm:block min-w-[40px] sm:max-w-[40px]' },
                                    { data: <>{isOpenClothesTab ? <ArrowDown className='inline' style={svgStyle}/> : <RightArrow className='inline' style={svgStyle} />}<span>Clothes</span></>, classes: 'flex items-center space-x-2 min-w-176px sm:min-w-[0px]' },
                                    { data: 'Percentage (%)', classes: 'min-w-176px sm:min-w-[0px]' },
                                    { data: 'Combinations', classes: 'min-w-176px sm:min-w-[0px]' }
                                ],
                                classes: '',
                                isOpen: isOpenClothesTab,
                                childRows: renderChildren('clothes'),
                                onClick: () => setIsOpenClothesTab(!isOpenClothesTab)
                            },
                            {
                                rowsColumns: [
                                    { data: '03', classes: 'sm:block min-w-[40px] sm:max-w-[40px]' },
                                    { data: <>{isOpenHatTab ? <ArrowDown className='inline' style={svgStyle}/> : <RightArrow className='inline' style={svgStyle} />}<span>Hat</span></>, classes: 'flex items-center space-x-2 min-w-176px sm:min-w-[0px]' },
                                    { data: 'Percentage (%)', classes: 'min-w-176px sm:min-w-[0px]' },
                                    { data: 'Combinations', classes: 'min-w-176px sm:min-w-[0px]' }
                                ],
                                classes: '',
                                isOpen: isOpenHatTab,
                                childRows: renderChildren('hat'),
                                onClick: () => setIsOpenHatTab(!isOpenHatTab)
                            },
                            {
                                rowsColumns: [
                                    { data: '04', classes: 'sm:block min-w-[40px] sm:max-w-[40px]' },
                                    { data: <>{isOpenMouthTab ? <ArrowDown className='inline' style={svgStyle}/> : <RightArrow className='inline' style={svgStyle} />}<span>Mouth</span></>, classes: 'flex items-center space-x-2 min-w-176px sm:min-w-[0px]' },
                                    { data: 'Percentage (%)', classes: 'min-w-176px sm:min-w-[0px]' },
                                    { data: 'Combinations', classes: 'min-w-176px sm:min-w-[0px]' }
                                ],
                                classes: '',
                                isOpen: isOpenMouthTab,
                                childRows: renderChildren('mouth'),
                                onClick: () => setIsOpenMouthTab(!isOpenMouthTab)
                            },
                            {
                                rowsColumns: [
                                    { data: '05', classes: 'sm:block min-w-[40px] sm:max-w-[40px]' },
                                    { data: <>{isOpenMusicTab ? <ArrowDown className='inline' style={svgStyle}/> : <RightArrow className='inline' style={svgStyle} />}<span>Music</span></>, classes: 'flex items-center space-x-2 min-w-176px sm:min-w-[0px]' },
                                    { data: 'Percentage (%)', classes: 'min-w-176px sm:min-w-[0px]' },
                                    { data: 'Combinations', classes: 'min-w-176px sm:min-w-[0px]' }
                                ],
                                classes: '',
                                isOpen: isOpenMusicTab,
                                childRows: renderChildren('music'),
                                onClick: () => setIsOpenMusicTab(!isOpenMusicTab)
                            }
                        ]}
                    />
                </div>
            </div>
            <div className='lg:px-13 flex flex-col lg:flex-row gap-5 xl:gap-20'>
                <div className='flex-1 px-4 sm:px-0 invisible'></div>
                <div className='flex flex-col gap-4 overflow-hidden lg:w-3/5'>
                    <div className='flex justify-center mt-8'>
                        <Button
                            disabled={
                                (watch('background.red') || 0) && (watch('background.yellow') || 0) && (watch('background.purple') || 0)
                                  ? false
                                  : true
                              }
                            onClick={() => {
                                handleContinue()
                            }}
                            className={'w-5/6'}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
            <div className='lg:px-13 flex pt-[24px] flex-col lg:flex-row gap-10 xl:gap-20'>
                <div className='flex-1 px-4 sm:px-0'>
                    <h3 className='pb-2'>Layers Preview</h3>
                </div>         
            </div>
            <div className='px-4 lg:px-13 pt-[24px] gap-10 xl:gap-10'>
                <Carousel show={slideCount} slide={isMobile ? 1 : 3} swiping={true}>
                    <div className='pr-4'>
                        <img className='w-[228px] h-[184px]' src='https://www.w3schools.com/howto/img_avatar.png' alt='pic' />
                    </div> 
                    <div className='pr-4'>
                        <img className='w-[228px] h-[184px]' src='https://www.w3schools.com/howto/img_avatar.png' alt='pic' />
                    </div> 
                    <div className='pr-4'>
                        <img className='w-[228px] h-[184px]' src='https://www.w3schools.com/howto/img_avatar.png' alt='pic' />
                    </div> 
                    <div className='pr-4'>
                        <img className='w-[228px] h-[184px]' src='https://www.w3schools.com/howto/img_avatar.png' alt='pic' />
                    </div> 
                    <div className='pr-4'>
                        <img className='w-[228px] h-[184px]' src='https://www.w3schools.com/howto/img_avatar.png' alt='pic' />
                    </div> 
                    <div className='pr-4'>
                        <img className='w-[228px] h-[184px]' src='https://www.w3schools.com/howto/img_avatar.png' alt='pic' />
                    </div> 
                    <div className='pr-4'>
                        <img className='w-[228px] h-[184px]' src='https://www.w3schools.com/howto/img_avatar.png' alt='pic' />
                    </div> 
                    <div className='pr-4'>
                        <img className='w-[228px] h-[184px]' src='https://www.w3schools.com/howto/img_avatar.png' alt='pic' />
                    </div> 
                    <div className='pr-4'>
                        <img className='w-[228px] h-[184px]' src='https://www.w3schools.com/howto/img_avatar.png' alt='pic' />
                    </div> 
                    <div className='pr-4'>
                        <img className='w-[228px] h-[184px]' src='https://www.w3schools.com/howto/img_avatar.png' alt='pic' />
                    </div> 
                </Carousel>
            </div>
        </>
    );
};

export default LayerPreview;
