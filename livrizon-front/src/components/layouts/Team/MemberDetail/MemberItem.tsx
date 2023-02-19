import {MemberType, modeAcces, roleType} from "../../../../utils/types/types";
import {useState} from "react";

type Props = {
    card: MemberType;
}

export const MemberItem: React.FC<Props> = ({card}) => {

    // const [editable, setEditable] = useState(false)

    return (
        <>
            <div className={'group/memberItem bg-white rounded-2xl w-56 h-auto p-5 grid justify-items-center my-auto mr-5 hover:shadow-2xl transition-all duration-1000'}>

                <img className={'rounded-2xl w-40 h-44 mb-5'} src={card?.img_}/>
                <h3 className={`font-montserratSemibold text-black text-xl mb-${card.role == roleType.mentor ? 2 : 5}`}>{card.name}</h3>
                <p className={card?.role == roleType.mentor ? 'font-montserratSemibold text-blue text-sm mb-2' : 'hidden'}>ментор</p>
                <p className={'font-montserratRegular text-text-sec text-center text-sm mb-5'}>{card.bio}</p>
            </div>
        </>
    );
};