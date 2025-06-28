import React from "react";
import ImageDisplay from "./ImageDisplay";

function Home() {
  return (
    <main className="site-main" id="home">
      <div className="container">
        <section className="intro">
          <h2>Welcome to My Website</h2>
          <p>
            This is a simple React website to demonstrate how to use components.
            Each part of the page is a separate component.
          </p>
        </section>

        {/* New Image Component */}
        <ImageDisplay
          src="https://images.pexels.com/photos/31223301/pexels-photo-31223301/free-photo-of-dramatic-tokyo-skyline-at-twilight-with-tokyo-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Sample Display"
        />

        <section className="about" id="about">
          <h2>About Us</h2>
          <p>
            We build modern, responsive websites using React. This project is
            designed to help you learn about components and how to structure a
            React project.
          </p>
        </section>
        <section className="contact" id="contact">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out via email at{" "}
            <a href="mailto:contact@example.com">contact@example.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Home;
