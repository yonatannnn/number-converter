import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Converter from './converter';

function App() {
  return (
    <div className="App">
        <Header />  
        <div className='converters'>
          <Converter title = 'Binary to Octal'  id = '1' inputId = '1' />
          <Converter title = 'Binary to Decimal' id = '2' inputId = '2'/>
          <Converter title = 'Octal to Decimal' id = '3' inputId = '3'/>
          <Converter title = 'Octal to Binary' id = '4' inputId = '4'/>
          <Converter title = 'Decimal to Octal' id = '5' inputId = '5'/>
          <Converter title = 'Decimal to Binary' id = '6' inputId = '6'/>  
        </div>
    </div>
  );
}

export default App;
