import React, { useEffect, useState } from 'react'

const ToTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <a href="#top" className="back-to-top d-flex align-items-center justify-content-center" style={{ opacity: scrollPosition !== 0 ? 0.7 : 0 }}>
      <i className="bi bi-arrow-up-short"></i>
    </a >
  )
}

export default ToTopButton