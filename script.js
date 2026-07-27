// Navigation toggle
    function toggleMenu() {
        document.getElementById('nav-links').classList.toggle('active');
    }

    // Close menu on link click
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click view', () => {
            document.getElementById('nav-links').classList.remove('active');
        });
    });

    // Smooth scroll
    function scrollToSection(id) {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Back to top visibility
    const backBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backBtn.style.display = 'flex';
        } else {
            backBtn.style.display = 'none';
        }
    });

    // Order product
    function orderProduct(productName) {
        alert('You selected: ' + productName + '.\n\nPlease scroll to the Payment section, complete your Mobile Money payment, then send your screenshot on WhatsApp for confirmation.');
    }

    <script>
const paymentForm = document.getElementById('paymentForm');
const message = document.getElementById('message');

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent normal submit

    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value.trim();
    const amount = document.getElementById('amount').value.trim();

    if (!name || !number || !amount) {
        message.textContent = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    // WhatsApp link
    const waNumber = '233596357871'; // your WhatsApp number
    const waMessage = `Payment Confirmation:\nName: ${name}\nMobile Money Number: ${number}\nAmount Paid: ${amount}`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    message.textContent = "Redirecting to WhatsApp...";
    message.style.color = "green";

    // Open WhatsApp
    window.open(waLink, '_blank');

    // Optional: reset form
    paymentForm.reset();
});
</script>

    // Gallery toggle
    function toggleGallery() {
        const full = document.querySelector('.gallery-full');
        const btn = document.querySelector('.view-gallery-btn');
        if (full.style.display === 'none') {
            full.style.display = 'grid';
            btn.textContent = 'Hide Gallery';
        } else {
            full.style.display = 'none';
            btn.textContent = 'View Full Gallery';
        }
    }

    // FAQ accordion
    function toggleFaq(el) {
        const item = el.parentElement;
        const answer = item.querySelector('.faq-a');
        const isOpen = answer.classList.contains('open');

        // Close all
        document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

        // Toggle current
        if (!isOpen) {
            answer.classList.add('open');
            item.classList.add('open');
        }
    }

    // Animate on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product, .about-card, .why-item, .t-card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
