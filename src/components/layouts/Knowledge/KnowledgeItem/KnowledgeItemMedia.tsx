export const KnowledgeItemMedia: React.FC<{ media?: string[], cover?: string, editable?: boolean }> = props => {
    return (
        <>
            <div className={'flex mt-5'}>
                <div className={'bg-white w-auto rounded-2xl p-5 mr-5'}>
                    <label className={'font-montserratSemibold'} htmlFor={"media"}>
                        Медиа
                    </label>
                    <br/>
                    <input
                        className={'mt-3 cursor-pointer placeholder-black w-auto text-sm font-montserratRegular'}
                        type="file"
                        id={'media'}
                        multiple={true}
                        hidden={true}
                    />

                </div>

                <div className={'bg-white w-auto rounded-2xl p-5 mr-5'}>
                    <label className={'font-montserratSemibold'} htmlFor={"media"}>
                        Обложка
                    </label>
                    <br/>
                    <input
                        className={'mt-3 cursor-pointer placeholder-black w-auto text-sm font-montserratRegular'}
                        type="file"
                        id={'media'}
                        multiple={false}
                        hidden={true}
                    />
                </div>
            </div>

        </>
    );
};