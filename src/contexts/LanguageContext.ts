import { createContext } from "react";

type Language = "en_US" | "vi_VN"
const LanguageContext = createContext<Language>("vi_VN");

export default LanguageContext;
export type {Language};