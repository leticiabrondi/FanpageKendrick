document.addEventListener('DOMContentLoaded', function () {
    const albumImages = document.querySelectorAll('.miniatura');
    const albumImageContainer = document.getElementById('album-image-container');
    const albumImage = document.getElementById('album-image');
    const closeModal = document.getElementById('close-modal');

    albumImages.forEach(img => {
        img.addEventListener('click', function () {
            const album = this.getAttribute('data-album');
            let imageSrc = '';

            switch (album) {
                case 'gnx':
                    imageSrc = 'assets/img/gnx.jpg';
                    break;
                case 'morale':
                    imageSrc = 'assets/img/morale.jpg';
                    break;
                case 'damn':
                    imageSrc = 'assets/img/damn.jpg';
                    break;
                case 'butterfly':
                    imageSrc = 'assets/img/pimp.jpg';
                    break;
                case 'kidcity':
                    imageSrc = 'assets/img/good.jpg';
                    break;
                default:
                    imageSrc = '';
                    break;
            }

            if (imageSrc) {
                albumImage.src = imageSrc;
                albumImageContainer.style.display = 'flex';
            }
        });
    });

    closeModal.addEventListener('click', () => {
        albumImageContainer.style.display = 'none';
        albumImage.src = '';
    });
});
