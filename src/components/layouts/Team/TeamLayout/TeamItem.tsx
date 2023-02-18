import {KnowledgeType, MemberType} from "../../../../utils/types/types";

type Props = {
    card: MemberType;
}

export const TeamItem: React.FC<Props> = ({card}) => {
    return (
        <>
            <div className={'group/memberItem bg-white rounded-2xl w-56 h-auto p-5 grid justify-items-center my-auto mr-5 hover:shadow-2xl transition-all duration-1000'}>

                <img className={'rounded-full w-32 h-32 mb-5'} src={card.img}/>
                <h3 className={'font-montserratSemibold text-black text-xl mb-5'}>{card.name}</h3>
                <p className={'font-montserratRegular text-text-sec text-center text-sm mb-5'}>{card.bio}</p>
                <button className={'w-full px-5 py-3 font-montserratRegular group-hover/memberItem:hidden bg-secondary rounded-2xl text-black'}>{card.employee}</button>
                <button className={'mt-3 w-full px-5 py-3 hidden group-hover/memberItem:block font-montserratRegular bg-secondary rounded-2xl text-black text-sm transition-all duration-300'}>Сделать ментором</button>
                <button className={'mt-3 w-full px-5 py-3 hidden group-hover/memberItem:block font-montserratRegular bg-red-500 rounded-2xl text-white text-sm transition-all duration-300'}>Удалить</button>
            </div>
        </>
    );
};