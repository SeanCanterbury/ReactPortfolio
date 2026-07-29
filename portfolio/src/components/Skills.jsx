const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'TypeScript', 'SQL', 'Python'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'Kafka', 'REST APIs', 'Microservices'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'H2'],
  },
  {
    category: 'Testing',
    skills: ['JUnit', 'Jest', 'Mockito', 'TDD', 'Testkube', 'Cypress', 'Automated API Testing'],
  },
  {
    category: 'DevOps & Practices',
    skills: ['Git', 'CI/CD Pipelines', 'Snyk', 'Linux', 'Agile/Scrum', 'Distributed Systems', 'Production Support', 'System Design'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="skills-category">
            <h3 className="skills-category-title">{cat.category}</h3>
            <div className="skills-list">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
