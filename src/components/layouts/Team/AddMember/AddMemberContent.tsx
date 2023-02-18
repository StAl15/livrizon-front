export const AddMemberContent: React.FC<{  }> = props => {
    return (
        <>
            <div className={'w-96 p-5 my-5 h-auto bg-white grid rounded-2xl justify-items-center'}>
                <h3 className={'font-montserratBold text-2xl mt-5'}>Данные</h3>
                <div className={'grid w-full -mt-16'}>
                    <input className={'p-5 outline-0 w-full h-fit bg-secondary rounded-2xl'} placeholder={'Логин'}/>
                    <input className={'p-5 outline-0 w-full h-fit bg-secondary rounded-2xl'} placeholder={'Логин'}/>
                    <input className={'p-5 outline-0 w-full h-fit bg-secondary rounded-2xl'} placeholder={'Логин'}/>
                    <input className={'p-5 outline-0 w-full h-fit bg-secondary rounded-2xl'} placeholder={'Логин'}/>

                </div>

                <button className={'font-montserratRegular w-full h-fit px-3 py-4 bg-black rounded-2xl text-white'}>Добавить</button>
            </div>
        </>
    );
};