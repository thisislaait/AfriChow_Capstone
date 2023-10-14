import React, { useState } from 'react';
import Services from "../accordions/Services"

const NavTitles = (props) => {
    const [item, setItem] = useState(props.data)

    const handletoggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive});

    };

  return (
    <div className={`w-{280px} group ${item.active === 1 ? 'is-active': ''} mt-2 `}>
        <div className='flex items-center gap-56'>
            <div className='w-full group-[.is-active]:font-bold'>
                {item.title}
            </div>
            <div className='text-xl group-[.is-active]:rotate-[270deg]' onClick={handletoggleActive}>
                <span> &rarr; </span>
            </div>
        </div>
    </div>
)
}


export default NavTitles