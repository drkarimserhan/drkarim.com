# Hero Section - Video & Photo Setup Guide

## 🎬 Overview

Your website now includes a **background video** with **your standing photo overlay** in the hero section, just like on drkarim.com!

---

## 📁 Required Files

You need to add one media file:

### 1. Background Video (OPTIONAL)
- **File Path:** `videos/hero-background.mp4`
- **Recommended Specs:**
  - Format: MP4 (H.264 codec)
  - Resolution: 1920x1080 (Full HD) or higher
  - Duration: 10-30 seconds (loops automatically)
  - File Size: Under 10MB (compressed)
  - Aspect Ratio: 16:9
  - Frame Rate: 30fps
  
### 2. Your Standing Photo ✅ ALREADY ADDED!
- **File Path:** `images/dr-serhan-standing.png` ✅
- **Status:** Downloaded and integrated!
- **Size:** 246 KB (optimized)
- **Format:** PNG with transparent background

---

## 📂 Folder Structure

Current project structure:

```
dr-karim-serhan-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── videos/                    ← CREATE THIS FOLDER (optional)
│   └── hero-background.mp4    ← ADD YOUR VIDEO (optional)
└── images/                    ✅ FOLDER EXISTS
    └── dr-serhan-standing.png ✅ YOUR PHOTO IS HERE!
```

---

## 🎥 How to Add Your Video

### Option 1: Using Genspark's Interface

1. **In Genspark Website Builder:**
   - Look for file upload section
   - Create a folder called `videos`
   - Upload your video file as `hero-background.mp4`

### Option 2: Manual Upload (if downloading website)

1. Create a folder called `videos` in your project root
2. Save your video as `hero-background.mp4`
3. Place it in the `videos` folder

### Video Specifications Tips:

**Compress Your Video:**
- Use online tools like HandBrake or CloudConvert
- Target size: 5-10MB for good quality/performance balance
- Lower resolution on mobile (handled automatically)

**Best Practices:**
- Choose a professional medical/surgical scene
- Ensure good lighting and clarity
- Avoid distracting movements
- Loop should be seamless (video will repeat)
- No audio needed (video is muted by default)

---

## 📸 How to Add Your Photo

### Option 1: Using Genspark's Interface

1. **In Genspark Website Builder:**
   - Look for image upload section
   - Create a folder called `images`
   - Upload your standing photo as `dr-serhan-standing.jpg`

### Option 2: Manual Upload

1. Create a folder called `images` in your project root
2. Save your standing photo as `dr-serhan-standing.jpg`
3. Place it in the `images` folder

### Photo Tips:

**Best Photo Type:**
- Full body or 3/4 body shot
- Professional attire (scrubs or white coat)
- Clean, uncluttered background
- Good lighting
- High resolution
- Confident, approachable pose

**Photo Editing (Optional):**
- Remove background for cleaner look (use remove.bg)
- Adjust brightness/contrast
- Crop to focus on you
- Save as PNG if background removed, JPG otherwise

---

## 🎨 Current Hero Design

Your hero section now features:

✅ **Background Video** (medical/professional theme)  
✅ **Video Overlay** (teal gradient for readability)  
✅ **Your Standing Photo** (left side, full height)  
✅ **Text Content** (right side):
   - "14+ Years of Experiences" tagline
   - "Welcome to My Educational Website" title
   - Description text  
✅ **Responsive Design** (adapts to mobile/tablet)  
✅ **Smooth Animations** (fade in effects)

---

## 📱 Responsive Behavior

### Desktop (1200px+)
- Video fills entire background
- Photo on left (400px max width)
- Text content on right
- Side-by-side layout

### Tablet (768px - 1199px)
- Video still in background
- Photo smaller (300px)
- Content stacks vertically
- Text centered

### Mobile (<768px)
- Video in background
- Photo at top (250px)
- Text below photo
- All centered
- Compressed layout for small screens

---

## 🔄 What If I Don't Have a Video Yet?

**No problem!** The website includes a **fallback gradient background** that displays if:
- Video file is missing
- Video fails to load
- User has slow internet

The gradient is the same professional teal/cyan color scheme, so your site looks great either way!

---

## 🎯 Temporary Placeholder Solutions

### Until You Get Your Video:

**Option 1: Use a Stock Medical Video**
- Search "medical operating room background video" on stock sites
- Download a royalty-free medical/hospital video
- Use temporarily until you get your own

**Option 2: Use a Still Image**
You can temporarily replace the video with a still image:

```html
<!-- In index.html, replace the video section with: -->
<div class="hero-video-container">
    <img src="images/hero-background.jpg" alt="Background" style="width: 100%; height: 100%; object-fit: cover;">
    <div class="hero-video-overlay"></div>
</div>
```

### Until You Get Your Photo:

The website will work without your standing photo, but I recommend adding it ASAP because it:
- Makes the site more personal
- Builds trust with patients
- Matches the drkarim.com design
- Creates a professional impression

**Temporary Option:**
You can use a professional headshot temporarily - just make sure it's high quality.

---

## ✅ Testing Checklist

After adding your video and photo:

- [ ] Video plays automatically
- [ ] Video loops seamlessly
- [ ] Video has no audio (should be muted)
- [ ] Photo displays clearly
- [ ] Photo doesn't look pixelated
- [ ] Text is readable over video
- [ ] Layout looks good on mobile
- [ ] Page loads reasonably fast
- [ ] Video works on different browsers
- [ ] Fallback gradient shows if video fails

---

## 🚀 Quick Setup Steps

### Complete Setup in 10 Minutes:

1. **Prepare Your Files** (5 min)
   - Get/create video file
   - Get/prepare standing photo
   - Optimize both files

2. **Upload Files** (2 min)
   - Create folders
   - Upload video to `videos/hero-background.mp4`
   - Upload photo to `images/dr-serhan-standing.jpg`

3. **Test** (3 min)
   - Refresh webpage
   - Check video plays
   - Check photo displays
   - Test on mobile

---

## 🎬 Video Content Suggestions

Good video backgrounds for a medical professional:

1. **Operating Room Scene** (professional, serious)
2. **Medical Consultation** (approachable, caring)
3. **Hospital Corridor** (professional, clean)
4. **Medical Technology** (innovative, modern)
5. **Abstract Medical Graphics** (professional, subtle)

**Avoid:**
- Actual surgery footage (too graphic)
- Identifiable patients (privacy concerns)
- Distracting or busy scenes
- Poor lighting or quality
- Copyrighted material

---

## 📏 File Size Recommendations

| File | Recommended Size | Maximum Size |
|------|------------------|--------------|
| Hero Video | 5-10 MB | 15 MB |
| Standing Photo | 200-500 KB | 1 MB |

**Why Size Matters:**
- Faster page loading
- Better user experience
- Mobile-friendly
- SEO benefits

---

## 🔧 Technical Details

### Video HTML Structure:
```html
<video autoplay muted loop playsinline>
    <source src="videos/hero-background.mp4" type="video/mp4">
</video>
```

**Attributes Explained:**
- `autoplay` - Starts playing immediately
- `muted` - No sound (required for autoplay)
- `loop` - Plays continuously
- `playsinline` - Plays inline on mobile (iOS requirement)

### Photo HTML Structure:
```html
<img src="images/dr-serhan-standing.jpg" 
     alt="Dr. Karim SERHAN - Consultant Surgeon"
     class="doctor-standing-photo">
```

---

## 💡 Pro Tips

1. **Video Compression Tools:**
   - HandBrake (free, desktop app)
   - CloudConvert.com (online)
   - FFmpeg (command line, advanced)

2. **Photo Editing Tools:**
   - Photoshop (professional)
   - GIMP (free alternative)
   - Remove.bg (background removal)
   - Canva (easy online tool)

3. **Optimization:**
   - Compress without losing quality
   - Use modern formats (WebP for photos)
   - Test loading speed
   - Consider lazy loading

4. **Mobile Optimization:**
   - Video might not autoplay on some mobile devices
   - Ensure fallback gradient looks good
   - Test on actual mobile devices

---

## ❓ Troubleshooting

### Video Not Playing?

**Check:**
- [ ] File path is correct (`videos/hero-background.mp4`)
- [ ] File format is MP4
- [ ] Video codec is H.264
- [ ] File isn't corrupted
- [ ] Browser supports video playback

**Solution:**
- Check browser console (F12) for errors
- Try a different video file
- Ensure proper file permissions
- Clear browser cache

### Photo Not Showing?

**Check:**
- [ ] File path is correct (`images/dr-serhan-standing.jpg`)
- [ ] File exists in the images folder
- [ ] File name matches exactly (case-sensitive)
- [ ] Image format is supported (JPG, PNG, WebP)

**Solution:**
- Verify file name and path
- Check file permissions
- Try re-uploading the image
- Clear browser cache

### Video Slows Down Page?

**Solutions:**
- Compress video further
- Reduce video resolution
- Use a shorter video loop
- Consider using poster image (static image shown before video loads)

---

## 📞 Need Help?

If you're having trouble adding your video or photo:

1. Check file paths are correct
2. Verify file names match exactly
3. Ensure folders exist
4. Test with different browsers
5. Check browser console for errors
6. Refer to setup guide or README.md

---

## ✨ Final Result

Once you add your video and photo, your hero section will have:

🎬 **Dynamic Video Background** - Professional, engaging  
👨‍⚕️ **Your Standing Photo** - Personal, trustworthy  
✍️ **Clear Text Content** - Informative, readable  
📱 **Mobile Responsive** - Works everywhere  
🎨 **Professional Design** - Matches drkarim.com

**This creates a powerful first impression for visitors!**

---

*Last Updated: December 2025*  
*For: Dr. Karim SERHAN Professional Website*