import { useEffect, useState } from "react"


const useHasScrolled = () => {
    const [ isScrolled, setIsScrolled ] = useState<boolean>(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 47){
                setIsScrolled(true)
            }else {
                setIsScrolled(false)
            }

        })
      return () => {
        window.removeEventListener('scroll', () => {
        })
      }
    }, [])

    return isScrolled

} 


export default useHasScrolled