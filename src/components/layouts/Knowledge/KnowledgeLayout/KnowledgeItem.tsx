import {KnowledgeType} from "../../../../utils/types/types";
import styles from './KnowledgeItem.module.scss'
import more from '../../../../assets/icons/Post/more-horizontal.svg'

type Props = {
    card: KnowledgeType;
}



export const KnowledgeItem: React.FC<Props> = ({card}) => {
    return (
        <>
            <div className={'group/knowledgeItem bg-white rounded-2xl w-56 h-auto p-5 grid justify-items-center my-auto mr-5 hover:shadow-2xl transition-all duration-1000'}>

                <img className={'rounded-full w-32 h-32 mb-5'} src={card.img}/>
                <h3 className={'font-montserratSemibold text-black text-xl mb-5'}>{card.label}</h3>
                <p className={'font-montserratRegular text-text-sec text-center text-sm mb-5'}>{card.desc}</p>
                <button className={'w-full px-5 py-3 font-montserratRegular bg-secondary rounded-2xl text-black'}>Изменить</button>
                <button className={'mt-3 w-full px-5 py-3 hidden group-hover/knowledgeItem:block font-montserratRegular bg-red-500 rounded-2xl text-white transition-all duration-300'}>Удалить</button>
            </div>
        </>
    );
};