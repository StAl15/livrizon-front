import {KnowledgeContent} from "../../../components/layouts/Knowledge/KnowledgeLayout/KnowledgeContent";
import {MainLayout} from "../../Navbar/MainLayout";
import {useNavigate} from "react-router-dom";

export const KnowledgeLayout: React.FC<{}> = props => {
    const navigate = useNavigate()

    const cards_ = [
        {
            img: 'https://image.shutterstock.com/image-photo/image-260nw-634574354.jpg',
            label: 'Backend',
            desc: 'База знаний для бека',
            link: '1'
        },
        {
            img: 'https://avatars.githubusercontent.com/u/5490541?s=400&amp;v=4',
            label: 'Frontend',
            desc: 'База знаний для frontend',
            link: '2'
        },
        {
            img: 'https://studprosvet.ru/upload/005/u533/d/5/to-s-chego-vse-i-nachinaetsja-photo-normal.jpg',
            label: 'Mobile',
            desc: 'База знаний для mobile',
            link: '3'
        },


    ]
    return (
        <>
            <MainLayout>
                <div className={'ml-32 bg-secondary w-screen h-full min-h-screen'}>
                    <div className={'flex pt-20 mb-5 ml-10 mr-10 items-center'}>
                        <h3 className={'font-montserratBold text-3xl'}>База знаний</h3>
                        <button
                            onClick={()=>navigate('/knowledge/create')}
                            className={'w-48 font-montserratRegular px-5 py-3 rounded-2xl hover:bg-white bg-black ml-auto hover:text-black transition-all duration-300 text-white'}>Создать
                        </button>
                    </div>

                    <KnowledgeContent cards={cards_}/>
                </div>
            </MainLayout>


        </>
    );
};