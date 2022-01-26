import React, { useState } from 'react';
import Button from '../../../common/Button';
import { ReactComponent as RightArrow } from '../../../asset/svg/RightArrow.svg';
import { ReactComponent as ArrowDown } from '../../../asset/svg/ArrowDown.svg';
import Table from '../../../common/Table';

const AssignRarity = ({
    register,
    errors,
    control,
    watch,
    setValue,
    setActiveTab,
    activeTab,
    setAssignRarity
}) => {

    const [isOpenBackgroundTab, setIsOpenBackgroundTab] = useState(true);
    const [isOpenClothesTab, setIsOpenClothesTab] = useState(false);
    const [isOpenHatTab, setIsOpenHatTab] = useState(false);
    const [isOpenMouthTab, setIsOpenMouthTab] = useState(false);
    const [isOpenMusicTab, setIsOpenMusicTab] = useState(false);

    const renderRowWithInputField = (key, field, text) => {
        return (<div className='px-[32px] flex gap-[32px]'>
            <h4 className='hidden flex-1 sm:block invisible'>num</h4>
            <p className='flex-1 body2'>{text}</p>
            <div className='flex-1'><input
                id={`${key}.${field}`}
                type='number'
                {...register(`${key}.${field}`, {
                    required: 'This field is required',
                })}
                min={0}
                max={100}
                errors={errors}
                onInput={(e) =>
                (e.target.value =
                    e.target.value.trim() === ''
                    ? e.target.value.trim()
                    : e.target.value)
                }
                placeholder={``}
                rows={8}
                className={`p-4 w-[80px] h-[40px] shadow-sm focus:ring-primary focus:border-primary block sm:text-sm border-2 ${
                errors &&
                errors.nftCollectionName &&
                errors.nftCollectionName.message
                    ? 'border-red-600'
                    : 'border-secondary'
                } rounded-md`}
                defaultValue={''}
            />
            </div>
        </div>)
    }

    const renderSimpleRow = (key, text) => {
        return (
            <div className='px-[32px] flex gap-[32px]'>
                <h4 className='flex-1 hidden sm:block sm:w-[176px] invisible'>num</h4>
                <h5 className='flex-1'>{text}</h5>
                <div className='flex-1'><h5 className='w-[80px] text-center'>{(parseInt(watch(`${key}.red`) || 0) + parseInt(watch(`${key}.yellow`) || 0) + parseInt(watch(`${key}.purple`) || 0))}/100</h5></div>
            </div>
        )
    }

    const renderChildren = (key) => {
        return (
            <>
               {renderRowWithInputField(key, 'red', 'Red.png')}
               {renderRowWithInputField(key, 'yellow', 'Yellow.png')}
               {renderRowWithInputField(key, 'purple', 'Purple.png')}
               {renderSimpleRow(key, 'Total')}
            </>
        )
    }

    const handleContinue = () => {
        const dataToSend = {
            background: [watch('background.red') || 0, watch('background.yellow') || 0, watch('background.purple') || 0],
            clothes: [watch('clothes.red') || 0, watch('clothes.yellow') || 0, watch('clothes.purple') || 0],
            hat: [watch('hat.red') || 0, watch('hat.yellow') || 0, watch('hat.purple') || 0],
            mouth: [watch('mouth.red') || 0, watch('mouth.yellow') || 0, watch('mouth.purple') || 0],
            music: [watch('music.red') || 0, watch('music.yellow') || 0, watch('music.purple') || 0]
        }
        setAssignRarity(dataToSend);
        setActiveTab(activeTab + 1);
    }

    return (
        <>
            <div className='lg:px-13 flex flex-col lg:flex-row gap-10 xl:gap-20'>
                <div className='flex-1 px-4 sm:px-0'>
                    <h3 className='pb-2'>Assign Rarity</h3>
                    <p className='body2'>
                        Define your rarity percentages. This will determine how common (or rare) your NFT sub-traits are going to be. This allows you to have control over the distribution of traits.
                        <br /> <br /> Expand each Trait layer to assign rarity.
                    </p>
                </div>
                <div className='flex flex-col gap-4 overflow-hidden lg:w-tableWidth'>
                    <Table 
                        headers={[
                            { name: 'Layer Number', classes: [`hidden sm:block sm:-ml-6`] },
                            { name: 'Trait', classes: '' },
                            { name: 'Rarity', classes: '' }
                        ]}
                        headerContainerStyles=''
                        rows={[
                            {
                                rowsColumns: [
                                    { data: '01', classes: 'hidden sm:block sm:w-[146px]' },
                                    { data: <>{isOpenBackgroundTab ? <ArrowDown className='inline w-4 h-4'/> : <RightArrow className='inline w-4 h-4' />}<span>Background</span></>, classes: 'flex items-center space-x-2' },
                                    { data: 'Percentage (%)', classes: '' }
                                ],
                                classes: '',
                                isOpen: isOpenBackgroundTab,
                                childRows: renderChildren('background'),
                                onClick: () => setIsOpenBackgroundTab(!isOpenBackgroundTab)
                            },
                            {
                                rowsColumns: [
                                    { data: '02', classes: 'hidden sm:block sm:w-[146px]' },
                                    { data: <>{isOpenClothesTab ? <ArrowDown className='inline w-4 h-4' /> : <RightArrow className='inline w-4 h-4' />}<span>Clothes</span></>, classes: 'flex items-center space-x-2' },
                                    { data: 'Percentage (%)', classes: '' }
                                ],
                                classes: '',
                                isOpen: isOpenClothesTab,
                                childRows: renderChildren('clothes'),
                                onClick: () => setIsOpenClothesTab(!isOpenClothesTab)
                            },
                            {
                                rowsColumns: [
                                    { data: '03', classes: 'hidden sm:block sm:w-[146px]' },
                                    { data: <>{isOpenHatTab ? <ArrowDown className='inline w-4 h-4' /> : <RightArrow className='inline w-4 h-4' />}<span>Hat</span></>, classes: 'flex items-center space-x-2' },
                                    { data: 'Percentage (%)', classes: '' }
                                ],
                                classes: '',
                                isOpen: isOpenHatTab,
                                childRows: renderChildren('hat'),
                                onClick: () => setIsOpenHatTab(!isOpenHatTab)
                            },
                            {
                                rowsColumns: [
                                    { data: '04', classes: 'hidden sm:block sm:w-[146px]' },
                                    { data: <>{isOpenMouthTab ? <ArrowDown className='inline w-4 h-4' /> : <RightArrow className='inline w-4 h-4' />}<span>Mouth</span></>, classes: 'flex items-center space-x-2' },
                                    { data: 'Percentage (%)', classes: '' }
                                ],
                                classes: '',
                                isOpen: isOpenMouthTab,
                                childRows: renderChildren('mouth'),
                                onClick: () => setIsOpenMouthTab(!isOpenMouthTab)
                            },
                            {
                                rowsColumns: [
                                    { data: '05', classes: 'hidden sm:block sm:w-[146px]' },
                                    { data: <>{isOpenMusicTab ? <ArrowDown className='inline w-4 h-4' /> : <RightArrow className='inline w-4 h-4' />}<span>Music</span></>, classes: 'flex items-center space-x-2' },
                                    { data: 'Percentage (%)', classes: '' }
                                ],
                                classes: '',
                                isOpen: isOpenMusicTab,
                                childRows: renderChildren('music'),
                                onClick: () => setIsOpenMusicTab(!isOpenMusicTab)
                            }
                        ]}
                    />
                    <div className='flex justify-center mt-8'>
                        <Button
                            disabled={
                                (watch('background.red') || 0) && (watch('background.yellow') || 0) && (watch('background.purple') || 0) ||
                                (watch('clothes.red') || 0) && (watch('clothes.yellow') || 0) && (watch('clothes.purple') || 0) ||
                                (watch('hat.red') || 0) && (watch('hat.yellow') || 0) && (watch('hat.purple') || 0) ||
                                (watch('mouth.red') || 0) && (watch('mouth.yellow') || 0) && (watch('mouth.purple') || 0) ||
                                (watch('music.red') || 0) && (watch('music.yellow') || 0) && (watch('music.purple') || 0) 
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
        </>
    );
};

export default AssignRarity;
