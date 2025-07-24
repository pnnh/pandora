import React from 'react'
import './page.scss'
import {getPathname} from "@/services/server/pathname";
import {CommentsClient} from "@/photon/client/comments/comments";
import {QRCodeComponent} from "@/atom/client/components/tools/qrcode/qrcode";
import {useServerConfig} from "@/services/server/config";
import {langEn} from "@/atom/common/language";
import {PageMetadata} from "@/utils/page";
import ToolsLayout from "@/components/server/tools/layout";

export default async function Home({params, searchParams}: {
    params: Promise<{ lang: string, channel: string }>,
    searchParams: Promise<Record<string, string>>
}) {
    const pathname = await getPathname()
    const paramsValue = await params;
    const lang = paramsValue.lang || langEn
    const searchParamsValue = await searchParams
    const metadata = new PageMetadata(lang, '二维码生成器')
    metadata.description = `在线生成二维码`
    metadata.keywords = `二维码,二维码生成器,二维码工具`
    const serverConfig = await useServerConfig()
    const portalUrl = serverConfig.PUBLIC_PORTAL_URL
    return <ToolsLayout lang={lang} searchParams={searchParamsValue} pathname={pathname}
                          metadata={metadata}>
        <div className={'qrCodePage'}>
            <h1 className={'productTitle'}>{'二维码生成器'}</h1>
            <QRCodeComponent lang={lang}/>
            <div className={'commentsClient'}>
                <CommentsClient portalUrl={portalUrl} resource={'a28fc8db-482c-37ea-bcb2-e4543d7c6457'}
                                lang={lang}/>
            </div>
        </div>
    </ToolsLayout>
}
