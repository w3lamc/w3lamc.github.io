---
layout: default
title: People
permalink: /lamc/people/
banner: people
---

- Jiri Macas (principal investigator, macas@umbr.cas.cz)
- Pavel Neumann (research scientist, neumann@umbr.cas.cz)
- Petr Novak (research scientist, petr@umbr.cas.cz)
- Iva Vrbova (Fukova) (research scientist, ifukova@umbr.cas.cz)
- Ludmila Oliveira (postdoc, lud.oliveira@gmail.com)
- Laura Ávila Robledillo (postdoc, robledillo@umbr.cas.cz)
- Andrea Koblizkova (research assistant, andrea@umbr.cas.cz)
- Tihana Vondrak (Ph.D. student, tihanavondrak12@gmail.com)
- Vlasta Tetourova (technician)
- Jana Latalova (technician)
- Renata Marecova (secretary, renata@umbr.cas.cz)

## Former members of the laboratory

- Jamie McCann (2020)
- Sonja Klemme (2017-2018)
- Nina Hostakova (2016-2018)
- Tae-Soo Jang (2016-2017): Chungnam National University, South Korea
- Katharina Böttinger (2014-2016, BSc)
- Zuzana Pavlikova (2008-2013, MSc)
- Jasper E. Manning (2012-2013): Institute of Molecular Genetics CAS, Prague
- Eva Chocholova (2009-2010, 2013)
- Veronika Steinbauerova (2005-2011, PhD)
- Alice Navratilova (2000-2011, PhD)
- Marek Simonovsky (2002-2005)
- Dana Pozarkova (+2004)
- Tibor Meszaros (1999-2001)
- Marcela Nouzova (1995-2000, PhD): Florida International University, USA
- Susanne M. Rafelski (1999): Allen Institute for Cell Science, Seattle, USA
- Petr Samec (1994-1996)
- Giuliana Gualberti (1995)

{% assign countries = "czech-republic,croatia,brazil,united-states,austria,italy,south-korea,germany,slovakia,spain" | split: "," %}
<div class="flags">
{% for c in countries %}<img src="{{ c | prepend: '/assets/img/flags/' | append: '.png' | relative_url }}" alt="{{ c | replace: '-', ' ' | capitalize }}" title="{{ c | replace: '-', ' ' | capitalize }}" width="32" height="32">
{% endfor %}
</div>
