# Put your portfolio online (GitHub Pages)

So you get a link like **https://riyanmohmmeed-dev.github.io/portfolio/** that you can paste in "Your Website" and anyone can open it.

---

## 1. Create a new repo on GitHub

1. Go to **https://github.com/new**
2. **Repository name:** `portfolio` (or `personal-site`)
3. Set to **Public**
4. **Do not** add a README, .gitignore, or license (folder already has files)
5. Click **Create repository**

---

## 2. Push this folder to the repo

Open Terminal and run (use your actual repo name if different):

```bash
cd /Users/mohammedriyan/Projects/GitTime/personal-site

git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/riyanmohmmeed-dev/portfolio.git
git push -u origin main
```

*(If the repo already exists and has a README, use: `git pull origin main --allow-unrelated-histories` before `git push`.)*

---

## 3. Turn on GitHub Pages

1. In the repo, go to **Settings** → **Pages** (left sidebar)
2. Under **Source**, choose **Deploy from a branch**
3. **Branch:** `main` — **Folder:** `/ (root)` — click **Save**
4. Wait 1–2 minutes. Your site will be at:

   **https://riyanmohmmeed-dev.github.io/portfolio/**

---

## 4. Paste that link in "Your Website"

Use: **https://riyanmohmmeed-dev.github.io/portfolio/**  
(Replace `portfolio` with your repo name if you used something else.)

Anyone who gets your profile can click it and see your portfolio.

---

## Updating the site later

After you change files in `personal-site`:

```bash
cd /Users/mohammedriyan/Projects/GitTime/personal-site
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will update the live site in a minute or two.
