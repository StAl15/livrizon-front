import {AddMemberContent} from "../../../components/layouts/Team/AddMember/AddMemberContent";

export const AddMember: React.FC<{}> = props => {
    return (
        <>
            <div className={'bg-secondary justify-items-center grid h-full min-h-screen'}>
                <AddMemberContent/>
            </div>

        </>
    );
};