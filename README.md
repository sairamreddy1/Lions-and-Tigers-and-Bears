# 🦁🐯🐻 Lions, Tigers & Bears — Oh My!  
### React + Azure Static Web Apps + CI/CD + Custom Domain Deployment Tutorial

This project is a reference implementation for the **Lewis Instructional Architecture**, demonstrating:

✔️ A React application based on the Brad Schiff “Dogs API” exercise  
✔️ Fully automated CI/CD pipeline using GitHub Actions  
✔️ Deployment to **Azure Static Web Apps**  
✔️ Custom domain configuration using **GoDaddy**  
✔️ Automatic HTTPS SSL certification  

---

## 🚀 Overview

This tutorial guides you through:

- Deploying the React application  
- Enabling GitHub Actions CI/CD  
- Linking a custom GoDaddy domain  
- Enabling HTTPS using Azure-managed SSL  

---

## 🧰 Prerequisites

| Requirement | Status |
|------------|--------|
| Node.js v18+ | ✅ |
| Git & GitHub account | ✅ |
| Azure Student Subscription | ✅ |
| Purchased GoDaddy domain | ✅ |

---

## 🏁 Step 1 — Clone the Template Repository

1. Open the repository template:  
   👉 https://github.com/sairamreddy1/Lions-and-Tigers-and-Bears.git  

2. Click:  
   **Use this template → Create a new repository**

3. Clone locally:

```bash
git clone https://github.com/sairamreddy1/Lions-and-Tigers-and-Bears.git
cd lions-tigers-bears
npm install
npm start
```
## ⚛️ Step 2 — Build the React Project

This application:

- Uses **fetch**, **async/await**, and **Promises**
- Displays rotating images using the **Dog API**
- Uses modular, reusable **functional React components**
- Runs locally during development using `npm start`

To generate an optimized production build, run:

```bash
npm run build

- This command creates a /build directory that is ready for deployment to Azure Static Web Apps.
```

## ☁️ Step 3 — Deploy to Azure Static Web Apps

1. Go to the Azure Portal:  
   👉 https://portal.azure.com

2. Create a new Static Web App:

> **Create Resource → Static Web App**

3. Fill in the required deployment configuration:

| Field | Value |
|--------|--------|
| **Name** | dog-slideshow |
| **Region** | Global |
| **Deployment Source** | GitHub |

4. Select your repository and deployment settings:

| Setting | Value |
|--------|--------|
| **Repository** | Your cloned project repository |
| **Branch** | `main` |
| **Build Preset** | React |
| **App Location** | `/` |
| **Output Location** | `build` |

5. Click **Create** to continue.

Once completed, Azure will automatically configure a GitHub Actions workflow to deploy your app using CI/CD.

## 🔄 Step 4 — Verify Deployment

Once GitHub Actions completes successfully, Azure will automatically deploy your application and generate a live URL such as:
https://delightful-desert-0ef3a461e.3.azurestaticapps.net

Any future changes pushed to your GitHub `main` branch will trigger the CI/CD pipeline and redeploy your application automatically.

---

## 🌍 Step 5 — Add a Custom Domain with GoDaddy

### 5.1 Add Domain Inside Azure

1. Navigate to your **Azure Static Web App** resource.
2. Select **Custom Domains** from the left-hand menu.
3. Click **Add**.
4. Enter your purchased domain:

sairamreddytippireddy.com


Azure will provide a **TXT verification record** required to prove domain ownership.

---

### 5.2 Add TXT Record in GoDaddy

In your GoDaddy DNS settings, add the verification record provided by Azure:

| Type | Name | Value | TTL |
|------|------|--------|-----|
| TXT | @ | (Azure-provided verification code) | 1 hour |

Wait until Azure updates the status to:


---

### 5.3 Add CNAME Record for `www`

Next, create a CNAME record pointing your domain to Azure:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | delightful-desert-0ef3a461e.3.azurestaticapps.net |

This routes traffic from the `www.` subdomain to your deployed Azure Static Web App.

---

## 🔐 Step 6 — SSL Certificate Activation

Azure will automatically generate and apply a **free HTTPS SSL certificate**.

Once issued, you should see:

✔️ Validated

---

### 5.3 Add CNAME Record for `www`

Next, create a CNAME record pointing your domain to Azure:

| Type | Name | Value |
|------|------|-------|
| CNAME | www | delightful-desert-0ef3a461e.3.azurestaticapps.net |

This routes traffic from the `www.` subdomain to your deployed Azure Static Web App.

---

## 🔐 Step 6 — SSL Certificate Activation

Azure will automatically generate and apply a **free HTTPS SSL certificate**.

Once issued, you should see:

✔️ Domain Validated
🔒 HTTPS Enabled

Test your domain using both variations:

🔗 https://sairamreddytippireddy.com  
🔗 https://www.sairamreddytippireddy.com  

---

## 🎯 Final Expected Outcome

| Feature | Status |
|---------|--------|
| React App Deployed | ✅ |
| Azure Static Web App Running | ✅ |
| CI/CD via GitHub Actions | ✅ |
| Custom GoDaddy Domain Connected | ✅ |
| HTTPS + SSL Certificate Active | ✅ |

---

## 📄 Credits & Licensing

This project implementation is based on:

> **Brad Schiff — "Dogs, JavaScript & API" Tutorial**

Licensed under:

MIT License — Attribution Required

---

## 🎉 Completion

You have successfully completed:

- Architecture design & documentation  
- CI/CD deployment workflow  
- Custom domain configuration  
- Real-world deployment using Azure Static Web Apps  

Your application is now live, secure, and automatically deploys updates pushed from GitHub.

