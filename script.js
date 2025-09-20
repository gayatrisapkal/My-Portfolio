// ================= Existing effects ==================
document.addEventListener('DOMContentLoaded', () => {
  // Typewriter effect for name
  
  const nameEl = document.getElementById('name');
  const full = 'Gayatri Sapkal';
  let i = 0;
  nameEl.textContent = '';
  const speed = 70;
  (function type() {
    if (i <= full.length) {
      nameEl.textContent = full.slice(0, i);
      i++;
      setTimeout(type, speed);
    } else {
      // small glow pulse after finish
      nameEl.classList.add('done');
    }
  })();

  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // toggle mobile nav
  const navToggle = document.getElementById('navToggle');
  navToggle &&
    navToggle.addEventListener('click', () => {
      document.querySelector('.nav__links').classList.toggle('open');
    });

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // skill logo click glow animation
  document.querySelectorAll('.skill-logos img').forEach((logo) => {
    logo.addEventListener('click', () => {
      logo.classList.remove('animate'); // reset if clicked again quickly
      void logo.offsetWidth; // reflow hack to restart animation
      logo.classList.add('animate');
    });
  });
});

// ================== Contact Form (EmailJS) ==================
(function () {
  emailjs.init("TQ51RnEsNt92dXzeR"); // Replace with your Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.querySelector("[name=name]").value;
  const email = form.querySelector("[name=email]").value;
  const message = form.querySelector("[name=message]").value;

  // Show loading status
  document.getElementById("statusMsg").textContent = "Sending...";

  emailjs
    .send("service_7kyzjp7", "template_dbcsi4c", {
      from_name: name,
      from_email: email,
      message: message,
      title: "Portfolio Contact Form",
    })
    .then(
      function (response) {
        console.log("SUCCESS", response);
        document.getElementById("statusMsg").textContent =
          "Message sent successfully!";
        form.reset();
      },
      function (error) {
        console.log("FAILED", error);
        document.getElementById("statusMsg").textContent =
          "Failed to send message, please try again.";
      }
    );
});
