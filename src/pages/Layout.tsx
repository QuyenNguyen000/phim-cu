import { Outlet } from 'react-router-dom';
import type { Theme } from '../contexts/ThemeContext';
import type { Language } from '@/contexts/LanguageContext';
import SideBar from '@/components/layout/SideBar';
import NavBar from '@/components/layout/NavBar';

type LayoutProps = {
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
};
const Layout = ({ setTheme, setLanguage }: LayoutProps) => {
    return (
        <>
            <NavBar setTheme={setTheme} setLanguage={setLanguage}></NavBar>
            <div className="grid md:grid-cols-5">
                <div className="col-span-1">
                    <SideBar></SideBar>
                </div>
                <div className="col-span-4">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Layout;
