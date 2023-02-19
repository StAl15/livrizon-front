import {KnowledgeType} from "../../../../utils/types/types";
import {KnowledgeItem} from "./KnowledgeItem";

type Props = {
    cards: KnowledgeType[];
}

export const KnowledgeContent: React.FC<Props> = ({cards}) => {
    return (
        <>
            <div className={'flex flex-wrap w-auto h-auto ml-10'}>
                {cards.map((item, idx) =>
                    <KnowledgeItem key={idx} idx={idx} card={item}/>
                )}
            </div>

        </>
    );
};