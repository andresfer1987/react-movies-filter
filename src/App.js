import logo from './logo.svg';
import './App.css';
import  Movies  from './components/movies';

function App() {
  return (
    <>
    <header className="header">
      <div className="header__title"><span>HOOKED</span></div>
    </header>
    <Movies />   
    </>    
  );
}

export default App;
