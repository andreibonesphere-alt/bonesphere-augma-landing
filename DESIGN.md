# Design System Specification: Clinical Transcendence

## 1. Overview & Creative North Star
**Creative North Star: The Clinical Curator**
This design system moves away from the sterile, "template-box" aesthetics of traditional medical software. Instead, it adopts the persona of a high-end editorial publication. It treats medical biomaterials not just as products, but as masterpieces of bio-engineering. 

We achieve this through **Scientific Asymmetry**—breaking the rigid 12-column grid with intentional overlaps and expansive white space. The goal is to evoke a sense of "Precision and Trust" through breathing room (whitespace) rather than cluttering the UI with lines and boxes. This is a "quiet" interface where the quality of the content and the depth of the layers signal premium authority.

---

## 2. Colors & Surface Philosophy
The palette utilizes a sophisticated range of teals and neutral surfaces to create a sense of clinical depth.

### The "No-Line" Rule
To maintain an ultra-clean aesthetic, **1px solid borders are strictly prohibited** for sectioning or containment. Boundaries must be defined through:
- **Tonal Shifts:** Transitioning from `surface` (#fcf9f8) to `surface-container-low` (#f6f3f2).
- **Hard-Edged Color Blocking:** Using a full-bleed `primary-container` (#00637c) block against a `surface` background to define a new content area.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine material. 
1. **Base:** `surface` (#fcf9f8) for the main background.
2. **Structural Sections:** `surface-container-low` (#f6f3f2) to define distinct content groups.
3. **Interactive Cards/Elements:** `surface-container-lowest` (#ffffff) to provide a "pop" of pure white, indicating interactability.

### The "Glass & Gradient" Rule
For hero sections or high-impact CTAs, use the **Teal Depth Gradient**:
- Transition from `primary` (#004a5d) to `primary-container` (#00637c) at a 135-degree angle.
- For floating navigation or modal overlays, use **Glassmorphism**: `surface-container-lowest` at 80% opacity with a `40px` backdrop-blur. This keeps the medical aesthetic feeling modern and fluid.

---

## 3. Typography
The typography system relies on the tension between the elegant, serif-like authority of **Borneo** and the surgical precision of **Inter**.

*   **Display & Headlines (Borneo):** Used for high-level brand messaging. It should feel "Editorial." The bold weights of Borneo convey the "Trust" required in the biomaterial space.
*   **Body & Titles (Inter):** Used for all functional and data-heavy information. Inter’s high x-height ensures readability in complex clinical specifications.

| Level | Token | Font | Size | Character |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Borneo | 3.5rem | Bold, Letter-spacing: -0.02em |
| **Headline** | `headline-md` | Borneo | 1.75rem | Bold, Leading: 1.2 |
| **Title** | `title-lg` | Inter | 1.375rem | Medium, Letter-spacing: 0 |
| **Body** | `body-md` | Inter | 0.875rem | Regular, Leading: 1.6 |
| **Label** | `label-sm` | Inter | 0.6875rem | Bold, All Caps, Tracking: 0.05em |

---

## 4. Elevation & Depth
In this design system, depth is a tool for focus, not just decoration.

### The Layering Principle
Hierarchy is achieved by "stacking" surface tiers. Avoid shadows on static components. Instead, place a `surface-container-lowest` card on a `surface-container-low` background. This creates a "soft lift" that feels architectural rather than digital.

### Ambient Shadows
When an element must float (e.g., a floating action button or a dropdown), use **Ambient Shadows**:
- **Color:** Use a tinted shadow—`on-surface` (#1c1b1b) at 6% opacity.
- **Blur:** Large, diffused values (e.g., `Y: 8px, Blur: 24px`). This mimics natural studio lighting found in premium photography.

### The "Ghost Border" Fallback
If a visual separator is functionally required for accessibility:
- Use `outline-variant` (#bfc8cd) at **15% opacity**. It should be barely perceptible, serving as a "ghost" of a border rather than a hard line.

---

## 5. Components

### Buttons (Precision Triggers)
- **Primary:** Background `primary` (#004a5d), text `on-primary` (#ffffff). Shape: `md` (0.375rem).
- **Secondary:** Background `secondary-container` (#b7e8f3), text `on-secondary-container` (#3a6973).
- **Tertiary (Text-only):** Text `primary` (#004a5d). No container. Use `label-md` styling.
- *Interaction:* On hover, the primary button should shift to `primary-container` with a subtle `2px` vertical lift.

### Cards & Lists (The Divider-Free Rule)
- **Dividers are forbidden.** To separate list items, use **Vertical White Space**.
- For lists, use a alternating background of `surface` and `surface-container-low` if the list is long, or simply use 24px of padding between items.
- Cards should use `surface-container-lowest` (#ffffff) with a `DEFAULT` (0.25rem) corner radius.

### Input Fields
- **Style:** Underlined or "Soft Box."
- **Focus State:** Transition the `outline` from a transparent state to a 1px `primary` (#004a5d) line. This provides a "surgical" focus highlight only when needed.

### Clinical Data Chips
- Use `secondary-fixed-dim` (#9eceda) for the container and `on-secondary-fixed` (#001f25) for the text. These are used for tagging biomaterial properties (e.g., "Bio-active," "Resorbable").

---

## 6. Do’s and Don’ts

### Do:
- **Do use "The Breathing Grid":** Leave at least one empty column in your layout to create an editorial, high-end feel.
- **Do use Tonal Layering:** Lean on the `surface-container` tiers to separate the sidebar from the main stage.
- **Do use Bold Borneo:** Let the headings do the heavy lifting for the brand's premium feel.

### Don’t:
- **Don’t use 100% Black:** Always use `on-surface` (#1c1b1b) for text to keep the contrast high but the "vibe" sophisticated.
- **Don’t use 1px Dividers:** If you feel the need to draw a line, try adding 16px of extra margin instead.
- **Don’t use Sharp Corners:** Always use at least the `sm` (0.125rem) radius. Precision doesn't mean "stinging" the user; it means controlled softness.
- **Don't use Standard Shadows:** Never use a default `0, 0, 4, 0` shadow. If it isn't diffused and tinted, it doesn't belong in this system.