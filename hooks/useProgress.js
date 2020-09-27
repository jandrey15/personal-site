import { useEffect, useState, useRef } from 'react'

function useProgress () {
  const [max, setMax] = useState(0)

  const refProgress = useRef(0)

  useEffect(() => {
    const docHeight = document.body.clientHeight
    const winHeight = window.innerHeight

    const max = docHeight - winHeight
    setMax(max)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    refProgress.current.value = scrollTop
  }

  return [max, refProgress]
}
export default useProgress
