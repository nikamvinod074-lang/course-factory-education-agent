import { BookOpen, Bot, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, PageHeader, ProgressBar } from "../components/UI";

export default function Dashboard() {
  return <>
    <PageHeader title="Welcome to your learning space" description="A personalised place to learn, practise and grow." />
    <div className="hero">
      <div><span className="eyebrow light">YOUR LEARNING JOURNEY</span><h2>Learn something new.<br/>Every single day.</h2><p>Your AI tutor helps make difficult topics easier to understand.</p><Link className="primary-button" to="/tutor">Meet your AI tutor →</Link></div>
      <div className="hero-symbol"><Bot size={76}/></div>
    </div>
    <div className="grid three">
      <Card title="Continue learning"><BookOpen/><p>Pick up from your last lesson.</p><Link to="/subjects">Explore subjects →</Link></Card>
      <Card title="Ask your tutor"><Bot/><p>Get explanations tailored to you.</p><Link to="/tutor">Start a conversation →</Link></Card>
      <Card title="Track your goals"><Target/><p>Keep an eye on your progress.</p><Link to="/progress">View progress →</Link></Card>
    </div>
    <Card title="Weekly learning goal"><div className="goal-row"><strong>3.5 / 5 hours</strong><span>70%</span></div><ProgressBar value={70}/></Card>
  </>;
}