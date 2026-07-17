# AWS Static Website Hosting

## Internship Details

- **Intern ID:** CITS5437
- **Full Name:** Sakshi
- **Domain:** Cloud Computing
- **Organization:** CODTECH
- **Duration:** 4 Weeks
- **Project Name:** AWS Static Website Hosting

---

## Project Overview

This project demonstrates the development and cloud deployment of a responsive static portfolio website using Amazon S3 Static Website Hosting.

The portfolio website was developed using HTML5, CSS3, and JavaScript. It was then deployed to an Amazon S3 bucket and configured for public access using static website hosting and a bucket policy.

---

## Live Website

The project is successfully deployed on Amazon S3.

**Live Website URL:**

http://sakshi-codtech-static-website-2026.s3-website.eu-north-1.amazonaws.com/

---

## Project Objectives

- Develop a responsive static portfolio website.
- Organize HTML, CSS, and JavaScript files using a professional folder structure.
- Create and configure an Amazon S3 bucket.
- Enable S3 Static Website Hosting.
- Configure public access settings.
- Add a bucket policy for public read access.
- Upload website files while preserving the folder structure.
- Deploy and test the live website.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Amazon Web Services (AWS)
- Amazon S3
- AWS S3 Static Website Hosting
- Git
- GitHub
- GitHub Desktop
- Visual Studio Code

---

## AWS Configuration

| Configuration | Details |
|---|---|
| AWS Service | Amazon S3 |
| AWS Region | Europe (Stockholm) |
| Region Code | eu-north-1 |
| Bucket Name | sakshi-codtech-static-website-2026 |
| Index Document | index.html |
| Hosting Type | Static Website Hosting |
| Public Access | Enabled for website files |

---

## Project Structure

```text
AWS-Static-Website-Hosting/
│
├── index.html
├── README.md
├── STRUCTURE.txt
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│
├── documentation/
│   ├── PROJECT_DOCUMENTATION.md
│   └── VIVA_QUESTIONS.md
│
└── screenshots/
    ├── 01-s3-bucket-created.png
    ├── 02-static-website-hosting-enabled.png
    ├── 03-public-access-off.png
    ├── 04-bucket-policy-added.png
    ├── 05-project-files-uploaded.png
    ├── 06-live-website-output.png
    └── SCREENSHOT_GUIDE.txt
```

---

## Website Features

- Responsive portfolio design
- Professional navigation bar
- Home section
- About section
- Skills section
- Project section
- Contact section
- Mobile-friendly layout
- External CSS file
- External JavaScript file
- Cloud deployment using Amazon S3

---

## AWS Deployment Steps

### Step 1: Create an S3 Bucket

An Amazon S3 bucket was created with the unique name:

`sakshi-codtech-static-website-2026`

The selected AWS region was:

`Europe (Stockholm) - eu-north-1`

### Step 2: Enable Static Website Hosting

Static website hosting was enabled from the bucket Properties section.

The index document was configured as:

`index.html`

### Step 3: Configure Public Access

The bucket-level Block Public Access setting was disabled so that the static website files could be publicly accessed.

### Step 4: Add Bucket Policy

A bucket policy was added to allow public read access to the website objects.

### Step 5: Upload Project Files

The following website files were uploaded while preserving the correct folder structure:

- `index.html`
- `assets/css/style.css`
- `assets/js/script.js`

### Step 6: Test the Live Website

The Amazon S3 website endpoint was opened in a web browser and the portfolio website was successfully tested.

---

# Deployment Screenshots

## 1. S3 Bucket Created

![S3 Bucket Created](screenshots/01-s3-bucket-created.png)

## 2. Static Website Hosting Enabled

![Static Website Hosting Enabled](screenshots/02-static-website-hosting-enabled.png)

## 3. Public Access Configuration

![Public Access Configuration](screenshots/03-public-access-off.png)

## 4. Bucket Policy Added

![Bucket Policy Added](screenshots/04-bucket-policy-added.png)

## 5. Project Files Uploaded

![Project Files Uploaded](screenshots/05-project-files-uploaded.png)

## 6. Live Website Output

![Live Website Output](screenshots/06-live-website-output.png)

---

## How to Run the Project Locally

1. Download or clone this repository.
2. Open the project folder.
3. Keep the complete folder structure unchanged.
4. Open `index.html` in a web browser.

The CSS file is linked using:

```html
<link rel="stylesheet" type="text/css" href="./assets/css/style.css">
```

The JavaScript file is linked using:

```html
<script src="./assets/js/script.js"></script>
```

---

## Learning Outcomes

Through this project, I learned:

- How cloud-based static website hosting works.
- How to create and configure an Amazon S3 bucket.
- How to enable S3 Static Website Hosting.
- How bucket policies control access to S3 objects.
- How to deploy HTML, CSS, and JavaScript files to AWS.
- How to maintain the correct cloud folder structure.
- How to use Git and GitHub for project version control and documentation.

---

## Security Note

No AWS access keys, secret access keys, passwords, or private credentials are stored in this repository.

Only project source code, documentation, and deployment screenshots are included.

---

## Author

**Sakshi**

Cloud Computing Intern  
**CODTECH**

**Intern ID:** CITS5437

---

## Project Status

**Completed and Successfully Deployed**

The website is live and accessible through the Amazon S3 Static Website Hosting endpoint.
