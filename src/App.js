import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import CarouselComponent from './components/CarouselComponent';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <CarouselComponent/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
