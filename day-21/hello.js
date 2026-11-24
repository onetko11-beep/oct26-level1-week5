// TODO: Print an original greeting for your fictional activity.
//console.log("Hello from my favorite yoga class!");
console.log("Hello from my favorite golf course!");
// Save and run from the repository root:
// The output was Hello from my favorite yoga class!
// Hello from my second commit
//The output changed to Hello from my favorite golf course!
//Hello from my second commit ( I didn't comment that line out)
//What saving does: Saving saves my changes in my local folder.
//I thought it would save it to the repository but it doesn't. 
// It only saves it to my local folder. I have to commit and push to save it to the repository.

// ! [rejected]        main -> main (fetch first)
/*error: failed to push some refs to 'https://github.com/onetko11-beep/oct26-level1-week5.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.*

//Now I will run the command git pull origin main to pull the changes from the 
/* remote repository to my local repository.

PS C:\CodeX\oct26-level1-week5\level1-week5> git pull origin main --allow-unrelated-histories  
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 8 (delta 1), reused 8 (delta 1), pack-reused 0 (from 0)
Unpacking objects: 100% (8/8), 697 bytes | 21.00 KiB/s, done.
From https://github.com/onetko11-beep/oct26-level1-week5
 * branch            main       -> FETCH_HEAD
 + fe38e20...caddc9e main       -> origin/main  (forced update)
Merge made by the 'ort' strategy.
 21/README.md.txt           | 4 ++++
 22/README.md.txt           | 0
 23/README.md.txt           | 0
 README.md.txt              | 0
 Script.js                  | 0
 mini-project/README.md.txt | 0
 6 files changed, 4 insertions(+)
 create mode 100644 21/README.md.txt
 create mode 100644 22/README.md.txt
 create mode 100644 23/README.md.txt
 create mode 100644 README.md.txt
 create mode 100644 Script.js
 create mode 100644 mini-project/README.md.txt */

 //Now I willrun the command git push origin main to push my changes to the remote repository.

/* Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 8 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (13/13), 2.38 KiB | 2.38 MiB/s, done.
Total 13 (delta 3), reused 9 (delta 2), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (3/3), done.*/

//Why I push after Commit: I push after commit because I want to save my changes to
//  the remote repository.

//Now I will check GitHub to see if my changes were saved to the remote repository.

//I do not see my changes on GitHub. I will check the branch 
//I think I neglected to stage my changes before committing. I will run the 
// command git status to see if I have any changes that need to be staged.

// node daily-exercises/day-21/hello.js

// Then change the greeting, save, and run the same file again.
console.log("Hello from my second commit");
