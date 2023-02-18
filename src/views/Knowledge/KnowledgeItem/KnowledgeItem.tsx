import {KnowledgeDetailType, modeAcces} from "../../../utils/types/types";
import {KnowledgeItemText} from "../../../components/layouts/Knowledge/KnowledgeItem/KnowledgeItemText";
import {KnowledgeItemContacts} from "../../../components/layouts/Knowledge/KnowledgeItem/KnowledgeItemContacts";
import {KnowledgeItemMedia} from "../../../components/layouts/Knowledge/KnowledgeItem/KnowledgeItemMedia";
import {useState} from "react";

type Props = {
    mode: modeAcces;
    data?: KnowledgeDetailType;
}


export const KnowledgeItem: React.FC<Props> = ({mode, data}) => {
    const [editable, setEditable] = useState(true)

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

    return (
        <>
            <div>
                <KnowledgeItemText editable={editable}/>
                <KnowledgeItemContacts editable={editable}/>
                <KnowledgeItemMedia editable={editable} />
            </div>
            <KnowledgeItemMedia/>
        </>
    );
};