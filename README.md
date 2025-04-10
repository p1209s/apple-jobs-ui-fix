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
