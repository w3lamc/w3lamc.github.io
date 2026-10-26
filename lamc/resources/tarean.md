---
layout: default
title: TAREAN
permalink: /lamc/resources/tarean/
---

**TA**ndem **RE**peat **AN**alyzer – TAREAN – is a computational pipeline for **unsupervised identification of satellite repeats** from unassembled sequence reads. The pipeline uses low-pass whole genome sequence reads and performs their graph-based clustering. Resulting clusters, representing all types of repeats, are then examined for the presence of circular structures and putative satellite repeats are reported.

***How to use TAREAN:***

- Install a local instance of the pipeline using its source code available from [bitbucket repository](https://bitbucket.org/petrnovak/repex_tarean).
- Run it from a user-friendly public Galaxy-based server at [https://repeatexplorer-elixir.cerit-sc.cz/](https://repeatexplorer-elixir.cerit-sc.cz/). <u>This server is recommended for processing larger datasets</u> as it provides better computational and storage resources. The server is provided in frame of the [Elixir CZ project](https://www.elixir-czech.cz/) and is maintained by [CESNET](https://www.cesnet.cz/) and [CERIT-SC](https://www.cerit-sc.cz/en/index.html). Simple registration is required to use this service.

Development of TAREAN was supported by [ELIXIR CZ](https://www.elixir-czech.cz) research infrastructure project (MEYS Grant No: LM2015047).

## References

Novak, P., Avila Robledillo, L., Koblizkova, A., Vrbova, I., Neumann, P., Macas, J. (2017) – [TAREAN: a computational tool for identification and characterization of satellite DNA from unassembled short reads](https://academic.oup.com/nar/article/3574061/). *Nucleic Acids Res.*, doi:10.1093/nar/gkx257

A brief overview of the TAREAN principle can be found on our poster presented at the 21st International Chromosome Conference (July 2016).

[![TAREAN poster, ICC 2016]({{ '/assets/img/TAREAN_poster_ICC_2016_mini-212x300.png' | relative_url }})]({{ '/assets/img/TAREAN_poster_ICC_2016_final.png' | relative_url }})
