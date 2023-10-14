import React, { useState } from 'react';

const NavDropdown = (props) => {
    const [item, setItem] = useState(props.data)

    const handletoggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive});

    };

  return (
    <div className={`p-1 w-{280px} group ${item.active === 1 ? 'is-active': ''} `}>
        <div className='flex justify-center items-center -mt-4'>
            <div className='w-full text-base group-[.is-active]:font-bold'>
                {item.action}
            </div>
            <div className='mt-4 text-xl group-[.is-active]:rotate-[270deg]' onClick={handletoggleActive}>
                <span> &#129171; </span>
            </div>
        </div>
        <div className=' text-xs pl-12 pr-20 overflow-hidden max-h-0 group-[.is-active]:max-h-[50px]'>
            {item.process}
        </div>
    </div>
)
}

export default NavDropdown