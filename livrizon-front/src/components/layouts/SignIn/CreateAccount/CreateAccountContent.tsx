import react from "react";
import logo from "../../../../assets/icons/logoLivrizon.svg";
import bckbtn from "../../../../assets/icons/arrowR.svg";
import {useNavigate} from "react-router-dom";

export const CreateAccountContent: React.FC<{}> = props => {
    const navigate = useNavigate()
    return (
        <>
            <div
                className='bg-white w-auto max-w-lg h-auto grid justify-items-center mx-auto my-auto px-10 py-5 rounded-3xl mx-auto sm: mx-5 dark:bg-gray-700'>
                <img onClick={() => navigate('/hello')}
                     className={'text-black transform filter-none rotate-180 mt-3 mr-auto w-10 h-10 dark:filter invert'} src={bckbtn}/>
                <img className={'w-32 h-32 mb-5'} src={logo}/>
                <h1 className={"text-black font-montserratBold text-xl mb-4 text-center dark:text-white"}>Добро пожаловать в
                    Livrizon!</h1>
                <p className={'text-text-sec font-montserratRegular text-sm mb-4 w-max-84 flex text-center dark:text-white'}>Находи
                    новые знакомства и возможности. Для тебя нет ничего невозможного</p>
                <input
                    className={'w-full font-montserratRegular text-black text-sm py-4 bg-secondary rounded-2xl pl-4 mb-4 outline-0 dark:bg-gray-800 dark:text-white'}
                    placeholder={'Email или телефон'}/>
                <input
                    type={'password'}
                    className={'w-full font-montserratRegular text-black text-sm py-4 bg-secondary rounded-2xl pl-4 outline-0 dark:bg-gray-800 dark:text-white mb-4'}
                    placeholder={'Пароль'}/>
                <input
                    type={'password'}
                    className={'w-full font-montserratRegular text-black text-sm py-4 bg-secondary rounded-2xl pl-4 outline-0 dark:bg-gray-800 dark:text-white'}
                    placeholder={'Повторите пароль'}/>
                <div className={'flex w-full mt-5'}>
                    <button onClick={() => navigate('/login')}
                            className={'font-montserratRegular text-blue text-sm dark:text-gray-300'}>Войти
                    </button>
                    <button
                        className={'ml-auto font-montserratRegular bg-black text-white rounded-lg px-5 py-3 text-sm dark:bg-gray-900  '}>Создать
                    </button>
                </div>
            </div>
        </>
    );
};