import {MainLayout} from "../../Navbar/MainLayout";
import {MemberItem} from "../../../components/layouts/Team/MemberDetail/MemberItem";
import {MemberInfo} from "../../../components/layouts/Team/MemberDetail/MemberInfo";
import {MemberType, modeAcces, roleType} from "../../../utils/types/types";
import {useEffect, useState} from "react";

export const MemberDetail: React.FC<{ mode: modeAcces }> = ({mode}) => {

    const id_ = Number(window.location.pathname.split('/')[3])

    const [card_, setCard] = useState<MemberType>({
        img_: '',
        name: '',
        bio: '',
        role: roleType.user,
        employee: '',
        link: ''
    })

    const cards_ = [
        {
            img_: 'https://begeton.com/files/users-persons_thumb/121/5/30/stGHlM7lakOOgET27IANp6AOQPwaV0j8.jpeg',
            name: 'Alex',
            bio: 'База знаний для бека',
            role: roleType.user,
            employee: 'Frontend',
            link: '1',
            vk:'https://vk.com/astikhin1995'
        },
        {
            img_: 'https://www.belarosso.ru/imgc/2022/106b/319920/futbolka-infinity-31200510007-belyy-4.jpg',
            name: 'Gordon',
            bio: 'База знаний для frontend',
            role: roleType.mentor,
            employee: 'Backend',
            link: '2',
            vk:'https://vk.com/astikhin1995'
        },
        {
            img_: 'https://a.lmcdn.ru/pi/img600x866/M/P/MP002XW04SZK_13074051_5_v1.jpeg',
            name: 'Luice',
            bio: 'База знаний для mobile',
            role: roleType.admin,
            employee: 'Frontend',
            link: '3'
        }
    ]

    useEffect(() => {
        return () => {
            setCard(cards_[id_-1])
        };
    }, [cards_, mode, card_]);



    return (
        <>
            <MainLayout>
                <div className={'ml-32 pl-5 bg-secondary flex w-screen h-full min-h-screen'}>
                    <MemberItem card={card_}/>
                    <MemberInfo card_={card_}/>
                </div>
            </MainLayout>
        </>
    );
};