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
          takım çalışmasına uyum sağlayabilen bir yapıya sahibim.
        </p>
      </div>
    `,
    skills: `
      <div class="card">
        <h2>Teknik Yetenekler</h2>
        <ul>
          <li>C# — temel uygulamalar ve algoritma mantığı</li>
          <li>Java — nesne yönelimli programlamaya giriş</li>
          <li>Python — temel seviye</li>
          <li>JavaScript — DOM, SPA mantığı</li>
          <li>HTML & CSS — responsive tasarımlar</li>
        </ul>
      </div>
    `,
    education: `
      <div class="card">
        <h2>Eğitim</h2>
        <p>Lisans — 4. sınıf öğrencisi</p>
      </div>
    `,
    interests: `
      <div class="card">
        <h2>İlgi Alanları</h2>
        <p>
          Spor hayatımda önemli bir yere sahiptir.
          Özellikle futbol ve farklı spor dallarıyla ilgileniyorum.
        </p>
      </div>
    `,
    goal: `
      <div class="card">
        <h2>Kısa Hedef</h2>
        <p>
          Mezuniyet sonrasında yurt dışında
          çalışma veya eğitim deneyimi kazanmayı hedefliyorum.
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
          I am Mehmet Enes Gündüz, a senior-year undergraduate student.
          I am eager to learn, socially active, and focused on improving myself in software development.
        </p>
        <p>
          I have strong communication skills, self-confidence,
          and adapt well to teamwork.
        </p>
      </div>
    `,
    skills: `
      <div class="card">
        <h2>Technical Skills</h2>
        <ul>
          <li>C# — basic applications and algorithm fundamentals</li>
          <li>Java — introduction to object-oriented programming</li>
          <li>Python — basic level</li>
          <li>JavaScript — DOM manipulation, SPA logic</li>
          <li>HTML & CSS — responsive layouts</li>
        </ul>
      </div>
    `,
    education: `
      <div class="card">
        <h2>Education</h2>
        <p>Bachelor’s Degree — Senior Student</p>
      </div>
    `,
    interests: `
      <div class="card">
        <h2>Interests</h2>
        <p>
          Sports play an important role in my life.
          I am especially interested in football and various other sports.
        </p>
      </div>
    `,
    goal: `
      <div class="card">
        <h2>Short-Term Goal</h2>
        <p>
          After graduation, I aim to gain international experience
          through working or studying abroad.
        </p>
      </div>
    `,
    contact: `
      <div class="card">
        <h2>Contact</h2>
        <p>📧 mehmetenes@gmail.com</p>
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
