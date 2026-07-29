import gradPhoto from '../assets/gradPhoto.png'

function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome to my portfolio! I'm <strong>Sean Canterbury</strong>, a
            backend software engineer currently working at{' '}
            <strong>Lowe's Home Improvement</strong>, where I build and maintain
            enterprise-scale inventory and logistics systems.
          </p>
          <p>
            I graduated from the{' '}
            <strong>University of North Carolina at Charlotte</strong> in May
            2024 with a <strong>B.S. in Computer Science</strong> (concentration
            in Software, Systems, and Networking), a{' '}
            <strong>Minor in Mathematics</strong>, and a{' '}
            <strong>3.5 GPA</strong>. I was honored with the Chancellor's List
            and Dean's List multiple semesters.
          </p>
          <p>
            I'm passionate about building software that solves real problems and
            I'm always looking for opportunities to learn and grow as a
            developer.
          </p>
        </div>
        <div className="about-image">
          <img src={gradPhoto} alt="Sean Canterbury" className="about-photo" />
        </div>
      </div>
    </section>
  )
}

export default About
