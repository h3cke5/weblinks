const clientId = '883842800368640041';
const redirectUri = 'https://h3cke5.website/dashboard';

const button = document.getElementById('login_button');
const steam = document.getElementById('steam');
const spotify = document.getElementById('spotify');
const instagram = document.getElementById('instagram');

button.addEventListener("click", () => {
  return window.location.assign(`https://discord.gg/amathyzin`);
}); //Se quiser botar login https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=identify%20email

steam.addEventListener("click", () => {
  window.location.href = "https://steamcommunity.com/id/".concat('h3cke5');
});

instagram.addEventListener("click", () => {
  window.location.href = "https://github.com/".concat('h3cke5'); //Meta Link Do Insta!
});

spotify.addEventListener("click", () => {
  window.location.href = "https://open.spotify.com/user/".concat('31flun36vcuq7bhw44memvwaxn5u'), '_concat'
})

const inputElement = document.getElementsByClassName("text")[0];

inputElement.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    window.open("https://discordapp.com/users/" + '817378339228221440', "_blank");
    inputElement.value = "";
  }
});

const cypher = document.getElementById('cypher');
cypher.addEventListener('click', () => {
  window.location.href = 'https://h3cke5.website';
});