import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import ContentWrapper from "../utils/ContentWrapper";
import logo from '../image/Site-Logo.png'
import './Header.scss'

export default function Header() {
  const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
      if (window.scrollY > 200) {
          if (window.scrollY > lastScrollY && !mobileMenu) {
              setShow("hide");
          } else {
              setShow("show");
          }
      } else {
          setShow("top");
      }
      setLastScrollY(window.scrollY);
  };

  useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
          window.removeEventListener("scroll", controlNavbar);
      };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
      if (( event.key === "Enter" || event.code === "Enter" || event.key === "Return" || event.code === "Return") && query.length > 0) {
          navigate(`/search/${query}`);
          setTimeout(() => {
              setShowSearch(false);
          }, 1000);
      }
  };

  const openSearch = () => {
    //   setMobileMenu(false);
      setShowSearch(true);
  };

  const openMobileMenu = () => {
      setMobileMenu(true);
    //   setShowSearch(false);
  };

  const navigationHandler = (type) => {
      if (type === "movie") {
          navigate("/explore/movie");
      } else {
          navigate("/explore/tv");
      }
      setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
<div className="headerdiv flex items-center justify-between">
<div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="" />
                </div>
                <ul className="menuItems md:flex max-md:hidden">
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("movie")}
                    >
                        Movies
                    </li>
                    <li
                        className="menuItem"
                        onClick={() => navigationHandler("tv")}
                    >
                        TV Shows
                    </li>
                    <li className="menuItem">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>

                <div className="mobileMenuItems md:hidden max-md:flex ">
                        <HiOutlineSearch className="max-md:hidden" onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
</div>
            </ContentWrapper>
            {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input className="md:h-[45px] md:text-lg md:py-0 md:px-8"
                                type="text"
                                placeholder="Search for a movie or tv show...."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </header>
  )
}
