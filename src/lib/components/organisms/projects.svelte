<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  // GitHub API variables
  const username = "iBadr49";
  const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`;

  // Store for repositories
  let repos = writable([]);

  // Index to track the current position in the carrousel
  let currentIndex = 0;

  // Function to filter repositories based on specific names
  function filterRepos(repos) {
    const specificRepos = [
      "visual-thinking",
      "buurtcampus-web",
      "i-love-web-app",
    ];
    return repos.filter((repo) =>
      specificRepos.includes(repo.name.toLowerCase())
    );
  }

  // Object to map repo names to image URLs
  const repoImages = {
    "visual-thinking": "images/visualthinking.school.png",
    "buurtcampus-web": "images/buurtcampus.png",
    "i-love-web-app": "images/iloveweb.png",
  };

  onMount(async () => {
    // Fetch and set repositories
    try {
      const response = await fetch(apiUrl);
      let data = await response.json();
      data.sort((a, b) => b.stargazers_count - a.stargazers_count);
      repos.set(filterRepos(data));
    } catch (error) {
      console.error("Error fetching repos:", error);
    }
  });

  // Function to navigate to the next item in the carrousel
  function next() {
    currentIndex = (currentIndex + 1) % $repos.length;
  }

  // Function to navigate to the previous item in the carrousel
  function prev() {
    currentIndex = (currentIndex - 1 + $repos.length) % $repos.length;
  }
</script>

<h2 class="main-title" id="my-work">Projects</h2>

<div class="carrousel-container">
  <button on:click={prev} class="carrousel-button prev">&lt;</button>

  <div class="carrousel">
    {#each $repos as repo, index}
      <div class="card {index === currentIndex ? 'active' : 'inactive'}">
        <div class="card-inner">
          <div class="card-image-container">
            <img
              class="card-image"
              src={repoImages[repo.name.toLowerCase()]}
              alt="Repository_image"
            />
          </div>
          <div class="card-content">
            <h3 class="card-title">{repo.name}</h3>
            <p class="card-description">
              {repo.description || "No description available."}
            </p>
            <div class="card-links">
              <a href={repo.homepage} target="_blank">Website</a>
              <a href={repo.html_url} target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <button on:click={next} class="carrousel-button next">&gt;</button>
</div>

<style>
  .main-title {
    padding: 20px;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: var(--Boiling-magma);
  }

  .main-title {
    text-decoration: underline var(--Tea-green);
  }
  .carrousel-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  }

  .carrousel {
    display: flex;
    transition: transform 0.4s ease-in-out;
    width: 100%;
    height: 100%;
  }

  .card {
    min-width: 100%;
    transition: opacity 0.4s ease;
    opacity: 0;
    display: none;
  }

  .card.active {
    opacity: 1;
    display: block;
  }

  .card-inner {
    background: white;
    border-radius: 8px;
    display: flex;
    overflow: hidden;
    box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    width: 90%;
  }

  .carrousel-button {
    position: absolute;
    top: 50%;
    border-radius: 8px;
    transform: translateY(-50%);
    background-color: var(--Tea-green);
    color: black;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    z-index: 2;
  }

  .carrousel-button.prev {
    left: 10px;
  }

  .carrousel-button.next {
    right: 10px;
  }

  .card-image-container {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-image {
    width: 90%;
    height: 90%;
    object-fit: contain;
    padding: 10px;
  }

  .card-content {
    padding: 40px 10px;
    display: flex;
    flex-direction: column;
  }

  .card-title {
    font-size: 2.3rem;
    font-weight: 600;
    color: black;
  }

  .card-links {
    display: flex;
    gap: 10px;
    padding-top: 10px;
  }

  a {
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    color: black;
    text-transform: uppercase;
    font-size: larger;
    border: 1px solid var(--Tea-green);
    border-radius: 0.5rem;
    box-shadow: -2px 2px 0 0 var(--Tea-green);
    transition: 0.4s ease-out;
    cursor: pointer;
  }

  a:hover {
    transform: translate(-1px, 1px);
    box-shadow: -1px 1px 0 0 var(--Tea-green);
  }

  /* @media (min-width: 1000px) {
    .card-inner{
      height: 400px;}

  } */

  @media (max-width: 900px) {
    .card-inner {
      flex-direction: column;
    }

    .card-image-container {
      width: 100%;
    }

    .card-content {
      padding: 30px 20px;
    }
  }
</style>
