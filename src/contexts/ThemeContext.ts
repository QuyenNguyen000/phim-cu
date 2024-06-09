import { createContext } from "react";

type Theme = 'dark' | 'light';
const ThemeContext = createContext<Theme>('dark');

export default ThemeContext;
export type { Theme };