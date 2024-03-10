import NewsBoard from './component/NewsBoard';
import NewsItem from './component/NewsItem';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NewsBoard/>
        <NewsItem/>
        </BrowserRouter>
    </div>
  );
}

export default App;
