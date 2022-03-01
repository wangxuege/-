import axios from "axios";
import { useState } from "react";
import { ImageList } from "./components/ImageList";
import { SearchBar } from "./components/SearchBar";
import logo from "./logo.png";
import "./styles/ImageList.css"

function App() {

  const ApiKey = process.env.REACT_APP_PIXABAY_APIKEY;

  const [images, setImages] = useState([]);

  const onSearchSubmit = async(inputText) =>{
    try{
      const params = {
        key: ApiKey,
        q:inputText,
      };
      const response = await axios.get("https://pixabay.com/api/", {params})
      setImages(response.data.hits);
      if(response.data.total === 0){
        alert("検索結果0件");
      }
    }catch{
      alert("取得失敗");
    }
  };

  return (
    <div className="App" style={{margin: "20px"}}>
      <img src={logo} alt="pixabay-logo" className="pixabay-logo"/>
      <SearchBar onSearchSubmit={onSearchSubmit}/>
      <ImageList images={images}/>
    </div>
  );
}

export default App;
