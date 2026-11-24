# Day 21: Saved script and repository workflow

Complete this task for Assignment 1. Keep this folder inside the same public Week 5 repository as the other exercises and `mini-project/`.

## Steps

1. Open `hello.js` in this folder. Replace its TODO with a `console.log` greeting for a fictional activity you choose.
2. Save. From the repository root terminal, run `node day-21/hello.js`.
3. Read the output and record it below.
4. Edit the greeting, save, run the same command again, and record the changed output. Keep one `hello.js` file.
5. Complete the repository root README. Review your changes with Git, commit the intended files, and push. Open this file on GitHub and verify your latest content is there.
6. Complete your explanation below. Do not put passwords, tokens, or private information in this public repository.

## My evidence

- Fictional activity: Hello from my favorite yoga class!
Hello from my second commit
- Command I ran from the repository root: `node day-21/hello.js
- First observed output: Hello from my favorite yoga class!
Hello from my second commit

- Changed observed output: 
The output changed to Hello from my favorite golf course!
Hello from my second commit ( I didn't comment that line out)
- What saving does: Saving saves my changes in my local folder.
- What a local commit records: TODO
- Why I push after committing: TODO
- How I checked that GitHub has my final version: TODO

Replace all TODOs with truthful observations. Submit only the repository root URL to the two Moodle assignments when all required work is ready; this folder is not a separate upload.

# Day 21 — Reflections & Output Notes

## Greetings & Output
- **Initial greeting:** `console.log("Hello from my favorite yoga class!");` -> Output: `Hello from my favorite yoga class!`
- **Updated greeting:** `console.log("Hello from my favorite golf course!");` -> Output changed to `Hello from my favorite golf course!`
- **Second commit greeting:** `console.log("Hello from my second commit");` (left active)

## How Saving, Committing, and Pushing Work
- **What saving does:** Saving only saves changes in my local folder—it does not automatically save changes to the remote GitHub repository. I have to stage, commit, and push to update GitHub.
- **Why I push after committing:** Pushing sends my local committed changes up to the remote repository (`origin/main`) on GitHub.

## Git & Repository Notes
- **Push rejection (`fetch first`):** My initial push was rejected because the remote repository had changes I did not have locally yet (`Updates were rejected because the remote contains work that you do not have locally`).
- **Pulling & pushing:** I pulled changes from `origin main` (including `--allow-unrelated-histories` when histories diverged) and pushed back to `origin main`.
- **Staging & folder structure:** I noticed I needed to make sure changes were staged (`git add`) before committing, and that my folder structure inside `oct26-level1-week5` / `level1-week5` had extra/duplicate files (`21/README.md.txt`, `22/README.md.txt`, `23/README.md.txt`, `README.md.txt`, `Script.js`, `mini-project/README.md.txt`) that I want to be more careful with going forward.
