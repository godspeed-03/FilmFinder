import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utils/Api";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// iopip
import { getApiConfig, getGenreConfig } from "./store/Homesclice";

import Details from "./pages/Details/Details";
import Error from "./pages/Error";
import Explore from "./pages/Explore";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home/Home";
import SearchResult from "./pages/SearchResult";

export default function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchbanner();
    genresCall();
  }, []);

  const fetchbanner = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original"
      };

      dispatch(getApiConfig(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenreConfig(allGenres));
};
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
