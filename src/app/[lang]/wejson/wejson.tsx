'use client'

import React from 'react';
import styles from './wejson.module.scss';
import {WePreview} from "./preview";

export function WeJsonClient() {
    const [rawContent, setRawContent] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [parsedContent, setParsedContent] = React.useState('');

    return <div className={styles.wejsonContainer}>
        <h1>WeJson Client Component</h1>
        <div className={styles.parseRow}>
            <div className={styles.rawContent}>
                <textarea value={rawContent}
                          onChange={(event) => setRawContent(event.target.value)}/>
            </div>
            <div className={styles.previewContent}>
                <WePreview jsonText={parsedContent}/>
            </div>
        </div>
        <div>
            {message}
        </div>
        <div>
            <button onClick={() => {
                try {
                    const parsed = JSON.parse(rawContent);
                    setParsedContent(JSON.stringify(parsed, null, 2));
                } catch (error) {
                    setMessage('Invalid JSON: ' + error);
                }
            }}>Parse JSON
            </button>
        </div>
    </div>
}