import { useEffect, useState } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utilis/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres} from './store/homeSlice'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Import required files
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/pageNotFound/PageNotFound";


function App() {

  const dispatch = useDispatch()
  const url = useSelector((state)=>state.home.url)
  console.log(url)
  

  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((res) => {
        console.log(res);
        const url = {
          backdrop:res.images.secure_base_url + 'original',
          poster:res.images.secure_base_url + 'original',
          profile:res.images.secure_base_url + 'original',
        }
        dispatch(getApiConfiguration(url))
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    
    <Route path="/" element={<Home/>} />
    <Route path="/mediaType/:id" element={<Details/>} />
    <Route path="/search/:query" element={<SearchResult/>} />
    <Route path="/explore/:mediaType" element={<Explore/>} />
    <Route path="*" element={<PageNotFound/>} />
  </Routes>
  {/* <Footer/> */}
  </BrowserRouter>
  );
}

export default App;
