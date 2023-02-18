import React from 'react'
import { AchievementType } from '../../../utils/types/types';
import { AchievementItem } from './AchiementItem'

type Props = {
    card: AchievementType;
}



export const AchievementPrize: React.FC<Props> = ({card}) => {
  return (
    <div className={'flex  justify-between mb-5 ml-10 mr-10 items-center '}>
        <div className='flex row justify-between max-w-[930px] w-full bg-white p-12 rounded-[30px] mb-5 relative'>
        <h2 className='font-montserratRegular text-xl'>{card.name}</h2>
        <span className='font-montserratRegular text-xl'>{card.coins} баллов</span>
        <button className='font-montserratRegular absolute -bottom-[30px] right-[50px] text-white bg-black py-3 px-[90px] rounded-[15px] text-xl'>Потратить</button>
        </div>
       
        
    </div>
  )
}
