import { fail } from "@sveltejs/kit";
import fetch from "node-fetch";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Validate form data
    const validationResult = validateFormData(name, email, message);
    if (validationResult.error) {
      return fail(400, {
        error: validationResult.error,
        values: { name, email, message },
      });
    }

    // Prepare payload
    const payload = preparePayload(name, email, message);

    try {
      // Send API request
      const result = await sendApiRequest(payload);

      if (result.success) {
        return {
          success: true,
          message: "Your message has been sent successfully!",
          values: { name: "", email: "", message: "" },
        };
      } else {
        return fail(500, {
          error: "Something went wrong. Please try again!",
          values: { name, email, message },
        });
      }
    } catch (err) {
      return fail(500, {
        error: "Something went wrong. Please try again!",
        values: { name, email, message },
      });
    }
  },
};

function validateFormData(name, email, message) {
  if (!name || !email || !message) {
    return { error: "Form incorrectly filled out!" };
  }
  return { error: null };
}

function preparePayload(name, email, message) {
  return {
    access_key: "02090303-9b03-4f47-8b0a-428b3a48044f",
    name: name,
    email: email,
    message: message,
  };
}

async function sendApiRequest(payload) {
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  return {
    success: response.ok,
    result,
  };
}
