import useTranslation from 'next-translate/useTranslation'

function useCategoryEnum() {
    const { t } = useTranslation()

    const fakeCatalogEnum = {
        0: t("common:categoryFood"),
        1: t("common:categoryAlcohol"),
        2: t("common:categoryChemicals"),
        [t("common:categoryFood")]: 0,
        [t("common:categoryAlcohol")]: 1,
        [t("common:categoryChemicals")]: 2
    }
    
    return {
        catalogEnum: fakeCatalogEnum
    }
}

export default useCategoryEnum