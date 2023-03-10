var openModal = document.getElementById('open-modal');
var closeModal = document.getElementById('close-modal');
var modal = document.getElementById('modal');

openModal.addEventListener('click', function() {
  modal.style.display = 'flex';
  console.log("dsad");
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});


