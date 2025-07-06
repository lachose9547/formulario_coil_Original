document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const messageDisplay = document.getElementById("message");
  const loginButton = document.getElementById("loginButton");
  const cancelButton = document.getElementById("cancelButton");
  const passwordToggle = document.getElementById("passwordToggle");
  const eyeIcon = document.getElementById("eyeIcon");

  function handleLogin() {
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    let valid = true;

    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    usernameInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");
    messageDisplay.textContent = "";

    if (usernameValue === "") {
      document.getElementById("usernameError").textContent = "El usuario es obligatorio.";
      usernameInput.classList.add("input-error");
      valid = false;
    }

    if (passwordValue === "") {
      document.getElementById("passwordError").textContent = "La contraseña es obligatoria.";
      passwordInput.classList.add("input-error");
      valid = false;
    }

    if (valid) {
      messageDisplay.textContent = "¡Enviado con Éxito!";
      messageDisplay.classList.add("success-message");
      clearFormFields();
    }
  }

  function clearFormFields() {
    usernameInput.value = "";
    passwordInput.value = "";
    usernameInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    messageDisplay.textContent = "";
    messageDisplay.classList.remove("success-message");
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }

  function togglePasswordVisibility() {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
  }

  loginButton.addEventListener("click", handleLogin);
  cancelButton.addEventListener("click", clearFormFields);
  passwordToggle.addEventListener("click", togglePasswordVisibility);

  passwordInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLogin();
    }
  });
});
