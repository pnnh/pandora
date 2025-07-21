import React, {CSSProperties} from "react";
import styles from './profile.module.scss'

import {getPathname} from "@/services/server/pathname";
import {pageTitle} from "@/utils/page";
import {getLanguageProvider, ILanguageProvider} from "@/services/common/language";

export async function SiteNavMenu({lang, langProvider, searchParams}: {
    lang: string,
    langProvider: ILanguageProvider,
    searchParams: Record<string, string>
}) {
    const pathname = await getPathname()

    const siteLinks = [
        {name: pageTitle(lang), href: `/${langProvider.lang}`},
    ]
    return <div className={styles.siteNavMenu}>
        <div className={styles.roleButtonContainer}>
            {
                siteLinks.map((link) => {
                    let style: CSSProperties = {}
                    if (pathname === link.href) {
                        style = {
                            color: '#4A95DD',
                        }
                    }
                    return <a key={link.name} className={styles.siteLink} style={style} href={link
                        .href}>{link.name}</a>
                })
            }
        </div>
    </div>
}
