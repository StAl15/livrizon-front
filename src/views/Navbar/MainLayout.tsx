import achiev from '../../assets/icons/Achievements.svg'
import categ from '../../assets/icons/Category.svg'
import team from '../../assets/icons/Team.svg'
import info from '../../assets/icons/Info.svg'
import face from '../../assets/icons/face.svg'
import {ReactNode} from "react";

type Props = {
    children?: ReactNode;
}
export const MainLayout: React.FC<Props> = ({children}) => {
    return (
        <div className={'group/menu w-screen h-full flex min-h-screen'}>
            <div className={'bg-white w-32 h-full grid fixed justify-items-center'}>
                <img className={'rounded-full w-14 h-14 mt-5'} src={face}/>
                <div className={'h-auto'}>
                    <button className={'w-8 h-8 mb-7 rounded-full'}>
                        <img  src={achiev}/>
                    </button>
                    <img className={'w-8 h-8 mb-7'} src={categ}/>
                    <img className={'w-8 h-8 mb-7'} src={team}/>
                    <img className={'w-8 h-8 mb-7'} src={info}/>
                </div>

            </div>
            {children}
        </div>
    );
};