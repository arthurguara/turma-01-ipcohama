const CORRECT_USERNAME = "Tuk";
const CORRECT_PASSWORD = "senha123";

function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("is-visible", "is-success", "is-error");
  toast.classList.add("is-visible", type === "success" ? "is-success" : "is-error");

  clearTimeout(showToast.hideTimer);
  showToast.hideTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 3000);
}

function validate() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
    showToast("Login successful.", "success");
    return true;
  }

  showToast("Incorrect username or password.", "error");
  return false;
}

document.getElementById("login-btn").addEventListener("click", validate);
