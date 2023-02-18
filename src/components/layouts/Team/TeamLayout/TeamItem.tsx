import {MemberType, roleType} from "../../../../utils/types/types";
import {useNavigate} from "react-router-dom";

type Props = {
    card: MemberType;
}

export const TeamItem: React.FC<Props> = ({card}) => {
    const navigate = useNavigate()
    return (
        <>
            <div
                onClick={() => navigate(`/team/member-detail/${card.link}`)}
                className={'group/memberItem bg-white rounded-2xl w-56 h-auto p-5 grid justify-items-center my-auto mr-5 hover:shadow-2xl transition-all duration-1000'}>

                <img className={'rounded-full w-32 h-32 mb-5'} src={card.img_}/>
                <h3 className={`font-montserratSemibold text-black text-xl mb-${card.role == roleType.mentor ? 2 : 5}`}>{card.name}</h3>
                <p className={card.role == roleType.mentor ? 'font-montserratSemibold text-blue text-sm mb-2' : 'hidden'}>ментор</p>
                <p className={'font-montserratRegular text-text-sec text-center text-sm mb-5'}>{card.bio}</p>
                <button
                    className={'w-full px-5 py-3 font-montserratRegular group-hover/memberItem:hidden bg-secondary rounded-2xl text-black'}>{card.employee}</button>
                <button
                    className={'mt-3 w-full px-5 py-3 hidden group-hover/memberItem:block font-montserratRegular bg-secondary rounded-2xl text-black text-[13px] transition-all duration-300'}>
                    {card.role == roleType.mentor ? 'Сделать участником' :'Сделать ментором'}
                </button>
                <button
                    className={'mt-3 w-full px-5 py-3 hidden group-hover/memberItem:block font-montserratRegular bg-red-500 rounded-2xl text-white text-[13px] transition-all duration-300'}>Удалить
                </button>
            </div>
        </>
    );
};