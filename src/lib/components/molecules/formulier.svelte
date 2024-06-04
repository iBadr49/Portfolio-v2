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

</style>
