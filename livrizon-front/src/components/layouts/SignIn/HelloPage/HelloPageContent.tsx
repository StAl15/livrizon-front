import react from "react";
import logo from '../../../../assets/icons/logoLivrizon.svg'
import {Link, useNavigate} from 'react-router-dom';

export const HelloPageContent: React.FC<{}> = props => {
    const navigate = useNavigate()
    return (
        <>
            <div
                className='bg-white w-auto max-w-lg h-auto grid justify-items-center mx-auto my-auto p-10 rounded-3xl mx-auto sm: mx-5 dark:bg-gray-700'>
                <img className={'w-32 h-32 mb-5'} src={logo}/>
                <h1 className={"font-montserratBold text-xl mb-4 text-center dark:text-white"}>Добро пожаловать в
                    Livrizon!</h1>
                <p className={'text-text-sec font-montserratRegular text-sm mb-4 w-max-84 flex text-center dark:text-white'}>Находи
                    новые знакомства и возможности. Для тебя нет ничего невозможного</p>
                <button
                    onClick={() => navigate('/login')}
                    className={'w-full font-montserratRegular text-black text-sm py-4 bg-secondary rounded-2xl mb-4 outline-0 dark:bg-gray-800 dark:text-white'}
                >
                    Войти
                </button>
                <button onClick={() => navigate('/create')}
                        className={'w-full font-montserratRegular text-black text-sm py-4 bg-secondary rounded-2xl outline-0 dark:bg-gray-800 dark:text-white'}
                >Создать аккаунт
                </button>

            </div>
        </>
    );
};