---
layout: default
title: "Edisson Giovanni Zúñiga López — Arquitecto de soluciones y DevSecOps"
description: "18 años construyendo plataformas que se pueden operar. Arquitectura, DevSecOps, IaC a gran escala, integración IBM Sterling e IA aplicada a ingeniería."
---
{% assign cv = site.data.cv %}
<header class="hero">
  <div class="wrap hero-grid">
    <div class="hero-main">
      <p class="eyebrow">{{ cv.personal.title }}</p>
      <h1>{{ cv.personal.name }}</h1>
      <p class="headline">{{ cv.personal.headline }}</p>
    </div>
    <nav class="contact" aria-label="Contacto">
      <span>{{ cv.personal.location }}</span>
      <a href="mailto:{{ cv.personal.email }}">{{ cv.personal.email }}</a>
      <a href="https://github.com/{{ cv.personal.github }}">github.com/{{ cv.personal.github }}</a>
      <a href="{{ cv.personal.linkedin_url }}">LinkedIn</a>
      <a href="https://medium.com/@edissongiovannizuigalopez">Medium</a>
      <a href="https://x.com/edissonz8805">X</a>
    </nav>
  </div>
</header>

<main class="wrap stack">
  <section class="metrics" aria-label="Logros en cifras">
    {% for h in cv.highlights %}
    <div class="metric"><span class="metric-value">{{ h.value }}</span><span class="metric-label">{{ h.label }}</span></div>
    {% endfor %}
  </section>

  <section aria-labelledby="mejor">
    <h2 id="mejor">Lo que mejor hago</h2>
    <div class="tiles tiles-strengths">
      {% for st in cv.strengths %}
      <div class="tile strength"><strong>{{ st.title }}</strong><span>{{ st.detail }}</span></div>
      {% endfor %}
    </div>
  </section>

  <section class="card" aria-labelledby="perfil">
    <h2 id="perfil">Perfil</h2>
    <ul class="list">
      {% for item in cv.profile %}<li>{{ item }}</li>{% endfor %}
    </ul>
  </section>

  <section aria-labelledby="areas">
    <h2 id="areas">Áreas de especialización</h2>
    <div class="tiles">
      {% for area in cv.areas %}
      <div class="tile"><strong>{{ area.name }}</strong><span>{{ area.detail }}</span></div>
      {% endfor %}
    </div>
  </section>

  <section aria-labelledby="expertise">
    <h2 id="expertise">Temas de expertise</h2>
    <div class="tiles tiles-wide">
      {% for t in cv.expertise %}
      <div class="tile"><strong>{{ t.topic }}</strong><span>{{ t.stack }}</span><em class="where">{{ t.where }}</em></div>
      {% endfor %}
    </div>
  </section>

  <section aria-labelledby="herramientas">
    <h2 id="herramientas">Herramientas y tecnologías</h2>
    <div class="card skills">
      {% for g in cv.skills %}
      <div class="skill-row"><span class="skill-group">{{ g.group }}</span><ul class="chips">{% for i in g.items %}<li>{{ i }}</li>{% endfor %}</ul></div>
      {% endfor %}
    </div>
  </section>

  <section aria-labelledby="experiencia">
    <h2 id="experiencia">Experiencia</h2>
    <div class="stack-sm">
      {% for job in cv.experience %}
      <article class="card job">
        <div class="job-head">
          <h3>{{ job.position }} — {{ job.company }}</h3>
          <span class="period">{{ job.period }}</span>
        </div>
        <ul class="list">
          {% for a in job.achievements %}<li>{{ a }}</li>{% endfor %}
        </ul>
      </article>
      {% endfor %}
    </div>
  </section>

  <section aria-labelledby="proyectos">
    <h2 id="proyectos">Proyectos de consultoría seleccionados</h2>
    <div class="tiles tiles-wide">
      {% for p in cv.projects %}
      <div class="tile"><strong class="plain">{{ p.title }}</strong><span>{{ p.detail }}</span></div>
      {% endfor %}
    </div>
  </section>

  <section aria-labelledby="docencia">
    <h2 id="docencia">Docencia y formación impartida</h2>
    <p class="lead">{{ cv.teaching_intro }}</p>
    <div class="tiles tiles-wide">
      {% for c in cv.teaching %}
      <div class="tile"><strong>{{ c.title }}</strong><span>{{ c.detail }}</span><em class="where">{{ c.period }}</em></div>
      {% endfor %}
    </div>
  </section>

  <section aria-labelledby="formacion-continua">
    <h2 id="formacion-continua">Formación continua por etapa</h2>
    <p class="lead">{{ cv.learning_intro }}</p>
    <div class="timeline">
      {% for l in cv.learning %}
      <article class="card stage">
        <div class="job-head"><h3>{{ l.stage }}</h3><span class="period">{{ l.period }}</span></div>
        <ul class="list">{% for i in l.items %}<li>{{ i }}</li>{% endfor %}</ul>
      </article>
      {% endfor %}
    </div>
  </section>

  <section aria-labelledby="publicaciones">
    <h2 id="publicaciones">Publicaciones</h2>
    <div class="tiles tiles-wide">
      {% for p in cv.publications %}
      <div class="tile"><strong class="plain">{{ p.title }}</strong><span>{{ p.detail }}</span><em class="where">{{ p.where }} · {{ p.year }}</em></div>
      {% endfor %}
    </div>
  </section>

  <section aria-labelledby="presencia">
    <h2 id="presencia">Dónde encontrarme</h2>
    <div class="tiles">
      {% for s in cv.presence %}
      <a class="tile tile-link" href="{{ s.url }}"><strong>{{ s.name }}</strong><span class="handle">{{ s.handle }}</span><span>{{ s.detail }}</span></a>
      {% endfor %}
    </div>
  </section>

  <div class="split">
    <section class="card grow" aria-labelledby="formacion">
      <h2 id="formacion">Formación y certificaciones</h2>
      <ul class="list">{% for e in cv.education %}<li>{{ e }}</li>{% endfor %}</ul>
    </section>
    <section class="card" aria-labelledby="idiomas">
      <h2 id="idiomas">Idiomas</h2>
      <ul class="list">{% for l in cv.languages %}<li>{{ l }}</li>{% endfor %}</ul>
    </section>
  </div>
</main>
