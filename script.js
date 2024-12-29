const students = [
  {
    id: 1,
    username: "Xabib",
    password: "password1",
    coins: "200 ta",
    hp: "300 ta",
  },
  {
    id: 2,
    username: "Asil",
    password: "password2",
    coins: "131 ta",
    hp: "323 ta",
  },
  {
    id: 3,
    username: "Kamron",
    password: "password3",
    coins: "243 ta",
    hp: "234 ta",
  },
  {
    id: 4,
    username: "Sarvar",
    password: "password4",
    coins: "132 ta",
    hp: "322 ta",
  },
  {
    id: 5,
    username: "Akrom",
    password: "password5",
    coins: "423 ta",
    hp: "233 ta",
  },
];

function selectTab(tab) {
  document
    .querySelectorAll(".tab")
    .forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = students.find(
    (student) => student.username === username && student.password === password
  );

  if (user) {
    document.getElementById("profileName").textContent = username;
    document.getElementById(
      "profileDetails"
    ).textContent = `FR - 17:00 | Islom Shahobiddinov`;
    document.getElementById("profileCoins").textContent = user.coins;
    document.getElementById("profileHp").textContent = user.hp;
    document.getElementById("profileCard").style.display = "block";
    document.querySelector(".container").style.display = "none";
    document.getElementById("logoutButton").style.display = "block";

    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);
  } else {
    alert("Login yoki parol xato.");
  }
}

function logout() {
  document.getElementById("profileCard").style.display = "none";
  document.querySelector(".container").style.display = "block";
  document.getElementById("logoutButton").style.display = "none";

  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
}

window.onload = function () {
  const loggedIn = localStorage.getItem("loggedIn");
  const username = localStorage.getItem("username");

  if (loggedIn && username) {
    const user = students.find((student) => student.username === username);

    if (user) {
      document.getElementById("profileName").textContent = username;
      document.getElementById(
        "profileDetails"
      ).textContent = `FR - 17:00 | Islom Shahobiddinov`;
      document.getElementById("profileCoins").textContent = user.coins;
      document.getElementById("profileHp").textContent = user.hp;
      document.getElementById("profileCard").style.display = "block";
      document.querySelector(".container").style.display = "none";
      document.getElementById("logoutButton").style.display = "block";
    }
  }
};
