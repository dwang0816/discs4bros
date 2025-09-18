# Favicon Setup Guide for Discs4Bros

The current favicon files are placeholders. Follow this guide to create proper favicon images for your Discs4Bros brand.

## Quick Favicon Creation Options

### Option 1: Online Favicon Generator (Easiest)
1. Go to [favicon.io](https://favicon.io/) or [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload a disc golf disc image or use their text generator with "D4B"
3. Choose brand colors: Primary orange (#ff6b35), Background dark blue (#1a1a2e)
4. Download the generated favicon pack
5. Replace the placeholder files in `/public/` folder

### Option 2: Create Custom Disc Icon
Use any design tool (Canva, Figma, Photoshop, GIMP):

**Design Specifications:**
- **Colors**: Orange (#ff6b35) disc with dark background
- **Style**: Simple, recognizable disc golf disc silhouette
- **Text**: Optional "D4B" or "4Bros" text overlay
- **Background**: Transparent or dark (#1a1a2e)

**Required Sizes:**
- `favicon.ico` - 16x16, 32x32, 48x48 (multi-size ICO file)
- `favicon-16x16.png` - 16x16 pixels
- `favicon-32x32.png` - 32x32 pixels  
- `apple-touch-icon.png` - 180x180 pixels
- `og-image.jpg` - 1200x630 pixels (for social media sharing)

### Option 3: Use Emoji Favicon (Quick Fix)
If you want to keep it simple for now:
1. The current `disc-favicon.ico` uses the 🥏 emoji
2. This works but isn't as professional as a custom icon
3. Most browsers will display the disc emoji in the tab

## Social Media Images

For complete branding, also create:
- `og-image.jpg` (1200x630) - Shows when sharing on Facebook/Twitter
- `og-image-square.jpg` (1200x1200) - Square version for some platforms

**Content suggestions:**
- Discs4Bros logo/text
- "Exclusive Disc Golf Drops" tagline
- Disc golf disc graphics
- Brand colors and gradients

## File Locations

Place all favicon files in the `/public/` folder:
```
public/
├── disc-favicon.ico (current emoji version)
├── favicon-16x16.png (replace with actual image)
├── favicon-32x32.png (replace with actual image)
├── apple-touch-icon.png (replace with actual image)
├── og-image.jpg (create new)
└── site.webmanifest (already configured)
```

## Testing Your Favicons

After updating the files:
1. Clear your browser cache
2. Visit your site in different browsers
3. Check the browser tab for your custom icon
4. Test on mobile devices (iOS Safari, Chrome, etc.)
5. Share a link on social media to test og-image

## Professional Design Tips

- **Keep it simple**: Favicons are very small, avoid complex details
- **High contrast**: Ensure the icon is visible on both light and dark backgrounds
- **Brand consistency**: Use your brand colors (#ff6b35 orange, #00e5ff blue)
- **Test at actual size**: View your icon at 16x16 to ensure it's readable
- **Consider dark mode**: Some browsers use dark themes

## Free Design Resources

- **Icons**: [Feather Icons](https://feathericons.com/), [Heroicons](https://heroicons.com/)
- **Disc Graphics**: Search "disc golf disc silhouette" on free icon sites
- **Colors**: Use the existing brand palette from your CSS
- **Fonts**: Inter (already used on site) or bold sans-serif fonts

Once you've created proper favicon images, simply replace the placeholder files in the `/public/` folder and your brand will be complete!
