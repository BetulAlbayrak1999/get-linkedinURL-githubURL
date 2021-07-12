function myFunction () {
    // get nameSurname from html file
    var nameSurname = document.querySelector("#nameSurname");
    let NameSurname = "Betül ALBAYRAK";
     nameSurname.innerHTML = NameSurname;

    // get age from html file
    var age = document.querySelector("#age");
    let Age = 22;
    age.innerHTML = Age;

    var hideBtn = document.getElementById("btn-name-age");
    hideBtn.style.display = 'none';
}




// get linkedinUrl 
var linkedinUrl = document.getElementById("linkedinUrl");
linkedinUrl.href = "https://www.linkedin.com/in/bet%C3%BCl-albayrak-61725a185/";
linkedinUrl = linkedinUrl.href.innerHTML;

//get githubUrl 
var githubUrl = document.getElementById("githubUrl");
githubUrl.href = "https://github.com/BetulAlbayrak1999";
githubUrl = githubUrl.href.innerHTML;
