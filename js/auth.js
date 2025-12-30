async function register() {
  await fetch(API_URL + "/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value
    })
  });
  alert("Registered!");
}

async function login() {
  let res = await fetch(API_URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  let data = await res.json();
  localStorage.setItem("token", data.token);
  window.location.href = "dashboard.html";
}
