import {HelloPageContent} from "../../../components/layouts/SignIn/HelloPage/HelloPageContent";
import styles from '../Styles/Signin.module.scss'

export const HelloPage: React.FC<{}> = props => {
    return (
        <>
            <div className={styles.content}>
                <HelloPageContent/>
            </div>

        </>
    );
};