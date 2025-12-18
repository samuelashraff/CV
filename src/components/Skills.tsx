import "../styles/base.css";

export default function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "SQL",
    "React.js",
    "Node.js",
    "Docker",
    "GraphQL",
    "Redis",
  ];
  return (
    <section className="skills-section">
      <h3>Skills</h3>
      <div className="skills-pills">
        {skills.map((skill) => (
          <span className="skill-pill" key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}