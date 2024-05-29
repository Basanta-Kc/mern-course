document.getElementById("fetchUserBtn").addEventListener("click", async () => {
  //1. get usename from form input
  const username = document.getElementById("username").value;
  const { user, followers } = await getGithubUserDataByUserName(username);
  renderUserInfo(user);
  renderUserFollowers(followers);
});

const renderUserInfo = (user) => {
  const userInfoHolder = document.getElementById("userInfo");
  userInfoHolder.innerHTML = `
        <h2>${user.name}</h2>
        <img src="https://avatars.githubusercontent.com/u/35004754?v=4" alt="Basanta-Kc" width="100">
        <p>Aspiring Programmer.Web / Mobile Developer</p>
        <p>Public Repos: 12</p>
        <p>Followers: 26</p>
  `;
};

const renderUserFollowers = (followers) => {
  const followersInfoHolder = document.getElementById("followersInfo");
  let followersList = "<ul>";
  for (let follower of followers) {
    followersList += `<li>
            <img src="https://avatars.githubusercontent.com/u/1147825?v=4" alt="swdreams" width="50">
            <a href="https://github.com/swdreams" target="_blank">${follower.login}</a>
        </li>`;
  }

  followersList += "</ul>";

  followersInfoHolder.innerHTML = followersList;
};

async function getGithubUserDataByUserName(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  const user = await res.json();
  const followersRes = await fetch(user.followers_url);
  const floowersData = await followersRes.json();
  return {
    user,
    followers: floowersData,
  };
}
