// 1. Grab the button so something happens when there is a click 
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
 const number = document.querySelector('input[type="number"]').value;
  
 //Prepare our Ajax request 

 const xhr = new XMLHttpRequest();

 xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

 xhr.onload = function() {
     if(this.status === 200) {
        const response = JSON.parse(this.responseText); //Converts the response into an object 
         
        let output = ''; 

       if(response.type === 'success') {
        response.value.forEach(function(joke){ 
            output += `<li>${joke.joke}</li>`;
        });
      } else {
         output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output; 

    }
}

 xhr.send();

e.preventDefault();

}