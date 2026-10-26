# LaMC web pages

Static web pages of the Laboratory of Molecular Cytogenetics
(<https://w3lamc.umbr.cas.cz>), built with [Jekyll](https://jekyllrb.com/)
and hosted on GitHub Pages. They replace the former WordPress site.

## Updating content

| What | Where |
|---|---|
| Publications | `_data/publications.yml` (instructions at the top of the file) |
| Publication PDFs | `lamc/publ/` |
| People | `lamc/people.md` |
| Home page text | `lamc/index.md` |
| Resources pages | `lamc/resources/*.md` |
| Genome browser table | `_data/genome_browsers.yml` |
| Zenodo dataset links | `_data/zenodo.yml` |
| Menu | `_data/navigation.yml` |
| Contact (footer) | `_config.yml` |
| Home page banner images | `_data/banner.yml`, `assets/img/` |

Files can be edited directly on GitHub (pencil icon); the site is rebuilt
automatically within a minute or two after each commit. If a build fails
(usually a YAML indentation or quoting error), GitHub shows it under the
repository's *Actions* tab and the previous version stays online.

### Adding a publication

1. Upload the PDF (optional) to `lamc/publ/`.
2. In `_data/publications.yml` copy an existing entry to the top of the list
   and edit it:

   ```yaml
   - year: 2026
     authors: "Novak, P., Neumann, P., Macas, J."
     title: "Title of the paper"
     venue: "*Journal Name* **12**: 1-10."
     url: "https://doi.org/10.xxxx/yyyy"
     pdf: "Novak_Journal_2026.pdf"
   ```

## Preserved old URLs

| Old URL | Handled by |
|---|---|
| `/lamc/?page_id=N` | `_includes/legacy-router.html` (redirect to new page) |
| `/lamc/resources.php` | `lamc/resources.php/index.html` (redirect to Resources) |
| `/lamc/publ/*.pdf`, `/lamc/resources/manual.pdf`, ... | same paths in this repository |
| `/PlantSat/*` | `404.html` → `PlantSat/index.html` (unavailable notice) |
| large data files (`/lamc/resources/SLSF.zip`, `/pisum_454/...`) | `404.html` → Zenodo (once records are set in `_data/zenodo.yml`) |

## Local preview

```sh
gem install --user-install jekyll webrick kramdown-parser-gfm
jekyll serve        # http://127.0.0.1:4000/lamc/
```

## Deployment

1. Push the repository to GitHub, then *Settings → Pages → Deploy from a
   branch → main / (root)*.
2. For a preview at `https://<user>.github.io/<repo>/` temporarily set
   `baseurl: "/<repo>"` in `_config.yml`.
3. When ready, ask the institute DNS admin to add
   `w3lamc.umbr.cas.cz. CNAME <user>.github.io.`, set `baseurl: ""`, enter
   `w3lamc.umbr.cas.cz` under *Settings → Pages → Custom domain* and enable
   *Enforce HTTPS*.

## Large datasets (Zenodo)

These files are not in the repository; upload them to Zenodo (one record per
dataset) and put the record ids into `_data/zenodo.yml`:

- Pea (Macas et al. 2007): `PSC_454Reads.fna`, `PSC_454Reads.qual`
  from `http://w3lamc.umbr.cas.cz/pisum_454/`
- *Silene latifolia* (Macas et al. 2011): `SLm_454.fna.zip`, `SLf_454.fna.zip`,
  `SLSM.zip`, `SLSF.zip`, `silene_454mf_contigs_o50-p84.zip`,
  `silene_454_clustering.tar.gz`, `silene_repeat-spec_454_blast-dbs.tar.gz`
  from `http://w3lamc.umbr.cas.cz/lamc/resources/`

Download them from the old server **before** the DNS switch.
