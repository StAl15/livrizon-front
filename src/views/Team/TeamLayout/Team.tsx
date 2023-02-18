import {KnowledgeContent} from "../../../components/layouts/Knowledge/KnowledgeLayout/KnowledgeContent";
import {MainLayout} from "../../Navbar/MainLayout";
import {useNavigate} from "react-router-dom";
import {roleType} from "../../../utils/types/types";
import {TeamContent} from "../../../components/layouts/Team/TeamLayout/TeamContent";

export const Team: React.FC<{}> = props => {
    const navigate = useNavigate()

    const cards_ = [
        {
            img: 'https://begeton.com/files/users-persons_thumb/121/5/30/stGHlM7lakOOgET27IANp6AOQPwaV0j8.jpeg',
            name: 'Alex',
            bio: 'База знаний для бека',
            role: roleType.user,
            employee: 'Frontend',
            link: '1'
        },
        {
            img: 'https://www.belarosso.ru/imgc/2022/106b/319920/futbolka-infinity-31200510007-belyy-4.jpg',
            name: 'Gordon',
            bio: 'База знаний для frontend',
            role: roleType.mentor,
            employee: 'Backend',
            link: '2'
        },
        {
            img: 'https://a.lmcdn.ru/pi/img600x866/M/P/MP002XW04SZK_13074051_5_v1.jpeg',
            name: 'Luice',
            bio: 'База знаний для mobile',
            role: roleType.admin,
            employee: 'Frontend',
            link: '3'
        }


    ]
    return (
        <>
            <MainLayout>
                <div className={'ml-32 bg-secondary w-screen h-full min-h-screen'}>
                    <div className={'flex pt-20 mb-5 ml-10 mr-10 items-center'}>
                        <h3 className={'font-montserratBold text-3xl'}>Команда</h3>
                        <button
                            onClick={()=>navigate('/team/add')}
                            className={'w-48 font-montserratRegular px-5 py-3 rounded-2xl hover:bg-white bg-black ml-auto hover:text-black transition-all duration-300 text-white'}>Добавить
                        </button>
                    </div>

                    <TeamContent cards={cards_}/>
                </div>
            </MainLayout>


        </>
    );
};