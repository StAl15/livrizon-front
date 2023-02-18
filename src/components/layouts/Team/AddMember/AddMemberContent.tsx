import image from '../../../../assets/icons/ion_image-outline.svg'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const AddMemberContent: React.FC<{  }> = props => {

    const [img_, setImg_] = useState(image)
    const [lb, setLb] = useState('Загрузите аватар')

    const navigate = useNavigate()

    const onImageChange = (e:any) => {
        const [file] = e.target.files;
        setLb(file.name)
        setImg_(URL.createObjectURL(file));
    };

    return (
        <>
            <div className={'w-96 p-5 my-5 h-auto mx-5 bg-white grid rounded-2xl justify-items-center'}>
                <h3 className={'font-montserratBold text-2xl my-3'}>Данные</h3>
                <div className={'grid w-full font-montserratRegular'} >
                    <label htmlFor={'avatar'} className={'mb-3 p-5 flex outline-0 w-full h-fit bg-secondary rounded-2xl items-center'}>
                        <img src={img_} className={'w-12 h-12 p-3 bg-white rounded-2xl mr-3'}/>
                        <h3>{lb}</h3>
                        <input onChange={onImageChange} id={'avatar'} type={'file'} hidden={true}/>
                    </label>
                    <input className={'mb-3 p-5 outline-0 w-full h-fit bg-secondary rounded-2xl'} placeholder={'Логин'}/>
                    <input className={'mb-3 p-5 outline-0 w-full h-fit bg-secondary rounded-2xl'} placeholder={'Пароль'}/>
                    <select className={'mb-3 p-5 outline-0 w-full h-fit bg-secondary rounded-2xl'} placeholder={'Роль'}>
                        <option>Ментор</option>
                        <option>Участник</option>
                        <option>Администратор</option>
                    </select>
                    <input className={'mb-3 p-5 outline-0 w-full h-fit bg-secondary rounded-2xl'} placeholder={'Должность'}/>

                </div>

                <button onClick={() => navigate('/team')} className={'font-montserratRegular w-full h-fit px-3 py-4 bg-black rounded-2xl text-white'}>Добавить</button>
            </div>
        </>
    );
};