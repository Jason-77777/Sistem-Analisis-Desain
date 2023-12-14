document.addEventListener('DOMContentLoaded', function () {
    var loadingText = document.getElementById('loading-text');
    var successText = document.getElementById('success-text');
    var loadingSpinner = document.getElementById('loading-spinner');
    var successActions = document.getElementById('success-actions');
    var cekRincianLink = document.getElementById('cek-rincian');

    setTimeout(function () {
        loadingText.style.display = 'none';
        loadingSpinner.style.display = 'none';
        successText.style.display = 'block';
        successActions.style.display = 'block';
    }, 3000);

    cekRincianLink.addEventListener('click', function () {
        // Redirect ke halaman selanjutnya
        window.location.href = 'rinciantiket.html';
    });
});
