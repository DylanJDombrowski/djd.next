# Environment Variables Guide

## 🗑️ SAFE TO DELETE - Unused Environment Variables

Based on your current codebase, these variables are **NOT being used** and can be safely removed from Vercel:

- ❌ `NEXT_PUBLIC_SANITY_DATASET` - No Sanity CMS integration found
- ❌ `SANITY_API_TOKEN` - No Sanity CMS integration found
- ❌ `NEXT_PUBLIC_SUPABASE_URL` - No Supabase integration found
- ❌ `NEXT_PUBLIC_SUPABASE_ANON_KEY` - No Supabase integration found
- ❌ `SUPABASE_SERVICE_ROLE_KEY` - No Supabase integration found
- ❌ `RESEND_API_KEY` - Not used (you use nodemailer instead)
- ❌ `NEXT_PUBLIC_BASE_URL` - Not referenced anywhere in the code

## ✅ REQUIRED - Existing Variables (Keep These!)

- ✅ `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Your Google Analytics tracking ID (GA4)

## 🆕 NEW VARIABLES - Add These for Analytics Dashboard

You need to add **3 new environment variables** for the analytics dashboard:

### 1. ANALYTICS_PASSWORD
**What it is:** The password to access your analytics dashboard

**Value:** Choose a strong password (your choice!)

**Example:**
```
MySecurePassword123!
```

**Where to use it:** You'll enter this when visiting `/analytics` on your site

---

### 2. GA4_PROPERTY_ID
**What it is:** Your Google Analytics 4 Property ID

**How to find it:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **Admin** (bottom left gear icon)
3. In the **Property** column, click **Property Settings**
4. Copy the **Property ID** (looks like a number: `123456789`)

**Example:**
```
123456789
```

---

### 3. GOOGLE_ANALYTICS_CREDENTIALS
**What it is:** Service account JSON credentials from Google Cloud

**How to get it:**

#### Step 1: Create Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (or create a new one)
3. Go to **APIs & Services** → **Library**
4. Search for "**Google Analytics Data API**"
5. Click **Enable**

6. Go to **APIs & Services** → **Credentials**
7. Click **Create Credentials** → **Service Account**
8. Name it: `analytics-dashboard`
9. Click **Create and Continue** → Skip optional steps → **Done**

#### Step 2: Create Key
1. Click on the service account you just created
2. Go to **Keys** tab
3. Click **Add Key** → **Create new key**
4. Choose **JSON** format
5. Download the file (it will look like `your-project-123abc.json`)

#### Step 3: Grant Access to GA4
1. Open the downloaded JSON file - you'll see `"client_email": "analytics-dashboard@your-project.iam.gserviceaccount.com"`
2. Copy that email address
3. Go to [Google Analytics](https://analytics.google.com/)
4. Click **Admin** (bottom left)
5. In **Property** column → **Property Access Management**
6. Click **+** (top right) → **Add users**
7. Paste the service account email
8. Assign role: **Viewer**
9. Click **Add**

#### Step 4: Format the JSON for Vercel
The downloaded JSON file looks like this:
```json
{
  "type": "service_account",
  "project_id": "your-project-name",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIB...\n-----END PRIVATE KEY-----\n",
  "client_email": "analytics-dashboard@your-project.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/..."
}
```

**⚠️ IMPORTANT:** You need to convert this to a **single-line string**:
- Remove all newlines (except the `\n` inside `private_key`)
- Remove all extra spaces
- Wrap the entire thing in **single quotes** `'...'`

**Example of what to paste in Vercel:**
```
'{"type":"service_account","project_id":"your-project-name","private_key_id":"abc123...","private_key":"-----BEGIN PRIVATE KEY-----\nMIIEvQIB...\n-----END PRIVATE KEY-----\n","client_email":"analytics-dashboard@your-project.iam.gserviceaccount.com","client_id":"123456789","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/..."}'
```

**Easy way to convert:**
1. Open the JSON file in a text editor
2. Copy the entire contents
3. Use an online JSON minifier (search "json minify") or manually remove line breaks
4. Wrap the result in single quotes
5. Paste into Vercel

---

## 📝 Summary - Your Final Vercel Environment Variables

After cleanup, you should have these **4 variables total**:

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 tracking ID (existing) | `G-XXXXXXXXXX` |
| `ANALYTICS_PASSWORD` | Dashboard password (NEW) | `MySecurePass123!` |
| `GA4_PROPERTY_ID` | GA4 Property ID (NEW) | `123456789` |
| `GOOGLE_ANALYTICS_CREDENTIALS` | Service account JSON (NEW) | `'{"type":"service_account",...}'` |

---

## 🚀 How to Add Variables in Vercel

1. Go to your project in Vercel
2. Click **Settings**
3. Click **Environment Variables**
4. For each variable:
   - Click **Add New**
   - Enter **Name** (e.g., `ANALYTICS_PASSWORD`)
   - Enter **Value**
   - Select **All Environments** (Production, Preview, Development)
   - Click **Save**
5. After adding all variables, redeploy your site

---

## ✅ Testing

After deploying:
1. Visit `https://yoursite.com/analytics`
2. Enter your `ANALYTICS_PASSWORD`
3. You should see your analytics dashboard!

---

## 🆘 Troubleshooting

**"Analytics password not configured"**
- Make sure `ANALYTICS_PASSWORD` is set in Vercel
- Redeploy your application

**"GA4_PROPERTY_ID not configured"**
- Add your Property ID from Google Analytics
- Redeploy your application

**"Failed to fetch analytics data"**
- Verify service account email has "Viewer" access in GA4
- Check that `GOOGLE_ANALYTICS_CREDENTIALS` is formatted correctly (single-line JSON in quotes)
- Ensure Google Analytics Data API is enabled in Google Cloud

**Widget won't authenticate**
- Clear browser cookies
- Make sure your password matches exactly
- Try entering your site URL without trailing slash
