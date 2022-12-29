import './App.css';
import unsplash from "../api/unsplash";
import { useEffect, useState } from 'react';
import Header from './Header';
import ImageList from './ImageList';
// import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {

  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('cats');

  const response = async () => {
    const result = await unsplash.get('/search/photos' , {
        params: { query: term }
    });

    setImages(result.data.results);
  } 

  useEffect(() => {
    response();
  },[term])

  return (
    <div className="App">
      <Header />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
