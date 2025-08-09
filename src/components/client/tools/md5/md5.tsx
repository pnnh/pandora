'use client'

import * as React from 'react';
import styles from './md5.module.scss'
import Button from '@mui/material/Button';
import {useClientConfig} from "@/atom/client/config/config";
import {IBrowserConfig} from "@/services/common/config";
import {Loading} from "@/components/common/loading";
import {useEffect} from "react";
import {localText} from "@/atom/common/language";
import {md5Uid, queryApp} from "@/services/server/tools/tools";
import {ToolNotFound} from "@/components/server/notfound";
import {stringToMd5} from "@/atom/common/utils/basex";

export default function Md5Component({lang}: { lang: string }) {
    const [source, setSource] = React.useState('');
    const [output, setOutput] = React.useState('');
    const [clientConfig, setClientConfig] = React.useState<IBrowserConfig | undefined>(undefined);
    useEffect(() => {
        useClientConfig().then((config) => {
            setClientConfig(config);
        })
    }, [])
    if (!clientConfig) {
        return <Loading/>
    }

    const encodeMd5 = () => {
        if (!source) {
            return;
        }
        setOutput(stringToMd5(source));
    }
    const appInfo = queryApp(lang, md5Uid)
    if (!appInfo) {
        return <ToolNotFound lang={lang}/>
    }
    return <div className={styles.md5Page}>
        <h1>{appInfo.name}</h1>
        <textarea className={styles.sourceText} placeholder={
            localText(lang, '请输入需要编码的文本', 'Please enter the text to be encoded')
        } value={source}
                  onChange={(event) => setSource(event.target.value)}/>
        <div className={styles.toolButtons}>
            <Button variant="contained" size={'small'} onClick={encodeMd5}>
                {localText(lang, 'Md5编码', 'Md5 Encode')}
            </Button>
        </div>
        <textarea className={styles.targetText} placeholder={
            localText(lang, '编码结果', 'Encoded Result')
        } value={output} onChange={(event) =>
            setOutput(event.target.value)}/>
    </div>
}
