
import React, { useState } from "react";
import { AchievementType } from "../../../utils/types/types";
import addsvg from '../../../assets/icons/add.svg'
import question from '../../../assets/icons/question.svg'



type Props = {
  card: AchievementType;
};


export const AchievementItem: React.FC<Props> = ({ card }) => {
  


  return (
    
    <>
      <div className="group/achievementItem flex row max-w-[980px] w-full bg-white p-6 rounded-[30px] mb-5 items-center">
        <h2 className="font-montserratRegular text-xl mr-auto">{card.name}</h2>
        <span className="font-montserratRegular text-xl mr-10">
          {card.coins} баллов
        </span>
        <button
          className={
            "font-montserratRegular rounded-2xl text-white transition-all duration-300 mr-2"
          }
        >
          <img src={addsvg} alt="" /> 
        </button>
        <button
          className={
            "hidden group-hover/achievementItem:block font-montserratRegular rounded-2xl text-white transition-all duration-300"
          }
        >
          <img src={question} alt="" />
        </button>
      </div>
    </>
  );
};
