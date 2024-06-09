import LanguageContext from "@/contexts/LanguageContext";
import en_US from "@/i18n/en_US";
import { LanguageKey } from "@/i18n/language.type";
import vi_VN from "@/i18n/vi_VN";
import { useContext } from "react";

const useTranslator = () => {
    const language = useContext(LanguageContext);

    const translator = (key: LanguageKey): string => {
        return language === "vi_VN" ? vi_VN[key] : en_US[key];
    }

    return { translator }
}

export default useTranslator;