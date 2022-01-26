import React, { Fragment } from 'react';

const Table = ({ children, onClick, headers, headerContainerStyles, rows }) => {

    return (
        <>
            <div className={`px-[32px] h-[80px] flex bg-gradient-to-b gap-[32px] from-from-blue to-to-blue ${headerContainerStyles ? headerContainerStyles : ''}`}>
                {
                    headers.map((item, index) => (
                        <h3 key={index} className={`py-[24px] flex-1 text-background whitespace-nowrap ${item.classes ? item.classes : ''}`}>{item.name}</h3>
                    ))
                }
            </div>
            {
                rows.map((item, index) => (
                    <Fragment key={index}>
                        <div onClick={item.onClick} className={`px-[12px] py-[8px] flex gap-[32px] sm:px-[32px] cursor-pointer ${index % 2 === 0 ? '' : 'bg-background'} ${item.classes ? item.classes : ''}`}>
                            {
                                item.rowsColumns.map((column, colIndex) => (
                                    <h4 key={colIndex} className={`flex-1 whitespace-nowrap ${column.classes ? column.classes : ''}`}>{column.data}</h4>
                                ))
                            }
                        </div>
                        { item.isOpen ? item.childRows : null }
                    </Fragment>
                ))
            }
        </>
    );
};

export default Table;
