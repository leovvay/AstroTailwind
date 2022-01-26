import React from 'react';

const Input = ({ children, id, type, name, register, errors, placeholder, onInput, rows, defaultValue, isRequired, classNameContainer }) => {

    return (
        <>
            <div className={`outline relative focus-within:border-blue-500 z-0 outline-none ${classNameContainer}`}>
                <input
                    id={id} 
                    {...register}
                    errors={errors}
                    rows={rows}
                    required={isRequired} 
                    onInput={onInput} 
                    type={type} 
                    name={name} 
                    defaultValue={defaultValue} 
                    placeholder={' '} 
                    className={`border-2 rounded border-[#818181] block p-4 w-full text-lg text-secondaryMedium appearance-none focus:outline-none bg-transparent`} />
                <label htmlFor={name} className={`absolute top-[18px] left-[10px] rounded text-lg text-secondaryMedium bg-white -z-1 duration-300 origin-0`}>{placeholder}</label>
            </div>
            {children}
        </>
    );
};

export default Input;
