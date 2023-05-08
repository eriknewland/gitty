const yamlWorkflow = `
\`\`\`yaml
name: Greetings

on:
  pull_request:
    types: [opened]
  issues:
    types: [opened]

jobs:
  greeting:
    runs-on: ubuntu-latest
    steps:
    - name: Greet new contributors
      uses: actions/github-script@v5
      with:
        script: |
          const issue = context.issue;
          const author = context.payload.sender.login;
          const repo = context.repo;
          const message = \`Hello @\${author}! Thank you for contributing to our project! We appreciate your effort and look forward to reviewing your changes. If you have any questions, feel free to ask.\`;
          if (context.eventName === "pull_request") {
            github.rest.pulls.createReview({
              ...repo,
              pull_number: issue.number,
              body: message,
              event: 'COMMENT',
            });
          } else {
            github.rest.issues.createComment({
              ...repo,
              issue_number: issue.number,
              body: message,
            });
          }
\`\`\`
`;

const lessonsData = [
  {
    title: 'Lesson 1\nGit Basics',
    icon: 'BsGithub',
    description: 'Learn the basics of Git and how to set up an account.',
    longDescription:
      'In this lesson, we will introduce you to the basics of Git and GitHub, explaining their purpose and importance in the world of software development.',
    objectives: [
      'Understand the purpose of Git and GitHub',
      'Learn the differences between Git and GitHub',
      'Discover the benefits of using Git and GitHub',
      'Set up a GitHub account',
    ],
    content: [
      {
        sectionTitle: 'What is Git?',
        sectionContent:
          'Git is a distributed version control system that allows developers to track changes in their code, collaborate with others, and manage different versions of their projects. It was created by Linus Torvalds in 2005 to help with the development of the Linux kernel.\n\nHere is a sample Git command:\n\n```\ngit commit -m "Hello World!"\n```',
      },
      {
        sectionTitle: 'What is GitHub?',
        sectionContent:
          'GitHub is a web-based platform that provides hosting for Git repositories, making it easier for developers to collaborate on projects, share code, and contribute to open-source software. It offers various features such as issue tracking, pull requests, and project management tools.',
      },
      {
        sectionTitle: 'Why use Git and GitHub?',
        sectionContent:
          'Using Git and GitHub can help developers to efficiently manage their code, collaborate with others, and contribute to open-source projects. They provide a centralized location for storing code, tracking changes, and resolving conflicts, making it easier to maintain a clean and organized codebase.',
      },
      {
        sectionTitle: 'Setting up Git and GitHub accounts',
        sectionContent:
          "To get started with Git and GitHub, you'll need to create a GitHub account. Visit [https://github.com/join](https://github.com/join) and follow the steps to sign up for a free account. Once you've signed up, you can start creating repositories, collaborating on projects, and exploring the vast world of open-source software.",
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Create a GitHub account',
        exerciseInstructions:
          "If you haven't already, sign up for a GitHub account at [https://github.com/join](https://github.com/join) . Fill in the required information and complete the registration process.",
      },
    ],
    chartDefinition: `
    mindmap
    root)Git(
      )Git(
        (Version Control)
        ::icon(fa fa-github)
        (Commands)
          {{Basic}}
            ))init((
            ))add((
            ))commit((
            ))status((
          {{Advanced}}
            ))log((
            )) diff((
            ))merge((
            ))pull((
            )) push((
        (Branching)
          {{Types}}
            ))master((
            ))feature((
            ))hotfix((
      )GitHub(
        (Remote Repository)
        ::icon(fa fa-cloud)
        (Features)
          {{Issues & PRs}}
            ))Issues((
            ))Pull Requests((
          {{Repository}}
            ))Forks((
            ))Stars((
            ))Watchers((
        (Collaboration)
          {{Teams & Orgs}}
            ))Teams((
            ))Organizations((
          ))Code Review((
        (Integrations)
          {{CI/CD & Actions}}
            ))CI/CD((
            ))GitHub Actions((
          {{Webhooks & Apps}}
            ))Webhooks((
`,
  },
  {
    title: 'Lesson 2\nGitting Started',
    icon: 'BiGitBranch',
    description: 'Set up your environment and make your first commit',
    longDescription:
      "In this lesson, you will learn how to install Git, configure your environment, and create your first repository. You will also learn how to use Gitpod to clone the repository, add a 'Hello World' file, commit, and push changes.",
    objectives: [
      'Install Git on your local machine',
      'Configure your Git environment',
      'Create your first repository on GitHub',
      'Clone the repository using Gitpod or on your local machine',
      "Add a 'Hello World' file, commit, and push changes",
    ],
    content: [
      {
        sectionTitle: 'Installing Git',
        sectionContent:
          "To install Git on your local machine, follow the instructions for your operating system:\n- [ ] Windows: Download the installer from https://git-scm.com/download/win and run it.\n- [ ] macOS: Install Git using Homebrew by running `brew install git` in the terminal. If you don't have Homebrew, you can download the installer from https://git-scm.com/download/mac.\n- [ ] Linux: Install Git using your package manager. For example, on Ubuntu or Debian, run `sudo apt-get install git` in the terminal.",
      },
      {
        sectionTitle: 'Configuring Your Git Environment',
        sectionContent:
          'After installing Git, configure your user name and email address by running the following commands in the terminal:\n\n```\ngit config --global user.email "your.email@example.com"\n````\n\nThese settings will be used for your commit messages.',
      },

      {
        sectionTitle: 'Creating Your First Repository on GitHub',
        sectionContent:
          "To create your first repository on GitHub, follow these steps:\n\n - [ ] Log in to your GitHub account.\n- [ ] Click the '+' icon in the top-right corner and select 'New repository'.\n- [ ] Enter a name for your repository, add a description (optional), and choose whether to make it public or private.\n- [ ] Initialize the repository with a README file.\n- [ ] Click 'Create repository'.",
      },
      {
        sectionTitle: 'Cloning the Repository',
        sectionContent:
          "You can clone the repository using Gitpod or on your local machine.\n\n - [ ] Gitpod: Visit https://gitpod.io/#https://github.com/yourusername/yourrepository and replace 'yourusername' and 'yourrepository' with your GitHub username and repository name. Gitpod will automatically clone the repository and open a new workspace.\n - [ ]  Local machine: Open the terminal and navigate to the directory where you want to clone the repository. Run the following command, replacing 'yourusername' and 'yourrepository' with your GitHub username and repository name:\n  ```bash\ngit clone https://github.com/yourusername/yourrepository.git\n```\n 4. Then, navigate to the cloned repository by running ```cd yourrepository```.",
      },

      {
        sectionTitle:
          "Adding a 'Hello World' File, Committing, and Pushing Changes",
        sectionContent:
          "To add a 'Hello World' file, commit, and push changes, follow these steps:\n\n - [ ] Create a new file called ```'hello_world.txt'``` in the repository.\n - [ ] Open the file and add the text ```'Hello, World!'```.\n - [ ] Save and close the file.\n - [ ] In the terminal, run the following commands to stage, commit, and push the changes:\n\n```bash\ngit add hello_world.txt\ngit commit -m \"Add Hello World file\"\ngit push\n```\n\nYour changes will now be visible on GitHub.",
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Install Git and Configure Your Environment',
        exerciseInstructions:
          'Follow the instructions in the **Installing Git** and **Configuring Your Git Environment** sections to install Git on your local machine and configure your user name and email address.',
      },
      {
        exerciseTitle: 'Create Your First Repository on GitHub',
        exerciseInstructions:
          'Follow the instructions in the **Creating Your First Repository on GitHub** section to create a new repository on GitHub.',
      },
      {
        exerciseTitle: 'Clone the Repository',
        exerciseInstructions:
          "Choose whether to clone the repository using Gitpod or on your local machine, and follow the instructions in the 'Cloning the Repository' section.",
      },
      {
        exerciseTitle: "Add a 'Hello World' File, Commit, and Push Changes",
        exerciseInstructions:
          "Follow the instructions in the **Adding a Hello World** File, Committing, and Pushing Changes' section to add a ```'Hello World'``` file to your repository, commit the changes, and push them to GitHub.",
      },
    ],
    chartDefinition: `
    %%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'rotateCommitLabel': true}} }%%
    gitGraph:
      commit id: "install and configure git"
      commit id: "create repo"
      commit id: "clone repo"
      commit id: "add your changes"
      commit id: "commit"
      commit id: "push"
    `,
  },
  {
    title: 'Lesson 3\nCloning and Forking Repositories',
    icon: 'BiGitCommit',
    description:
      'Learn how to clone, fork, and contribute to modern software workflow.',
    longDescription:
      'In this lesson, we will explore the concepts of cloning and forking repositories, and how they can be used to collaborate on projects, contribute to open-source software, and manage your own copies of repositories.',
    objectives: [
      'Understand the difference between cloning and forking repositories',
      'Learn how to clone a repository',
      'Learn how to fork a repository',
      'Understand the use cases for cloning and forking',
    ],
    content: [
      {
        sectionTitle: 'Cloning a repository',
        sectionContent:
          'Cloning a repository creates a local copy of a remote repository on your computer. This allows you to work on the project, make changes, and commit them without affecting the original repository. To clone a repository, use the `git clone` command followed by the repository URL.',
      },
      {
        sectionTitle: 'Forking a repository',
        sectionContent:
          'Forking a repository creates a copy of the repository under your GitHub account. This allows you to make changes to the project and submit pull requests to contribute to the original repository. To fork a repository, click the "Fork" button on the top right corner of the repository page on GitHub.',
      },
      {
        sectionTitle: 'Comparing cloning and forking',
        sectionContent:
          'While both cloning and forking create copies of a repository, they serve different purposes. Cloning is used to create a local copy of a repository to work on, while forking is used to create a copy under your GitHub account to contribute to the original project. Forking also allows you to create pull requests, which are essential for contributing to open-source projects.',
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Fork, clone, edit, add, commit, and push',
        exerciseInstructions:
          '- [ ] Fork the repository https://github.com/eriknewland/lesson1-repo by clicking the "Fork" button on the top right corner of the repository page.\n' +
          '- [ ] Clone the forked repository to your local machine using the `git clone` command followed by the repository URL.\n' +
          '- [ ] Open the README file and fix the typo on line 5.\n' +
          '- [ ] Use `git add` to stage the changes you made to the README file.\n' +
          '- [ ] Commit the changes using `git commit -m "Fix typo in README"`.\n' +
          '- [ ] Push the changes to your forked repository using `git push`.\n' +
          'Note: In this exercise, we will not create a pull request.',
      },
    ],
    chartDefinition: `
    %%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': { 'mainBranchName': 'gitty-repo'}} }%%
    gitGraph:
      options
      {
          "nodeSpacing": 150,
          "nodeRadius": 10
      }
      end
      commit
      branch your-main
      commit
      commit tag: "Your Changes"
    `,
  },
  {
    title: 'Lesson 4\nGit Branching',
    icon: 'BiGitCompare',
    description: 'Branches, Merges, and Conflicts.',
    longDescription:
      'In this lesson, we will dive into Git branching, a powerful feature that allows you to work on multiple versions of your project simultaneously. We will cover creating and switching branches, merging branches, and resolving merge conflicts.',
    objectives: [
      'Understand the concept of branches in Git',
      'Learn how to create and switch branches',
      'Learn how to merge branches',
      'Understand how to resolve merge conflicts',
    ],
    content: [
      {
        sectionTitle: 'Understanding branches',
        sectionContent:
          'In Git, a branch is a separate line of development within a repository. It allows you to work on different features or bug fixes simultaneously without affecting the main branch (usually called `"master"` or `"main"`). When a feature or bug fix is complete, you can merge the changes back into the main branch.',
      },
      {
        sectionTitle: 'Creating and switching branches',
        sectionContent:
          'To create a new branch, use the `git checkout -b` command followed by the branch name. This will create a new branch and switch to it. To switch between branches, use the `git checkout` command followed by the branch name.',
      },
      {
        sectionTitle: 'Merging branches',
        sectionContent:
          'To merge changes from one branch into another, first switch to the target branch using `git checkout`. Then, use the `git merge` command followed by the source branch name. Git will automatically merge the changes if there are no conflicts.',
      },
      {
        sectionTitle: 'Resolving merge conflicts',
        sectionContent:
          'Merge conflicts occur when the same lines of code have been changed in both branches. Git cannot automatically merge these changes, so you must manually resolve the conflicts. Git will mark the conflicting lines in the affected files, and you can edit the files to keep the desired changes. After resolving the conflicts, commit the changes to complete the merge.',
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Create and switch branches',
        exerciseInstructions:
          'Create a new branch called "feature" in your local repository using the `git checkout -b` command. Then, switch back to the main branch using the `git checkout` command.',
      },
      {
        exerciseTitle: 'Resolve a merge conflict',
        exerciseInstructions:
          '- [ ] Create a new branch called "conflict" and switch to it.\n' +
          '- [ ] In the "conflict" branch, open a file and make some changes to it. Commit the changes.\n' +
          '- [ ] Switch back to the main branch and make changes to the same lines of the same file. Commit the changes.\n' +
          '- [ ] Attempt to merge the "conflict" branch into the main branch using the `git merge` command. Git will report a merge conflict.\n' +
          '- [ ] Open the affected file and look for the conflict markers (`<<<<<<<`, `=======`, and `>>>>>>>`). Edit the file to keep the desired changes and remove the conflict markers.\n' +
          '- [ ] Commit the changes to complete the merge.',
      },
    ],
    chartDefinition: `
    %%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': { 'mainBranchName': 'your-repo'}} }%%
    gitGraph:
      options
      {
          "nodeSpacing": 150,
          "nodeRadius": 10
      }
      end
      commit
      branch conflict-branch
      checkout conflict-branch
      commit tag: "your changes"
      checkout your-repo
      merge conflict-branch
    `,
  },
  {
    title: 'Lesson 5\nCollaborating on GitHub',
    icon: 'BiGitMerge',
    description:
      'Learn how to collaborate, manage permissions, and work with issues and pull requests.',
    longDescription:
      'In this lesson, we will explore the various features and tools available on GitHub for collaborating with others on projects. You will learn how to invite collaborators, manage permissions, and work with issues and pull requests to streamline your collaborative workflow.',
    objectives: [
      'Understand the concept of collaborators on GitHub',
      'Learn how to invite collaborators and manage permissions',
      'Discover how to collaborate using issues and pull requests',
    ],
    content: [
      {
        sectionTitle: 'Inviting collaborators',
        sectionContent:
          'To invite someone to collaborate on your GitHub repository, navigate to the `Settings` tab of your repository, and then click on `Manage access`. Click on `Invite a collaborator` and enter their GitHub username or email address. They will receive an invitation to join the repository and can accept it to start collaborating.',
      },
      {
        sectionTitle: 'Managing permissions',
        sectionContent:
          'When inviting collaborators, you can assign different permission levels to control their access to the repository. There are three permission levels: `Read`, `Write`, and `Admin`. `Read` allows users to view the repository, `Write` allows users to make changes and submit pull requests, and `Admin` allows users to manage the repository settings and collaborators.',
      },
      {
        sectionTitle: 'Collaborating with issues and pull requests',
        sectionContent:
          'Issues and pull requests are essential tools for collaborating on GitHub. Issues are used to track bugs, feature requests, and other tasks, while pull requests are used to propose changes to the codebase. Collaborators can comment on issues and pull requests, review code changes, and merge approved changes into the main branch.',
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Invite a collaborator',
        exerciseInstructions:
          'Invite GitHub user `eriknewland` to collaborate on one of your repositories. Navigate to the `Settings` tab of your repository, click on `Manage access`, and then click on `Invite a collaborator`. Enter the username `eriknewland` and send the invitation.',
      },
      {
        exerciseTitle: 'Create an issue',
        exerciseInstructions:
          'Create an issue in your repository to track a bug or feature request. Navigate to the `Issues` tab of your repository, click on `New Issue`, and fill in the required information. Assign the issue to yourself or another collaborator.',
      },
      {
        exerciseTitle: 'Fix the Issue',
        exerciseInstructions:
          'Create a branch to address the issue you just created. Switch to your branch, write your code, `add`, `commit`, and `push` your changes to your main branch.',
      },
    ],
    chartDefinition: `
      %%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': { 'mainBranchName': 'your-repo'}} }%%
      gitGraph:
        options
        {
            "nodeSpacing": 150,
            "nodeRadius": 10
        }
        end
        commit
        branch conflict-branch
        checkout conflict-branch
        commit tag: "Your Issue"
        checkout your-repo
        merge conflict-branch
      `,
  },
  {
    title: 'Lesson 6\nPull Requests',
    icon: 'BiGitPullRequest',
    description: 'Learn the art of the PR',
    longDescription:
      'In this lesson, we will explore the concept of pull requests (PRs), which are a key feature of GitHub for collaborating on projects and contributing to open-source software. You will learn how to create, review, and approve pull requests, as well as how to resolve conflicts that may arise during the process.',
    objectives: [
      'Understand the purpose of pull requests',
      'Learn how to create a pull request',
      'Learn how to review and approve pull requests',
      'Understand how to resolve conflicts in pull requests',
    ],
    content: [
      {
        sectionTitle: 'Creating a pull request',
        sectionContent:
          'A pull request is a way to propose changes to a repository. It allows you to submit your changes for review and approval by the repository owner or collaborators. To create a pull request, first push your changes to a branch in your forked repository, then click the **New Pull Request** button on the original repository page on GitHub.',
      },
      {
        sectionTitle: 'Reviewing and approving pull requests',
        sectionContent:
          'When a pull request is submitted, the repository owner or collaborators can review the changes and provide feedback. They can either approve the pull request, request changes, or leave comments for further discussion. To approve a pull request, click the **Review changes** button, select **Approve**, and then click **Submit review**.',
      },
      {
        sectionTitle: 'Merging pull requests',
        sectionContent:
          'Once a pull request has been approved, it can be merged into the target branch. This incorporates the proposed changes into the main codebase. To merge a pull request, click the **Merge pull request** button, then confirm the merge by clicking **Confirm merge**.',
      },
      {
        sectionTitle: 'Resolving pull request conflicts',
        sectionContent:
          'Sometimes, conflicts may arise when merging a pull request due to changes in the target branch that are incompatible with the proposed changes. In such cases, you will need to resolve the conflicts manually by editing the conflicting files, committing the changes, and pushing them to the branch associated with the pull request.',
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Create a pull request in your own repository',
        exerciseInstructions:
          '- [ ] Create a new branch in your own repository and make some changes to the code\n- [ ] Push the changes to the new branch, then create a pull request to propose merging the changes into the main branch\n- [ ] Review the changes and approve the pull request.',
      },
      {
        exerciseTitle: 'Resolve conflicts in a pull request',
        exerciseInstructions:
          '- [ ] Intentionally create a conflict in your pull request by making conflicting changes in the main branch and the new branch\n- [ ]  Attempt to merge the pull request\n- [ ] Resolve the conflicts manually by editing the conflicting files\n- [ ] Commit the changes, and push them to the branch associated with the pull request.',
      },
    ],
    chartDefinition: `
    %%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': { 'mainBranchName': 'main'}} }%%
    gitGraph:
    options
    {
        "nodeSpacing": 150,
        "nodeRadius": 10,
    }
    end
    commit
    branch conflict
    checkout conflict
    commit
    checkout main
    commit
    merge conflict
  `,
  },
  {
    title: 'Lesson 7\nGit Remotes',
    icon: 'BiGitRepoForked',
    description: 'Learn how to work with remote repositories.',
    longDescription:
      'In this lesson, we will explore the concept of remote repositories and how to interact with them using Git commands. You will learn how to fetch, pull, and push changes between your local repository and remote repositories.',
    objectives: [
      'Understand remote repositories',
      'Learn how to add and remove remotes',
      'Learn how to fetch and pull from remotes',
      'Learn how to push to remotes',
    ],
    content: [
      {
        sectionTitle: 'Understanding remote repositories',
        sectionContent:
          'A remote repository is a version of your project that is hosted on a remote server, such as GitHub. Remote repositories allow you to collaborate with others, share your work, and keep your local repository in sync with the latest changes.',
      },
      {
        sectionTitle: 'Adding and removing remotes',
        sectionContent:
          'To add a remote repository, use the `git remote add` command followed by a name for the remote and the remote repository URL. To remove a remote, use the `git remote remove` command followed by the name of the remote.',
      },
      {
        sectionTitle: 'Fetching and pulling from remotes',
        sectionContent:
          'To fetch changes from a remote repository, use the `git fetch` command followed by the name of the remote. This will download the changes but not merge them into your local branch. To fetch and merge changes, use the `git pull` command followed by the name of the remote and the branch you want to pull from.',
      },
      {
        sectionTitle: 'Pushing to remotes',
        sectionContent:
          'To push your local changes to a remote repository, use the `git push` command followed by the name of the remote and the branch you want to push to. This will update the remote repository with your latest changes.',
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Add a remote repository',
        exerciseInstructions:
          "- [ ] Navigate to [github.com/eriknewland/gitty](github.com/eriknewland/gitty)\n- [ ] Fork the `eriknewland/gitty` repository on GitHub\n- [ ] Then, clone your forked repository to your local machine\n- [ ] Add the original `eriknewland/gitty` repository as a remote named 'upstream' using the `git remote add` command.",
      },
      {
        exerciseTitle: 'Create a pull request',
        exerciseInstructions:
          "- [ ] Create a new branch in your local repository and make some changes to the code\n- [ ]  Commit your changes and push the new branch to your forked repository on GitHub\n- [ ]  Then, create a pull request in your own repository to merge the changes from the new branch into the 'main' branch\n- [ ]  Review and approve the pull request.",
      },
    ],
    chartDefinition: `
      %%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': { 'mainBranchName': 'main'}} }%%
      gitGraph:
      options
      {
          "nodeSpacing": 150,
          "nodeRadius": 10,
      }
      end
      commit
      branch conflict
      checkout conflict
      commit
      checkout main
      commit
      merge conflict
    `,
  },
  {
    title: 'Lesson 8\nGit Stashing',
    icon: 'DiGitMerge',
    description:
      'Learn how to use Git stashing to temporarily save changes that you do not want to commit yet.',
    longDescription:
      'In this lesson, we will explore the concept of Git stashing, which allows you to temporarily save changes that you do not want to commit yet. This can be useful when you are in the middle of working on a feature or bugfix and need to switch to a different branch or task.',
    objectives: [
      'Understand the purpose of Git stashing',
      'Learn how to create and apply stashes',
      'Practice stashing and applying changes',
    ],
    content: [
      {
        sectionTitle: 'Stashing changes',
        sectionContent:
          'To stash changes, use the `git stash` command. This will save your current changes in a new stash and revert your working directory to the last commit. You can also provide a message to describe the changes using `git stash save "your message"`.',
      },
      {
        sectionTitle: 'Applying stashed changes',
        sectionContent:
          'To apply stashed changes, use the `git stash apply` command followed by the stash name (e.g., `stash@{0}`). This will apply the changes from the specified stash to your working directory. If you want to apply the changes and remove the stash, use `git stash pop` instead.',
      },
      {
        sectionTitle: 'Creating and applying patches',
        sectionContent:
          'You can also create a patch from a stash using `git stash branch <branchname>` command. This will create a new branch and apply the stash to it. To apply a patch to your current branch, use the `git apply` command followed by the patch file.',
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Stash changes',
        exerciseInstructions:
          '- [ ] Create a new file or modify an existing file in your local repository\n- [ ] Use the `git stash` command to temporarily save your changes\n- [ ]  Optionally, provide a message to describe the changes.',
      },
      {
        exerciseTitle: 'Apply stashed changes',
        exerciseInstructions:
          '- [ ] Use the `git stash list` command to view your stashes\n- [ ]  Apply the changes from a specific stash to your working directory using the `git stash apply` command followed by the stash name\n- [ ]  Alternatively, use `git stash pop` to apply the changes and remove the stash.',
      },
      {
        exerciseTitle: 'Create and apply a patch',
        exerciseInstructions:
          '- [ ] Create a new branch and apply a stash to it using the `git stash branch <branchname>` command\n- [ ]  Create a patch file from the changes in the new branch using the `git diff` command\n- [ ]  Apply the patch to your current branch using the `git apply` command followed by the patch file.',
      },
    ],
    chartDefinition: `
    %%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': { 'mainBranchName': 'main', 'tagLabelFontSize': '12px'}} }%%
    gitGraph:
    options
    {
        "nodeSpacing": 150,
        "nodeRadius": 10,
    }
    end
    commit
    branch feature
    checkout feature
    commit
    commit tag:"Stash changes"
    checkout main
    commit
    checkout feature
    commit
    commit tag:"Apply stashed changes"
    checkout main
    merge feature tag:"Push changes to main"
  `,
  },
  {
    title: 'Lesson 9\nGit Rebase',
    icon: 'BsGithub',
    description:
      'Learn how to use Git rebase to modify and clean up your commit history.',
    longDescription:
      'In this lesson, we will explore the concept of Git rebase, how it can be used to modify and clean up your commit history, and how to resolve conflicts that may arise during the rebasing process.',
    objectives: [
      'Understand the purpose of Git rebase',
      'Learn how to perform a rebase',
      'Learn how to resolve rebase conflicts',
      'Understand the benefits of interactive rebasing',
    ],
    content: [
      {
        sectionTitle: 'Understanding rebasing',
        sectionContent:
          'Git rebase is a powerful tool that allows you to modify your commit history by moving a series of commits to a new base commit. This can be useful for cleaning up your commit history, integrating changes from another branch, or updating your branch with the latest changes from the main branch.',
      },
      {
        sectionTitle: 'Performing a rebase',
        sectionContent:
          'To perform a rebase, use the `git rebase` command followed by the target branch. This will move your current branch and its commits to the latest commit of the target branch. During the process, Git will replay your commits one by one and apply them on top of the target branch.',
      },
      {
        sectionTitle: 'Resolving rebase conflicts',
        sectionContent:
          'Conflicts may arise during the rebasing process if the same lines of code have been modified in both branches. To resolve these conflicts, you will need to manually edit the conflicting files, mark them as resolved using `git add`, and then continue the rebase with `git rebase --continue`.',
      },
      {
        sectionTitle: 'Interactive rebasing',
        sectionContent:
          'Interactive rebasing allows you to modify your commit history by reordering, editing, squashing, or dropping commits. To start an interactive rebase, use the `git rebase -i` command followed by the target commit or branch. This will open an editor where you can specify the actions to perform on each commit.',
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Rebase a branch',
        exerciseInstructions:
          '- [ ] Clone the eriknewland/gitty repository and create a new branch with a few commits\n- [ ]  Then, rebase your branch onto the main branch to integrate the latest changes from the main branch into your branch.',
      },
      {
        exerciseTitle: 'Resolve rebase conflicts',
        exerciseInstructions:
          '- [ ] Intentionally create a conflict between your branch and the main branch in the eriknewland/gitty repository\n- [ ] Perform a rebase and resolve the conflicts that arise during the process',
      },
      {
        exerciseTitle: 'Interactive rebase',
        exerciseInstructions:
          '- [ ] Using the eriknewland/gitty repository, perform an interactive rebase to modify your commit history\n- [ ] Try reordering, editing, squashing, and dropping commits to see how each action affects your commit history.',
      },
    ],
    chartDefinition: `
    %%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': { 'mainBranchName': 'main'}} }%%
      gitGraph
        commit
        commit
        branch branch1
        commit
        commit
        checkout main
        branch branch2
        commit
        commit
        checkout main
        commit
        merge branch1 tag:"v1.0.5 updated"
    `,
  },
  {
    title: 'Lesson 10\nGit Bisect',
    icon: 'BiGitBranch',
    description:
      'Learn how to use Git bisect to find the commit that introduced a bug.',
    longDescription:
      'In this lesson, we will explore the concept of Git bisect, a powerful tool that helps you find the commit that introduced a bug in your codebase. We will cover how to run a bisect session, automate bisect with scripts, and understand the benefits of using Git bisect.',
    objectives: [
      'Understand the purpose of Git bisect',
      'Learn how to run a bisect session',
      'Automate bisect with scripts',
      'Discover the benefits of using Git bisect',
    ],
    content: [
      {
        sectionTitle: 'Understanding bisect',
        sectionContent:
          'Git bisect is a binary search tool that helps you find the commit that introduced a bug in your codebase. By marking commits as "good" or "bad," Git bisect narrows down the range of commits to find the exact commit that caused the issue.',
      },
      {
        sectionTitle: 'Running a bisect session',
        sectionContent:
          'To start a bisect session, use the `git bisect start` command. Then, mark the known good and bad commits using `git bisect good <commit>` and `git bisect bad <commit>`. Git bisect will then guide you through the process of testing commits until the culprit commit is found. Once the session is complete, use `git bisect reset` to return to your original branch.',
      },
      {
        sectionTitle: 'Automating bisect with scripts',
        sectionContent:
          'Git bisect can be automated using scripts to test commits. By providing a script that returns 0 for good commits and non-zero for bad commits, Git bisect can automatically find the commit that introduced the bug. To use a script, run `git bisect run <script>`.',
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Manual Git bisect',
        exerciseInstructions:
          "- [ ] Clone the repository 'eriknewland/gitty' and find a commit range with a known bug\n- [ ]  Start a bisect session and manually test commits to find the commit that introduced the bug\n- [ ] Don't forget to reset the bisect session when you're done.",
      },
      {
        exerciseTitle: 'Automated Git bisect',
        exerciseInstructions:
          "- [ ] Using the same repository and commit range from the previous exercise, create a script that tests for the bug\n- [ ] Run an automated bisect session with your script to find the commit that introduced the bug\n- [ ] Remember to reset the bisect session when you're done.",
      },
    ],
    chartDefinition: `
    gitGraph:
      commit
      branch one
      branch two
      checkout one
      commit
      checkout two
      commit id:" "
      checkout main
      commit
      merge one
      merge two
      commit
  `,
  },
  {
    title: 'Lesson 11\nGitHub Pages',
    icon: 'BiGitCommit',
    description: 'Learn how to create and deploy a website using GitHub Pages.',
    longDescription:
      'In this lesson, we will explore GitHub Pages, a feature that allows you to create and host a static website directly from your GitHub repository. We will cover creating a GitHub Pages site, customizing it with themes, adding content, and setting up custom domains and HTTPS.',
    objectives: [
      'Understand the purpose of GitHub Pages',
      'Learn how to create a GitHub Pages site',
      'Customize your site with themes',
      'Add content to your site',
      'Set up custom domains and HTTPS',
    ],
    content: [
      {
        sectionTitle: 'Creating a GitHub Pages site',
        sectionContent:
          'To create a GitHub Pages site, you need to create a new repository with the naming convention `<your-username>.github.io`. Add an `index.html` file to the repository, and your site will be automatically published at `https://<your-username>.github.io`.',
      },
      {
        sectionTitle: 'Customizing your site with themes',
        sectionContent:
          'GitHub Pages supports Jekyll, a static site generator that allows you to use themes and templates to customize your site. To apply a theme, create a `_config.yml` file in your repository and specify the theme you want to use. For example, if you want to use the "Minimal" theme, your `_config.yml` file should look like this:\n\n```yaml\ntheme: jekyll-theme-minimal\n```\n\nYou can find a list of supported themes in the [Github Pages Documentation](https://pages.github.com/themes). After adding the `_config.yml` file and specifying a theme, commit and push your changes. Your site will be automatically updated with the new theme.',
      },
      {
        sectionTitle: 'Adding content to your site',
        sectionContent:
          'You can add content to your GitHub Pages site by creating new HTML, CSS, and JavaScript files in your repository. Jekyll also supports Markdown, which allows you to write content in a more readable format that will be automatically converted to HTML.',
      },
      {
        sectionTitle: 'Custom domains and HTTPS',
        sectionContent:
          'By default, your GitHub Pages site will be hosted at a subdomain of `github.io`. If you want to use a custom domain, you can add a `CNAME` file to your repository with the domain name you want to use. GitHub Pages also supports HTTPS for custom domains, which can be enabled in the repository settings.',
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Create a GitHub Pages site',
        exerciseInstructions:
          '- [ ] Create a new repository with the naming convention `<your-username>.github.io`\n- [ ] Add an `index.html` file with a simple "Hello, World!" message\n- [ ] Visit `https://<your-username>.github.io` to see your published site.',
      },
      {
        exerciseTitle: 'Customize your site with a theme',
        exerciseInstructions:
          '- [ ] Choose a Jekyll theme from the GitHub Pages documentation\n- [ ] Create a `_config.yml` file in your repository and specify the theme you want to use\n- [ ] Commit and push your changes, then visit your site to see the applied theme.',
      },
      {
        exerciseTitle: 'Add content to your site',
        exerciseInstructions:
          '- [ ] Create a new Markdown file in your repository, such as `about.md`\n- [ ]  Write some content about yourself or your project.\n- [ ]  Commit and push your changes, then visit your site to see the new content.',
      },
      {
        exerciseTitle: 'Set up a custom domain and HTTPS',
        exerciseInstructions:
          "- [ ] If you have a custom domain, add a `CNAME` file to your repository with the domain name you want to use\n- [ ] Update your domain's DNS settings to point to GitHub Pages\n- [ ]  Enable HTTPS for your custom domain in the repository settings\n- [ ]  Visit your site using your custom domain to ensure it is working correctly.",
      },
    ],
    chartDefinition: `
    %%{init: {"flowchart": {"defaultRenderer": "elk"}} }%%
    flowchart TB
        A(Create a new repository) --> B(Name it your-username.github.io)
        B --> C(Add index.html file)
        C --> D(Customize with Jekyll themes)
        D --> E(Add content using HTML, CSS, JavaScript, and Markdown)
        E --> F(Set up custom domains and HTTPS)
        classDef default fill:#6EE7B7,stroke:#333,stroke-width:2px,font-size:10px;
  `,
  },
  {
    title: 'Lesson 12\nGitHub Actions',
    icon: 'BiGitCompare',
    description:
      'Learn how to automate workflows and tasks using GitHub Actions.',
    longDescription:
      'In this lesson, we will introduce you to GitHub Actions, a powerful automation tool that allows you to create custom workflows for your projects. You will learn how to create basic workflows, use actions from the marketplace, and build custom actions.',
    objectives: [
      'Understand the purpose and benefits of GitHub Actions',
      'Learn how to create a basic workflow',
      'Discover how to use actions from the marketplace',
      'Explore building custom actions',
    ],
    content: [
      {
        sectionTitle: 'Introduction to GitHub Actions',
        sectionContent:
          'GitHub Actions is an automation tool that allows you to create custom workflows for your projects. With GitHub Actions, you can automate tasks such as building, testing, and deploying your code, as well as managing issues and pull requests. Workflows are defined using YAML files and can be triggered by various events, such as pushing code or opening a pull request.',
      },
      {
        sectionTitle: 'Creating a basic workflow',
        sectionContent:
          'To create a basic workflow, you need to create a YAML file in the `.github/workflows` directory of your repository. The file should define the events that trigger the workflow, the jobs to be executed, and the steps within each job. Each step can either run a shell command or use an action from the marketplace.',
      },
      {
        sectionTitle: 'Using actions from the marketplace',
        sectionContent:
          'The GitHub Actions Marketplace is a collection of pre-built actions that you can use in your workflows. These actions can help you automate common tasks, such as setting up a specific environment, deploying to a hosting service, or running tests. To use an action from the marketplace, simply include it in the `uses` field of a step in your workflow file.',
      },
      {
        sectionTitle: 'Building custom actions',
        sectionContent:
          'In addition to using pre-built actions from the marketplace, you can also create your own custom actions. Custom actions can be written in any programming language and can be packaged as Docker containers or JavaScript actions. To create a custom action, you need to create a new repository, add a `Dockerfile` or `action.yml` file, and write the code for your action. Heres an example of a simple action that executes a greeting with every PR.\n' +
          yamlWorkflow,
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Create a basic workflow',
        exerciseInstructions:
          'Create a new repository on GitHub and add a basic workflow file in the `.github/workflows` directory. The workflow should be triggered on every push to the repository and should run a simple shell command, such as printing "Hello, World!" to the console.',
      },
      {
        exerciseTitle: 'Use an action from the marketplace',
        exerciseInstructions:
          'Modify the workflow you created in the previous exercise to include an action from the GitHub Actions Marketplace. Choose an action that is relevant to your project, such as setting up a specific programming language environment or running tests.',
      },
      {
        exerciseTitle: 'Build a custom action',
        exerciseInstructions:
          'Create a new repository on GitHub and build a custom action. The action can be a simple one, such as printing a custom message to the console or checking for specific keywords in the commit messages. Once you have created the custom action, modify the workflow in your main repository to use the custom action.',
      },
    ],
    chartDefinition: `
    %%{init: {"flowchart": {"defaultRenderer": "elk"}} }%%
    flowchart
        subgraph Run the Flow
            D(Run simple shell command<br>and use action from Marketplace)
            D --> E(Create new repository<br>for custom action)
            E --> F(Build and use<br>custom action)
        end
            subgraph Build the Flow
            A(Create Repository<br>and Add .github/workflows) --> B(Create YAML file<br>for basic workflow)
            B --> C(Trigger workflow<br>on push event)
        end
        classDef default fill:#6EE7B7,stroke:#333,stroke-width:2px,font-size:16px;
  `,
  },
  // {
  //   title: 'Lesson 13\nGit Branching',
  //   description:
  //     'Understand branching in Git and how to create and switch branches.',
  //   icon: 'BiGitMerge',
  // },
  // {
  //   title: 'Lesson 14\nGit Branching',
  //   description:
  //     'Understand branching in Git and how to create and switch branches.',
  //   icon: 'BiGitPullRequest',
  // },
  // {
  //   title: 'Lesson 15\nGit Branching',
  //   description:
  //     'Understand branching in Git and how to create and switch branches.',
  //   icon: 'BiGitRepoForked',
  // },
  // {
  //   title: 'Lesson 16\nGit Branching',
  //   description:
  //     'Understand branching in Git and how to create and switch branches.',
  //   icon: 'DiGitMerge',
  // },
  // Add more lessons here
];

export default lessonsData;
