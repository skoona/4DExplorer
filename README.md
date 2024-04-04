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
- Error are logged to Data/Logs/errors/*.json files

## TODO
There are a couple of classes which when invoked from the command line will perform a Syntax Check and/or Compile to 4DZ; leaving results in json files in the project folder.  See: ./Command.sh for command line example.

### Interactions
- feel free to improve the app in any way you see fit.  (In your own branch)
- Automation on creation of pull_request to Development from feature branch.

### Workflow

> CAUTION:
> I recommend using `git rebase` in your daily workflow cycle when working on a local feature branch before pushing your branch to the remote.
> After the very first push to the remote and another rebase, all your branch commits will have been recreated, effectively re-writing the git history (BAD)
> Pushing to the remote after a second rebase locally will likely fail and suggest you 'git pull` to merge the changes: DON'T DO THE PULL; you would end up with duplicate commits having the same content but different hash IDs (NOT FATAL BUT BAD).
> You have two choices: given a second local rebase and desire to push to remote
> * `git push --force origin \<feature-branch>` to force the remote update to current state
> * `git push origin -d \<feature-branch>` to delete the remote
> * `git push origin \<feature-branch>` to push the changed local to the remote after deleting the remote
>
> COMMON-BRANCH (checkout)-> FEATURE-BRANCH (rebase-common-branch) -> (merge squash) COMMON-BRANCH
> RELEASE-BRANCH \<- (merge-ff) COMMON-BRANCH

1. Start with an updated and current local repo! (UPDATE LOCAL)
    - cd &lt;application-dir&gt;
    - git fetch origin -u --prune
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
    - ** Feature is now complete - or your done for now
    - (see note) git push origin &lt;new-feature-branch&gt;

3. Add more to &lt;new-feature-branch&gt;
    - do UPDATE LOCAL
    - git checkout &lt;new-feature-branch&gt;
    - git pull origin &lt;new-feature-branch&gt;  -- in case other updated it
    - ** Make changes and Commit **
    - ** Make changes and Commit **
    - ** Make changes and Commit **
    - ** Feature is now complete
    - (see note) git push origin &lt;new-feature-branch&gt;

4. Merge &lt;new-feature-branch&gt; into development
    - do UPDATE LOCAL
    - git checkout development
        - git merge --squash &lt;new-feature-branch&gt;
	- git commit       // save the opened commit message
    - git branch -d &lt;new-feature=branch&gt;
    - git push origin -d &lt;new-feature=branch&gt;
    - git push origin development

5. Merge development into main (attempt fast-forward)
    - do UPDATE LOCAL
    - git checkout main
    - git merge --ff development
    - git push origin main
    - git checkout development

- In the future
    - git push origin \<feature-branch> will just sit there until YOU create a `pull request (PR)`
    - Each (git push origin \<feature-branch>) to a PR will cause a pipeline SyntaxCheck
    - A PR will sit there until a code-review (CR) is OK'ed and the SyntaxCheck passes.
    - Once the CR is approved, a merge-squash-delete (see #4 above) will be performed (by GitHub), and the PR will be closed.

#### Extra Gits
    - Cancel a rebase and go back to before
        - git rebase --abort
    - Cancel a merge and go back to before
        - git merge --abort
    - Merge Conflicts
        - \<<< Yours
        - =====
        - \>>> Theirs
        * Fix the conflict
        * When Merging use: 
            - git add \<file>
            - git commit :or: git merge --continue
        * When Rebasing use:
            - git add \<file>
            - git rebase --continue
    - View text graph of git tree
        - git log --oneline --graph
    - Best to use a GUI Tool, like Tower, of any sort, but if you need to skip/undo chunks of changes manually, carefully try this command.  It takes work and their isn't an --abort available.
        - Git add -p <file>
        - https://nuclearsquid.com/writings/git-add/
        - https://git-scm.com/book/en/v2/Appendix-C%3A-Git-Commands-Patching
        - y stage this hunk for the next commit
        - n do not stage this hunk for the next commit
        - q quit; do not stage this hunk or any of the remaining hunks
        - a stage this hunk and all later hunks in the file
        - d do not stage this hunk or any of the later hunks in the file
        - g select a hunk to go to
        - / search for a hunk matching the given regex
        - j leave this hunk undecided, see next undecided hunk
        - J leave this hunk undecided, see next hunk
        - k leave this hunk undecided, see previous undecided hunk
        - K leave this hunk undecided, see previous hunk
        - s split the current hunk into smaller hunks
        - e manually edit the current hunk
            - You can then edit the hunk manually by replacing +/- by # (thanks veksen)
        - ? print hunk help
        * After completing above patches
            * git diff --staged to check that you staged the correct changes
            * git reset -p to unstage mistakenly added hunks
            * git commit -v to view your commit while you edit the commit message.
    - Delete Local Branch
        - git branch -D &lt;branch-name&gt;
    - Delete Remote Branch
        - git push origin :&lt;branch-name&gt;
        - [or] git push origin --delete :&lt;branch-name&gt;

## Project Helpers
### Command line helpers
* [Homebrew - MacOS Software Installer](https://docs.brew.sh/Installation)
* [How to change MacOS shell type](https://www.howtogeek.com/444596/how-to-change-the-default-shell-to-bash-in-macos-catalina/#:~:text=Apple%20now%20uses%20Zsh%20as,in%20Terminal%20and%20reopen%20it.)
* [Oh-My-Bash Docs](https://ohmybash.nntoan.com)
* [Oh-My-Bash Repo](https://github.com/ohmybash/oh-my-bash)
* [Oh-My-Zsh Docs](https://ohmyz.sh)
* [Oh-My-Zsh Repo](https://github.com/ohmyzsh/ohmyzsh)
* Check out the Wiki's of these sites for more info


### Aliases
```bash
alias gs='git status '
alias gcd='git checkout development '
alias gcm='git checkout main '
alias gdp='git pull origin development '
alias gmp='git pull origin main '
alias gmm='git merge main '
alias gmd='git merge development '
alias gdpp='git push origin development --tags '
alias gmpp='git push origin main --tags '
alias gfp='git fetch origin -u --prune '
alias gupdate="gfp && gcm && gmp && gcd && gdp "
alias gbr='git branch -avv'
alias grestore="git restore  Project/Sources/catalog.4DCatalog"
alias gl1="git log --oneline --graph"
alias gclean="git gc --prune=now"
alias gmaint="git fsck --no-reflogs"
```

## Project Layout
```text
├── Command4D.sh
├── Data
│   ├── Logs
│   │   └── error
├── Documentation
├── LICENSE
├── Logs
├── Project
│   ├── Contacts.4DProject
│   │   ├── formAttributes.json
│   │   ├── methodAttributes.json
│   │   └── webservices.json
│   ├── Sources
│   │   ├── Classes
│   │   │   ├── GHCheckSyntax.4dm
│   │   │   ├── GHCommand.4dm
│   │   │   ├── GHCommandFactory.4dm
│   │   │   └── GHCompileAndBuild.4dm
│   │   ├── DatabaseMethods
│   │   │   └── onStartup.4dm
│   │   ├── Forms
│   │   │   └── MainEntryForm
│   │   │       ├── ObjectMethods
│   │   │       │   ├── BevelButton2.4dm
│   │   │       │   ├── SearchPicker.4dm
│   │   │       │   ├── es_NamesLB.4dm
│   │   │       │   ├── eventAddPB.4dm
│   │   │       │   ├── eventDeletePB.4dm
│   │   │       │   ├── eventEditPB.4dm
│   │   │       │   ├── personAddPB.4dm
│   │   │       │   ├── personDeletePB.4dm
│   │   │       │   ├── personEditPB.4dm
│   │   │       │   ├── touchAddPB.4dm
│   │   │       │   ├── touchDeletePB.4dm
│   │   │       │   └── touchEditPB.4dm
│   │   │       ├── form.4DForm
│   │   │       └── method.4dm
│   │   ├── Methods
│   │   │   ├── CM_FindAndUpdateMainWindow.4dm
│   │   │   ├── CM_MainEntry.4dm
│   │   │   ├── CM_MainPrintAll.4dm
│   │   │   ├── CM_MainWindowDataUpdate.4dm
│   │   │   ├── Compiler_Arrays.4dm
│   │   │   ├── Compiler_Methods.4dm
│   │   │   ├── Compiler_Variables.4dm
│   │   │   ├── GH_Test_SyntaxCheck.4dm
│   │   │   ├── GH_UserParamHandler.4dm
│   │   │   ├── LoadSampleDataFromHTTP.4dm
│   │   │   ├── LoadSampleDataFromJSONFile.4dm
│   │   │   ├── SampleDataAppend.4dm
│   │   │   ├── SampleDataReload.4dm
│   │   │   ├── ToggleActions.4dm
│   │   │   └── error_logger.4dm
│   │   ├── TableForms
│   │   │   ├── 1
│   │   │   │   ├── Input
│   │   │   │   │   ├── ObjectMethods
│   │   │   │   │   │   └── vRecNum.4dm
│   │   │   │   │   └── form.4DForm
│   │   │   │   ├── MainPrintForm
│   │   │   │   │   └── form.4DForm
│   │   │   │   └── Output
│   │   │   │       ├── Images
│   │   │   │       │   └── Picture7.png
│   │   │   │       └── form.4DForm
│   │   │   ├── 2
│   │   │   │   ├── Input
│   │   │   │   │   ├── ObjectMethods
│   │   │   │   │   │   ├── Popup Dropdown List.4dm
│   │   │   │   │   │   └── vRecNum.4dm
│   │   │   │   │   └── form.4DForm
│   │   │   │   └── Output
│   │   │   │       ├── Images
│   │   │   │       │   └── Picture6.png
│   │   │   │       └── form.4DForm
│   │   │   ├── 3
│   │   │   │   ├── Input
│   │   │   │   │   ├── ObjectMethods
│   │   │   │   │   │   ├── Popup Dropdown List.4dm
│   │   │   │   │   │   ├── PopupDate.4dm
│   │   │   │   │   │   ├── date.4dm
│   │   │   │   │   │   └── vRecNum.4dm
│   │   │   │   │   └── form.4DForm
│   │   │   │   └── Output
│   │   │   │       ├── Images
│   │   │   │       │   └── Picture6.png
│   │   │   │       └── form.4DForm
│   │   │   ├── 4
│   │   │   ├── 5
│   │   │   └── 6
│   │   ├── Triggers
│   │   ├── catalog.4DCatalog
│   │   ├── folders.json
│   │   ├── lists.json
│   │   ├── menus.json
│   │   ├── settings.4DSettings
│   │   ├── styleSheets_mac.css
│   │   ├── styleSheets_windows.css
│   │   └── tips.json
│   └── Trash
│       ├── Forms
│       ├── Methods
│       └── TableForms
├── README.md
├── Resources
│   ├── Images
│   │   ├── Buttons
│   │   └── Icons
│   ├── SampleData
│   │   └── sampleContacts.json
│   ├── en.lproj
│   │   └── syntaxEN.json
│   └── php.ini
└── Settings
```

## Contributing

1. Fork it 
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## License

The project is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
