import { useState } from 'react';
import axios from 'axios';
import './assests/Css.css'
const App = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    try {
      const response = axios.get(
          'http://dev-spis.newssalad.com:8081/stocks/search',{params:'신세계푸드'}
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
      <div>
        <div>
          <button onClick={onClick}>불러오기</button>
        </div>
        {data && (
            <textarea className="News"
                rows={7}
                value={JSON.stringify(data, null, 2)}
                readOnly={true}
            />
        )}
      </div>
  );
};
export default App;