import useTranslation from "next-translate/useTranslation"
import { LocaleEnum } from "../enums"
import { getLang } from "../utils"


const useLanguage = () => {

    const { lang } = useTranslation()
    const language = getLang(lang as keyof typeof LocaleEnum)

    return { language }
}

export default useLanguage;