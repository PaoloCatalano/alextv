import React from "react"
const Form = () => {
  return (
    <div className="container">
      <section className="container-center">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form>
            <div>
              <input type="text" name="name" placeholder="name" />
              <input type="email" name="email" placeholder="email" />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </div>
  )
}

export default Form
