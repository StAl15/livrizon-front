import {KnowledgeContent} from "../../../components/layouts/Knowledge/KnowledgeLayout/KnowledgeContent";

export const KnowledgeLayout: React.FC<{  }> = props => {
    const cards_ = [
        {
            img :'https://image.shutterstock.com/image-photo/image-260nw-634574354.jpg',
            label: 'Backend',
            desc: 'База знаний для бека',
            link: '1'
        },
        {
            img :'https://avatars.githubusercontent.com/u/5490541?s=400&amp;v=4',
            label: 'Frontend',
            desc: 'База знаний для frontend',
            link: '2'
        },
        {
            img :'https://studprosvet.ru/upload/005/u533/d/5/to-s-chego-vse-i-nachinaetsja-photo-normal.jpg',
            label: 'Mobile',
            desc: 'База знаний для mobile',
            link: '3'
        },


    ]
    return (
        <>
            <div className={'bg-secondary w-screen h-full min-h-screen'}>
                <h3 className={'font-montserratBold text-3xl ml-10 pt-20 mb-5'}>База знаний</h3>
                <KnowledgeContent cards={cards_}/>
            </div>

        </>
    );
};