export const KnowledgeItemContacts: React.FC<{ contacts?: string , editable?:boolean}> = ({contacts, editable}) => {
    return (
        <>
            <div className={'ml-5 p-5 bg-white h-fit rounded-2xl w-96'}>
                <h3 className={'font-montserratSemibold text-2xl'}>Контакты</h3>
                <textarea
                    className={'pt-3 resize-none outline-0 font-montseratRegular h-auto w-full'}
                    defaultValue={contacts ? contacts : ''}
                    placeholder={'Введите контакты'}
                />
            </div>
        </>
    );
};