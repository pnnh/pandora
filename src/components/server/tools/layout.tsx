import React from 'react'
import styles from './layout.module.scss'
import {PageMetadata} from "@/utils/page";
import GlobalLayout from "@/components/server/global";
import {ContentPublicNavbar} from "@/components/server/content/partials/navbar";
import {getLanguageProvider} from "@/services/common/language";
import {useServerConfig} from "@/services/server/config";
import {serverGetUserinfo} from "@/services/server/account/account";

export default async function ToolsLayout({
                                              children,
                                              pathname,
                                              searchParams,
                                              metadata,
                                              lang
                                          }: {
    children: React.ReactNode,
    pathname: string,
    searchParams: Record<string, string>,
    metadata: PageMetadata,
    lang: string
}) {
    const serverConfig = await useServerConfig()
    const portalUrl = serverConfig.PUBLIC_PORTAL_URL
    const currentUserInfo = await serverGetUserinfo(portalUrl);
    const langProvider = getLanguageProvider(lang)
    return <GlobalLayout lang={lang} metadata={metadata}>
        <div className={styles.templateContainer}>
            <div className={styles.templateNavbar}>
                <ContentPublicNavbar pathname={pathname} searchParams={searchParams}
                                     langProvider={langProvider} userInfo={currentUserInfo}/>
            </div>
            <div className={styles.templateBody}>
                <div className={styles.bodyContainer}>
                    {children}
                </div>
            </div>
        </div>
    </GlobalLayout>
}
