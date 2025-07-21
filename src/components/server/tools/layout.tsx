import React from 'react'
import styles from './layout.module.scss'
import {PageMetadata} from "@/utils/page";
import GlobalLayout from "@/components/server/global";
import {ContentPublicNavbar} from "@/components/server/content/partials/navbar";
import {getLanguageProvider} from "@/services/common/language";

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
    const langProvider = getLanguageProvider(lang)
    return <GlobalLayout lang={lang} metadata={metadata}>
        <div className={styles.templateContainer}>
            <div className={styles.templateNavbar}>
                <ContentPublicNavbar pathname={pathname} searchParams={searchParams}
                                     langProvider={langProvider} />
            </div>
            <div className={styles.templateBody}>
                <div className={styles.bodyContainer}>
                    {children}
                </div>
            </div>
        </div>
    </GlobalLayout>
}
