# Inbal Hanasab Continuous POA Tel Aviv

Static Hebrew landing page for Adv. Inbal Hanasab, focused on ongoing power of attorney services in Tel Aviv and central Israel.

## Local preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub setup

`gh` is not installed in the current environment, so the repository could not be created remotely from here. To publish:

```bash
cd /Users/sarielgilat/Downloads/inbal-continuous-poa-tel-aviv
git init
git add .
git commit -m "Create Tel Aviv continuous power of attorney site"
gh repo create inbal-continuous-poa-tel-aviv --public --source=. --remote=origin --push
```

If you prefer a private repo, replace `--public` with `--private`.

## Before publishing

- Confirm Adv. Inbal Hanasab's current professional title, license details and required certification wording.
- Replace contact email and WhatsApp if different from the current source details.
- Add a canonical URL after the final domain is selected.
- Consider replacing the portrait images with dedicated legal-brand photos.
