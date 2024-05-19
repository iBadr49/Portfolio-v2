<script>
</script>

<header>
  <h1>Badev.</h1>

  <nav>
    <ul>
      <li><a href="/">About</a></li>
      <li><a href="/">My work</a></li>
      <li class="last-item"><a href="/">Let's Talk</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    text-transform: uppercase;
    font-size: larger;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); 

  }

  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    display: inline;
    padding: 10px;
  }

  .last-item {
    text-decoration: none;

    padding: 5px 5px;
    margin-right: 10px;
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
      color: var(--Tea-green);
    }
  }

  nav ul li a {
    text-decoration: none;
    color: black;
  }
</style>
