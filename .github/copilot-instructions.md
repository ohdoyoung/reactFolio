# AI Coding Agent Instructions for reactFolio

## Project Overview
**reactFolio** is a React-based personal portfolio website deployed via GitHub Pages. It showcases projects, skills, and contact information with a focus on smooth animations and dark/light theme support.

**Key URLs**: GitHub Pages at `https://ohdoyoung.github.io/reactFolio` (via `homepage` in package.json)

---

## Architecture & Key Patterns

### Component Structure
- **Single-page layout**: All content in `src/App.js` with scrollable sections (Hero, About, Skills, Projects, Contact)
- **Section-based organization**: Each major section (About, Tech, ProjectList, Skills) is a separate component
- **Reusable Section component**: Common styling via `Section.css`

### Data Management
- **Static project data**: `ProjectList.js` contains hardcoded `projects` array with structured metadata (id, title, subtitle, period, stack, github, notion, image, icons)
- **No external API/database**: All data is component-internal
- **Environment variable for GitHub Pages paths**: Use `process.env.PUBLIC_URL` for asset paths (e.g., `process.env.PUBLIC_URL + '/assets/menu-project.png'`) to handle subpath deployments

### Animation Framework
- **GSAP + ScrollTrigger**: Used throughout for scroll-triggered animations
- **Pattern**: Import gsap, register ScrollTrigger plugin, use refs and useEffect hooks
- **Common animations**: Fade in with vertical shift (opacity: 0 → 1, y: 50 → 0) on scroll

Example from App.js:
```javascript
gsap.registerPlugin(ScrollTrigger);
gsap.from(introRef.current, {
  opacity: 0, y: 50, duration: 1,
  scrollTrigger: { trigger: introRef.current, start: 'top 80%' }
});
```

### Theme System
- **Two themes**: 'dark' (black bg) and 'blue' (navy bg) via CSS class `.app.dark` / `.app.blue`
- **State-driven**: Theme state in App.js controls body class
- **Smooth transitions**: CSS includes `transition: background-color 0.3s ease`

### React Icons Integration
- Imports from `react-icons/fa` (Font Awesome) and `react-icons/si` (Simple Icons)
- Applied as JSX elements directly in data structures (see projects/skills arrays)
- Icons use inline className for styling (`.html5`, `.java`, `.swift`, etc.)

---

## Development Workflow

### Build & Deploy
```bash
npm start      # Dev server on localhost:3000
npm run build  # Production build → /build
npm run deploy # Push build to GitHub Pages (gh-pages package)
```

### Testing
```bash
npm test       # React Testing Library (Jest)
```

### Asset Paths
- Place images in `public/assets/` (e.g., `/assets/menu-project.png`)
- **Critical**: Reference via `process.env.PUBLIC_URL + '/assets/...'` in src, NOT `/assets/...` directly
- GitHub Pages subpath (`/reactFolio`) handled automatically by `homepage` in package.json

---

## Key Files & Responsibilities

| File | Purpose |
|------|---------|
| `src/App.js` | Root component, theme state, GSAP animations setup |
| `src/components/ProjectList.js` | Projects data array, project cards with modals |
| `src/components/Skills.js` | Tech skills grid (read-only display) |
| `src/components/Tech.js` | Tech stack detail section (appears to wrap/enhance Skills) |
| `src/components/Navbar.js` | Navigation with anchor links (#hero, #about, #skills, etc.) |
| `src/App.css` | Global dark/blue theme, navbar, tech section layout |
| `public/assets/` | Thumbnail images for projects |

---

## Project-Specific Conventions

### Naming & Structure
- **Component-scoped CSS**: Each component has corresponding `.css` file (e.g., `ProjectList.js` → `ProjectList.css`)
- **Section anchors**: Use lowercase IDs (#hero, #about, #skills, #projects, #contact) for nav links
- **Project objects**: Include `id` (kebab-case), title with emoji prefix (e.g., "✌️ Project Name"), Notion iframe URLs

### Styling Patterns
- **CSS Variables**: Not currently used; consider adding for theme colors
- **Responsive**: Mobile-first approach with media queries
- **Dark mode**: Leverage CSS class switching (`.app.dark`) rather than inline styles

### External Links
- **GitHub links**: Shortened/obfuscated in code (e.g., `'https://github.com/202...O-Dong'`) — update if needed
- **Notion embeds**: Projects include full Notion document URLs for iframe modals

---

## Dependencies & Versions
- React 19.1.0 | React DOM 19.1.0
- GSAP 3.13.0 (with ScrollTrigger)
- React Icons 5.5.0
- React Scripts 5.0.1 (Create React App)
- gh-pages 6.3.0 (for GitHub Pages deployment)
- Testing Library (React, Jest-DOM) for unit tests

---

## Common Tasks & Tips

### Add a New Project
1. Add object to `projects` array in `ProjectList.js`
2. Include `id`, `title`, `subtitle`, `period`, `stack`, `github`, `notion`, `image` (use `process.env.PUBLIC_URL`), and `icons` (JSX array)
3. Add thumbnail image to `public/assets/`
4. Update `src/components/ProjectList.css` if new card styles needed

### Update Theme Colors
- Modify CSS classes `.app.dark` and `.app.blue` in `App.css`
- CSS variables recommended for future maintenance

### Deploy Changes
- Commits pushed to `main` → run `npm run deploy` locally (or use GitHub Actions if configured)
- Deployment creates `gh-pages` branch; changes live at `ohdoyoung.github.io/reactFolio`

### Add Animation
- Use `useRef` to target DOM element
- Call `gsap.from()` or `gsap.to()` in `useEffect`
- Wrap ScrollTrigger usage with `gsap.registerPlugin(ScrollTrigger)` in component file

---

## Notes for Future Refactoring
- Consider extracting hardcoded data (projects, skills) to separate config file
- Add CSS variables for consistent theming
- Evaluate Tailwind CSS or CSS-in-JS for scalability
- Consider testing coverage beyond default CRA setup
