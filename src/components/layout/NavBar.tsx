import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from '@radix-ui/react-dropdown-menu';
import { Button } from '../ui/button';
import useTranslator from '@/hooks/useTranslator';
import useTheme from '@/hooks/useTheme';
import { Language } from '@/contexts/LanguageContext';
import { Theme } from '@/contexts/ThemeContext';

type LayoutProps = {
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};
const NavBar = ({ setTheme, setLanguage }: LayoutProps) => {
    const { theme } = useTheme();
    const { translator } = useTranslator();
    const handleClick = () => {
        const updatedTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', updatedTheme);
        setTheme(updatedTheme);
    };
    const handleSelectEn_US = () => {
        localStorage.setItem('language', 'en_US');
        setLanguage('en_US');
    };
    const handleSelectVi_VN = () => {
        localStorage.setItem('language', 'vi_VN');
        setLanguage('vi_VN');
    };
    return (
        <>
            <Button variant="outline" onClick={handleClick}>
                {translator('switch_theme')}
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">{translator('switch_language')}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuItem onSelect={handleSelectEn_US}>
                        {translator('en_US_language')}
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={handleSelectVi_VN}>
                        {translator('vi_VN_language')}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default NavBar;
