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
    - ** Feature is now complete - or your done for now
    - git push origin &lt;new-feature-branch&gt;

3. Add more to &lt;new-feature-branch&gt;
    - do UPDATE LOCAL
    - git checkout &lt;new-feature-branch&gt;
    - git pull origin &lt;new-feature-branch&gt;  -- in case other updated it
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
    - git push origin :&lt;new-feature=branch&gt;
    - git push origin development

- In the future
    - git push origin \<feature-branch> will just sit there until YOU create a `pull request (PR)`
    - Each (git push origin \<feature-branch>) to a PR will cause a pipeline SyntaxCheck
    - A PR will set there until a code-review (CR) is OK'ed and the SyntaxCheck passes.
    - Once the CR is approved, then a merge-squash-delete (see #4 above) will be performed (by GitHub) and the PR will be closed.

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
```bash
alias gs='git status '
alias gbr='git branch -a'
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