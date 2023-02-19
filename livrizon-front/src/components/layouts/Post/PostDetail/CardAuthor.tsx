import {AuthorType} from "../../../../utils/types/types";
import verified from '../../../../assets/icons/Post/verified.svg'
import react from "react";

type Props = {
    author: AuthorType;
}
export const CardAuthor: React.FC<Props> = ({author}) => {
    return (
        <>
            <div className={'bg-white w-auto h-fit grid mt-10 p-5 rounded-2xl justify-items-center '}>
                <img className={'w-36 h-36 rounded-2xl'} src={author.avatar}/>
                <div className={'flex mt-3'}>
                    <h3 className={'font-montserratSemibold text-2xl'}>{author.name}</h3>
                    <img src={verified} className={author.isVerified ? 'ml-2 visible' : 'hidden'}/>
                </div>
                <p className={'font-montserratSemibold mt-3 text-sm'}>{author.commonSubs} общих связей</p>
                <p className={'font-montserratRegular mt-3 text-sm text-center w-48 break-words'}>{author.bio}</p>
                <button className={'px-5 py-3 w-full rounded-2xl font-montserratRegular mt-3 bg-black text-white'}>{author.subscribed ? 'Отписаться' : 'Подписаться'}</button>
            </div>
        </>
    );
};