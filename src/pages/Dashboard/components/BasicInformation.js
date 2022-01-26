import React from 'react';
import Button from '../../../common/Button';
import Input from '../../../common/Input';

const BasicInformation = ({
  register,
  errors,
  control,
  watch,
  setActiveTab,
  activeTab,
}) => {
  const nftCollectionName = watch('nftCollectionName') || '';
  const nftTotalSupply = watch('nftTotalSupply') || '';
  const collectionDescription = watch('collectionDescription') || '';

  return (
    <>
      <div className='px-4 lg:px-14 flex flex-col lg:flex-row gap-10 lg:gap-24'>
        <div className='lg:max-w-sm'>
          <h3 className='pb-2'>Basic Information</h3>
          <p className='body2'>
            Connect your wallet and provide information about your generative
            NFT project.
          </p>
        </div>
        <div className='w-full lg:max-w-md grid gap-6'>
          <Input 
            id='nftCollectionName'
            type='text' 
            register={register('nftCollectionName', {
              required: 'This field is required',
            })}
            errors={errors}
            onInput={(e) =>
              (e.target.value =
                e.target.value.trim() === ''
                  ? e.target.value.trim()
                  : e.target.value)
            }
            rows={8}
            isRequired={true} 
            placeholder="NFT Collection Name" 
            name={'nftCollectionName'} 
            classNameContainer={`${
              errors &&
              errors.nftCollectionName &&
              errors.nftCollectionName.message
                ? 'border-red-600'
                : 'border-secondary'
            }`}
            defaultValue={''}
            children={errors &&
              errors.nftCollectionName &&
              errors.nftCollectionName.message ? (
                <span className='p-1 text-red-600 text-sm'>
                  {errors.nftCollectionName.message}
                </span>
              ) : (
                <></>
              )}
          />
          <Input 
            id='nftTotalSupply'
            type='text' 
            register={register('nftTotalSupply', {
              required: 'This field is required',
            })}
            errors={errors}
            onInput={(e) =>
              (e.target.value =
                e.target.value.trim() === ''
                  ? e.target.value.trim()
                  : e.target.value)
            }
            rows={8}
            isRequired={true} 
            placeholder="NFT Total Supply" 
            name={'nftTotalSupply'} 
            classNameContainer={`${
              errors && errors.nftTotalSupply && errors.nftTotalSupply.message
                ? 'border-red-600'
                : 'border-secondary'
            }`}
            defaultValue={''}
            children={errors &&
              errors.nftTotalSupply &&
              errors.nftTotalSupply.message ? (
                <span className='p-1 text-red-600 text-sm'>
                  {errors.nftTotalSupply.message}
                </span>
              ) : (
                <></>
              )}
          />
          <Input 
            id='collectionDescription'
            type='text' 
            register={register('collectionDescription', {
              required: 'This field is required',
            })}
            errors={errors}
            onInput={(e) =>
              (e.target.value =
                e.target.value.trim() === ''
                  ? e.target.value.trim()
                  : e.target.value)
            }
            rows={8}
            isRequired={true} 
            placeholder="Collection Description" 
            name={'collectionDescription'} 
            classNameContainer={`${
              errors &&
                errors.collectionDescription &&
                errors.collectionDescription.message
                  ? 'border-red-600'
                  : 'border-secondary'
              }`}
            defaultValue={''}
            children={errors &&
              errors.collectionDescription &&
              errors.collectionDescription.message ? (
                <span className='p-1 text-red-600 text-sm'>
                  {errors.collectionDescription.message}
                </span>
              ) : (
                <></>
              )}
          />
          <Button
            disabled={
              nftCollectionName && nftTotalSupply && collectionDescription
                ? false
                : true
            }
            onClick={() => {
              setActiveTab(activeTab + 1);
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default BasicInformation;
