---
layout: layout.html
title: Projects
permalink: /projects/
---

<h1>Projects</h1>
<p>A showcase of recent work and interesting experiments.</p>

<div class="projects-grid">
  {% for project in collections.projects %}
    <div class="project-card">
      <h3>{{ project.data.title }}</h3>
      <p>{{ project.data.description }}</p>
      {% if project.data.tags %}
        <div class="project-tags">
          {% for tag in project.data.tags %}
            <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
      {% endif %}
      {% if project.data.link %}
        <p style="margin-top: 1rem;"><a href="{{ project.data.link }}">View Project →</a></p>
      {% endif %}
    </div>
  {% endfor %}
</div>
