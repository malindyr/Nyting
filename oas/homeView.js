let index = 0;

function homeView() {
  model.app.page = "home";

  htmlPic = "";
  htmlPic = model.app.currentUser.displayedUsers[index].profilePicture;
  console.log(index);

  document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="home-no-pic-yes">
      <button class="no-button" onclick="noClicked()">No</button>
      <img class="home-profilePic" src="${htmlPic}">
      <button class="yes-button" onclick="yesClicked()">Yes</button>
    </div>
    <button onclick="chatPageView(index)" class="heihei-button">chat</button>
  `;

  /*show picture in middle, iterate by 1 when click yes or no
    
    when click yes, push into liked users*/
}
