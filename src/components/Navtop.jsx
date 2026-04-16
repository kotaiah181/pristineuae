import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header = () => {
  const [hideTopbar, setHideTopbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHideTopbar(true);
      } else {
        setHideTopbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={hideTopbar ? "topbar hide" : "topbar"}>
        <TopBar />
      </div>

      <Navbar />
    </>
  );
};

export default Header;