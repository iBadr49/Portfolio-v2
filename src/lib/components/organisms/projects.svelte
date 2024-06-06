<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  // Scroll Observer variables
  let ScrollObserver;
  let valueAtPercentage;

  // GitHub API variables
  const username = "iBadr49";
  const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=50`;

  // Store for repositories
  let repos = writable([]);

  // Function to filter repositories based on specific names
  function filterRepos(repos) {
    const specificRepos = [
      "visual-thinking",
      "i-love-web-app",
      "my-first-chatroom",
    ];
    return repos.filter((repo) =>
      specificRepos.includes(repo.name.toLowerCase())
    );
  }

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

    if (typeof window !== "undefined") {
      const aat = await import("aatjs"); // Import from node_modules
      ScrollObserver = aat.ScrollObserver;
      valueAtPercentage = aat.valueAtPercentage;

      function initializeCards() {
        const cardsContainer = document.querySelector(".cards");
        const cards = document.querySelectorAll(".card");
        cardsContainer.style.setProperty("--cards-count", cards.length);
        cardsContainer.style.setProperty(
          "--card-height",
          `${cards[0].clientHeight}px`
        );

        Array.from(cards).forEach((card, index) => {
          const offsetTop = 20 + index * 20;
          card.style.paddingTop = `${offsetTop}px`;
          if (index === cards.length - 1) {
            return;
          }
          const toScale = 1 - (cards.length - 1 - index) * 0.1;
          const nextCard = cards[index + 1];
          const cardInner = card.querySelector(".card-inner");
          ScrollObserver.Element(nextCard, {
            offsetTop,
            offsetBottom: window.innerHeight - card.clientHeight,
          }).onScroll(({ percentageY }) => {
            cardInner.style.scale = valueAtPercentage({
              from: 1,
              to: toScale,
              percentage: percentageY,
            });
            cardInner.style.filter = `brightness(${valueAtPercentage({
              from: 1,
              to: 0.6,
              percentage: percentageY,
            })})`;
          });
        });
      }

      // Call initializeCards function
      initializeCards();
    }
  });
</script>

<h2>Projects</h2>

<div class="cards">
  {#each $repos as repo}
    <div class="card" data-index="0">
      <div class="card-inner">
        <div class="card-image-container">
          <img class="card-image" src="images/1.svg" alt="Repository_image" />
          <ul>
            <li>⭐ {repo.stargazers_count}</li>
            <li>👁️ {repo.watchers_count}</li>
            <!-- <li>🍴 {repo.forks_count} |</li> -->
            <li>💻 {repo.language}</li>
          </ul>
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

<div class="space"></div>

<style>
  .card {
    position: sticky;
    top: 0;
  }

  h2 {
    margin-bottom: 1.5rem;
    text-decoration: underline var(--Tea-green);
    font-size: 3rem;
    color: var(--Boiling-magma);
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
    transform: translate(-1px 1px);
    box-shadow: -1px 1px 0 0 var(--Tea-green);
  }

  .card-links {
    display: flex;
    gap: 10px; /* Adjust gap as needed */
    padding-top: 10px;
  }

  .card-inner {
    will-change: transform;
    background: white;
    border-radius: 20px;
    display: flex;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px hsla(265.3, 20%, 10%, 35%);
    transform-origin: center top;
  }

  h2 {
    padding: 0 0 0 20px;
  }

  .cards {
    width: 100%;
    height: 40%;
    padding: 20px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: repeat(var(--cards-count), var(--card-height));
    gap: 40px 0;
  }

  .card-image-container {
    display: flex;
    flex-direction: column;
    width: 40%;
    flex-shrink: 0;
    align-items: center;
  }

  ul {
    list-style: none;
    padding: 10px;
    display: flex;
    gap: 10px;
    font-size: 20px;
    color: #16263a;
  }

  a {
    text-decoration: none;
  }

  .card-image {
    width: 70%;
    height: 70%;
    object-fit: cover;
    aspect-ratio: 1;
  }

  .card-content {
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
  }

  .card-title {
    font-size: 48px;
    font-weight: 600;
    color: black;
  }

  .card-description {
    font-size: 20px;
  }

  .space {
    height: 100px;
  }

  @media (max-width: 600px) {
    .card-inner {
      flex-direction: column;
    }

    .card-image-container {
      width: 100%;
    }

    .card-image {
      aspect-ratio: 16 / 9;
    }

    .card-content {
      padding: 30px 20px;
    }
  }
</style>
