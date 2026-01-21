fetch("/content.json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("page-title").innerText = data.title;
    document.getElementById("site-name").innerText = data.siteName;
    document.getElementById("hero-title").innerText = data.heroTitle;
    document.getElementById("hero-subtitle").innerText = data.heroSubtitle;
    document.getElementById("about-text").innerText = data.aboutText;
    document.getElementById("year").innerText = new Date().getFullYear();

    const container = document.getElementById("link-items");
    data.links.forEach(link => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<a href="${link.url}">${link.title}</a>`;
      container.appendChild(div);
    });
  });

