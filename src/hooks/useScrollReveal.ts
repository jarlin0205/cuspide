import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el, i) => {
      ;(el as HTMLElement).style.transitionDelay = `${(i % 4) * 0.08}s`
      obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])
}
