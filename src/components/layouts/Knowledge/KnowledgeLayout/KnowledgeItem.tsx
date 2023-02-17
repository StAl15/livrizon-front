import {KnowledgeType} from "../../../../utils/types/types";

type Props = {
    card: KnowledgeType;
}

export const KnowledgeItem: React.FC<Props> = ({card}) => {
    return (
        <>
            <div className={'bg-white rounded-2xl w-56 h-80 p-5 grid justify-items-center my-auto mr-5'}>
                <img className={'rounded-full w-24 h-24 mb-5'} src={card.img}/>
                <h3 className={'font-montserratSemibold text-black text-xl mb-5'}>{card.label}</h3>
                <p className={'font-montserratRegular text-text-sec text-sm mb-5'}>{card.desc}</p>
                <button className={'w-full px-5 py-3 font-montserratRegular bg-secondary rounded-2xl text-black'}>Открыть</button>
            </div>
        </>
    );
};