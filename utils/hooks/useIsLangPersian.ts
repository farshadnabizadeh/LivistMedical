import router from "next/router"
import { useEffect, useState } from "react";

const useIsLangPersian = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    
  useEffect(() => {
    setDomLoaded(true);
  }, []);
    
   
    const isPersian = domLoaded && router?.locale === 'fa'
    return isPersian
}

export default useIsLangPersian