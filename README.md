# 🐾 Group Pet Gallery: Collaboration Activity

Welcome to our group coding challenge! In this activity, you will work in teams of four to transform our static gallery into an interactive application using **Loops**, **Conditionals**, and **UI Animations**.

---

## The Workflow Steps

### 1. Create a Group Issue
* One person from your group should navigate to the **Issues** tab.
* Click **New Issue** and title it: `Group [Number] - [Feature Name]`.
* Assign all 4 group members to the issue and take note of the **Issue Number**.

### 2. Fork the Repository
* **Only one person** in your group should click the **Fork** button near the top-right corner of this page.
* Select your own GitHub account as the destination.
* Once forked, navigate to **Settings > Collaborators** in the forked repo and add your other 3 group members so everyone can push to the same project.

### 3. Clone & Branch
* Open your terminal and clone the group's fork:
    ```bash
    git clone [YOUR_GROUP_FORK_URL]
    cd 15_github-collab-project-pet-shop-2
    ```
* Create a new branch for your group's feature:
    ```bash
    git checkout -b group-[number]-[feature-name]
    ```

### 4. Implement Your Feature
* Open your project in VS Code.
* Use your assigned JavaScript instruction file (`dashboard.js`, `filter.js`, or `voting.js`) as a guide.
* Any CSS should be added in your feature folder (file provided)
* **Requirements:**
    * **Loops:** You must use a loop to handle multiple pet cards or data points.
    * **Conditionals:** Your feature must have at least one `if/else` statement logic.
    * **Animations:** You must use CSS transitions or `@keyframes` for a visual effect.

### 5. Commit & Push
* Stage your changes:
    ```bash
    git add .
    ```
* Create a commit referencing your group issue:
    ```bash
    git commit -m "Complete [Feature Name] for Group [Number] - Closes #[issue-number]"
    ```
* Push your branch:
    ```bash
    git push origin group-[number]-[feature-name]
    ```

### 6. Submit the Pull Request (PR)
* Go to the **original class repository (15_github-collab-project-pet-shop-2)** on GitHub.
* Click **Compare & pull request**.
* In the description, write `Closes #[issue-number]` and list your group members.

---

##  Setup Troubleshooting
If your code isn't working as expected:
1.  **Check the Console:** Right-click your browser page > Inspect > Console to find JavaScript errors.
2.  **Verify Filenames:** Ensure your image paths match the filenames in the `petImages` array in `app.js`.
3.  **Sync Upstream:** If you need to pull updates from the teacher's repo, run:
    ```bash
    git remote add upstream https://github.com/FEWS-217/15_github-collab-project-pet-shop-2.git
    git fetch upstream
    git merge upstream/main
    ```

**Don't hesitate to ask questions and Happy Coding!**
