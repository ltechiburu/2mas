<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email_address = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

    // Check for empty fields
    if (
        empty($_POST['name']) ||
        empty($_POST['email']) ||
        empty($_POST['phone']) ||
        empty($_POST['message']) ||
        !$email_address
    ) {
        echo "No arguments Provided!";
        return false;
    }

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Set Formspree endpoint URL
    $formspreeEndpoint = 'https://formspree.io/f/xpzvqrbn'; // Replace with your Formspree endpoint

    // Create the email and send the message via Formspree
    $email_subject = "Website Contact Form:  $name";
    $email_body = "You have received a new message from your website contact form.\n\n" . "Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";

    // Redirect to Formspree endpoint
    header("Location: $formspreeEndpoint");
    exit();
}
?>
<!-- Your HTML form code remains unchanged -->
<form action="https://formspree.io/f/xpzvqrbn" method="POST">
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
<!-- Read the Formbutton docs at formspree.io/formbutton/docs. See more examples at codepen.io/formspree -->
<script src="https://formspree.io/js/formbutton-v1.min.js" defer></script>
<script>
  /* paste this line in verbatim */
  window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
  /* customize formbutton below*/
  formbutton("create", {
    action: "https://formspree.io/f/xpzvqrbn",
    title: "How can we help?",
    fields: [
      {
        type: "email",
        label: "Email:",
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }
    ],
    styles: {
      title: {
        backgroundColor: "gray"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });
</script>
