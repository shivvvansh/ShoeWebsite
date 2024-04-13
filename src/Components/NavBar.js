import React, { useContext, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "./scss/style1.css";
import ShopContext from "../context/shop/ShopContext";

function NavBar() {
  const context = useContext(ShopContext);
  const { getCartItems, getMenShoe, attributeset, getallnotes, getlocaldata } =
    context;
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (getlocaldata == null) {
      navigate("/login");
    } else {
      console.log("hello");
    }
  }, [getlocaldata]);
  useEffect(() => {
    if (location.pathname == "/") {
      console.log("my name is call" + location.pathname);
    }
    if (location.pathname == "/all") {
      console.log("my name is call" + location.pathname);
      getallnotes();
    }
    if (location.pathname == "/men") {
      console.log("my name is call" + location.pathname);
      getMenShoe("Men");
    }
    if (location.pathname == "/women") {
      console.log("my name is call" + location.pathname);
      getMenShoe("Women");
    }
    if (location.pathname == "/Cart") {
      console.log("my name is call" + location.pathname);
      getCartItems();
    }
    if (location.pathname == "/loader") {
      console.log("my name is call" + location.pathname);
      // getCartItems()
      attributeset("none", "red");
      // <Loader display={"none"} color={'red'}/>
    }
    // if(location.pathname == '/login' || '/signup'){
    //   console.log("my name is call" + location.pathname);
    //   const nav = document.querySelector('.navbar')z
    // }

    console.log(location);
  }, [location]);

  const hamburger = () => {
    let ham = document.querySelector(".hamburger");
    ham.classList.toggle("active");
    let side = document.querySelector(".sidebar");
    side.classList.toggle("active");
  };
  return (
    <>
      <div className="navbar">
        <div className="part1">
          <div className="logo">
            <h1>
              Shopify <i className="fab fa-airbnb"></i>
            </h1>
          </div>
          <div className="menuopt">
            <div className="hamburger" id="hamburger" onClick={hamburger}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="part2">
          <div className="more-paths">
            <Link className="home" to="/">
              Home <i className="fa fa-home"></i>
            </Link>
            <Link to="/all">All </Link>
            <Link to="/men">Men </Link>
            <Link to="/women">Women</Link>
            {/* <Link to="/signup">Signup</Link> */}
            {/* <Link to="/loader">Loader</Link> */}
            <Link to="/Cart">
              Cart <i className="fas fa-shopping-bag"></i>
            </Link>
          </div>
          <div className="searchbar" style={{ position: "relative" }}>
            <input type="text" placeholder="Search Product..." />
            <span
              className="crow"
              style={{
                position: "absolute",
                left: "86%",
                width: "50px",
                height: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                zIndex: "12",
                overflow: "hidden",
              }}
            >
              <div
                className="colof"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background: "rgb(0, 140, 255)",
                  filter: "blur(7px)",
                }}
              ></div>
              <i
                className="fas fa-search"
                style={{ color: "white", backdropFilter: "blur(12px)" }}
              ></i>
            </span>
          </div>
        </div>
      </div>
      <div className="sidebar" id="sidebar">
        <div className="ginfo">
          <div className="name">
            <h3>
              Sujal Shah{" "}
              <i className="fas fa-mask" style={{ color: "white" }}></i>
            </h3>
          </div>
        </div>
        <div className="link">
          <Link to="/">
            Home<i className="fas fa-home"></i>
          </Link>
          <Link
            to="/men"
            onClick={() => {
              getMenShoe("Men");
            }}
          >
            Men{" "}
          </Link>
          <Link
            to="/women"
            onClick={() => {
              getMenShoe("Women");
            }}
          >
            Women
          </Link>
          <Link to="/Cart">
            Cart items{" "}
            <i
              className="fas fa-shopping-bag"
              style={{ marginLeft: "9px", marginTop: "2px" }}
            ></i>
          </Link>
          <Link to="#">Track ypur order</Link>
          <Link to="#">Privacy Policy</Link>
        </div>
        <span className="gee">
          <h4>version 1.0.0</h4>
        </span>
      </div>
    </>
  );
}

export default NavBar;
