import React from 'react';
import './FocusAreas.css';

const focusAreas = [
  {
    icon: "🏛️",
    title: "Council Accountability",
    description: "Monitoring council policies and practices regarding animal control, shelter management, and public safety measures.",
    points: ["Policy review and analysis", "Freedom of information requests", "Public meeting attendance", "Community education"]
  },
  {
    icon: "🏥",
    title: "Shelter Transparency",
    description: "Advocating for transparency in shelter operations, including intake procedures, medical care, and outcome reporting.",
    points: ["Shelter practice documentation", "Medical care standards", "Outcome tracking", "Volunteer coordination"]
  },
  {
    icon: "⚖️",
    title: "Seized Dog Cases",
    description: "Monitoring cases involving seized dogs to ensure due process, appropriate care, and fair outcomes for both animals and owners.",
    points: ["Case documentation", "Legal process monitoring", "Welfare assessments", "Owner support resources"]
  },
  {
    icon: "📊",
    title: "Research & Policy Guidance",
    description: "Conducting comprehensive research to inform evidence-based policy recommendations and guide decision-making in animal welfare.",
    points: ["Policy impact analysis", "Evidence-based recommendations", "Statistical research and reporting", "Best practice identification"]
  },
  {
    icon: "📢",
    title: "Public Education",
    description: "Educating the community about responsible pet ownership, animal welfare laws, and their rights as citizens.",
    points: ["Educational resources", "Community workshops", "Media engagement", "Awareness campaigns"]
  },
  {
    icon: "🤝",
    title: "Stakeholder Engagement",
    description: "Building partnerships with veterinarians, rescue groups, legal experts, and community advocates to strengthen our impact.",
    points: ["Professional networks", "Rescue group partnerships", "Expert consultations", "Coalition building"]
  }
];

const FocusCard = ({ area }) => (
  <div className="focus-card">
    <div className="focus-icon">{area.icon}</div>
    <h3>{area.title}</h3>
    <p>{area.description}</p>
    <ul>
      {area.points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

const FocusAreas = () => {
  return (
    <section id="focus" className="focus-areas">
      <div className="section">
        <h2 className="section-title">Our Focus Areas</h2>
        <p className="section-subtitle">We work across multiple areas to ensure comprehensive animal welfare advocacy and transparency.</p>
        
        <div className="focus-areas-grid">
          {focusAreas.map((area, index) => (
            <FocusCard key={index} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;