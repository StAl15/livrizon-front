import {KnowledgeContent} from "../../../components/layouts/Knowledge/KnowledgeLayout/KnowledgeContent";

export const KnowledgeLayout: React.FC<{  }> = props => {
    const cards_ = [
        {
            img :'',
            label: 'Backend',
            desc: 'База знаний для бека',
            link: '1'
        },
        {
            img :'',
            label: 'Frontend',
            desc: 'База знаний для frontend',
            link: '2'
        },
        {
            img :'',
            label: 'Mobile',
            desc: 'База знаний для mobile',
            link: '3'
        },

    ]
    return (
        <>
            <div className={'bg-secondary w-screen h-screen grid'}>
                <KnowledgeContent cards={cards_}/>
            </div>

        </>
    );
};