// Thyroid Cancer Conference Gallery JavaScript

(function() {
    'use strict';
    
    console.log('🎥 Thyroid Conference page script loaded');
    
    // Gallery images and videos array - add your event photos here
    const galleryImages = [
        { src: 'https://www.genspark.ai/api/files/s/7KbMBJ45', alt: 'karim sarhane', type: 'video' },
        { src: 'https://www.genspark.ai/api/files/s/DNa2SABc', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/NkBUsYgC', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/U9rQjcy7', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/XFpOBaXM', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/hUepqXO3', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/nFOo8fT7', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/QmHBGrQq', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/vsbdWx1x', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/8c9e5NUe', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/jlciQToG', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/3WHu35eL', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/qMX8LyMr', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/cQBqLsKy', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/2tEGXq2e', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/pEMr5KAE', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/mFdDz2cy', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/qs3ITism', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/MHS6233I', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/YBWnQYAC', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/91rpTTgH', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/j9vVYv3P', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/n4urnsPy', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/ra8RCTJw', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/MjQTW3G2', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/dTnbCI1S', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/S4k6yppZ', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/PHjSi5HG', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/xcrWtwRi', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/1HhdliUC', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/MeZzNyTJ', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/B8V9sI5i', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/BsngvOtK', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/QC5dihmZ', alt: 'karim serhan', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/yHmytrAh', alt: 'karim sarhane', type: 'image' },
        { src: 'https://www.genspark.ai/api/files/s/qa0CWSN2', alt: 'karim serhan', type: 'image' }
    ];
    
    let currentImageIndex = 0;
    
    // Render gallery
    function renderGallery() {
        const galleryGrid = document.getElementById('galleryGrid');
        
        if (!galleryGrid) {
            console.error('Gallery grid not found');
            return;
        }
        
        // Clear placeholder
        galleryGrid.innerHTML = '';
        
        if (galleryImages.length === 0) {
            galleryGrid.innerHTML = '<p class="gallery-placeholder">Gallery images will be displayed here once uploaded.</p>';
            return;
        }
        
        // Render gallery items
        galleryImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.index = index;
            
            if (image.type === 'video') {
                // Render video item with play icon and VIDEO badge
                galleryItem.innerHTML = `
                    <video class="gallery-image" muted playsinline>
                        <source src="${image.src}" type="video/mp4">
                    </video>
                    <div class="gallery-overlay">
                        <i class="fas fa-play-circle"></i>
                    </div>
                    <div class="video-badge">
                        <i class="fas fa-video"></i> VIDEO
                    </div>
                `;
            } else {
                // Render image item
                galleryItem.innerHTML = `
                    <img src="${image.src}" alt="${image.alt}" class="gallery-image">
                    <div class="gallery-overlay">
                        <i class="fas fa-search-plus"></i>
                    </div>
                `;
            }
            
            // Add click event to open modal
            galleryItem.addEventListener('click', function() {
                openModal(index);
            });
            
            galleryGrid.appendChild(galleryItem);
        });
        
        console.log(`✅ Rendered ${galleryImages.length} gallery images`);
    }
    
    // Open image modal
    function openModal(index) {
        currentImageIndex = index;
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const caption = document.getElementById('modalCaption');
        
        if (!modal || !modalImg) {
            console.error('Modal elements not found');
            return;
        }
        
        const currentItem = galleryImages[index];
        
        modal.classList.add('active');
        
        // Check if it's a video
        if (currentItem.type === 'video') {
            // Replace img with video element
            modalImg.style.display = 'none';
            let videoEl = document.getElementById('modalVideo');
            
            if (!videoEl) {
                videoEl = document.createElement('video');
                videoEl.id = 'modalVideo';
                videoEl.className = 'modal-content';
                videoEl.controls = true;
                videoEl.autoplay = true;
                videoEl.playsinline = true;
                modalImg.parentNode.insertBefore(videoEl, modalImg);
            }
            
            videoEl.style.display = 'block';
            videoEl.innerHTML = `<source src="${currentItem.src}" type="video/mp4">`;
            videoEl.load();
            videoEl.play();
            caption.textContent = '';
        } else {
            // Show image
            const videoEl = document.getElementById('modalVideo');
            if (videoEl) {
                videoEl.style.display = 'none';
                videoEl.pause();
            }
            modalImg.style.display = 'block';
            modalImg.src = currentItem.src;
            caption.textContent = '';
        }
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal
    function closeModal() {
        const modal = document.getElementById('imageModal');
        const videoEl = document.getElementById('modalVideo');
        
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Pause video if playing
            if (videoEl) {
                videoEl.pause();
            }
        }
    }
    
    // Navigate to previous image
    function previousImage() {
        if (galleryImages.length === 0) return;
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        openModal(currentImageIndex);
    }
    
    // Navigate to next image
    function nextImage() {
        if (galleryImages.length === 0) return;
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        openModal(currentImageIndex);
    }
    
    // Initialize modal controls
    function initializeModalControls() {
        const closeBtn = document.getElementById('modalClose');
        const prevBtn = document.getElementById('modalPrev');
        const nextBtn = document.getElementById('modalNext');
        const modal = document.getElementById('imageModal');
        
        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        
        // Previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', previousImage);
        }
        
        // Next button
        if (nextBtn) {
            nextBtn.addEventListener('click', nextImage);
        }
        
        // Click outside image to close
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (!modal.classList.contains('active')) return;
            
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft') {
                previousImage();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            }
        });
        
        console.log('✅ Modal controls initialized');
    }
    
    // Make summary images clickable (enlarge on click)
    function initializeSummaryImages() {
        const summaryCards = document.querySelectorAll('.summary-card');
        
        summaryCards.forEach((card, index) => {
            card.addEventListener('click', function() {
                const img = card.querySelector('.summary-image');
                if (img) {
                    const modal = document.getElementById('imageModal');
                    const modalImg = document.getElementById('modalImage');
                    const caption = document.getElementById('modalCaption');
                    
                    if (modal && modalImg) {
                        modal.classList.add('active');
                        modalImg.src = img.src;
                        caption.textContent = '';
                        document.body.style.overflow = 'hidden';
                    }
                }
            });
        });
        
        console.log('✅ Summary images made clickable');
    }
    
    // Initialize on DOM ready
    function initialize() {
        renderGallery();
        initializeModalControls();
        initializeSummaryImages();
    }
    
    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
    
})();
