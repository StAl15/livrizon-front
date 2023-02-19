import {KnowledgeContent} from "../../../components/layouts/Knowledge/KnowledgeLayout/KnowledgeContent";
import {MainLayout} from "../../Navbar/MainLayout";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {client, urlFor} from "../../../utils/sanity/client";
import {KnowledgeType} from "../../../utils/types/types";

export const KnowledgeLayout: React.FC<{}> = props => {
    const navigate = useNavigate()

    const [categories, setCategories] = useState(null);

    const [cards_, setCards_] = useState<KnowledgeType[]>([
        ])

    useEffect(() => {

        client.fetch(
            `*[_type == "organization"]{
      knowledge,
      "cover": image.asset->url
    }`)
            .then((data: any) => {
                setCards_(data[0].knowledge)
                console.log(data[0].knowledge)
                console.log(urlFor(data[0].cover).url.toString())
            })
            .catch(console.error);
    }, []);


    return (
        <>
            <MainLayout>
                <div className={'ml-32 bg-secondary w-screen h-full min-h-screen'}>
                    <div className={'flex pt-20 mb-5 ml-10 mr-10 items-center'}>
                        <h3 className={'font-montserratBold text-3xl'}>База знаний</h3>
                        <button
                            onClick={() => navigate('/knowledge/create')}
                            className={'w-48 font-montserratRegular px-5 py-3 rounded-2xl hover:bg-white bg-black ml-auto hover:text-black transition-all duration-300 text-white'}>Создать
                        </button>
                    </div>

                    <KnowledgeContent cards={cards_}/>
                </div>
            </MainLayout>


        </>
    );
};