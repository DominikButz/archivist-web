
import { useEffect, useState } from 'react';


const windowSizeProvider = (isClient) =>  {
    const [windowSize, setWindowSize] = useState([
        isClient ? window.innerWidth : 0,
        isClient ? window.innerHeight : 0,
      ]);
    
    useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return windowSize

}

export default windowSizeProvider



