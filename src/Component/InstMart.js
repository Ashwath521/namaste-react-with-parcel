import { useState } from "react";
import { description } from "../config";

const Section = ({ title, des, isVisibility, setIsVisibility }) => {
  return (
    <div className="border-2 m-10 p-4 border-red-500 rounded-md">
      <h1 className="text-lg font-bold">{title}</h1>
      <button
        onClick={() => {
          if (isVisibility) {
            setIsVisibility(false);
            console.log("1", isVisibility);
          } else {
            setIsVisibility(true);
            console.log("2", isVisibility);
          }
        }}
      >
        {isVisibility ? "Hide" : "Show"}
      </button>
      <p className="text-md">{isVisibility && des}</p>
    </div>
  );
};

const InstMart = () => {
  const [isVisibility, setIsVisibility] = useState("");

  return (
    <>
      <Section
        title="About section"
        des={description}
        isVisibility={isVisibility === "about"}
        setIsVisibility={() => {
          setIsVisibility(isVisibility === "about" ? "" : "about");
        }}
      />
      <Section
        title="Team section"
        des={description}
        isVisibility={isVisibility === "team"}
        setIsVisibility={() => {
          setIsVisibility(isVisibility === "team" ? "" : "team");
        }}
      />
      <Section
        title="Product section"
        des={description}
        isVisibility={isVisibility === "product"}
        setIsVisibility={() => {
          setIsVisibility(isVisibility === "product" ? "" : "product");
        }}
      />
    </>
  );
};

export default InstMart;
