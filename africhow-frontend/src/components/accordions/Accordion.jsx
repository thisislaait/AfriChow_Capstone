import React, { useState } from 'react';

const Accordion = (props) => {
    const [item, setItem] = useState(props.data)

    const handletoggleActive = () => {
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive});

    };

  return (
    <div className={`bg-white p-2 border-b-2 border-gray-200 w-{280px} group ${item.active === 1 ? 'is-active': ''} mt-2 `}>
        <div className='flex items-center '>
            <div className='w-full group-[.is-active]:font-bold'>
                {item.action}
            </div>
            <div className='text-xl group-[.is-active]:rotate-[270deg]' onClick={handletoggleActive}>
                <span> &rarr; </span>
            </div>
        </div>
        <div className=' text-sm overflow-hidden max-h-0 group-[.is-active]:max-h-[50px]'>
            {item.process}
        </div>
    </div>
)
}

export default Accordion