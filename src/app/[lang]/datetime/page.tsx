import React from 'react'
import './page.scss'
import {getPathname} from "@/services/server/pathname";
import DatetimeComponent from '@/components/client/tools/datetime/datetime';
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

    const metadata = new PageMetadata(lang)
    return <ToolsLayout  lang={lang} searchParams={searchParamsValue} pathname={pathname}
                          metadata={metadata}>
        <div className={'qrCodePage'}>
            <DatetimeComponent lang={lang}/>
        </div>
    </ToolsLayout>
}
