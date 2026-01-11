const content = document.getElementById("content");
let currentLang = "tr";

const data = {
  tr: {
    profile: `
      <div class="card">
        <h2>Profil</h2>
        <p>
          Ben Mehmet Enes Gündüz. 4. sınıf öğrencisiyim.
          Yazılım alanında kendini geliştirmeye istekli,
          öğrenmeye açık ve sosyal biriyim.
        </p>
        <p>
          İnsan ilişkileri kuvvetli, özgüvenli ve
          ekip çalışmasına uyum sağlayabilen bir yapıya sahibim.
        </p>
      </div>
    `,
    skills: `
      <div class="card">
        <h2>Teknik Yetenekler</h2>
        <ul>
          <li>C# — temel seviye</li>
          <li>Java — OOP temelleri</li>
          <li>Python — temel seviye</li>
          <li>JavaScript — DOM & SPA</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
    `,
    education: `
      <div class="card">
        <h2>Eğitim</h2>
        <p>Lisans — 4. sınıf öğrencisi</p>
      </div>
    `,
    projects: `
      <div class="card">
        <h2>Projeler</h2>
        <ul>
          <li><strong>Teknofest:</strong> Teknofest projelerine ekip halinde katıldım.</li>
          <li><strong>Okul Projeleri:</strong> Çeşitli bireysel ve grup projeleri geliştirdim.</li>
        </ul>
      </div>
    `,
    experience: `
      <div class="card">
        <h2>İş Deneyimi</h2>
        <p>
          Yapay zeka alanında staj yaptım.
          Ekip ile birlikte yapay zeka tabanlı projeler geliştirdik.
        </p>
      </div>
    `,
    goal: `
      <div class="card">
        <h2>Kısa Hedef</h2>
        <p>
          Mezuniyet sonrasında yurt dışında
          çalışma veya eğitim deneyimi kazanmak.
        </p>
      </div>
    `,
    contact: `
      <div class="card">
        <h2>İletişim</h2>
        <p>📧 mehmetenes@example.com</p>
      </div>
    `
  },

  en: {
    profile: `
      <div class="card">
        <h2>Profile</h2>
        <p>
          I am Mehmet Enes Gündüz, a senior undergraduate student.
          I am eager to learn and improve myself in software development.
        </p>
      </div>
    `,
    skills: `
      <div class="card">
        <h2>Technical Skills</h2>
        <ul>
          <li>C# — basic level</li>
          <li>Java — OOP basics</li>
          <li>Python — basic level</li>
          <li>JavaScript — DOM & SPA</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
    `,
    education: `
      <div class="card">
        <h2>Education</h2>
        <p>Bachelor’s Degree — Senior Student</p>
      </div>
    `,
    projects: `
      <div class="card">
        <h2>Projects</h2>
        <ul>
          <li>Teknofest team projects</li>
          <li>University software projects</li>
        </ul>
      </div>
    `,
    experience: `
      <div class="card">
        <h2>Experience</h2>
        <p>
          Completed an internship in artificial intelligence
          and worked on AI-based projects with a team.
        </p>
      </div>
    `,
    goal: `
      <div class="card">
        <h2>Goal</h2>
        <p>
          To gain international experience after graduation.
        </p>
      </div>
    `,
    contact: `
      <div class="card">
        <h2>Contact</h2>
        <p>📧 mehmetenes@example.com</p>
      </div>
    `
  }
};

function loadPage(page) {
  content.innerHTML = data[currentLang][page];
}

document.querySelectorAll("nav button[data-page]").forEach(btn => {
  btn.addEventListener("click", () => loadPage(btn.dataset.page));
});

document.getElementById("trBtn").onclick = () => {
  currentLang = "tr";
  loadPage("profile");
};

document.getElementById("enBtn").onclick = () => {
  currentLang = "en";
  loadPage("profile");
};

loadPage("profile");
