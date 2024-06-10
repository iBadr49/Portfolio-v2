<script>
  import { enhance } from "$app/forms";
  import Contact from "./contact.svelte";

  let isSubmitting = false;
  let successMessage = "";
  let errorMessage = "";

  function handleEnhance({ formElement }) {
    const handleSubmit = async ({ result }) => {
      isSubmitting = false;
      successMessage = "";
      errorMessage = "";

      if (result.type === "failure") {
        errorMessage = result.data.error;
      } else if (result.type === "success") {
        formElement.reset();
        successMessage = result.data.message;
      }
    };
    return handleSubmit;
  }
</script>

<h2>Contact Me</h2>
<section>
  <Contact />
  <form
    method="POST"
    use:enhance={handleEnhance}
    on:submit={() => (isSubmitting = true)}
    class="contact-form"
  >
    <fieldset class="form-wrapper">
      <label for="name" class="form-label"><span>Name</span></label>
      <input
        type="text"
        name="name"
        id="name"
        required
        placeholder="John Doe"
        class="input-field"
      />

      <label for="email" class="form-label"><span>Email</span></label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="Johndoe@email.com"
        class="input-field"
      />

      <label for="message" class="form-label"><span>Message</span></label>
      <textarea
        name="message"
        id="message"
        required
        placeholder="Type your message here..."
        class="input-field"
      ></textarea>
    </fieldset>

    {#if successMessage}
      <p class="success-message">{successMessage}</p>
    {/if}

    {#if errorMessage}
      <p class="error-message">{errorMessage}</p>
    {/if}

    <button type="submit" class="submit-button" disabled={isSubmitting}>
      {#if isSubmitting}
        Sending...
      {:else}
        Send
      {/if}
    </button>
  </form>
</section>

<style>
  h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: var(--Boiling-magma);
    padding-left: 20px;
    text-decoration: underline var(--Tea-green);
  }

  section {
    display: flex;
    gap: 20px;
    padding: 20px;
  }

  /* Section Styling */
  form {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  /* Form Styling */
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  /* Wrapper for Form Elements */
  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: none;
  }

  /* Labels */
  .form-label {
    font-size: 20px;
  }

  /* Input and Textarea Styling */
  .input-field {
    width: 90%;
    padding: 8px 12px;
    font-size: 16px;
    font-family: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease-in-out;
    margin-bottom: 2rem;
  }

  .input-field:focus {
    border-color: var(--Tea-green);
    outline: none;
  }

  .submit-button {
    font-family: inherit;
    background-color: white;
    text-decoration: none;
    padding: 0.5rem 0.75rem;
    width: 7rem;
    font-weight: bold;
    text-transform: uppercase;
    font-size: larger;
    border: 1px solid var(--Tea-green);
    border-radius: 0.5rem;
    box-shadow: -2px 2px 0 0 var(--Tea-green);
    transition: 0.4s ease-out;
    cursor: pointer;
  }

  .submit-button:hover {
    transform: translate(-1px 1px);
    box-shadow: -1px 1px 0 0 var(--Tea-green);
  }

  form:invalid button {
    background-color: #6c757d;
    color: white;
    cursor: not-allowed;
  }

  /* Success and Error Messages */
  .success-message,
  .error-message {
    width: 90%;
    font-size: 14px;
    font-weight: bold;
    padding: 8px;
    border-radius: 4px;
  }

  .success-message {
    color: #116a26;
    background-color: #d4edda;
  }

  .error-message {
    color: #981926;
    background-color: #f8d7da;
  }

  /* Aanpassingen voor kleine schermen */
  @media screen and (max-width: 800px) {
    section {
      flex-direction: column;
    }

    .input-field {
      width: 100%;
    }
  }
</style>
