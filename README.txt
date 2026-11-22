PALLAVI KASTH UDHYOG - SHOPPING STORE STARTER

INCLUDED
- Product catalog with search and category filters
- Sort by price
- Add-to-cart and Buy-now (Buy Now adds item and opens cart)
- Cart saved in the browser (localStorage)
- Quantity updates, remove items, subtotal calculation
- Checkout order request form connected to the Formspree endpoint you supplied
- Responsive mobile layout


IMPORTANT SETUP BEFORE PUBLISHING
1. Replace sample product prices, names and descriptions in script.js (PRODUCTS array) with your actual product data.
2. Upload the corresponding image files into the images/ folder. Paths are referenced in script.js.
   Sample paths: chair1.png, chair2.png, sofa1.png, bed1.png, wardrobe1.png, table1.png.
3. Add your own hero banner image as images/hero.jpg. If missing, hero section still displays a plain color.
4. Change the WhatsApp link in index.html from the sample number 9779800000000 to your business WhatsApp number (country code, no + or spaces).
5. Form submissions use https://formspree.io/f/xppdjvqq. Confirm the Formspree account is verified and can receive submissions. This is an ORDER REQUEST, not paid checkout.
6. Publish these files to your GitHub Pages repository. If replacing your existing website, make a backup of the current files first.

LIMITATIONS
- No real accounts, database, inventory sync, secure admin dashboard, live order tracking, coupon engine, or payment gateway in this starter.
- Cart is browser-local and does not sync across devices.
- Product/price values sent from the browser can be modified by visitors; manually verify totals and confirm orders.
- For a production Daraz-like store, next step is backend setup (e.g., Supabase) with server-side order/price validation and payment gateway integration.
