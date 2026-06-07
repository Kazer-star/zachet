const openBtn = document.getElementById('openModal');
const overlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeModal');

openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    overlay.classList.add('modal-overlay--active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function() {
    overlay.classList.remove('modal-overlay--active');
    document.body.style.overflow = '';
});

overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
        overlay.classList.remove('modal-overlay--active');
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        overlay.classList.remove('modal-overlay--active');
        document.body.style.overflow = '';
    }
});