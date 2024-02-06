// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const heartClass = document.querySelectorAll(".like-glyph");
function clickedHeart(e){
  const heart = e.target
  mimicServerCall(url="http://mimicServer.example.com")
  .then (function (){
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart";
    } else {
      heart.innerText = EMPTY_HEART
      heart.className = "";
    }
  })
  .catch(function(error){
    const errorModal = document.querySelector('#modal');
    errorModal.className = "";
    errorModal.innerText = error
    setTimeout(() => errorModal.className = "hidden", 3000);
  })
}

for (const heart of heartClass){
  heart.addEventListener('click', clickedHeart)
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);

  });
}
