# Changelog

## [0.3.0] - 2026-03-15
### Added
- Multi-page routing: `/`, `/gallery`, `/contact` as separate pages
- Shared `Navbar` component with Next.js Link routing and active link highlighting
- Full-width auto-playing hero image slider (5 Unsplash photos, prev/next, dot indicators, pause on hover)
- About section merged into home page alongside hero

### Changed
- Hero redesigned to full-width layout with text overlaid on image slider
- CTA buttons now route to `/gallery` and `/contact` via Next.js Link
- Removed `/about` route (content lives on home page)

## [Unreleased]

### Fixed
- Wired the dark-mode selector so the theme toggle visually switches the portfolio styles

## [0.2.0] - 2026-03-11
### Added
- Persistent light and dark theme toggle for the portfolio experience
- Theme toggle tests covering default, persistence, and interaction

### Changed
- Updated portfolio sections to support both light and dark mode styling
- Corrected README naming and documented the theme feature
- Removed runtime staging log from version control

## [0.1.0] - 2026-03-11
### Added
- Initial static photographer portfolio landing page
- About, gallery, and contact sections
- Jest and React Testing Library setup with component tests
