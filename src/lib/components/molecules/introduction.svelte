<script>
</script>

<section class="container">
  <div class="intro">
    <p>👋  My name is Badr. I live in Amsterdam, and I am a ...</p>
    <div class="main-role">
      <p>Frontend Developer</p>
    </div>
    <div class="skills">
      <p>
        html <span class="circle"></span> css <span class="circle"></span>
        javascript <span class="circle"></span> figma
        <span class="circle"></span>
        frameworks <span class="circle"></span> cms <span class="circle"></span>
        api
      </p>
    </div>
    <div class="buttons">
      <a href="/" class="button">Contact me </a>  
      <a href="/" class="button">My work</a>

      <!-- <img src="/images/arrow.svg" alt=""> -->
    </div>
  </div>
  <div class="image">
    <img src="/images/2.svg" alt="" />
  </div>
</section>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  .intro {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    margin-top: 5rem;
  }

  .main-role {
    font-size: 7rem;
    color: var(--Boiling-magma);
    font-weight: bold;
  }

  .skills p {
    text-transform: uppercase;
  }

  .circle {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: var(--Tea-green);
    border-radius: 50%;
    margin: 0 5px;
  }

  .buttons {
    display: flex;
    padding-top: 5rem;
    justify-content: center;
  }


  .button {
    text-decoration: none;
    margin-right: .7rem;
    color: black;
    text-transform: uppercase;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--Boiling-magma);
    border-radius: 0.5rem;
    box-shadow: -2px 2px 0 0 var(--Boiling-magma);
    transition: 0.4s ease-out;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      transform: translate(-1px 1px);
      box-shadow: -1px 1px 0 0 var(--Boiling-magma);
      /* color: var(--Tea-green); */
      /* background-color: var(--Boiling-magma); */
    }
  }

  .image img {
    height: auto;
    width: 100%;
    margin-top: 5rem;
    /* margin-left: 7rem; */
  }
</style>
