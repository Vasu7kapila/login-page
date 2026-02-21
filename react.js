document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    
    btn.disabled = true;
    btn.innerHTML = `
        <span class="animate-spin inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"></span>
        Personalizing your experience...
    `;
    
    setTimeout(() => {
        // Change 'index.html' to your actual dashboard filename
        window.location.href = 'index.html'; 
    }, 2000);
});