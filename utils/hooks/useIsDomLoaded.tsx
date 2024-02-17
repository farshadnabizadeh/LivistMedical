import { useEffect, useState } from "react";


const useIsDomLoaded = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
      setDomLoaded(true);
    }, []);

    return domLoaded
}

export default useIsDomLoaded
