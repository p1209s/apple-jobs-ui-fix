# 🐞 UX Bug Case Study: Apple Jobs – Sign-In Button Issue

## 📌 Summary

While browsing the [Apple Jobs](https://jobs.apple.com/) website, I discovered a frontend UX issue: the “Sign In” button does not update to reflect the logged-in state. After successfully logging in, clicking the “Sign In” button again signs the user out and triggers a pop-up window with a "Signed Out" message.

This case study outlines the issue, its implications for the user experience, and a proposed solution to improve clarity and consistency.

---

## 🔍 Problem Description

### ❗ Issue Observed

- After logging into the Apple Jobs platform, the “Sign In” button remains unchanged, still displaying “Sign In.”
- Clicking the “Sign In” button again logs the user out.
- A pop-up window appears, saying “Signed Out.”
- This behavior can confuse users, as there’s no indication they are logged in prior to clicking the button again.

### ⚠️ Why It’s a Problem

- Confusing UI: Users might not realize they are already signed in, leading them to click the button and unexpectedly log out.
- Poor User Flow: This issue disrupts the user's journey, especially when managing applications or profile settings.
- Loss of Trust: Users expect a seamless authentication flow, and this bug breaks that trust.

---

## ✅ Expected Behavior

After a successful login, the “Sign In” button should update to reflect the logged-in state. It should:

- Change to something like “My Account,” “Profile,” or even a dropdown menu containing options such as “Profile” and “Sign Out.”
- If the user is already logged in, clicking the button should not log them out unexpectedly.

---

## 🛠 Proposed Frontend Fix (React Example)

A simple conditional rendering fix using React could solve this:

```jsx
{
  isAuthenticated ? (
    <DropdownMenu>
      <button>My Account</button>
      <ul>
        <li>
          <a href="/profile">View Profile</a>
        </li>
        <li>
          <button onClick={handleLogout}>Sign Out</button>
        </li>
      </ul>
    </DropdownMenu>
  ) : (
    <button onClick={handleLogin}>Sign In</button>
  );
}
```

Note: isAuthenticated would typically be managed by a global auth provider (e.g., Context API, Redux, or OAuth hooks) to ensure seamless state management across the application.

🧪 Reproduction Steps
Visit https://jobs.apple.com.

Click Sign In and complete the login process.

Observe that the “Sign In” button remains visible, even after a successful login.

Click the “Sign In” button again — you will be logged out, and a pop-up will appear with the message “Signed Out.”

🧰 Tools & Tech Used for Prototype
For demonstration purposes, I used the following technologies:

React for component-based UI rendering

HTML/CSS for layout and styles

State simulation to mock user authentication

Demo/Prototype link will be added soon.

📸 Screenshots

The UI before signing in (Sign In button visible):

![IMG_0009](https://github.com/user-attachments/assets/9beab676-4f56-45f8-aa0d-1c7b6bb75792)

The UI after signing in (Sign In button still visible):

![IMG_0010](https://github.com/user-attachments/assets/5633d44c-136d-4d78-ba53-0ec6a87fa6e2)

The pop-up after clicking the Sign In button again (Signed Out message):

![IMG_0011](https://github.com/user-attachments/assets/33913dc0-7d42-42a8-90f3-e302e69ec0ba)

🔗 References & Resources
Apple Jobs – Official Website - https://jobs.apple.com/en-ca/search?location=canada-CANC

💬 Final Thoughts
Though small, this bug negatively affects the user experience on a high-traffic platform like Apple Jobs. It introduces unnecessary confusion, especially for job seekers who need clear feedback on their login status. By improving this flow, users would feel more confident and engaged during the application process.

🙋‍♂️ About Me
I’m Priyank Shah, a frontend developer focused on crafting user-centric interfaces and improving web experiences. This case study reflects my passion for solving real-world problems with code.

💼 LinkedIn - https://www.linkedin.com/in/priyankshah

📮 Reach out for collaborations or opportunities!

📫 Feedback or Collaboration?
If you work at Apple or a similar platform and found this issue useful, I’d love to hear your thoughts. I'm always open to collaboration and contributing to frontend/UI projects!

