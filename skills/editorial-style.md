# Skill: Editorial style

Read when: changing the look of, or adding a section to, a shop started from the Editorial template.

Editorial: a quiet magazine. Cormorant for display, Manrope for reading, warm ivory, a centred wordmark and a full-bleed cover.

- The look is `src/theme.css`: change a token there first (colours, fonts, radius, spacing), then a single rule. This template's tokens: `--shop-bg: #f7f3ec`, `--shop-ink: #2a2622`, `--shop-font-body: 'Manrope', sans-serif`, `--shop-font-display: 'Cormorant Garamond', serif`, `--shop-radius-button: 0`, `--shop-radius-card: 2px`.
- `--shop-accent` is the merchant's brand colour on a live shop. Never build a large panel or a background on it; big tinted surfaces use this file's own colours.
- A new section takes the look from the tokens. Style it with a `section[data-section-type="<type>"]` rule in `src/theme.css`, in the voice of the rules already there.
- This template's own placeholder copy stays generic for the vertical (Fashion, home and lifestyle brands) and promises nothing: no delivery times, return windows, warranties, discounts, scarcity or ratings. That limit is only for placeholder copy: once the merchant states their real terms (shipping, returns, promotions), use them as they state them.
