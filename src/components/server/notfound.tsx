
import {localText} from "@/atom/common/language";
import React from "react";

export function ToolNotFound({lang}:{lang:string}){
    return <div >
        <h1>{localText(lang, '工具未找到', 'Tool Not Found')}</h1>
        <p>{localText(lang, '该工具可能已被删除或不存在。', 'This tool may have been deleted or does not exist.')}</p>
    </div>
}