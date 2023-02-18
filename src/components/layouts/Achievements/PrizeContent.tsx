import { AchievementType } from "../../../utils/types/types";
import { AchievementItem } from "./AchiementItem";
import { AchievementPrize } from "./AchievementPrize";

type Props = {
    cards: AchievementType[];
}

export const PrizeContent: React.FC<Props> = ({cards}) => {
    return (
        <>
            <div className={'flex flex-col w-auto'}>
                {cards.map((item, idx) =>
                    <AchievementPrize key={idx} card={item}/>
                )}
            </div>

        </>
    );

        }