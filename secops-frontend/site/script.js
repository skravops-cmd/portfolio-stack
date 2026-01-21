fetch("content.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("page-title").innerText = data.title;
    document.getElementById("site-name").innerText = data.siteName;
    document.getElementById("hero-title").innerText = data.heroTitle;
    document.getElementById("hero-subtitle").innerText = data.heroSubtitle;
    document.getElementById("about-text").innerText = data.aboutText;
    document.getElementById("contact-text").innerText = data.contactText;
    document.getElementById("github-link").href = data.github;
    document.getElementById("linkedin-link").href = data.linkedin;
    document.getElementById("year").innerText = new Date().getFullYear();

    const container = document.getElementById("portfolio-items");
    data.portfolio.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${item.title}</strong><p>${item.description}</p>`;
      container.appendChild(div);
    });
  });

