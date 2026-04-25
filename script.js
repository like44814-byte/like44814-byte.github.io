window.addEventListener("DOMContentLoaded", function() {

  emailjs.init("e66d4pm-WwE_KYtok"); // ✅ FIX THIS

  const form = document.getElementById("bookingForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_w098aqk",     // ✅ this is correct here
      "template_2021cyf",    // ✅ this is correct
      this
    )
    .then(() => {
      alert("✅ Booking request sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("❌ Booking Failed. Check console.");
    });
  });

});



const toggleBtn = document.querySelector('.toggle-btn');
        const dropdownMenu = document.querySelector('.dropdown-menu');
        
        toggleBtn.addEventListener('click', () => {
            dropdownMenu.classList.toggle('open');
            const isOpen = dropdownMenu.classList.contains('open');
            toggleBtn.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
        });

        // Close menu on link click
        document.querySelectorAll('.dropdown-menu a').forEach(link => {
            link.addEventListener('click', () => {
                dropdownMenu.classList.remove('open');
                toggleBtn.querySelector('i').className = 'fas fa-bars';
            });
        });