# Git & GitHub Crash Course — Assignment

## Video Questions

### 1. How does Brad describe a Git repository when explaining Git in simple terms?

Brad describes a Git repository as a digital filing cabinet that stores all the files in a project and the changes made to those files. He also compares Git to a time machine for code because it allows developers to go back to previous versions.

### 2. Why does he recommend learning Git from the terminal before relying on graphical tools?

He recommends learning Git from the terminal because it helps developers understand what is happening behind the scenes. Graphical tools perform Git commands for the user, so learning the terminal first gives a better understanding of the actual Git workflow and commands.

### 3. What are the four stages/locations in the Git workflow?

The four stages are:

1. Working Directory
2. Staging Area
3. Local Repository
4. Remote Repository

The workflow is: Working Directory → Staging Area → Local Repository → Remote Repository.

### 4. What is the name of the sample project he uses during the practical demonstration?

The sample project is called **Task Tracker**.

### 5. During the branching explanation, what example involving workouts does he use?

He uses a workout logging application as an example. He explains that if he wanted to add a feature that calculates the total calories burned from workouts, he could create a separate branch to work on that feature without affecting the main branch.

### 6. What branch name does he later create during the practical demo?

He creates a branch called:

`feature/login`

### 7. After merging the Pull Request on GitHub, what does he do with the remote branch?

After merging the Pull Request, he deletes the remote `feature/login` branch from GitHub.

### 8. When his local main does not yet contain the merged change, what does he do to bring the latest changes down?

He switches to the `main` branch and runs:

`git pull origin main`

This downloads the latest changes from the remote repository into his local repository.

### 9. What kind of file does he mention should normally be placed in .gitignore, and why?

He mentions an `.env` file. Environment files can contain sensitive information such as API keys and other environment variables, so they should normally not be committed to a public GitHub repository.

### 10. What platform does he use at the end of the video to demonstrate CI/CD?

He uses **Vercel** to demonstrate continuous integration and continuous deployment (CI/CD).

### 11. Mention one thing from the video that was new to you and include the approximate timestamp.

One thing that was new to me was learning that `git commit` only saves changes to the local Git repository and does not automatically send those changes to GitHub. The changes have to be sent to GitHub separately using `git push`.

I learned this at approximately **17:25–18:00**.