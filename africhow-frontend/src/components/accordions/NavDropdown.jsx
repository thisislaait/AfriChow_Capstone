import React, { useState } from 'react';

const NavDropdown = (props) => {
    const [item, setItem] = useState(props.data)

    const handletoggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive});

    };

  return (
    <div className={`p-1 w-{280px} group ${item.active === 1 ? 'is-active': ''} `}>
        <div className='flex justify-center items-center mt-4'>
            <div className='w-full text-2xl group-[.is-active]:font-bold'>
                {item.title}
            </div>
            <div className='mt-1 text-xl group-[.is-active]:rotate-[270deg]' onClick={handletoggleActive}>
                {/*<span> &#129171; </span>*/}
            </div>
        </div>
        <div className='pr-8 pl-2 rounded-md'>
            <div className='overflow-hidden w-full pt-1 text-base max-h-0 group-[.is-active]:max-h-[100px] font-bold pb-1'>
                {item.action1}
            </div>
            <div className='text-xs overflow-hidden max-h-0 group-[.is-active]:max-h-[150px] '>
                {item.process1}
            </div>
            <div className='overflow-hidden w-full text-base max-h-0 group-[.is-active]:max-h-[100px] font-bold'>
                {item.action2}
            </div>
            <div className=' text-xs overflow-hidden max-h-0 group-[.is-active]:max-h-[100px]'>
                {item.process2}
            </div>
        </div>
    </div>
)
}

export default NavDropdown