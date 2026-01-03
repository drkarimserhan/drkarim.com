// Video Page - Ensure content visibility and handle image loading
(function() {
    'use strict';
    
    console.log('🎥 Video page script loaded');
    
    // Function to ensure grid is visible
    function ensureGridVisibility() {
        const videoListSection = document.querySelector('.video-list-section');
        const videoGrid = document.querySelector('.video-grid');
        const videoCards = document.querySelectorAll('.video-card');
        
        // Force the section to be visible (override main.js animations)
        if (videoListSection) {
            videoListSection.style.opacity = '1';
            videoListSection.style.transform = 'translateY(0)';
            videoListSection.style.visibility = 'visible';
            console.log('✅ Video section made visible');
        }
        
        if (videoGrid) {
            videoGrid.style.display = 'grid';
            videoGrid.style.opacity = '1';
            videoGrid.style.visibility = 'visible';
            console.log('✅ Video grid made visible');
        }
        
        if (videoCards.length > 0) {
            videoCards.forEach((card, index) => {
                card.style.display = 'flex';
                card.style.opacity = '1';
                card.style.visibility = 'visible';
            });
            console.log(`✅ ${videoCards.length} video cards made visible`);
        } else {
            console.warn('⚠️ No video cards found');
        }
    }
    
    // Function to handle image loading errors
    function handleImageErrors() {
        const thumbnails = document.querySelectorAll('.video-thumbnail img');
        
        thumbnails.forEach(img => {
            // If image fails to load, try alternative thumbnail size
            img.addEventListener('error', function() {
                const videoId = this.src.match(/\/vi\/([^\/]+)\//);
                if (videoId && videoId[1]) {
                    // Try alternative thumbnail URL
                    if (this.src.includes('maxresdefault')) {
                        this.src = `https://img.youtube.com/vi/${videoId[1]}/hqdefault.jpg`;
                        console.log(`⚠️ Fallback to hqdefault for video ${videoId[1]}`);
                    } else if (this.src.includes('hqdefault')) {
                        this.src = `https://img.youtube.com/vi/${videoId[1]}/mqdefault.jpg`;
                        console.log(`⚠️ Fallback to mqdefault for video ${videoId[1]}`);
                    }
                }
            }, { once: true });
            
            // Force load if image is not loading
            if (!img.complete) {
                const tempSrc = img.src;
                img.src = '';
                img.src = tempSrc;
            }
        });
        
        console.log(`✅ Image error handling setup for ${thumbnails.length} thumbnails`);
    }
    
    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            ensureGridVisibility();
            handleImageErrors();
        });
    } else {
        ensureGridVisibility();
        handleImageErrors();
    }
    
    // Also run on window load (backup)
    window.addEventListener('load', function() {
        ensureGridVisibility();
        console.log('✅ Window loaded - grid visibility ensured');
    });
    
    // Emergency fallback - ensure visibility after 1 second
    setTimeout(function() {
        ensureGridVisibility();
        console.log('✅ Emergency fallback - grid visibility ensured');
    }, 1000);
    
    // Additional fallback after 3 seconds
    setTimeout(function() {
        ensureGridVisibility();
        const videoGrid = document.querySelector('.video-grid');
        const videoCards = document.querySelectorAll('.video-card');
        
        if (videoGrid && videoCards.length > 0) {
            console.log('✅ Final check: Grid and cards are visible');
        } else {
            console.error('❌ Final check failed: Content not visible');
        }
    }, 3000);
    
})();
