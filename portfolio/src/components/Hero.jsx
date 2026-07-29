function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, my name is</p>
        <h1 className="hero-name">Sean Canterbury</h1>
        <h2 className="hero-tagline">Backend Software Engineer | Java / Spring Boot</h2>
        <p className="hero-description">
          Backend software engineer building and maintaining enterprise-scale
          inventory and logistics systems in a distributed microservices
          environment. Strong focus on test-driven development, CI/CD
          automation, and production reliability.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
