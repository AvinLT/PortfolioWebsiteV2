/*
Page Modified By: Avin Lanson         
Date: 27/09/2024

Code was adapted from :

https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API
https://codepen.io/craigbuckler/pen/oNNjKbX
*/

//My linkedIn data that will be shared
const dataToShare = {
  title: "LinkedIn Profile",
  text: "Avin Lanson Tharakan",
  url: "https://www.linkedin.com/in/avintharakan/",
};

// This function allows me to share data using Web share API
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share
async function share() {
  try {
    await navigator.share({
      title: dataToShare.title,
      text: dataToShare.text,
      url: dataToShare.url,
    });
  } catch (error) {
    console.error("Error sharing o:", error);
  }
}

// share the data on LinkedIn Function
function shareOnLinkedIn() {
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    dataToShare.url
  )}`;
  window.open(linkedInUrl, "_blank");
}

// share the data on Facebook Function
function shareOnFacebook() {
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    dataToShare.url
  )}`;
  window.open(facebookUrl, "_blank");
}

//will call shareLinkedIn function when user clicks button
document.getElementById("shareLinkedIn").addEventListener("click", () => {
  try {
    shareOnLinkedIn();
  } catch (err) {
    console.error("Error sharing o:", error);
  }
});

//will call share function when user clicks button
document.getElementById("share").addEventListener("click", () => {
  try {
    share();
  } catch (err) {
    console.error("Error sharing o:", error);
  }
});

//Call shareFacebook function when the user clicks on the button
document.getElementById("shareFacebook").addEventListener("click", () => {
  try {
    shareOnFacebook();
  } catch (err) {
    console.error("Error sharing o:", error);
  }
});
