import styles from './userinfo.module.scss'
import {AccountModel, isAnonymousAccount} from "@/atom/common/models/account";
import {ILanguageProvider} from "@/services/common/language";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function UserAction({lang, langProvider, portalUrl, userInfo, polarisUrl}: {
    lang: string, langProvider: ILanguageProvider
    portalUrl: string, userInfo: AccountModel | undefined, polarisUrl: string
}) {

    if (userInfo && !isAnonymousAccount(userInfo)) {
        return <div className={styles.userAction}>
            <a className={styles.userPhoto} title={userInfo.nickname} href={`${polarisUrl}/${lang}/console`}>
                <img src={userInfo.photoUrl} alt="User Avatar"/>
            </a>
        </div>
    }
    return <div className={styles.userAction}>
        <a className={styles.loginLink} href={`${polarisUrl}/${lang}/account/signin`}>
            <AccountCircleIcon/>
        </a>
    </div>
}
