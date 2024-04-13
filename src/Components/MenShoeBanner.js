import React from "react";

function MenShoeBanner() {
  const image = "nike-zoom.gif";
  return (
    <div>
      <div
        className="men-banner"
        style={{
          width: "95%",
          minHeight: "50vh",
          background: "black",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img
          className="helloimg"
          src={require(`../img/${image}`)}
          alt=""
          style={{ maxWidth: "400px", maxHeight: "400px", margin: "auto" }}
        />
        <div
          className="title"
          style={{
            color: "white",
            width: "50%",
            height: "100%",
            margin: "auto",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Men collection🤍</h3>
          helloo Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam ullam neque sint eveniet soluta. Eaque quidem voluptatibus
          ipsa sapiente neque officiis. Similique placeat nesciunt ipsa dolorum.
          Repudiandae optio, itaque inventore culpa aliquid non at!😍
        </div>
      </div>
    </div>
  );
}

export default MenShoeBanner;
