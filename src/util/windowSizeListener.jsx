
const windowResizingHandler = (setWindowSize) => {
  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  window.addEventListener('resize', handleWindowResize);

  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
}

export default windowResizingHandler



