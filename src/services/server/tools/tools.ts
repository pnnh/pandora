import {ApplicationLanguageProfile, ApplicationModel} from "@/atom/common/models/tools/application";
import {langZh, localText} from "@/atom/common/language";

const passwordUrn = '0192e096-22e4-7aa4-8aa9-8093f09d58a7'
const uuidUrn = '0192e096-2247-7aa4-8aa9-7167ae2d1927'
const qrcodeUrn = '0192e096-21bd-7aa4-8aa9-618897c0f57d'
const datetimeUrn = '0192e096-2135-7aa4-8aa9-56f7093a900f'
const highlightUrn = '0192e096-20ba-7aa4-8aa9-4241a2e6a0fe'
const codegenUrn = '0192e096-202a-7aa4-8aa9-31282d2819df'
const svgtoolUrn = '0192e096-1f1f-7aa4-8aa9-15ff43be6898'
const barcodeUrn = '0192e570-e034-7eee-ad8a-09ce690b9ee8'
const basexUrn = '0192e097-be97-7aa4-8aa9-d0bacf336da7'
const base58Urn = '019846ca-28c3-7103-9afc-85fa78bf82a0'

export function selectApps(expectLang: string): ApplicationModel[] {
    return [
        {
            uid: passwordUrn,
            url: '/password',
            update_time: '2024-10-30T12:00:00.000Z',
            image: '/images/application/password.webp',
            ...selectAppLangProfile(passwordUrn, expectLang)
        },
        {
            uid: uuidUrn,
            url: '/uuid',
            update_time: '2024-10-30T12:00:00.000Z',
            image: '/images/application/uuid.webp',
            ...selectAppLangProfile(uuidUrn, expectLang)
        },
        {
            uid: qrcodeUrn,
            url: '/qrcode',
            update_time: '2024-10-30T12:00:00.000Z',
            image: '/images/application/qrcode.webp',
            ...selectAppLangProfile(qrcodeUrn, expectLang)
        },
        {
            uid: datetimeUrn,
            url: '/datetime',
            update_time: '2024-10-30T12:00:00.000Z',
            image: '/images/application/datetime.webp',
            ...selectAppLangProfile(datetimeUrn, expectLang)
        },
        {
            uid: base58Urn,
            url: '/base58',
            update_time: '2024-10-30T12:00:00.000Z',
            image: '/images/application/datetime.webp',
            ...selectAppLangProfile(base58Urn, expectLang)
        },
    ]
}

function selectAppLangProfile(appUrn: string, lang: string): ApplicationLanguageProfile {

    switch (appUrn) {
        case passwordUrn:
            return {
                lang: lang,
                name: localText(lang, '随机密码生成器', 'Random Password Generator'),
                description: localText(lang,'可以快速生成随机密码，支持自定义密码长度、密码字符集、密码数量等参数。',
                    'Quickly generate random passwords, supports custom password length, character set, number of passwords, etc.')
            }
        case uuidUrn:
            return {
                lang: lang,
                name: localText(lang,  'UUID生成器', 'UUID Generator'),
                description: localText(lang, '支持常见的UUID标准，快速生成随机的UUID并复制。',
                    'Supports common UUID standards, quickly generate random UUIDs and copy them.')
            }
        case qrcodeUrn:
            return {
                lang: lang,
                name: localText(lang,'二维码生成器', 'QR Code Generator'),
                description: localText(lang, '支持方便快速地生成二维码，可以自定义二维码的大小、颜色、背景色等，支持生成带logo的二维码。',
                    'Supports convenient and quick generation of QR codes, allowing customization of size, color, background color, etc., and supports generating QR codes with logos.')
            }
        case datetimeUrn:
            return {
                lang: lang,
                name: localText(lang, '日期时间工具', 'Date and Time Tools'),
                description: localText(lang, '方便快捷的日期时间工具，包括时间戳转换、日期计算、日期格式化等功能。',
                    'Convenient and quick date and time tools, including timestamp conversion, date calculation, date formatting, and other functions.')
            }
        case base58Urn:
            return {
                lang: lang,
                name: localText(lang, 'Base58 编码工具', 'Base58 Encoding Tool'),
                description: localText(lang, 'Base58 编码工具可以将字符串转换为 Base58 编码格式，常用于区块链地址等场景。',
                    'Base58 encoding tool can convert strings to Base58 encoding format, commonly used in blockchain addresses and other scenarios.')
            }
        default:
            return {
                lang: lang,
                name: localText(lang, '未知应用', 'Unknown Application'),
                description: localText(lang, '未知应用', 'Unknown Application')
            }
    }
}
