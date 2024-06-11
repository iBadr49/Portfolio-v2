<script>
  import Logo from "$lib/components/atoms/logo.svelte";
</script>

<header>
  <Logo />

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
    padding: 0 13px 0 13px;
    text-transform: uppercase;
    font-size: larger;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-color: var(--Errical-white);
    z-index: 10;
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

  nav ul li a {
    text-decoration: none;
    color: black;
  }

  .last-item {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--Tea-green);
    border-radius: 0.5rem;
    box-shadow: -2px 2px 0 0 var(--Tea-green);
    transition: 0.4s ease-out;
    cursor: pointer;
  }

  .last-item:hover {
    transform: translate(-1px 1px);
    box-shadow: -1px 1px 0 0 var(--Tea-green);
  }

  @media (max-width: 400px) {
    header {
      display: block;
      padding-bottom: 18px;
    }

    nav ul li {
      padding: 10px 10px 10px 0;
    }
  }
</style>
