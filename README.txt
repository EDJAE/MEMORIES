OUR LITTLE LOVE STORY — README
================================

HOW TO OPEN
-----------
Just open index.html in any browser (double-click it, or right-click →
Open With → your browser). No install, no server, no build step needed.

HOW TO ADD YOUR OWN PHOTOS
---------------------------
1. Drop your real photos into the matching month folder inside /images
   (e.g. images/september/photo1.jpg). Any filename works, as long as
   it's a real image file (.jpg, .jpeg, .png, .webp all work).
2. Open script.js and find the `memories` object near the top.
3. Update the `photos` array for that month with the paths to your files.
   You can add as many photos as you like per month — the gallery and
   the month-card grid update automatically.

   Example:
     "September 2026": {
       message: "...",
       photos: [
         "images/september/us-at-the-beach.jpg",
         "images/september/coffee-date.jpg",
         "images/september/movie-night.jpg"
       ]
     }

   Photos are already organized into month folders. The May, October,
   November, and December galleries use the photo1.jpg and photo2.jpg files
   in their matching folders.

HOW TO CHANGE THE HOME PAGE FLOATING PHOTOS
-----------------------------------------------
In script.js, find the `heroPhotos` array near the top. Those are the
decorative "polaroid" photos floating on the landing page. Both their
positions and the balanced layout are randomized each time the page loads.
Up to 8 photos fit around the landing-page message, including on mobile.

HOW TO CHANGE THE MONTHLY MESSAGES
------------------------------------
In script.js, edit the `message` field for each month inside the
`memories` object. That's the only place you need to touch — the
typewriter effect and the message card pick it up automatically. The
typing starts only after you scroll until the message card is visible.

HOW TO EDIT THE JOURNEY / TIMELINE
-------------------------------------
In script.js, edit the `journey` array near the top. Each entry has
a date, an icon (emoji), a title, and a short description.

HOW TO ADD BACKGROUND MUSIC
-------------------------------
Drop an mp3 file into the /audio folder and name it "our-song.mp3"
(or update the `src` on the <audio> tag in index.html to match your
filename). The music never autoplays — the person visiting the site
has to press the floating music button themselves.

HOME PAGE FLOATING PHOTOS
-------------------------
The images in /images/hero are decorative photos for the home page. They
are separate from the month galleries and are selected in the `heroPhotos`
array in script.js.

FILE STRUCTURE
---------------
index.html   → page structure / all sections
style.css    → all visual styling and animations
script.js    → all data (photos + messages + timeline) and interactivity
images/      → one folder per month for your photos
audio/       → put "our-song.mp3" here for the music player

Enjoy — and happy anniversary, whenever this gets opened. ❤️
