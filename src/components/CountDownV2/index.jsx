import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getDateDifference, getDateFromTimestamp } from '../../utils';
export default function CountDownV2({timeStamp}){
    const [timeLeft, setTimeLeft] = useState(getDateDifference(getDateFromTimestamp(timeStamp)));
    const [isOver, setIsOver] = useState(true);
    setTimeout(()=>{
        setTimeLeft(getDateDifference(getDateFromTimestamp(timeStamp)));
    },1000)
    useEffect(()=>{
        if(timeLeft.days==0&&timeLeft.hours==0&&timeLeft.minutes==0&&timeLeft.seconds==0){
            setIsOver(true);
        }else{
            setIsOver(true);
        }
    },[timeLeft])

    return (
        <>
        {
            isOver&&
                <div className='w-[90%] h-full bg-white  shadow shadow-slate-600 flex flex-row justify-around items-center'>
                    <div className='flex flex-col justify-center lg:mx-2 items-center'>
                        <span className='text-[15px] lg:text-[20px] font-semibold'>{timeLeft.days}</span>
                        <span className='text-[10px] lg:text-[13px] text-[#5e5e5e] font-semibold'>Days</span>
                    </div>
                    <div className='flex flex-col justify-center lg:mx-2 items-center'>
                        <span className='text-[15px] lg:text-[20px] font-semibold'>{String(timeLeft.hours).padStart(2,"0")}</span>
                        <span className='text-[10px] lg:text-[13px] text-[#5e5e5e] font-semibold'>Hours</span>
                    </div>
                    <div className='flex flex-col justify-center lg:mx-2 items-center'>
                        <span className='text-[15px] lg:text-[20px] font-semibold'>{String(timeLeft.mins).padStart(2,"0")}</span>
                        <span className='text-[10px] lg:text-[13px] text-[#5e5e5e] font-semibold'>Min</span>
                    </div>
                    <div className='flex flex-col justify-center lg:mx-2 items-center'>
                        <span className='text-[15px] lg:text-[20px] font-semibold'>{String(timeLeft.seconds).padStart(2,"0")}</span>
                        <span className='text-[10px] lg:text-[13px] text-[#5e5e5e] font-semibold'>Sec</span>
                    </div>
                    {/* <span className='text-white text-[10px] lg:text-[20px] font-semibold'>{timeLeft.days}D {timeLeft.hours}H {timeLeft.mins}M {timeLeft.seconds}S</span> */}
                </div>
            

        }
        </>
    )
}
CountDownV2.propTypes = {
    timeStamp: PropTypes.string.isRequired
};