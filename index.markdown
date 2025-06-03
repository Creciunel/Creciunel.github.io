---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<h1>{{ page.title }}</h1>

<p>{{ page.description }}</p>

<ul>
    {% for post in site.posts %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            <p>{{ post.excerpt }}</p>
            <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</p>
        </li>
    {% endfor %}
</ul>
