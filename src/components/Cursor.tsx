import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById('cur')!
    const ring = document.getElementById('cur-ring')!
    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx - 4 + 'px'
      cur.style.top = my - 4 + 'px'
    }
    document.addEventListener('mousemove', onMove)

    let frame: number
    const anim = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx - 16 + 'px'
      ring.style.top = ry - 16 + 'px'
      frame = requestAnimationFrame(anim)
    }
    frame = requestAnimationFrame(anim)

    const grow = () => {
      cur.style.transform = 'scale(2.5)'
      ring.style.transform = 'scale(1.6)'
      ring.style.opacity = '.8'
    }
    const shrink = () => {
      cur.style.transform = 'scale(1)'
      ring.style.transform = 'scale(1)'
      ring.style.opacity = '.5'
    }

    const targets = document.querySelectorAll('a, button, .srv, .sym, .tech-tag, .proc-step')
    targets.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div id="cur" />
      <div id="cur-ring" />
    </>
  )
}
