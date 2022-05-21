import React from 'react';
import {BsCheck} from 'react-icons/bs';

const Check = ({isCompleted}) => {
    return(
        <div className='border-2 rounded-lg border-lime-400 w-6 h-6 mr-3'>
            {isCompleted &&
            <BsCheck size={24} className='text-neutral-500' />
            }
        </div>
    )
}

export default Check;