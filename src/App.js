import './App.css';
import AllHeadlines from './components/AllHeadlines/AllHeadlines';
import Header from './components/Header/Header';
import useLocalStorage from 'use-local-storage';

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const [themeText, setThemeText] = useLocalStorage('Dark Theme');
  const [themeIcon, setThemeIcon] = useLocalStorage("fa-solid fa-moon")

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    const newThemeText = newTheme === 'light' ? 'Dark Theme' : 'Light Theme';
    setThemeText(newThemeText);
    const newThemeIcon = newTheme === 'light' ? "fa-solid fa-moon" : "fa-solid fa-sun";
    setThemeIcon(newThemeIcon);
  }

  return (
    <div className="App" data-theme={theme}>

     <Header />
        <div className="theme-toggle">
            <i onClick={switchTheme} className={themeIcon}></i>
            <h5>{themeText}</h5>
        </div>
      <AllHeadlines /> 
      
    </div>
  );
}

export default App;
