import { RefObject, useState, useEffect, useMemo } from "react"

export default function useOnScreen(ref: RefObject<Element>) {
    if(typeof window == "undefined") return 
    const [isIntersecting, setIntersecting] = useState(false)
  
    const observer = useMemo(() => new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting)
    ), [ref])
  
  
    useEffect(() => {
        if(!ref.current) return
      observer.observe(ref?.current)
      return () => observer.disconnect()
    }, [])
  
    return isIntersecting
  }