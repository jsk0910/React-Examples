import { BrowserRouter, Routes, Route } from 'react-router-dom'


/*
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>홈</Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
*/

//import { useState } from 'react'
//import axios from 'axios'

/*
const App = () => {
  const [data, setData] = useState(null)
  const onClick = async() => {
    try {
      const res = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=ce6d62b92239472fbb2fc228505940e7')
      setData(res.data)
    } catch(e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  )
}
*/

import NewsPage from './components/NewsApiEX/NewsPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/:category?" element={<NewsPage></NewsPage>} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
