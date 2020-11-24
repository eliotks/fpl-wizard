import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// The only job of this component is to scroll to the top of the page on every page change.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}