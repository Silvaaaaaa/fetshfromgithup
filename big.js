
// // Get Slider Items | Array.form [ES6 Feature]
// var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// // Get Number Of Slides
// var slidesCount = sliderImages.length;
// let indicators = document.getElementById("indicators")
// // Set Current Slide
// var currentSlide = 1;
// // Slide Number Element
// var slideNumberElement = document.getElementById('slide-number');
// // Previous and Next Buttons
// var nextButton = document.getElementById('next');
// var prevButton = document.getElementById('prev');



// let paginationelement = document.createElement("ul")
// paginationelement.setAttribute('id' , "pagination-ul" );

// for (let i  = 1 ; i <= slidesCount ; i++){
// let paginationli = document.createElement("li")
// paginationli.setAttribute("data-index" ,i ); // li == i ; 
// paginationli.appendChild(document.createTextNode(i)) 
// paginationelement.appendChild(paginationli);
// }
// indicators.appendChild(paginationelement);

// nextButton.onclick = nextslide ;
// prevButton.onclick = preventslide ;
// let pagitionalcreatedul = document.getElementById("pagination-ul")
// let paginationbullets =Array.from(document.querySelectorAll("#pagination-ul li "));

// for (let i = 0 ; i < paginationbullets.length ;i++){
//     paginationbullets[i].onclick = function (){
//         currentSlide =parseInt(this.getAttribute("data-index"));
//         thechecker();
//     }
// }
// thechecker() ; // put it in page only to operate it but you must interest with arrange 
// function nextslide(){
//     if(currentSlide == sliderImages.length){
//        return false ; 
//     }else{
//     currentSlide++ ;
//     thechecker();
//     }
// }
// function preventslide(){
//     if (currentSlide == 1 ){
//       return false ;
//     }else {
//     currentSlide--;
//     thechecker();
// }}
// function thechecker(){ // احا لسامشغلتهاش عشان تعمل كدا 
//     slideNumberElement.textContent ='slide '+  (currentSlide) + ' of ' + (slidesCount)
//     removeactive()
//     sliderImages[currentSlide - 1 ].classList.add("active");
//     pagitionalcreatedul.children[currentSlide - 1].classList.add('active');
//     if (currentSlide == 1){
//         prevButton.classList.add("disabled");  
//     }else{
//         prevButton.classList.remove("disabled");  
//     }
//     if (currentSlide == sliderImages.length){
//         nextButton.classList.add("disabled");  
//     }else{
//         nextButton.classList.remove("disabled");  
//     }

// }
// function removeactive() {
//     sliderImages.forEach(function(img){
//     img.classList.remove('active')
//     })
//     paginationbullets.forEach(function(ul){
//         ul.classList.remove('active')
//         })
// }
// to do list 
// Setting Up Variables
// let theInput = document.querySelector(".add-task input");
// let theAddButton = document.querySelector(".add-task .plus");
// let tasksContainer = document.querySelector(".tasks-content");
// let tasksCount = document.querySelector(".tasks-count span");
// let tasksCompleted = document.querySelector(".tasks-completed span");
// let noTasksMsg = document.querySelector(".no-tasks-message");

// window.onload = function(){
//     theInput.focus(); // call function focus from css 
// }

// theAddButton.addEventListener("click" , function(){
//      if (theInput.value === ""){
//         Swal.fire(
//             'Good job!',
//             'You clicked the button!',
//             'success'
//           )    }
//     else {
//          let noTasksMsg = document.querySelector(".no-tasks-message"); 
//     if (document.body.contains(document.querySelector(".no-tasks-message"))){
//         noTasksMsg.remove();
//     }
//        // Create Main Span Element
//     let mainSpan = document.createElement("span");

//     // Create Delete Button
//     let deleteElement = document.createElement("span");

//     // Create The Main Span Text
//     let text = document.createTextNode(theInput.value);

//     // Create The Delete Button Text
//     let deleteText = document.createTextNode("Delete");

//     // Add Text To Main Span
//     mainSpan.appendChild(text);

//     // Add Class To Main Span
//     mainSpan.className = 'task-box';

//     // Add Text To Delete Button
//     deleteElement.appendChild(deleteText);

//     // Add Class To Delete Button
//     deleteElement.className = 'delete';

//     // Add Delete Button To Main Span
//     mainSpan.appendChild(deleteElement);

//     // Add The Task To The Container
//     tasksContainer.appendChild(mainSpan);
//     // empy 
//     theInput.value = " "; 
//     theInput.focus();
//     calculateTasks();
//     }
// })
// document.addEventListener("click" ,function(e){
//     if(e.target.className == "delete"){
//         e.target.parentNode.remove()
        
//         if (tasksContainer.childElementCount == 0){
//             nomask()
//         }   
//     }
//     // Finish Task
//   if (e.target.classList.contains('task-box')) {

//     // Toggle Class 'finished'
//     e.target.classList.toggle("finished");

//   }
//   calculateTasks()
// })
// function nomask() {
//     let spanmessage = document.createElement("span");
//     let messagee = document.createTextNode("No Tasks To Show");
//     spanmessage.appendChild(messagee);
//     spanmessage.className = "no-tasks-message"; 
//     tasksContainer.appendChild(spanmessage)
//         tasksContainer.appendChild(spanmessage);
// }
// function calculateTasks() {

//     // Calculate All Tasks
//     tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  
//     // Calculate Completed Tasks
//     tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
  
//   }
// fetch git hup 
// Main Variables
// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
};

// Get Repos Function
function getRepos() {

  if (theInput.value == "") { // If Value Is Empty

    reposData.innerHTML = "<span>Please Write Github Username.</span>";

  } else {

    fetch(`https://api.github.com/users/${theInput.value}/repos`)

    .then((response) => response.json())

    .then((repositories) => {

      // Empty The Container
      reposData.innerHTML = '';

      // Loop On Repositories
      repositories.forEach(repo => {

        // Create The Main Div Element
        let mainDiv = document.createElement("div");

        // Create Repo Name Text
        let repoName = document.createTextNode(repo.name);

        // Append The Text To Main Div
        mainDiv.appendChild(repoName);

        // Create Repo URL Anchor
        let theUrl = document.createElement('a');

        // Create Repo Url Text
        let theUrlText = document.createTextNode("Visit");

        // Append The Repo Url Text To Anchor Tag
        theUrl.appendChild(theUrlText);

        // Add Thje Hypertext Reference "href"
        theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

        // Set Attribute Blank
        theUrl.setAttribute('target', '_blank');

        // Append Url Anchor To Main Div
        mainDiv.appendChild(theUrl);

        // Create Stars Count Span
        let starsSpan = document.createElement("span");

        // Create The Stars Count Text
        let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

        // Add Stars Count Text To Stars Span
        starsSpan.appendChild(starsText);

        // Append Stars Count Span To Main Div
        mainDiv.appendChild(starsSpan);

        // Add Class On Main Div
        mainDiv.className = 'repo-box';

        // Append The Main Div To Container
        reposData.appendChild(mainDiv);

      });

    });

  }

}