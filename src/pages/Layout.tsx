import { Outlet } from 'react-router-dom';
import type { Theme } from '../contexts/ThemeContext';
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import type { Language } from '@/contexts/LanguageContext';
import useTranslator from '@/hooks/useTranslator';

type LayoutProps = {
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};
const Layout = ({ setTheme, setLanguage }: LayoutProps) => {
    const theme = useContext(ThemeContext);
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
            <Outlet></Outlet>
        </>
    );
};

export default Layout;
