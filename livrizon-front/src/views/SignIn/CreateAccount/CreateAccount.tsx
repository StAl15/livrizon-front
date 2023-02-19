import {CreateAccountContent} from "../../../components/layouts/SignIn/CreateAccount/CreateAccountContent";
import styles from '../Styles/Signin.module.scss'
export const CreateAccount: React.FC<{}> = props => {
    return (
        <>
            <div className={styles.content}>
                <CreateAccountContent/>
            </div>

        </>
    );
};