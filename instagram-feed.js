/**
 * Instagram Feed Loader
 * 
 * INSTRUCTIONS TO ENABLE AUTOMATION:
 * 1. Go to https://developers.facebook.com/
 * 2. Create an App > Select "Other" > "Business"
 * 3. Add "Instagram Basic Display" product
 * 4. Create a specialized Test User or use your own account
 * 5. Generate a "User Token" from the User Token Generator
 * 6. Paste the long text string into the ACCESS_TOKEN variable below.
 * 
 * NOTE: Tokens expire. For a permanent solution without backend, use a service like Elfsight or Behold.so.
 */

const INSTAGRAM_CONFIG = {
    // PASTE YOUR GENERATED TOKEN HERE INSIDE THE QUOTES
    ACCESS_TOKEN: '', 
    
    // How many posts to show
    LIMIT: 8,
    
    // Fallback mode: Shows your specific Instagram videos
    FALLBACK_IMAGES: [
        // Video 1
        { 
            url: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=400', 
            type: 'VIDEO', 
            videoUrl: 'https://www.instagram.com/p/DUEbTTUDayr/', 
            link: 'https://www.instagram.com/p/DUEbTTUDayr/',
            caption: 'Watch on Instagram'
        },
        // Video 2
        { 
            url: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=400', 
            type: 'VIDEO', 
            videoUrl: 'https://www.instagram.com/p/DUBfoHADeoy/', 
            link: 'https://www.instagram.com/p/DUBfoHADeoy/',
            caption: 'Watch on Instagram'
        },
        // Video 3
        { 
            url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=400', 
            type: 'VIDEO', 
            videoUrl: 'https://www.instagram.com/p/DTv3HOPjUuQ/', 
            link: 'https://www.instagram.com/p/DTv3HOPjUuQ/',
            caption: 'Watch on Instagram'
        },
        // Video 4
        { 
            url: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=400', 
            type: 'VIDEO', 
            videoUrl: 'https://www.instagram.com/p/DTizvjNDeC5/', 
            link: 'https://www.instagram.com/p/DTizvjNDeC5/',
            caption: 'Watch on Instagram'
        },
        // Video 5
        { 
            url: 'https://images.unsplash.com/photo-1594035910387-fea4779426e9?auto=format&fit=crop&q=80&w=400', 
            type: 'VIDEO', 
            videoUrl: 'https://www.instagram.com/p/DSvN5rnDdpm/', 
            link: 'https://www.instagram.com/p/DSvN5rnDdpm/',
            caption: 'Watch on Instagram'
        }
    ]
};

async function initInstagramFeed() {
    const container = document.getElementById('insta-feed-container');
    const track = container ? container.querySelector('.social-track') : null;
    
    if (!container || !track) return;

    // If no token is configured, use fallback mode immediately
    if (!INSTAGRAM_CONFIG.ACCESS_TOKEN || INSTAGRAM_CONFIG.ACCESS_TOKEN.length < 10) {
        console.warn('Instagram Feed: No Access Token configured. Using fallback images.');
        renderFeed(INSTAGRAM_CONFIG.FALLBACK_IMAGES, track);
        return;
    }

    try {
        // Fetch data from Instagram Graph API
        const response = await fetch(
            `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=${INSTAGRAM_CONFIG.LIMIT}&access_token=${INSTAGRAM_CONFIG.ACCESS_TOKEN}`
        );

        if (!response.ok) {
            throw new Error(`Instagram API Error: ${response.statusText}`);
        }

        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            // Transform API data to our format
            let posts = data.data.map(post => ({
                url: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
                videoUrl: post.media_type === 'VIDEO' ? post.media_url : null,
                type: post.media_type, // IMAGE, VIDEO, or CAROUSEL_ALBUM
                link: post.permalink,
                caption: post.caption || ''
            }));
            
            // 🎯 PRIORITY: Show VIDEOS first (User Request)
            // This filters the list to put videos at the front, or only show videos if preferred
            const videos = posts.filter(p => p.type === 'VIDEO');
            const images = posts.filter(p => p.type !== 'VIDEO');
            
            // Combine: Videos first, then images
            posts = [...videos, ...images];

            renderFeed(posts, track);
        } else {
            throw new Error('No posts found');
        }

    } catch (error) {
        console.error('Instagram Feed Error:', error);
        // On error, show fallback so the site doesn't look broken
        renderFeed(INSTAGRAM_CONFIG.FALLBACK_IMAGES, track);
    }
}

function renderFeed(posts, track) {
    track.innerHTML = ''; // Clear loading/existing items

    // Duplicate posts to create an "infinite" scroll effect if there are enough items
    // If not enough items, just show them once
    const itemsToShow = posts.length < 5 ? [...posts, ...posts, ...posts] : [...posts, ...posts];

    itemsToShow.forEach(post => {
        const card = document.createElement('div');
        card.className = 'social-card';
        
        // Icon based on type
        let iconSvg = '';
        if (post.type === 'VIDEO') {
            // Play icon
            iconSvg = `<svg class="social-icon-lg animate-bounce" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
        } else {
            // Instagram icon
            iconSvg = `<svg class="social-icon-lg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`;
        }

        // HTML Template
        if (post.type === 'VIDEO' && post.videoUrl) {
            if (post.videoUrl.includes('instagram.com')) {
                // RENDER IFRAME DIRECTLY (Automatic load)
                let embedUrl = post.videoUrl;
                if (!embedUrl.endsWith('/')) embedUrl += '/';
                // Using embed/ instead of embed/captioned for cleaner look
                // adding autoplay=1 (works on some browsers/versions)
                embedUrl += 'embed/?autoplay=1&muted=1';
                
                card.innerHTML = `
                   <iframe src="${embedUrl}" 
                       style="width:100%; height:100%; border:0; border-radius: 24px; background: white; pointer-events: auto;" 
                       scrolling="no" 
                       allowtransparency="true" 
                       allowfullscreen="true"
                       allow="autoplay; encrypted-media; picture-in-picture">
                   </iframe>
               `;
               // Add playing class initially
               card.classList.add('is-playing');
            } else {
                // Direct video fallback
                card.innerHTML = `
                    <video src="${post.videoUrl}" autoplay muted loop playsinline style="width:100%; height:100%; object-fit:cover; border-radius: 24px;"></video>
                `;
            }
        } else {
            // Image: Link to Instagram
            card.innerHTML = `
                <img src="${post.url}" alt="${post.caption ? post.caption.substring(0, 20) : 'Instagram Post'}" loading="lazy">
                <a href="${post.link}" target="_blank" class="social-overlay">
                    ${iconSvg}
                </a>
            `;
        }
        
        track.appendChild(card);
    });
}

// Function to handle video playback "in-place"
function playInPlace(element, videoUrl) {
    const card = element.closest('.social-card');
    card.classList.add('is-playing');
    
    // Check if it's an Instagram link
    if (videoUrl.includes('instagram.com')) {
        // Use Instagram Embed
        let embedUrl = videoUrl;
        if (!embedUrl.endsWith('/')) embedUrl += '/';
        embedUrl += 'embed/?autoplay=1&muted=1';

        card.innerHTML = `
            <iframe src="${embedUrl}" 
                style="width:100%; height:100%; border:0; border-radius: 24px; background: white;" 
                scrolling="no" 
                allowtransparency="true" 
                allowfullscreen="true"
                allow="autoplay; encrypted-media; picture-in-picture">
            </iframe>
        `;
    } else {
        // Direct video file (mp4)
        card.innerHTML = `
            <video src="${videoUrl}" controls autoplay playsinline style="width:100%; height:100%; object-fit:cover; border-radius: 24px;"></video>
        `;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initInstagramFeed);