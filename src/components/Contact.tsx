function Contact() {
  return (
    <section className="section contact">
      <h2 className="reveal">Contact</h2>
      <p className="reveal reveal-delay-1">
        Get in touch with me. I should respond within the next 24 hours.
      </p>

      <form className="contact-form reveal reveal-delay-2" action="https://formspree.io/f/xblqkgaz" method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} required placeholder="Your message" />
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      <div className="contact-links reveal reveal-delay-3">
        <a href="mailto:dineshsinnath@gmail.com">Email</a>
        <a href="https://github.com/Crackle2K" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/dsinnath" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}

export default Contact
