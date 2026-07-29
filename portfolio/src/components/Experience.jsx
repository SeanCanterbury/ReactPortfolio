import gileroLogo from '../assets/GileroLogo.jpeg'

const experiences = [
  {
    role: 'Associate Software Engineer',
    company: "Lowe's Home Improvement",
    image: null,
    dates: 'June 2025 - Present',
    description:
      'Backend Engineer on the Store Inventory Management System, supporting large-scale retail operations.',
    bullets: [
      'Led integration of automated API and regression testing into CI/CD pipelines using Testkube, enabling tests to run automatically on release deployments.',
      'Designed, enhanced, and maintained Spring Boot Microservices powering store inventory, replenishment, and freight workflows.',
      'Integrated Kafka event producers/consumers to enable asynchronous inventory updates.',
      'Increased unit test coverage by 10-15% across core services, improving deployment confidence and reducing production defects.',
      'Developed and validated REST APIs handling product delivery workflows and inventory state transitions.',
      'Provided routine production support and on-call assistance, diagnosing and resolving issues impacting live store operations.',
      'Collaborated cross-functionally with frontend teams to validate backend changes, stage releases, and support feature demos to business stakeholders.',
      'Contributed to security and reliability initiatives, including Snyk vulnerability remediation and automated deployment workflows.',
    ],
    tech: 'Java, Spring Boot, Kafka, PostgreSQL, CI/CD, Automated Testing, REST APIs, Testkube',
  },
  {
    role: 'Associate Software Engineer - Launchpad Program',
    company: "Lowe's Home Improvement",
    image: null,
    dates: 'March 2025 - June 2025',
    description:
      'Completed an intensive internal engineering program emphasizing test-driven development and full-stack application design.',
    bullets: [
      'Built a full-stack order scheduling web application using Spring Boot, React, and SQL.',
      'Delivered a complete MVP within a 2-week capstone sprint, meeting all functional and quality requirements.',
      'Applied strict TDD practices, achieving 100% unit test coverage across both backend and frontend services.',
      'Designed features supporting personal and public projects, order placement, delivery scheduling, item lifecycle management, and cost calculations.',
      'Implemented role-aware behavior for delivered vs pending inventory items and project order state transitions.',
    ],
    tech: 'Java, Spring Boot, React, TypeScript, SQL, H2 Database, JUnit, Jest, Cypress',
  },
  {
    role: 'Software Quality Engineer Intern',
    company: 'Gilero',
    image: gileroLogo,
    dates: 'September 2024 - March 2025',
    description: null,
    bullets: [
      'Performed software verification and validation for medical device systems in compliance with IEC 62304 and ISO 14971.',
      'Conducted risk analysis, integration testing, and unit testing across multiple software tools.',
      'Led execution of CAPA procedures to address compliance-critical issues in regulated environments.',
    ],
    tech: null,
  },
]

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.role}`} className="experience-card">
            <div className="experience-header">
              <div className="experience-header-left">
                {exp.image && (
                  <img src={exp.image} alt={exp.company} className="experience-logo" />
                )}
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
              </div>
              <span className="experience-dates">{exp.dates}</span>
            </div>
            {exp.description && (
              <p className="experience-description">{exp.description}</p>
            )}
            {exp.bullets && (
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
            {exp.tech && (
              <p className="experience-tech"><strong>Tech:</strong> {exp.tech}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
