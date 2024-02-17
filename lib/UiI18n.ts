import {useTranslation as useI18NTranslation} from 'next-i18next';
const UiI18n = () => {
    const {i18n: UiI18n} = useI18NTranslation()
    return UiI18n
}

export default UiI18n