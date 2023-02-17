import {postDetailType} from "../../../../utils/types/types";
import like from '../../../../assets/icons/Post/like.svg'
import chat from '../../../../assets/icons/Post/chat.svg'
import repost from '../../../../assets/icons/Post/repost.svg'
import share from '../../../../assets/icons/Post/share.svg'
import more from '../../../../assets/icons/Post/more-horizontal.svg'
import arrowR from '../../../../assets/icons/arrowR.svg'
import {useState} from "react";

type Props = {
    postDetail: postDetailType;
};

export const PostDetailContent: React.FC<Props> = ({postDetail}) => {

    const [imgIndex, setImgIndex] = useState(0)

    const arr = (isPrev?: boolean) => {
        return (
            <img className={isPrev ? 'transform rotate-180' : ''} src={arrowR}/>
        )
    }

    var settings = {
        accessibility: true,
        // lazyLoad: true,
        centerMode: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: arr(),
        prevArrow: arr(true),
        beforeChange: (current: Number, next: Number) => setImgIndex(Number(next)),
    }


    return (
        <>
            <div className={'w-auto max-w-2xl mx-10 my-10 h-auto bg-white grid p-7 rounded-2xl'}>
                <div className={'flex items-center'}>
                    <img className={'w-16 h-16 mr-5 rounded-2xl'} src={postDetail.author.avatar}/>
                    <div className={'grid'}>
                        <h3 className={'font-montserratSemibold text-black text-lg'}>{postDetail.author.name}</h3>
                        <p className={'font-montserratRegular text-text-sec text-sm'}>{postDetail.date}</p>
                    </div>
                    <button className={'ml-auto'}>
                        <img className={'w-10 h-10'} src={more}/>
                    </button>
                </div>
                <div className={'my-3 flex flex-wrap mt-5'}>
                    {postDetail.images?.map((img, index) =>
                        <img className={'w-36 h-36 flex'} src={img} />
                    )}
                </div>


                <p className={'font-montserratRegular my-5 text-sm w-auto whitespace-pre-wrap'}>{postDetail.text}</p>
                <div className={'flex'}>
                    <button className={'bg-secondary p-4 rounded-xl mr-2'}>
                        <img className={'w-5 h-5'} src={like}/>
                    </button>
                    <button className={'bg-secondary p-4 rounded-xl mr-2'}>
                        <img className={'w-5 h-5'} src={chat}/>
                    </button>
                    <button className={'bg-secondary p-4 rounded-xl'}>
                        <img className={'w-5 h-5'} src={repost}/>
                    </button>
                    <button className={'bg-secondary p-4 rounded-xl ml-auto'}>
                        <img className={'w-5 h-5'} src={share}/>
                    </button>
                </div>


            </div>
        </>
    );
};