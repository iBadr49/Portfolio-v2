<section class="about-section">
  <div class="image-content">
    <img src="images/1.svg" alt="my_apple_moji" />
  </div>
  <div class="text-content">
    <h2 id="about">About</h2>
    <p>
      I'm a Frontend Design and Development student based in Amsterdam, the
      Netherlands. I strive to independently design and develop complex yet
      user-friendly interactive applications for the web that everyone can use.
    </p>

    <p>
      I started making websites in 2021, and in 2022, I pursued a course where I
      could further develop my passion for web design & development. Since then,
      I have been able to build various websites for myself and for others.
    </p>

    <div class="button-group">
      <!-- <a href="/" class="work-button">See my work</a> -->
      <a href="#lets-talk" class="contact-button">Contact Me</a>
    </div>
  </div>
</section>

<style>
  .about-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }

  .image-content {
    display: flex;
  }

  .image-content img {
    height: auto;
    max-width: 25rem;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .text-content h2 {
    text-decoration: underline var(--Tea-green);
    font-size: 3rem;
    color: var(--Boiling-magma);
  }

  .text-content p {
    max-width: 600px;
    margin-top: 1em;
  }

  .button-group {
    margin-top: 1.5em;
    display: flex;
    gap: 1em;
  }

  .work-button,
  .contact-button {
    text-decoration: none;
    padding: 10px 10px;
    color: black;
    text-transform: uppercase;
    font-size: larger;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--Tea-green);
    border-radius: 0.5rem;
    box-shadow: -2px 2px 0 0 var(--Tea-green);
    transition: 0.4s ease-out;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      transform: translate(-1px 1px);
      box-shadow: -1px 1px 0 0 var(--Tea-green);
      /* color: var(--Tea-green); */
    }
  }



  /* Media Queries */
  @media (max-width: 768px) {
    .about-section {
      flex-direction: column;
      align-items: flex-start;
    }

    .image-content {
      display: none;
    }

    .text-content {
      align-items: flex-start;
    }
  }
</style>

