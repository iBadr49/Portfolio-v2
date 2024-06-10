<script>
  import IconCheckmark from "../atoms/icons/iconCheckmark.svelte";

  // Experience data
  const experienceData = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
        { name: "JavaScript", level: "Basic" },
        { name: "Sveltekit", level: "Experienced" },
        { name: "Nuxt", level: "Intermediate" },
        { name: "Vue", level: "Intermediate" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node JS", level: "Basic" },
        { name: "Express", level: "Basic" },
        { name: "GraphQL (Hygraph/Prismic)", level: "Intermediate" },
        { name: "Api's", level: "Intermediate" },
      ],
    },
  ];
</script>

<section>
  <h2 class="main-title">Skills</h2>
  <div class="experience-container">
    <div class="experiences">
      {#each experienceData as experience}
        <div class="experience">
          <h3 class="subtitle">{experience.title}</h3>
          <div class="skills-container">
            {#each experience.skills as skill}
              <div class="skill">
                <IconCheckmark />
                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
    <!-- <div class="image-container">
      <img src="images/file.png" alt="" />
    </div> -->
  </div>
</section>

<style>
  section {
    padding: 20px;
  }

  .main-title {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: var(--Boiling-magma);
  }

  .main-title {
    text-decoration: underline var(--Tea-green);
  }

  .experience {
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: white;
    border-radius: 2rem;
    box-shadow: 0 25px 50px -12px hsla(265.3, 20%, 10%, 35%);
    max-width: 50%;
  }

  div p {
    color: gray;
    font-size: 16px;
  }

  .subtitle {
    /* color: rgb(68, 68, 68); */
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 2rem;
    text-align: center;
  }

  .experience-container {
    display: flex;
    justify-content: space-between;
  }

  .experiences {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    gap: 20px;
    flex: 1;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    /* justify-content: space-around; */
  }

  .skill {
    display: flex;
    width: 10rem;
    gap: 0.2rem;
  }

  /* .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .image-container img {
    max-width: 100%;
    height: auto;
  } */

  @media (max-width: 686px) {
    .experiences {
      display: flex;
      flex-direction: column;
    }

    .experience {
      max-width: 100%;
    }
  }
</style>
