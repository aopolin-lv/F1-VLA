# F₁ GitHub Pages Setup Guide

## 🚀 Deploying to GitHub Pages

### Step 1: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select **main** and folder **/docs**
6. Click **Save**

### Step 2: Access Your Website
After a few minutes, your website will be available at:
```
https://your-username.github.io/F1-VLA
```

## 📁 File Structure

```
docs/
├── index.html          # Main website
├── style.css           # Styles and responsive design
├── script.js           # Interactive features
├── README.md           # This setup guide
└── assets/
    ├── logo.png        # F₁ logo
    └── demo.mp4        # Main demonstration video
```

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy theming:
- `--primary-color`: Main blue color
- `--secondary-color`: Darker blue
- `--accent-color`: Light blue
- `--dark-color`: Text color
- `--light-color`: Background color

### Content Updates
- Edit `index.html` to update content
- Modify `style.css` for visual changes
- Update `script.js` for interactive features

### Adding New Videos
1. Place video files in `docs/assets/`
2. Update the corresponding `<source>` tags in `index.html`
3. Make sure video files are optimized for web (consider using WebM format)

## 🔧 Features

- ✅ Responsive design (mobile-friendly)
- ✅ Smooth scrolling navigation
- ✅ Video hover effects
- ✅ Performance animations
- ✅ Modern CSS with gradients and shadows
- ✅ Font Awesome icons
- ✅ Google Fonts integration

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🚀 Performance Tips

1. **Video Optimization**: Compress videos for faster loading
2. **Image Optimization**: Use WebP format for images
3. **CDN**: Consider using a CDN for assets
4. **Lazy Loading**: Videos load on demand

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Ensure all file paths are correct
3. Verify GitHub Pages deployment status
4. Check that assets are properly uploaded

## 📄 License

This website template is provided as-is for academic and research purposes.
