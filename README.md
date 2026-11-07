# Rejiesh Ashwanth — Personal Founder Website

A clean, polished, and professional personal founder website for **Rejiesh Ashwanth**, Co-founder and CEO of **ADYK Multi Venture Company**.

Built with semantic HTML5, restrained monochrome Vanilla CSS (pure white background, soft light gray alternating sections, black headings, dark gray body copy, subtle light gray borders), and lightweight Vanilla JavaScript.

---

## 🚀 Live Preview / Local Development

To run the site locally on any machine:

### Option 1: Running Local Server
```bash
# Using Node
node -e "const http=require('http'),fs=require('fs'),path=require('path');http.createServer((req,res)=>{let u=req.url.split('?')[0];let f=path.join('.',u==='/'?'index.html':(u==='/projects'?'projects.html':u));fs.readFile(f,(e,d)=>{if(e){res.writeHead(404);res.end('Not found');}else{res.writeHead(200);res.end(d);}})}).listen(3000,()=>console.log('Running on http://localhost:3000'));"
```
Then visit **http://localhost:3000** or **http://localhost:3000/projects**.

### Option 2: Direct Browser
Double-click `index.html` or `projects.html` to open directly in any modern browser.

---

## ⚡ How to Add New Updates in "Notes from the Build"

1. Open `js/updates.js` in your editor.
2. At the top of the `BUILD_UPDATES` array, insert your new update object:

```javascript
{
  id: "update-6",
  date: "November 2026",
  tag: "ADYK WIQN",
  title: "Your Update Title",
  content: "Describe what you built, learned, or shipped.",
  note: "Brief takeaway or next step (optional)"
},
```

The newest update will always display first at the top of the timeline.

---

## 📂 Project Structure

```
d:/ashwanth own/
├── index.html               # Main home page: introduction, founder story, education, family, updates, contact
├── startup.html             # Dedicated Startup page: ADYK Multi Venture Company, founding statement, mission
├── projects.html            # Projects page: "Projects Built by Rejiesh Ashwanth" (5 project cards)
├── project-wiqn.html        # Dedicated Overview: ADYK WIQN (Live software platform)
├── project-inspire.html     # Dedicated Overview: ADYK Inspire (Problem-led creator tooling)
├── project-cardex.html      # Dedicated Overview: ADYK Cardex (Developer & creator project)
├── project-attent-in.html   # Dedicated Overview: ATTENT-IN (Early Student OS)
├── project-road-sos.html    # Dedicated Overview: ROAD SOS (First hackathon with team)
├── vercel.json              # Clean URLs and /projects rewrites configuration
├── css/
│   └── style.css            # Clean monochrome design system, Inter typography, mobile responsive
├── js/
│   ├── updates.js           # Chronological updates list & rendering engine
│   └── main.js              # Sticky nav, mobile menu, WhatsApp cards, clipboard copy, reveal observer
├── assets/
│   ├── rejiesh-portrait.jpg # Photo 1: Portrait photo (Opening hero section)
│   ├── rejiesh-work-1.jpg   # Photo 2: Focused on development at desk (Founder Story)
│   ├── rejiesh-work-2.jpg   # Photo 3: Working on campus with laptop (About ADYK)
│   ├── rejiesh-ashwanth.jpg # Portrait asset backup
│   └── favicon.svg          # Minimalist monochrome favicon
└── README.md                # Documentation & instructions
```

---

## 🌐 Deploying to the Web

The website is static with zero build dependencies:
- **Vercel**: Run `vercel` or connect your GitHub repository.
- **GitHub Pages**: Go to Repository Settings → Pages → Deploy from branch `/root`.
- **Netlify**: Drag and drop the folder into Netlify Drop.
