<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- Single-page marketing site: sections live in `src/components/site/*` and are composed in `src/routes/index.tsx`; nav uses in-page anchors because the brief asks for smooth scrolling between sections.
- Plans, FAQ, testimonials and the email-CTA builder live in `src/lib/site.ts` so copy and prices change in one place; `src/test/pricing.test.ts` guards the prices; each plan has a `price` and a `billing` type (monthly or yearly) and the annual savings badge is computed from them.
- Every conversion button uses `buildMailto()` (no forms/backends) — the brief requires the visitor's email app.
- Testimonials section renders only when `TESTIMONIALS` has real entries — never add invented quotes.
- Brand images and the Brice font are Lovable Assets pointers in `src/assets/`; the light wordmark is a recolored copy of the uploaded logo for dark backgrounds.
- Hero rotation uses localized phrase arrays and overlapping grid tracks to reserve the longest phrase's space; reduced-motion preferences disable automatic rotation to keep the headline accessible and stable.
