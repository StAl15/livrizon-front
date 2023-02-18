import {MemberType} from "../../../../utils/types/types";
import email from '../../../../assets/icons/email.svg'
import phone from '../../../../assets/icons/phone.svg'
import vk from '../../../../assets/icons/vk.svg'
import facebook from '../../../../assets/icons/facebook.svg'
import insta from '../../../../assets/icons/insta.svg'


export const MemberInfo: React.FC<{ card_: MemberType, canedit?: boolean }> = ({card_, canedit}) => {
    return (
        <>
            <div className={'w-auto my-auto ml-5 h-fit grid'}>
                <h3 className={'font-montserratSemibold text-2xl text-black mb-5'}>Контакты</h3>

                <div className={'flex'}>
                    <div className={'rounded-2xl w-auto h-auto p-3 flex bg-white'}>
                        <img src={email} className={'p-5 w-15 h-15 mr-3 rounded-2xl bg-secondary'}/>

                        <input className={'outline-0 bg-white text-black font-montserratRegular '} placeholder={'email'}
                               disabled={!canedit} defaultValue={card_.email}/>
                    </div>
                    <div className={'rounded-2xl ml-3 w-auto h-auto p-3 flex bg-white'}>
                        <img src={phone} className={'p-5 w-15 h-15 mr-3 rounded-2xl bg-secondary'}/>

                        <input className={'outline-0 bg-white text-black font-montserratRegular '}
                               placeholder={'телефон'}
                               disabled={!canedit} defaultValue={card_.phone}/>
                    </div>


                </div>
                <div className={'mt-5 flex'}>
                    <img onClick={() => window.open(card_.vk)} className={`p-3 mr-3 bg-white rounded-2xl ${card_.vk ? 'block' : 'hidden'}`} src={vk}/>
                    <img onClick={() => window.open(card_.facebook)} className={`p-3 mr-3 bg-white rounded-2xl ${card_.facebook ? 'block' : 'hidden'}`} src={facebook}/>
                    <img onClick={() => window.open(card_.insta)} className={`p-3 mr-3 bg-white rounded-2xl ${card_.insta ? 'block' : 'hidden'}`} src={insta}/>
                </div>

                <h3 className={'font-montserratSemibold text-2xl text-black my-5'}>Должность</h3>

                <button
                    disabled={true}
                    className={'w-64 bg-white px-5 py-3 font-montserratRegular bg-secondary rounded-2xl text-black'}>{card_.employee}</button>
            </div>
        </>
    );
};