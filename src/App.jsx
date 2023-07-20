import MainContent from './components/MainContent/MainContent.jsx';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>GitHub Actions Tutorial</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
