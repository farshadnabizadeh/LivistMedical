import { useEffect, useState } from "react";



const useIsMobile = () => {

    if(typeof window == 'undefined') return
    const [width, setWidth] = useState<number>(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
   return width <= 768;
}

export default useIsMobile
