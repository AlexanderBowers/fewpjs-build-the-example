// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal')
modal.classList.toggle('hidden')

//function to handle errors
function showError(err){
  setTimeout(function(){
    modal.classList.toggle('hidden')
    modal.innerHTML = err
  }, 5000)
  modal.classList.toggle('hidden')
}

//run this when page loads
document.addEventListener("DOMContentLoaded",() => {
  //looking for our hearts
  let emptyHeart = document.querySelector('.like-glyph')
  emptyHeart.addEventListener('click', handleClick)

  function handleClick(e){
    //simulates a server repsonse
    mimicServerCall().then(resp => console.log(resp)).catch(err => showError(err))


      //add class to emptyHeartonsole
      e.target.classList.toggle('activated-heart')
      e.target.innerHTML = FULL_HEART
    }
    })


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
