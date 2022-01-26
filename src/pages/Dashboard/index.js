import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../../common/Button';
import BasicInformation from './components/BasicInformation';
import Tabs from './components/Tabs';
import UploadTraitLayer from './components/UploadTraitLayer';
import AssignRarity from './components/AssignRarity';
import LayerPreview from './components/LayerPreview';

const Dashboard = () => {
  const {
    control,
    handleSubmit,
    register,
    errors,
    trigger,
    reset,
    watch,
    getValues,
    setValue,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    defaultValues: {
      test: [{ layer: '', file: null }],
    },
  });
  const [activeTab, setActiveTab] = useState(1);
  const [assignRarity, setAssignRarity] = useState({});
  return (
    <>
      <div className='px-0 md:px-12 lg:px-24 w-full max-w-7xl'>
        <div className='w-full flex justify-end gap-8 py-8 px-4 md:px-0'>
          <div className='hidden lg:block'>
            <Button type='outline' onClick={() => {}}>
              Create NEAR Wallet
            </Button>
          </div>
          <Button type='solid'>Connect My Wallet</Button>
        </div>
        <div className='bg-white pb-24 rounded-md'>
          <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />

          {activeTab === 1 ? (
            <BasicInformation
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              trigger={trigger}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          ) : activeTab === 2 ? (
            <UploadTraitLayer
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              trigger={trigger}
              setValue={setValue}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
          ) : activeTab === 3 ? (
            <AssignRarity
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              trigger={trigger}
              setValue={setValue}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              setAssignRarity={setAssignRarity}
            />
          ) : activeTab === 4 ? (
            <LayerPreview
              register={register}
              errors={errors}
              control={control}
              watch={watch}
              trigger={trigger}
              setValue={setValue}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
              assignRarity={assignRarity}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
