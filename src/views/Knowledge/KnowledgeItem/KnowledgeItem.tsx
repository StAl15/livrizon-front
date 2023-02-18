import {KnowledgeDetailType, modeAcces} from "../../../utils/types/types";
import {useEffect, useState} from "react";
import {MainLayout} from "../../Navbar/MainLayout";
import {KnowledgeItemText} from "../../../components/layouts/Knowledge/KnowledgeItem/KnowledgeItemText";
import {KnowledgeItemContacts} from "../../../components/layouts/Knowledge/KnowledgeItem/KnowledgeItemContacts";
import {KnowledgeItemMedia} from "../../../components/layouts/Knowledge/KnowledgeItem/KnowledgeItemMedia";
import {useNavigate} from "react-router-dom";

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

    const id_ = Number(window.location.pathname.split('/')[2]) - 1
    const navigate = useNavigate()

    const [knowledges, setKnowledges] = useState([
        {
            link: '1',
            header: 'Hello',
            text: 'World',
            contacts: '@AlexRgt1\n@MAriz',
            media: ['https://cdn1.ozone.ru/s3/multimedia-0/6114926580.jpg', 'https://i.ytimg.com/vi/iOwj5AgqGbE/maxresdefault.jpg'],
            cover: 'https://1.bp.blogspot.com/-GgCHx_k0Bd4/Xqwbnf2XsiI/AAAAAAAAG00/VTY-mVEKleA5vRz8TxClbFRPjDYs8MJ-gCLcBGAsYHQ/s400/php.jpg'
        },
        {
            link: '2',
            header: '',
            text: '',
            contacts: '',
            media: [],
            cover: ''
        },
        {
            link: '3',
            header: '',
            text: '',
            contacts: '',
            media: [],
            cover: ''
        }
    ])

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

    const [editable, setEditable] = useState<boolean>(true)

    const [data, setData] = useState<KnowledgeDetailType>({
        header: '',
        text: '',
        contacts: '',
        media: [],
        cover: '',
        link: ''
    })

    const [header, setHeader] = useState<String>(data.header)
    const [text, setText] = useState<String>(data.text)
    const [contacts, setContacts] = useState<any>(data.contacts)
    const [media, setMedia] = useState<any>(data.media)
    const [cover, setCover] = useState<any>(data.cover)

    useEffect(() => {
        return () => {
            swm()
            if (mode === modeAcces.watch) {
                setData(knowledges[id_])
            }
        };
    }, [mode]);


    return (
        <>
            <MainLayout>
                <div className={'ml-32 pl-10 pb-10 bg-secondary w-screen h-full min-h-screen'}>
                    <input className={'w-auto mt-10 bg-secondary text-black text-4xl font-montserratBold outline-0'}
                           onChange={(e) => setHeader(e.target.value)} defaultValue={data.header ? data.header : ''}
                           placeholder={'Введите название'}
                           disabled={!editable}
                    />
                    <div className={'mt-10 flex'}>
                        <KnowledgeItemText text={data.text} editable={editable}/>
                        <KnowledgeItemContacts contacts={data.contacts} editable={editable}/>
                    </div>
                    <KnowledgeItemMedia media={data.media} cover={data.cover} editable={editable}/>
                    <button
                        className={editable ? 'block mt-5 px-5 py-3 bg-black font-montserratRegular text-white rounded-2xl' : 'hidden'}>Сохранить
                    </button>

                </div>
            </MainLayout>
        </>
    );
};