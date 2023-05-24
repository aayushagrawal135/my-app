import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Footer from './Footer';
import Header from './Header';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/my-app/' component={Profile} />
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
