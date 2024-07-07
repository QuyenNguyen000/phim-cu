import ThemeContext from "@/contexts/ThemeContext";
import ContextNotFoundError from "@/helpers/errors/ContextNotFoundError";
import { useContext } from "react";

const useTheme = () => {
    const theme = useContext(ThemeContext);
    if (!theme) {
        throw new ContextNotFoundError('ThemeContext');
    }
    return { theme }
}

export default useTheme;