import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value without synchronously setting state in the effect body
    let mounted = true
    const onChange = () => {
      if (mounted) setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    mql.addEventListener("change", onChange)
    
    // Use timeout to avoid synchronous setState warning
    setTimeout(() => {
      if (mounted) setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }, 0)
    
    return () => {
      mounted = false
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return !!isMobile
}
