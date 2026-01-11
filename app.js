const content = document.getElementById("content");

const pages = {
  profile: `
    <h2>Profil</h2>
    <p>Ben Mehmet Enes Gündüz. 4. sınıf öğrencisiyim.
    Yazılım alanında kendini geliştirmeye istekli,
    öğrenmeye açık ve sosyal biriyim.</p>
    <p>İnsan ilişkileri kuvvetli, özgüvenli ve
    ekip çalışmasına uyum sağlayabilen bir yapıya sahibim.</p>
  `,

  skills: `
    <h2>Yetenekler</h2>
    <ul>
      <li>C# — temel uygulamalar</li>
      <li>Python — öğrenme ve pratik aşamasında</li>
      <li>JavaScript — sade web projeleri</li>
      <li>HTML & CSS — temel arayüz geliştirme</li>
    </ul>
  `,

  education: `
    <h2>Eğitim</h2>
    <p>Lisans — 4. sınıf öğrencisi</p>
  `,

  interests: `
    <h2>İlgi Alanları</h2>
    <p>Spor hayatımda önemli bir yere sahip.
    Futbol başta olmak üzere çeşitli sporlarla ilgileniyorum.</p>
    <p>Sosyal olmayı ve insanlarla iletişim kurmayı seviyorum.</p>
  `,

  goal: `
    <h2>Kısa Hedef</h2>
    <p>Mezuniyet sonrasında yurt dışında çalışma veya
    eğitim deneyimi kazanmayı hedefliyorum.</p>
  `,

  contact: `
    <h2>İletişim</h2>
    <p>📧 mehmetenes@example.com</p>
  `
};

function loadPage(page) {
  content.innerHTML = pages[page];
}

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => loadPage(btn.dataset.page));
});

loadPage("profile");
