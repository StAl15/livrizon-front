import { AchievementType } from "../../../utils/types/types";
import { AchievementItem } from "./AchiementItem";

type Props = {
    cards: AchievementType[];
}

export const AchievementContent: React.FC<Props> = ({cards}) => {
    return (
        <>
            <div className={'flex flex-col w-auto items-start ml-10'}>
                {cards.map((item, idx) =>
                    <AchievementItem key={idx} card={item}/>
                )}
            </div>

        </>
    );
};