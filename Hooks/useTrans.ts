import {useTranslation as useI18NTranslation} from 'next-i18next';

export default function useTrans() {
    const {t} = useI18NTranslation('common', {useSuspense: false});

    return (str: string, params: Record<string, any> = {}) => {
        let result = t(str);

        if (!!result) {
            for (const key of Object.keys(params)) {
                result = result.replaceAll(`{${key}}`, params[key]);
            }
        }

        return result;
    };
}
