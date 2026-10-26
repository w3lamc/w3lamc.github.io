---
layout: default
title: Data
permalink: /lamc/resources/data/
---
{% assign zp = site.data.zenodo.pisum %}{% assign zs = site.data.zenodo.silene %}

## Next generation sequencing of pea (*Pisum sativum*) genome

Data related to the paper [Macas et al. (2007) *BMC Genomics* **8**:427](http://www.biomedcentral.com/1471-2164/8/427/).

- {% include zenodo-file.html set="pisum" file="PSC_454Reads.fna" label="454 reads" %} and corresponding {% include zenodo-file.html set="pisum" file="PSC_454Reads.qual" label="quality scores" %}{% if zp.doi != "" %} (Zenodo, doi:[{{ zp.doi }}](https://doi.org/{{ zp.doi }})){% endif %}
- Assembled [contig]({{ '/lamc/resources/contigs_PSC' | relative_url }}) sequences
- BLAST search of the 454 reads or contigs assembled from 454 reads <span class="unavailable">(temporarily unavailable)</span>

## Next generation sequencing of *Silene latifolia* genome

Data related to the paper [Macas et al. (2011) *PLoS ONE* **6**: e27335](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0027335).{% if zs.doi != "" %} All files are archived on Zenodo, doi:[{{ zs.doi }}](https://doi.org/{{ zs.doi }}).{% endif %}

- Pre-processed **454** reads from {% include zenodo-file.html set="silene" file="SLm_454.fna.zip" label="male" %} and {% include zenodo-file.html set="silene" file="SLf_454.fna.zip" label="female" %} genome
- Pre-processed **Illumina** reads from {% include zenodo-file.html set="silene" file="SLSM.zip" label="male" %} and {% include zenodo-file.html set="silene" file="SLSF.zip" label="female" %} genome
- {% include zenodo-file.html set="silene" file="silene_454mf_contigs_o50-p84.zip" label="Contigs" %} assembled from 454 reads
- Output of {% include zenodo-file.html set="silene" file="silene_454_clustering.tar.gz" label="the 454 read clustering and repeat characterization analysis" %} (multiple directories/files, tar.gz compressed, 361 MB)
- {% include zenodo-file.html set="silene" file="silene_repeat-spec_454_blast-dbs.tar.gz" label="Repeat-specific BLAST databases of 454 reads" %} (multiple files, tar.gz compressed). The databases could also be searched via PROFREP server <span class="unavailable">(temporarily unavailable)</span>.

## PlantSat database

A compilation of known plant satellite repeats ([Macas et al. 2002]({{ '/lamc/publ/Macas_Bioinf_02.pdf' | relative_url }})). It can be accessed **[here]({{ '/PlantSat/' | relative_url }})** <span class="unavailable">(temporarily unavailable)</span>.
