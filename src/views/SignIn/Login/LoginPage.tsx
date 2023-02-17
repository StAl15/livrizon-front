import {LoginPageContent} from "../../../components/layouts/SignIn/Login/LoginPageContent";
import styles from '../Styles/Signin.module.scss'

export const LoginPage: React.FC<{}> = props => {
    return (
        <>
            <div className={styles.content}>
                <LoginPageContent />
            </div>

        </>
    );
};