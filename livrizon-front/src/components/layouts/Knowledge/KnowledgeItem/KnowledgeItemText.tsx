export const KnowledgeItemText: React.FC<{ text?: string, editable?: boolean }> = ({text, editable}) => {
    return (
        <>
            <textarea
                className={`rounded-2xl resize-${editable ? '' : 'none'} p-5 bg-white outline-0 font-montseratRegular h-auto min-h-96 w-[600px]`}
                defaultValue={text ? text : ''} disabled={!editable} placeholder={'Введите текст'}/>
        </>
    );
};