
export const simpleLocale = (locale: string) => {
    if (locale === 'en-US') {
        return 'en';
    }
    if (locale === 'ko-KR') {
        return 'ko';
    }
    if (locale === 'ja-JP') {
        return 'ja';
    }
    if (locale === 'zh-CN') {
        return 'zh';
    }
    return 'vi';
}