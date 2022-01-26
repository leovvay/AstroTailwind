import React, { useState } from 'react';
import { useFieldArray, useFormContext, Controller } from 'react-hook-form';
import Dropzone from 'react-dropzone';
import { Switch } from '@headlessui/react';
import Button from '../../../common/Button';
import { ReactComponent as ZipFile } from '../../../asset/svg/ZipFile.svg';
import { ReactComponent as Delete } from '../../../asset/svg/delete.svg';
import { ReactComponent as ZipFolder } from '../../../asset/svg/FolderZip.svg';
import { ReactComponent as RightArrow } from '../../../asset/svg/RightArrow.svg';
import { ReactComponent as Folder } from '../../../asset/svg/Folder.svg';

import { PlusIcon } from '@heroicons/react/outline';
import Input from '../../../common/Input';

const UploadTraitLayer = ({
  register,
  errors,
  control,
  watch,
  setValue,
  setActiveTab,
  activeTab,
}) => {
  //`remove` incase we want to remove layers from `fields`
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'test',
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const test = watch('test');
  const addMusic = watch('addMusic');

  return (
    <>
      <div className='px-4 lg:px-14 flex flex-col lg:flex-row gap-10'>
        <div className='lg:max-w-sm'>
          <h3 className='pb-2'>Upload Trait Layer</h3>
          <p className='body2'>
            Upload your trait artworks in corresponding layer order. It’s by
            stacking these traits one on top of another that you will be able to
            construct their appearances bit by bit. Ensure the artworks within
            your zip files are in PNG format. <br /> <br /> You can add up to 10
            layers in total.
          </p>
        </div>
        <div className='flex flex-col gap-4 lg:min-w-350px'>
          <span className='flex place-items-center gap-4'>
            <div className='w-20'>
              <Switch
                checked={addMusic}
                onChange={() => {
                  setValue(`addMusic`, !addMusic);
                }}
                type='checkbox'
                className={`${
                  addMusic ? 'bg-primary' : 'bg-primary opacity-60'
                } relative inline-flex items-center w-20 h-10 rounded-full`}
              >
                <span className='sr-only'>Enable notifications</span>
                <span
                  className={`${
                    addMusic ? 'translate-x-10' : 'translate-x-2'
                  } inline-block transform w-8 h-8 bg-white rounded-full`}
                />
              </Switch>
            </div>
            <h3>Add a Sound/Mp3 Layer</h3>
          </span>

          <div>
            {fields.map((item, index) => {
              return (
                <div className='grid gap-6 mt-8' key={item.id}>
                  <Input
                    id={`test.${index}.layer`}
                    type='text'
                    name={`test.${index}.layer`}
                    register={register(`test.${index}.layer`, {
                      required: 'This field is required',
                    })}
                    errors={errors}
                    onInput={(e) =>
                      (e.target.value =
                        e.target.value.trim() === ''
                          ? e.target.value.trim()
                          : e.target.value)
                    }
                    placeholder={`Layer ${index + 1} Name`}
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
                    accept='application/zip, application/x-zip-compressed, multipart/x-zip'
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
                      setValue(`test.${index}.file`, filesToUpload);
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
                            } ${
                              additionalClass === 'reject' && 'border-green-600'
                            }`,
                          })}
                        >
                          <input {...getInputProps()} />
                          <p className='body2 text-center'>
                            {'Upload a Zip file with all trait artworks in PNG'}
                          </p>
                          <div className='w-8 h-8 flex place-items-center justify-center mx-auto rounded-md bg-gradient-to-b from-from-blue to-to-blue'>
                            <ZipFolder />
                          </div>
                        </div>
                      );
                    }}
                  </Dropzone>

                  {test[index]?.file?.length ? (
                    <div className='w-full flex justify-between bg-primary py-2 px-4 rounded-md'>
                      <ZipFile />
                      <button
                        onClick={() => {
                          setValue(`test.${index}.file`, []);
                        }}
                      >
                        <Delete />
                      </button>
                    </div>
                  ) : null}

                  {/* <button onClick={() => remove(index)}>Delete</button> */}
                </div>
              );
            })}
          </div>
          <Button
            onClick={() => {
              append({ layer: '' });
            }}
            type={'outline'}
            className={'flex gap-3 py-2 w-fit'}
          >
            <PlusIcon className='w-5 h-5' />
            Add New Layer
          </Button>
          <Button
            disabled={test.some((element) => element.layer) ? false : true}
            onClick={() => {
              console.log('go next');
            }}
            className={'w-full hidden lg:block'}
          >
            Continue
          </Button>
          <div
            className='bg-background rounded-md p-4 h-fit w-full block lg:hidden'
            style={{ maxWidth: '300px' }}
          >
            <h3>Uploaded Layers</h3>
            {test.map((item, index) => (
              <div key={index}>
                {item.layer ? (
                  <div className='pt-4 flex gap-3'>
                    <RightArrow /> <Folder />
                    {item.layer}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div
          className='bg-background rounded-md p-4 h-fit w-full hidden lg:block'
          style={{ maxWidth: '300px' }}
        >
          <h3>Uploaded Layers</h3>
          {test.map((item, index) => (
            <div key={index}>
              {item.layer ? (
                <div className='pt-4 flex gap-3'>
                  <RightArrow /> <Folder />
                  {item.layer}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <Button
          disabled={test.some((element) => element.layer) ? false : true}
          onClick={() => {
            setActiveTab(activeTab + 1);
          }}
          className={'w-full block lg:hidden'}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default UploadTraitLayer;
