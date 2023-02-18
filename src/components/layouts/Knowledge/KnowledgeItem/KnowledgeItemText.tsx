export const KnowledgeItemText: React.FC<{ text?: string, editable?: boolean }> = ({text, editable}) => {
    return (
        <>
            <textarea
                className={'rounded-2xl p-5 outline-0 font-montseratRegular h-auto min-h-96 w-[600px]'}
                defaultValue={text ? text : ''} placeholder={'Введите текст'}/>
        </>
    );
};