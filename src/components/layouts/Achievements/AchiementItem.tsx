import { type } from "os";
import React, { useState } from "react";
import { AchievementType } from "../../../utils/types/types";

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
          <svg
            width="45"
            height="45"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="60" rx="30" fill="#F4F4F4" />
            <path
              d="M25.917 40L16.417 30.5L18.792 28.125L25.917 35.25L41.2087 19.9583L43.5837 22.3333L25.917 40Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          className={
            "hidden group-hover/achievementItem:block font-montserratRegular rounded-2xl text-white transition-all duration-300"
          }
        >
          <svg
            width="45"
            height="45"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="60" height="60" rx="30" fill="#F4F4F4" />
            <path
              d="M27.667 36.6667C27.667 34.4167 27.8687 32.7983 28.272 31.8117C28.6742 30.8261 29.5281 29.75 30.8337 28.5833C31.9725 27.5833 32.8403 26.715 33.437 25.9783C34.0348 25.2428 34.3337 24.4028 34.3337 23.4583C34.3337 22.3194 33.952 21.375 33.1887 20.625C32.4242 19.875 31.3614 19.5 30.0003 19.5C28.5837 19.5 27.507 19.9306 26.7703 20.7917C26.0348 21.6528 25.5142 22.5278 25.2087 23.4167L20.917 21.5833C21.5003 19.8056 22.5698 18.2639 24.1253 16.9583C25.6809 15.6528 27.6392 15 30.0003 15C32.917 15 35.1603 15.8128 36.7303 17.4383C38.2992 19.0628 39.0837 21.0139 39.0837 23.2917C39.0837 24.6806 38.7853 25.8683 38.1887 26.855C37.5909 27.8406 36.6531 28.9583 35.3753 30.2083C34.0142 31.5139 33.1881 32.5067 32.897 33.1867C32.6048 33.8678 32.4587 35.0278 32.4587 36.6667H27.667ZM30.0003 46.6667C29.0837 46.6667 28.2992 46.3406 27.647 45.6883C26.9937 45.035 26.667 44.25 26.667 43.3333C26.667 42.4167 26.9937 41.6317 27.647 40.9783C28.2992 40.3261 29.0837 40 30.0003 40C30.917 40 31.702 40.3261 32.3553 40.9783C33.0075 41.6317 33.3337 42.4167 33.3337 43.3333C33.3337 44.25 33.0075 45.035 32.3553 45.6883C31.702 46.3406 30.917 46.6667 30.0003 46.6667Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
