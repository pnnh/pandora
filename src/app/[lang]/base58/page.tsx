import React from 'react'
import styles from './page.module.scss'
import {getPathname} from "@/services/server/pathname";
import {CommentsClient} from "@/photon/client/comments/comments";
import {useServerConfig} from "@/services/server/config";
import {langEn, localText} from "@/atom/common/language";
import {PageMetadata} from "@/utils/page";
import ToolsLayout from "@/components/server/tools/layout";
import {Base58Component} from "@/components/client/tools/base58/base58";

export default async function Home({params, searchParams}: {
    params: Promise<{ lang: string, channel: string }>,
    searchParams: Promise<Record<string, string>>
}) {
    const pathname = await getPathname()
    const paramsValue = await params;
    const lang = paramsValue.lang || langEn
    const searchParamsValue = await searchParams
    const metadata = new PageMetadata(lang, localText(lang, 'Base58 编码工具', 'Base58 Encoding Tool'))
    metadata.description = localText(lang, 'Base58 编码工具可以将字符串转换为 Base58 编码格式，常用于区块链地址等场景。',
        'The Base58 encoding tool can convert strings to Base58 encoding format, commonly used in blockchain addresses and other scenarios.')
    const serverConfig = await useServerConfig()
    const portalUrl = serverConfig.PUBLIC_PORTAL_URL
    return <ToolsLayout lang={lang} searchParams={searchParamsValue} pathname={pathname}
                        metadata={metadata}>
        <div className={styles.base58Page}>
            <h1 className={styles.productTitle}>{localText(lang, 'Base58 编码工具', 'Base58 Encoding Tool')}</h1>
            <Base58Component lang={lang}/>
            <div className={styles.commentsClient}>
                <CommentsClient portalUrl={portalUrl} resource={'01984606-a81b-7418-9cbb-f704d4e89c30'}
                                lang={lang}/>
            </div>
        </div>
    </ToolsLayout>
}