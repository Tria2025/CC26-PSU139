# 🚀 CareerPath AI — Front-End

Front-end modern untuk platform rekomendasi karier berbasis AI menggunakan React, Vite, dan Tailwind CSS.

CareerPath AI membantu pengguna mengunggah CV dalam format PDF dan mendapatkan rekomendasi karier terbaik berdasarkan analisis AI secara cepat, modern, dan responsif.

---

# ✨ Tech Stack

- ⚛️ React.js
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔀 React Router DOM
- 🌐 Axios
- 🎯 Lucide React Icons

---

# 🎯 Fitur Utama

- 📄 Upload CV PDF
- 🤖 Analisis CV berbasis AI
- 📊 Progress upload realtime
- 🧠 Rekomendasi karier otomatis
- 📱 Responsive modern UI
- 🚨 Validasi file upload
- 🔍 Halaman hasil rekomendasi
- ❌ Custom 404 Not Found Page
- ✨ Smooth user experience

---

# 📁 Struktur Project

```bash
client/
├── public/
│   ├── careerpath-icon.png
│   └── favicon.svg
│
├── src/
│   ├── api/
│   │   └── cvApi.js
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   └── ScrollToTop.jsx
│   │   │
│   │   ├── landing/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── TeamSection.jsx
│   │   │   └── WorkflowSection.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   │
│   │   ├── result/
│   │   │   ├── JobCard.jsx
│   │   │   └── ResultSection.jsx
│   │   │
│   │   └── upload/
│   │       └── InputSection.jsx
│   │
│   ├── pages/
│   │   ├── AnalyzePage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── NotFoundPage.jsx
│   │   └── ResultPage.jsx
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---

# ⚙️ Instalasi Project

## 1️⃣ Clone Repository

```bash
git clone <repository-url>
```

---

## 2️⃣ Masuk ke Folder Front-End

```bash
cd client
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variable

Buat file `.env` di root folder `client`.

```env
VITE_API_URL=http://localhost:5000/api
```

---

# ▶️ Menjalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di:

```text
http://localhost:5000
```

---

# 🏗️ Build Production

```bash
npm run build
```

Untuk preview production build:

```bash
npm run preview
```

---

# 🖥️ Halaman Utama

| Halaman | Deskripsi |
|----------|------------|
| 🏠 Landing Page | Halaman utama aplikasi |
| 📄 Analyze Page | Upload CV dan analisis AI |
| 📊 Result Page | Menampilkan hasil rekomendasi karier |
| 👥 Team Section | Menampilkan anggota tim pengembang CareerPath AI |
| 📞 Contact Page | Informasi kontak tim |
| ❌ Not Found Page | Halaman error 404 custom |

---

# 🧩 Komponen Utama

## 📄 InputSection

Digunakan untuk:

- Upload CV PDF
- Validasi file
- Progress upload
- Menampilkan error upload
- Mengirim CV ke backend AI

---

## 🤖 ResultSection

Digunakan untuk:

- Menampilkan hasil analisis AI
- Menampilkan rekomendasi pekerjaan
- Navigasi hasil analisis
- Menampilkan data career matching

---

## 💼 JobCard

Menampilkan:

- Nama pekerjaan
- Lokasi pekerjaan
- Level pekerjaan
- Persentase kecocokan
- Link menuju platform pekerjaan

---

# 🎨 Styling

Project ini menggunakan:

- Tailwind CSS Utility Class
- Custom reusable class di `global.css`
- Responsive layout
- Modern glassmorphism UI
- Soft shadow & blur effect
- Clean modern typography

---

# 🌐 Integrasi API

Integrasi API menggunakan Axios pada:

```bash
src/api/cvApi.js
```

Alur request:

```text
Upload CV
   ↓
Kirim ke Backend API
   ↓
AI Memproses CV
   ↓
Frontend Menampilkan Hasil
```

---

# 📜 Available Scripts

## ▶️ Development

```bash
npm run dev
```

Menjalankan development server.

---

## 🏗️ Build

```bash
npm run build
```

Build aplikasi production.

---

## 👀 Preview

```bash
npm run preview
```

Menjalankan preview hasil build.

---

## 🧹 Lint

```bash
npm run lint
```

Menjalankan ESLint.

---

# 📱 Responsive Design

CareerPath AI sudah responsive untuk:

- 💻 Desktop
- 🖥️ Laptop
- 📱 Mobile
- 📲 Tablet

---

# 🚀 Future Improvements

- 🔐 Authentication & Login
- 🌙 Dark Mode
- 📈 Dashboard Analytics
- 🗂️ History Analisis CV
- 🌍 Multi Language
- 🧠 AI Skill Visualization
- 📊 Career Match Graph

---

# 👨‍💻 Team

### CC26-PSU139

Dikembangkan untuk:

- 🎓 Coding Camp 2026
- 💙 DBS Foundation

---

# 📄 License

Project ini dibuat untuk kebutuhan pembelajaran, pengembangan skill, dan portfolio.