import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Nothing from './pages/Nothing';
import ThemeContext from './contexts/ThemeContext';
import type { Theme } from './contexts/ThemeContext';
import { useState } from 'react';
import LanguageContext from './contexts/LanguageContext';
import type { Language } from './contexts/LanguageContext';

function App() {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem('theme') as Theme) ?? 'light'
    );
    const [language, setLanguage] = useState<Language>(
        () => (localStorage.getItem('language') as Language) ?? 'vi_VN'
    );
    return (
        <div className={theme === 'dark' ? 'darkTheme' : 'lightTheme'}>
            <ThemeContext.Provider value={theme}>
                <LanguageContext.Provider value={language}>
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/"
                                element={<Layout setTheme={setTheme} setLanguage={setLanguage} />}
                            >
                                <Route index element={<Home />}></Route>
                                <Route path="/about" element={<About />}></Route>
                                <Route path="/movie" element={<Movie />}></Route>
                                <Route path="*" element={<Nothing />}></Route>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </LanguageContext.Provider>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
