const techs = [
  'React', 'Node.js', 'Python', 'Flutter', 'React Native',
  'AWS', 'GCP', 'PostgreSQL', 'MongoDB', 'Docker',
  'Kubernetes', 'TensorFlow', 'Power BI', 'Next.js',
]

export default function TechStrip() {
  return (
    <div className="tech-strip">
      <div className="tech-head">Tecnologías que dominamos</div>
      <div className="tech-logos">
        {techs.map((t) => (
          <span className="tech-tag" key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}
