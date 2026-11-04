export function PageHeader({ eyebrow = "YOUR PERSONAL AI TUTOR", title, description }) {
  return <div className="page-header">
    <span className="eyebrow">{eyebrow}</span>
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </div>;
}

export function Card({ title, children }) {
  return <section className="card">{title && <h2>{title}</h2>}{children}</section>;
}

export function PrimaryButton({ children, ...props }) {
  return <button className="primary-button" {...props}>{children}</button>;
}

export function ProgressBar({ value = 0 }) {
  return <div className="progress-track"><div className="progress-value" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} /></div>;
}