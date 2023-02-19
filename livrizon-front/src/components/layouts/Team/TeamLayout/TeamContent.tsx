import { MemberType} from "../../../../utils/types/types";
import {TeamItem} from "./TeamItem";

type Props = {
    cards: MemberType[];
}

export const TeamContent: React.FC<Props> = ({cards}) => {
    return (
        <>
            <div className={'flex flex-wrap w-auto h-auto ml-10'}>
                {cards.map((item, idx) =>
                    <TeamItem key={idx} card={item}/>
                )}
            </div>

        </>
    );
};