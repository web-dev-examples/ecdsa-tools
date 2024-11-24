# ECDSA Tools
[heading__top]:
  #ecdsa-tools
  "&#x2B06; Example of using Ethers JS and MetaMask for ECDSA signature creation and verification"


Example of using Ethers JS and MetaMask for ECDSA signature creation and verification

## [![Byte size of Ecdsa Tools][badge__master__ecdsa_tools__source_code]][ecdsa_tools__master__source_code] [![Open Issues][badge__issues__ecdsa_tools]][issues__ecdsa_tools] [![Open Pull Requests][badge__pull_requests__ecdsa_tools]][pull_requests__ecdsa_tools] [![Latest commits][badge__commits__ecdsa_tools__master]][commits__ecdsa_tools__master] [![ecdsa-tools Demos][badge__gh_pages__ecdsa_tools]][gh_pages__ecdsa_tools]  [![GitHub Actions Build Status][badge__github_actions]][activity_log__github_actions] [![License][badge__license]][branch__current__license]


---


- [:arrow_up: Top of Document][heading__top]
- [:building_construction: Requirements][heading__requirements]
- [:zap: Quick Start][heading__quick_start]
- [&#x1F9F0; Usage][heading__usage]
- [&#x1F5D2; Notes][heading__notes]
- [:chart_with_upwards_trend: Contributing][heading__contributing]
  - [:trident: Forking][heading__forking]
  - [:currency_exchange: Sponsor][heading__sponsor]
- [:card_index: Attribution][heading__attribution]
- [:balance_scale: Licensing][heading__license]
  - [Commercial and/or proprietary use][heading__commercial_andor_proprietary_use]
  - [Non-commercial and FOSS use][heading__noncommercial_and_foss_use]



---



## Requirements
[heading__requirements]:
  #requirements
  "&#x1F3D7; Prerequisites and/or dependencies that this project needs to function properly"


Access to GitHub Actions if using on GitHub, or manually assigning environment
variables prior to running `npm test`.  NodeJS dependencies may be installed
via NPM...

```Bash
npm install
```


______


## Quick Start
[heading__quick_start]:
  #quick-start
  "&#9889; Perhaps as easy as one, 2.0,..."


Clone this project...


**Linux/MacOS**


```Bash
mkdir -vp ~/git/hub/web-dev-examples

cd ~/git/hub/web-dev-examples

git clone git@github.com:web-dev-examples/ecdsa-tools.git
```



______


## Usage
[heading__usage]:
  #usage
  "&#x1F9F0; How to utilize this repository"


- Transpile TypeScript source code into JavaScript
   ```bash
   npm run ts-build
   ```
- Transpile TypeScript **and** move third-party dependencies from
  `node_modules/` to `dist/`
   ```bash
   npm run ci-build
   ```
- Lint TypeScript source code
   ```bash
   npm run ts-lint
   ```
- Start development server on `http://localhost:8080`
   ```bash
   npm run serve
   ```


______


## Notes
[heading__notes]:
  #notes
  "&#x1F5D2; Additional things to keep in mind when developing"


This repository may not be feature complete and/or fully functional, Pull
Requests that add features or fix bugs are certainly welcomed.


______


## Contributing
[heading__contributing]:
  #contributing
  "&#x1F4C8; Options for contributing to ecdsa-tools and web-dev-examples"


Options for contributing to ecdsa-tools and web-dev-examples


---


### Forking
[heading__forking]:
  #forking
  "&#x1F531; Tips for forking ecdsa-tools"


Start making a [Fork][ecdsa_tools__fork_it] of this repository to an account
that you have write permissions for.

- Add remote for fork URL. The URL syntax is
  _`git@github.com:<NAME>/<REPO>.git`_...


```Bash
cd ~/git/hub/web-dev-examples/ecdsa-tools

git remote add fork git@github.com:<NAME>/ecdsa-tools.git
```

- Commit your changes and push to your fork, eg. to fix an issue...

```Bash
cd ~/git/hub/web-dev-examples/ecdsa-tools


git commit -F- <<'EOF'
:bug: Fixes #42 Issue


**Edits**


- `<SCRIPT-NAME>` script, fixes some bug reported in issue
EOF


git push fork master
```


> Note, the `-u` option may be used to set `fork` as the default remote, eg.
> _`git push -u fork master`_ however, this will also default the `fork` remote
> for pulling from too! Meaning that pulling updates from `origin` must be done
> explicitly, eg. _`git pull origin master`_

- Then on GitHub submit a Pull Request through the Web-UI, the URL syntax is
  _`https://github.com/<NAME>/<REPO>/pull/new/<BRANCH>`_

> Note; to decrease the chances of your Pull Request needing modifications
> before being accepted, please check the
> [dot-github](https://github.com/web-dev-examples/.github) repository for
> detailed contributing guidelines.


---


### Sponsor
  [heading__sponsor]:
  #sponsor
  "&#x1F4B1; Methods for financially supporting web-dev-examples that maintains ecdsa-tools"


Thanks for even considering it!

Via Liberapay you may
<sub>[![sponsor__shields_io__liberapay]][sponsor__link__liberapay]</sub> on a
repeating basis.

Regardless of if you're able to financially support projects such as
ecdsa-tools that web-dev-examples maintains, please consider sharing projects
that are useful with others, because one of the goals of maintaining Open
Source repositories is to provide value to the community.


______


## Attribution
[heading__attribution]:
  #attribution
  "&#x1F4C7; Resources that where helpful in building this project so far."


- [GitHub -- `github-utilities/make-readme`](https://github.com/github-utilities/make-readme)


______


## License
[heading__license]:
  #license
  "&#x2696; Legal side of Open Source"

This project is licensed based on use-case

### Commercial and/or proprietary use
[heading__commercial_andor_proprietary_use]: #commercial-andor-proprietary-use

If a project is **either** commercial or (`||`) proprietary, then please
contact the author for pricing and licensing options to make use of code and/or
features from this repository.

---

### Non-commercial and FOSS use
[heading__noncommercial_and_foss_use]: #noncommercial-and-foss-use

If a project is **both** non-commercial and (`&&`) published with a license
compatible with AGPL-3.0, then it may utilize code from this repository under
the following terms.

```
Example of using Ethers JS and MetaMask for ECDSA signature creation and verification
Copyright (C) 2024 S0AndS0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```

For further details review full length version of
[AGPL-3.0][branch__current__license] License.



[branch__current__license]:
  /LICENSE
  "&#x2696; Full length version of AGPL-3.0 License"

[badge__license]:
  https://img.shields.io/github/license/web-dev-examples/ecdsa-tools

[badge__commits__ecdsa_tools__master]:
  https://img.shields.io/github/last-commit/web-dev-examples/ecdsa-tools/master.svg

[commits__ecdsa_tools__master]:
  https://github.com/web-dev-examples/ecdsa-tools/commits/master
  "&#x1F4DD; History of changes on this branch"


[ecdsa_tools__community]:
  https://github.com/web-dev-examples/ecdsa-tools/community
  "&#x1F331; Dedicated to functioning code"

[ecdsa_tools__gh_pages]:
  https://github.com/web-dev-examples/ecdsa-tools/tree/
  "Source code examples hosted thanks to GitHub Pages!"

[badge__gh_pages__ecdsa_tools]:
  https://img.shields.io/website/https/web-dev-examples.github.io/ecdsa-tools/index.html.svg?down_color=darkorange&down_message=Offline&label=Demo&logo=Demo%20Site&up_color=success&up_message=Online

[gh_pages__ecdsa_tools]:
  https://web-dev-examples.github.io/ecdsa-tools/index.html
  "&#x1F52C; Check the example collection tests"

[issues__ecdsa_tools]:
  https://github.com/web-dev-examples/ecdsa-tools/issues
  "&#x2622; Search for and _bump_ existing issues or open new issues for project maintainer to address."

[ecdsa_tools__fork_it]:
  https://github.com/web-dev-examples/ecdsa-tools/fork
  "&#x1F531; Fork it!"

[pull_requests__ecdsa_tools]:
  https://github.com/web-dev-examples/ecdsa-tools/pulls
  "&#x1F3D7; Pull Request friendly, though please check the Community guidelines"

[ecdsa_tools__master__source_code]:
  https://github.com/web-dev-examples/ecdsa-tools/
  "&#x2328; Project source!"

[badge__issues__ecdsa_tools]:
  https://img.shields.io/github/issues/web-dev-examples/ecdsa-tools.svg

[badge__pull_requests__ecdsa_tools]:
  https://img.shields.io/github/issues-pr/web-dev-examples/ecdsa-tools.svg

[badge__master__ecdsa_tools__source_code]:
  https://img.shields.io/github/repo-size/web-dev-examples/ecdsa-tools






[sponsor__shields_io__liberapay]:
  https://img.shields.io/static/v1?logo=liberapay&label=Sponsor&message=web-dev-examples

[sponsor__link__liberapay]:
  https://liberapay.com/web-dev-examples
  "&#x1F4B1; Sponsor developments and projects that web-dev-examples maintains via Liberapay"



[badge__github_actions]:
  https://github.com/web-dev-examples/ecdsa-tools/actions/workflows/github-pages.yaml/badge.svg?branch=master

[activity_log__github_actions]:
  https://github.com/web-dev-examples/ecdsa-tools/deployments/activity_log

