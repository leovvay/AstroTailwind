import React, { useState, forwardRef } from 'react';
import Dropzone from 'react-dropzone';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Switch } from '@headlessui/react';
import Button from '../../../common/Button';
import Input from '../../../common/Input';
import { ReactComponent as ZipFolder } from '../../../asset/svg/FolderZip.svg';
import { ReactComponent as ZipFile } from '../../../asset/svg/PngFile.svg';
import { ReactComponent as Delete } from '../../../asset/svg/delete.svg';
import { ReactComponent as Calender } from '../../../asset/svg/Calender.svg';
import TimePicker from '../../../common/TimePicker';

const LaunchProject = ({
  register,
  errors,
  control,
  watch,
  setActiveTab,
  activeTab,
  getValue,
  setValue,
  Controller,
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const scheduleLaunch = watch('scheduleLaunch');
  const endDate = watch('endDate');
  const thumbnail = watch('thumbnail');

  return (
    <>
      <div className='px-4 lg:px-14 flex flex-col lg:flex-row gap-10'>
        <div className='lg:max-w-sm'>
          <h3 className='pb-2'>Launch Project</h3>
          <p className='body2'>
            You can launch right away or pick a day to go live. After launching,
            you can start minting your generative NFT.
          </p>
        </div>
        <div className='flex flex-col gap-4 lg:min-w-350px'>
          <div className='grid gap-6'>
            <Input
              id={`mintingPrice`}
              type='text'
              name={`mintingPrice`}
              register={register(`mintingPrice`, {
                required: 'This field is required',
              })}
              errors={errors}
              onInput={(e) =>
                (e.target.value =
                  e.target.value.trim() === ''
                    ? e.target.value.trim()
                    : e.target.value)
              }
              placeholder={`Minting Price (NEAR)`}
              rows={8}
              classNameContainer={`${
                errors &&
                errors.nftCollectionName &&
                errors.nftCollectionName.message
                  ? 'border-red-600'
                  : 'border-secondary'
              }`}
              defaultValue={''}
              children={
                errors &&
                errors.nftCollectionName &&
                errors.nftCollectionName.message ? (
                  <span className='p-1 text-red-600 text-sm'>
                    {errors.nftCollectionName.message}
                  </span>
                ) : (
                  <></>
                )
              }
            />

            <Dropzone
              accept='image/png'
              name='milestoneAttachments'
              onDrop={(filesToUpload) => {
                let combinedFile = selectedFiles;
                filesToUpload.forEach((file) =>
                  combinedFile.push({
                    file: [file],
                    progress: 0,
                    uploading: false,
                  })
                );
                setSelectedFiles([...combinedFile]);
                setValue(`thumbnail`, filesToUpload);
              }}
              multiple={false}
            >
              {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragAccept,
                isDragReject,
              }) => {
                const additionalClass = isDragAccept
                  ? 'accept'
                  : isDragReject
                  ? 'reject'
                  : '';

                return (
                  <div
                    {...getRootProps({
                      className: `flex flex-col justify-center px-6 h-28 cursor-pointer border-dashed border-2 border-primary rounded-lg ${
                        additionalClass === 'accept' && 'border-red-600'
                      } ${additionalClass === 'reject' && 'border-green-600'}`,
                    })}
                  >
                    <input {...getInputProps()} />
                    <p className='body2 text-center'>
                      {'Upload a collection thumbnail in png'}
                    </p>
                    <div className='w-8 h-8 flex place-items-center justify-center mx-auto rounded-md bg-gradient-to-b from-from-blue to-to-blue'>
                      <ZipFolder />
                    </div>
                  </div>
                );
              }}
            </Dropzone>

            {thumbnail.length ? (
              <div className='w-full flex justify-between bg-primary py-2 px-4 rounded-md'>
                <ZipFile />
                <button
                  onClick={() => {
                    setValue(`thumbnail`, []);
                  }}
                >
                  <Delete />
                </button>
              </div>
            ) : null}

            {/* <button onClick={() => remove(index)}>Delete</button> */}
          </div>

          <span className='flex place-items-center gap-4 mt-4'>
            <div className='w-20'>
              <Switch
                checked={scheduleLaunch}
                onChange={() => {
                  setValue(`scheduleLaunch`, !scheduleLaunch);
                }}
                type='checkbox'
                className={`${
                  scheduleLaunch ? 'bg-primary' : 'bg-primary opacity-60'
                } relative inline-flex items-center w-20 h-10 rounded-full`}
              >
                <span
                  className={`${
                    scheduleLaunch ? 'translate-x-10' : 'translate-x-2'
                  } inline-block transform w-8 h-8 bg-white rounded-full`}
                />
              </Switch>
            </div>
            <h3>Schedule Launch</h3>
          </span>

          {scheduleLaunch ? (
            <>
              <div className={`text-secondaryMedium bg-white mt-3 -mb-1`}>
                Pick Launch Date
              </div>
              <div className='relative'>
                <Controller
                  control={control}
                  name='ReactDatepicker'
                  render={({ field }) => (
                    <ReactDatePicker
                      className='border-2 rounded text-center border-[#818181] block p-4 w-full text-lg text-secondaryMedium appearance-none focus:outline-none bg-transparent'
                      placeholderText=''
                      onChange={(e) => field.onChange(e)}
                      selected={field.value}
                      dateFormat='EEE, MMM dd, yyyy'
                    />
                  )}
                />
                <Calender className='absolute right-5 top-5' />
              </div>
              <TimePicker />
              <span className='flex place-items-center gap-4 mt-8'>
                <div className='w-20'>
                  <Switch
                    checked={endDate}
                    onChange={() => {
                      setValue(`endDate`, !endDate);
                    }}
                    type='checkbox'
                    className={`${
                      endDate ? 'bg-primary' : 'bg-primary opacity-60'
                    } relative inline-flex items-center w-20 h-10 rounded-full`}
                  >
                    <span
                      className={`${
                        endDate ? 'translate-x-10' : 'translate-x-2'
                      } inline-block transform w-8 h-8 bg-white rounded-full`}
                    />
                  </Switch>
                </div>
                <h3>Add End Date</h3>
              </span>
            </>
          ) : null}

          <Button
            onClick={() => {
              console.log('go next');
            }}
            className={'w-full'}
          >
            Launch
          </Button>
        </div>
      </div>
    </>
  );
};

export default LaunchProject;
