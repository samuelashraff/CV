import "../styles/base.css";
import "../styles/experience.css";

export default function Education() {
  const education = [
    {
      degree: "Master of Technology in Computer Science",
      school: "Aalto University",
      dates: "2023 – 2025",
      details: [
        "Specialized in Web Technologies, Applications, and Science.",
        "Master's Thesis: Automatic Speech Recognition (ASR) technologies,\
         model fine-tuning, and practical applications.",
      ],
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Aalto University",
      dates: "2019 – 2023",
      details: [
        "Focused on software engineering, algorithms, and data structures using Scala, Python, Node.js, TypeScript, Docker, and C.",
        "Also worked with many databases including PostgreSQL, MySQL, and MongoDB.",
      ],
    },
  ];
  return (
    <div className="main-container centered">
      <h1>Education</h1>
      <div className="experience-cards">
        {education.map((edu) => (
          <div className="experience-card" key={edu.degree + edu.school}>
            <div className="experience-title">{edu.degree}</div>
            <div className="experience-company">{edu.school}</div>
            <div className="experience-dates">{edu.dates}</div>
            <div className="experience-content expanded">
              {edu.details.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
