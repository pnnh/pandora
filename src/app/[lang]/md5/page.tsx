import React from 'react'
import styles from './page.module.scss'
import {getPathname} from "@/services/server/pathname";
import {CommentsClient} from "@/photon/client/comments/comments";
import {useServerConfig} from "@/services/server/config";
import {langEn, localText} from "@/atom/common/language";
import {PageMetadata} from "@/utils/page";
import ToolsLayout from "@/components/server/tools/layout";
import Md5Component from "@/components/client/tools/md5/md5";
import {md5Uid, queryApp} from "@/services/server/tools/tools";
import {ToolNotFound} from "@/components/server/notfound";

export default async function Home({params, searchParams}: {
    params: Promise<{ lang: string, channel: string }>,
    searchParams: Promise<Record<string, string>>
}) {
    const pathname = await getPathname()
    const paramsValue = await params;
    const lang = paramsValue.lang || langEn
    const searchParamsValue = await searchParams

    const appInfo = queryApp(lang, md5Uid)
    if (!appInfo) {
        return <ToolNotFound lang={lang}/>
    }

    const metadata = new PageMetadata(lang, appInfo.name)
    metadata.description = appInfo.description
    const serverConfig = await useServerConfig()
    const portalUrl = serverConfig.PUBLIC_PORTAL_URL
    return <ToolsLayout lang={lang} searchParams={searchParamsValue} pathname={pathname}
                        metadata={metadata}>
        <div className={styles.md5Page}>
            <h1 className={styles.productTitle}>{appInfo.name}</h1>
            <Md5Component lang={lang}/>
            <div className={styles.commentsClient}>
                <CommentsClient portalUrl={portalUrl} resource={appInfo.uid}
                                lang={lang}/>
            </div>
        </div>
    </ToolsLayout>
}