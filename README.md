# Rejiesh Ashwanth — Personal Founder Website

A clean, professional, and responsive personal founder website for **Rejiesh Ashwanth**, Co-founder and CEO of **ADYK Multi Venture**.

Built with semantic HTML5, high-performance Vanilla CSS (predominantly white background, soft off-white section backgrounds, restrained purple/teal accents, refined cards), and lightweight Vanilla JavaScript.

---

## 🚀 Live Preview / Local Development

To run the site locally on any machine:

### Option 1: Running Local Server
```bash
# Using Node
node -e "const http=require('http'),fs=require('fs'),path=require('path');http.createServer((req,res)=>{let f=path.join('.',req.url==='/'?'index.html':req.url);fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end('Not found');}else{res.writeHead(200);res.end(d);}})}).listen(3456,()=>console.log('Running on http://localhost:3456'));"
```
Then visit **http://localhost:3456**.

### Option 2: Direct Browser
Double-click `index.html` to open directly in any modern browser.

---

## ⚡ How to Add New Updates in "Notes from the Build"

1. Open `js/updates.js` in your editor.
2. At the top of the `BUILD_UPDATES` array, insert your new update object:

```javascript
{
  id: "update-5",
  date: "November 2026",
  tag: "ADYK WIQN",             // e.g. "ADYK WIQN", "Milestone", "Venture"
  tagType: "teal",              // Options: "teal" | "purple" | "coral"
  title: "Your Update Title",
  content: "Describe what you built, learned, or shipped.",
  note: "Brief takeaway or next step"
},
```

The newest update will always display first at the top of the timeline.

---

## 📂 Project Structure

```
d:/ashwanth own/
├── index.html               # Semantic markup, high-contrast typography, refined sections
├── css/
│   └── style.css            # Clean light design system, refined cards, restrained accents
├── js/
│   ├── updates.js           # Chronological updates list & rendering engine
│   └── main.js              # Scroll progress, sticky nav, reveal observer, WhatsApp handlers
├── assets/
│   ├── rejiesh-ashwanth.jpg # High-resolution founder portrait
│   ├── rejiesh-work-1.jpg   # Work photo 1: Focused on coding at laptop desk
│   ├── rejiesh-work-2.jpg   # Work photo 2: Working on campus with laptop
│   └── favicon.svg          # Crisp brand monogram icon
└── README.md                # Documentation & instructions
```

---

## 🌐 Deploying to the Web

The website is static with zero build dependencies:
- **Vercel**: Run `vercel` or connect your GitHub repository.
- **GitHub Pages**: Go to Repository Settings → Pages → Deploy from branch `/root`.
- **Netlify**: Drag and drop the folder into Netlify Drop.
