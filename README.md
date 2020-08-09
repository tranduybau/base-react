# RULES
## Git flow

Reference flow: [A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)

We define here for a short guide.

### The main branches
The central repo holds one main branch with an infinite lifetime:
* `master`

Note:

1. We consider `origin/master` to be the main branch where the source code of HEAD always reflects a state with the latest `delivered development changes for the next release`. This is also called `integration branch`.

### Supporting branches and branch naming rules
* Checkout from: `master`.
* Must merge back into: `master`.
* Branch naming convention:
  * Except `master`, `develop`.
  * Must be `tracker/id_of_task||name_of_task`:

  * `Tracker`:
    * `task` for normal task, feature.
    * `fix` or `hotfix` for bug fix.
    * `release` for release branch from `develop` to `master` for stable version.
  * `id_of_task||name_of_task` for example: `Create-XXX` or `task_1234`...

### Commit message rules
* Allow for multi-commits, so please add a commit after you've done a feature/bug,... then continue coding.
* Format `[Type] Message`.
* Type:
  * **add**: add file(s) or feature.
  * **modify**: Change feature not bugs (may a change request).
  * **fix**: For fix a normal bugs.
  * **hotfix**: For immediately bug fix.
  * **revert**: Revert the previous changes. (this should rarely or never happend)
* Message: the short and meaningful purpose of what you've done!

For Example:
* `[add] login UI`.
* `[modify] Change behavior when login wrong password`.
* `[fix] Can not refresh the chat message`.

### Fix conflict error when rebasing

If conflict error occurs when rebasing, it will be displayed as below (at this moment, you will be moved to anonymous branch automatically).
```sh
$ git rebase develop
First, rewinding head to replay your work on top of it...
Applying: refs #1234 Can not remove cache
Using index info to reconstruct a base tree...
Falling back to patching base and 3-way merge...
Auto-merging path/to/conflicting/file
CONFLICT (add/add): Merge conflict in path/to/conflicting/file
Failed to merge in the changes.
Patch failed at 0001 refs #1234 Can not remove cache
The copy of the patch that failed is found in:
    /path/to/working/dir/.git/rebase-apply/patch

When you have resolved this problem, run "git rebase --continue".
If you prefer to skip this patch, run "git rebase --skip" instead.
To check out the original branch and stop rebasing, run "git rebase --abort".
```

1. Fix all the conflicts manually (code which is surrounded by <<< and >>>)
Use `git rebase --abort` if you want to abort rebase process.

2. After fixing all conflicts, continue your rebase process.

    ```sh
    $ git add .
    $ git rebase --continue
    ```
