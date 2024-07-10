import { useEffect } from "react";

import MyAbout from "./components/MyAbout";

export default function AboutUs() {
  useEffect(function () {
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    scrollToTop();
  }, []);

  return <MyAbout />;
}
