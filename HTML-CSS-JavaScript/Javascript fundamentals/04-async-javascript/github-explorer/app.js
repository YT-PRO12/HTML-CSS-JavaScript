const input = document.querySelector("#username");
const button = document.querySelector("#search");
const status = document.querySelector("#status");
const result = document.querySelector("#result");

async function getProfile(username) {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}`
  );

  if (!response.ok) {
    throw new Error(`GitHub returned ${response.status}`);
  }

  return response.json();
}

button.addEventListener("click", async () => {
  const username = input.value.trim();
  if (!username) return;

  status.textContent = "Loading...";
  result.textContent = "";

  try {
    const profile = await getProfile(username);

    result.textContent = JSON.stringify({
      name: profile.name,
      username: profile.login,
      publicRepos: profile.public_repos,
      followers: profile.followers,
      profile: profile.html_url
    }, null, 2);

    status.textContent = "Loaded";
  } catch (error) {
    status.textContent = error.message;
  }
});
