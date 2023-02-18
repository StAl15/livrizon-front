import {KnowledgeDetailType, modeAcces} from "../../../utils/types/types";
import {useEffect, useState} from "react";
import {MainLayout} from "../../Navbar/MainLayout";
import {KnowledgeItemText} from "../../../components/layouts/Knowledge/KnowledgeItem/KnowledgeItemText";
import {KnowledgeItemContacts} from "../../../components/layouts/Knowledge/KnowledgeItem/KnowledgeItemContacts";
import {KnowledgeItemMedia} from "../../../components/layouts/Knowledge/KnowledgeItem/KnowledgeItemMedia";

type Props = {
    mode: modeAcces;
}

// export type KnowledgeDetailType = {
//     text:string;
//     contacts?: string;
//     media?: string[],
//     cover?: string
// }


export const KnowledgeItem: React.FC<Props> = ({mode}) => {

    function swm() {

        switch (mode) {
            case modeAcces.create:
                setEditable(true)
                break;
            case modeAcces.edit:
                setEditable(true)
                break;
            case modeAcces.watch:
                setEditable(false)
                break;
        }
    }

    useEffect(() => {
        return () => {
            swm()
        };
    }, [mode]);

    const [editable, setEditable] = useState<boolean>(true)

    const [data, setData] = useState<KnowledgeDetailType>({
        header: '',
        text: '',
        contacts: '',
        media: [],
        cover: ''
    })

    const [header, setHeader] = useState<String>(data.header)
    const [text, setText] = useState<String>(data.text)
    const [contacts, setContacts] = useState<any>(data.contacts)
    const [media, setMedia] = useState<any>(data.media)
    const [cover, setCover] = useState<any>(data.cover)


    return (
        <>
            <MainLayout>
                <div className={'ml-32 pl-10 pb-10 bg-secondary w-screen h-full min-h-screen'}>
                    <input className={'w-auto mt-10 bg-secondary text-black text-4xl font-montserratBold outline-0'}
                           onChange={(e) => setHeader(e.target.value)} defaultValue={data.header ? data.header : ''}
                           placeholder={'Введите название'}/>
                    <div className={'mt-10 flex'}>
                        <KnowledgeItemText text={data.text} editable={editable}/>
                        <KnowledgeItemContacts contacts={data.contacts} editable={editable}/>
                    </div>
                    <KnowledgeItemMedia media={data.media} cover={data.cover} editable={editable}/>
                    <button className={editable ? 'block mt-5 px-5 py-3 bg-black font-montserratRegular text-white rounded-2xl' : 'hidden'}>Сохранить</button>
                </div>
            </MainLayout>
        </>
    );
};