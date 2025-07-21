import styles from './userinfo.module.scss'
import {AccountModel, isAnonymousAccount} from "@/atom/common/models/account";
import {ILanguageProvider} from "@/services/common/language";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function UserAction({lang, langProvider, portalUrl, userInfo}: {
    lang: string, langProvider: ILanguageProvider
    portalUrl: string, userInfo: AccountModel | undefined
}) {

    if (userInfo && !isAnonymousAccount(userInfo)) {
        return <div className={styles.userAction}>
            <a className={styles.userPhoto} title={userInfo.nickname} href={`/${lang}/console`}>
                <img src={userInfo.photoUrl} alt="User Avatar"/>
            </a>

            {/*<a className={'logoutLink'} href={'javascript:void(0)'} onClick={() => {*/}
            {/*    accountSignout(portalUrl, {}).then(() => {*/}
            {/*        window.location.href = '/'*/}
            {/*    })*/}
            {/*}}>退出</a>*/}
        </div>
    }
    return <div className={styles.userAction}>
        <a className={styles.loginLink} href={`/${lang}/account/signin`}>
            <AccountCircleIcon/>
        </a>
        {/*<a className={styles.loginLink} href={`${lang}/account/signup`}>注册</a>*/}
    </div>
}
