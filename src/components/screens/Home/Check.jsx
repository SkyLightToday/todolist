import React from 'react';
import {BsCheck} from 'react-icons/bs';

const Check = ({isCompleted}) => {
    return(
        <div className={`border-2 rounded-lg border-lime-400 ${isCompleted ? 'bg-lime-400': ''} w-7 h-7 mr-3 flex items-centre justify-center`}>
            {isCompleted &&
            <BsCheck size={24} className='text-neutral-500' />//500
            }
        </div>
    )
}

export default Check;