# 4DExplorer
Git Workouts Example

## Project updated to a simple 4D Contacts application
To initialize your local copy you will need to create directories that are being gitIgnored

### Create Directories
- Data
- When you first launch it will ask `create/open`
- choos open, and point to Data diretory

### Launch App
- Using 4D v19 or 4D v20 client open Project file
- Main menu `Tools` -&gt; `Reload Database`
- App is ready to use

## TODO
There are a couple of classes which when invoked from the command line will perform a Syntax Check and/or Compile to 4DZ; leaving results in json files in the project folder.  See: ./Command.sh for command line example.

### Interactions
- feel free to improve the app in any way you see fit.  (In your own branch)

### Workflow
1. Start with an updated and current local repo! (UPDATE LOCAL)
    - cd &lt;application-dir&gt;
    - git fetch origin -u
    - git checkout main
    - git pull origin main
    - git checkout development
    - git pull origin development

2. Begin your new feature
    - git checkout development
    - git checkout -b &lt;new-feature-branch&gt;
    - ** Make changes and Commit **
        - make sure Project\Sources\catalog.4DCatalog is not included unless you intended it.
        - git status
        - git commit -am "doing something good"
    - ** Make changes and Commit **
    - ** Make changes and Commit **
    - ** Feature is now complete
    - git push origin &lt;new-feature-branch&gt;

3. Add more to &lt;new-feature-branch&gt;
    - do UPDATE LOCAL
    - git checkout &lt;new-feature-branch&gt;
    - git pull origin &lt;new-feature-branch&gt;
    - ** Make changes and Commit **
    - ** Make changes and Commit **
    - ** Make changes and Commit **
    - ** Feature is now complete
    - git push origin &lt;new-feature-branch&gt;

4. Merge &lt;new-feature-branch&gt; into development
    - do UPDATE LOCAL
    - git checkout development
        - git rebase --squash &lt;new-feature-branch&gt;
        * or 
        - git merge --squash &lt;new-feature-branch&gt;
	- git commit       // save the opened commit message
    - git branch -D &lt;new-feature=branch&gt;
    - git push origin development

- In the future
    - git push origin \<feature-branch> will just sit there until we create a `pull request (PR)`
    - Each (git push origin \<feature-branch>) to a PR will cause a SyntaxCheck
    - A PR will set there until a code-review (CR) is OK'ed and the SyntaxCheck passes.
    - Once the CR is approved, then a merge-squash-delete (see #4 above) will be performed (by GitHub) and the PR will be closed.

