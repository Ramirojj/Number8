
document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });
    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

    // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });
////Ramdom seeker///
document.addEventListener("DOMContentLoaded", function() {

  const  greeting = document.querySelector("h1.greeting");
  
  const animations = ["bounce", "flash", "pulse", "rubberBand"];
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

    greeting.classList.add("animate__animated", `animate__${randomAnimation}`);






    
});


////No ballon selected///
 
 document.getElementById("submit").addEventListener("click", function() {
  const balloonsChecked = document.querySelectorAll('.form-check-input:checked').length > 0;
  if (!balloonsChecked) {
    
    const toastEl = document.getElementById('liveToast');

  const toast = new bootstrap.Toast(toastEl);
    toast.show();
  }
});
/////


////Add ability to check / uncheck all balloons with a single click//
const tButton  =  document.getElementById("tBalloon");

const   checkBoxes = document.querySelectorAll('.form-check-input');

tButton.addEventListener("click", function()
 {

  const allChecked = [...checkBoxes].every(checkbox => checkbox.checked);

  checkBoxes.forEach(checkbox => {

    checkbox.checked = !allChecked; 


    checkbox .dispatchEvent(new Event ("c")); 
});

});
////

// Hovering the mouse over a checkbox//////////
const h1 = document.querySelector( 'h1.greeting');

const labels = document.querySelectorAll('.form-check-label');

labels.forEach(label => {

  label.addEventListener('mouseover' , function 
    ()
      {
    const color = this.getAttribute('for');
    h1.style.color = color; });

  label.addEventListener('mouseout', function () {
    h1.style.color = 'dimgray';
  });
});
  });



