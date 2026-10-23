# Brew Bliss Cafe

A responsive, single-page coffee shop website made with HTML, CSS, and JavaScript. The cafe details, menu, prices, and photos are sample content for you to replace.

## 1. Open the website

1. Open this folder in VS Code.
2. Open `index.html` in a web browser. You can double-click the file in File Explorer, or right-click it in VS Code and choose **Open in Default Browser** if that option is available.
3. The page does not need a package manager, build command, or installation step. An internet connection is needed for the sample photos and web fonts.

## 2. Get to know the files

- `index.html` contains the page sections, navigation, menu content, and contact form.
- `style.css` controls colors, spacing, typography, animations, and layouts for different screen sizes.
- `script.js` controls the mobile navigation, order confirmations, contact form response, and current year in the footer.

## 3. Change the cafe information

Open `index.html` and search for the sample text you want to change. Update the cafe introduction, address, opening hours, email address, and phone number. The `mailto:` and `tel:` links should match the visible email and phone number. Update the sample prices and menu descriptions in the same file.

## 4. Replace the sample photos

The photos use temporary image URLs from Unsplash. Each photo is in an `<img>` element in `index.html`; replace its `src` value with your own image URL. To use an image saved on your computer, create an `images` folder beside `index.html`, put your image there, then use a relative path such as `images/latte.jpg`. Keep the `alt` text accurate so people using screen readers know what the image shows.

The heading and body fonts are loaded from Google Fonts. If you prefer not to use online fonts, remove the Google Fonts `<link>` elements in `index.html`; the CSS includes local fallback fonts.

## 5. Make it your own

In `style.css`, the main colors are near the top in the `:root` block. Change those variables to adjust the palette. The responsive rules are in the `@media` blocks near the bottom. The page automatically rearranges its menu and contact sections for smaller screens.

## 6. Try the interactions

- Use the navigation links to move between page sections. On a narrow screen, use the menu button to open navigation.
- Select **Order now** on a menu item to display a confirmation for that drink. This is a demonstration only; it does not take payment or send an order to the cafe.
- Fill in all three contact fields and submit the form to see the thank-you response. The browser checks that the fields are filled and that the email looks valid. This sample form does not send or store messages. To receive real messages, connect a backend or a form service.

## 7. Check desktop and mobile layouts

Resize your browser window or use the browser's developer tools to preview a desktop, tablet, and narrow mobile width. Check that the navigation, menu, photos, and contact form fit comfortably. Try tabbing through the page to check the keyboard focus styles.
