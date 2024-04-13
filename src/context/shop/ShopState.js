import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ShopContext from "./ShopContext";
const ShopState = (props) => {
  // const sontrol = []
  const [articles, setArticles] = useState([]);
  const [specialItems, setSpecial] = useState([]);
  const [cproduct, setCproduct] = useState([]);
  const [MenProduct, setMenProduct] = useState([]);
  const [order, setorder] = useState([]);
  const [sontrol, setsontrol] = useState([]);
  const [datafor, setdatafor] = useState([]);
  const [users, setusers] = useState({});
  let getlocaldata;
  /**************************************************************************************/
  /**************************************************************************************/
  /*******APPLYING PRODUCT FILTERS📢**********/

  /***+*****GET ALL PRODUCTS IN ARRAY******** */
  useEffect(() => {
    try {
      console.log("i m in");
      getlocaldata = localStorage.getItem("auth-token");
      setusers(getlocaldata);
    } catch (error) {
      console.log(error + "i cant find");
    }
  }, [setusers]);

  const getallnotes = async () => {
    console.log("product hit");
    const response = await fetch("http://localhost:5000/products/show", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    setArticles(json);
  };
  /**************************************************************************************/
  /**************************************************************************************/
  
  /*******************************SPECIAL FILTERS 📢************************************/

  const getSpecial = async (special) => {
    console.log("product hit");
    const response = await fetch("http://localhost:5000/products/special", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ special }),
    });
    const json = await response.json();
    setSpecial();
  };

  /***********************Getting Men || Women Product********************************/
  const getMenShoe = async (tag) => {
    console.log("getting men shoe");
    const response = await fetch("http://localhost:5000/products/tag", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tag }),
    });
    const json = await response.json();
    setMenProduct(json);
  };
  /**************************************************************************************/
  /**************************************************************************************/

  /*****************************| Cart Backend calling |*********************************/

  /***************************Adding item to Cart 📢*************************/

  const AddCartItem = async (title, desc, image, price) => {
    console.log("adding item to cart");
    const response = await fetch("http://localhost:5000/cart/addCartItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxNmY5ZmJlYWE2Mzc5MGQ1NDg3MDMxIn0sImlhdCI6MTY0NTY3Mjk1NX0.9bdnJjG_qZnA7X-1GrL8KMdTPmrBztFBJu7nDzq0n40",
      },
      body: JSON.stringify({ title, desc, image, price }),
    });
    const json = await response.json();
  };

  const attributeset = (display, color) => {
    console.log("sontrol is call");
    const response = {
      display: display,
      color: color,
    };
    setsontrol(response);
  };
  /***************************Delete item to Cart 📢*************************/
  const DeleteCartitems = async (id) => {
    console.log(id);
    console.log("delete event fire....");
    const response = await fetch("http://localhost:5000/cart/deletecartitem", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxNmY5ZmJlYWE2Mzc5MGQ1NDg3MDMxIn0sImlhdCI6MTY0NTY3Mjk1NX0.9bdnJjG_qZnA7X-1GrL8KMdTPmrBztFBJu7nDzq0n40",
      },
      body: JSON.stringify({ id }),
    });
    const json = await response.json();
    getCartItems();
  };

  /***************************Get All Cart items📢*************************/
  const getCartItems = async () => {
    console.log("Getting cart items");
    const response = await fetch(
      "http://localhost:5000/cart/fetchallCartitem",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIxNmY5ZmJlYWE2Mzc5MGQ1NDg3MDMxIn0sImlhdCI6MTY0NTY3Mjk1NX0.9bdnJjG_qZnA7X-1GrL8KMdTPmrBztFBJu7nDzq0n40",
        },
      }
    );
    const json = await response.json();
    setCproduct(json);
  };

  /**************************************************************************************/
  /**************************************************************************************/
  /**************************************************************************************/

  const userLogin = async (email, password) => {
    console.log(email + " " + password);
    const response = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await response.json();
    console.log(json.authtoken);
    // Save the auth token and redirect
    localStorage.setItem("auth-token", json.authtoken);
    //  history.push("/");
  };
  const userSignup = async (name, email, password, contact, address) => {
    console.log(email + " " + password);
    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        contact: contact,
        address: address,
      }),
    });
    const json = await response.json();
    // console.log(json);
    console.log(json.authtoken);
  };

  /******************Getting Products in bigger page 📢****************************/
  /**************************************************************************************/
  const cartfire = async (title, image, price, desc) => {
    console.log("event of cart fire is fired 🎃");
    const set = [
      {
        title: title,
        image: image,
        price: price,
        desc: desc,
      },
    ];
    const returndata = await set;
    console.log(returndata);
    setdatafor(returndata);
  };
  /**************************************************************************************/
  /**************************************************************************************/
  // const Orderbook = async()=>{

  // }

  return (
    <ShopContext.Provider
      value={{
        attributeset,
        sontrol,
        MenProduct,
        userLogin,
        userSignup,
        cartfire,
        datafor,
        getSpecial,
        articles,
        getMenShoe,
        cproduct,
        getallnotes,
        getCartItems,
        DeleteCartitems,
        AddCartItem,
        specialItems,
        getlocaldata,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopState;
