</br>

<div align="center">
  <h1><img src="./assets/image/SoStats.png" alt="So Stats" height="50"/></h1>
  <p>Generate your reputation info in Stack Overflow on your README profile</p>
  
  <img src="https://hits.dwyl.com/kurt-liao/so-stats.svg?style=flat" />
  <img src="https://img.shields.io/github/deployments/kurt-liao/so-stats/production?label=vercel&logo=vercel" />
  <a href="https://github.com/kurt-liao/so-stats/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue" /></a>
  <a href="https://www.buymeacoffee.com/vermouth02D"><img src="https://img.shields.io/badge/license-BEERWARE%20%F0%9F%8D%BA-yellowgreen" /></a>
  
</div>

<p align="center">
  <a href="https://github.com/kurt-liao/so-stats/issues"> Issue </a>
  .
  <a href="https://github.com/kurt-liao/so-stats/pulls"> Feature </a>
  .
  <a href="https://blog.kurtstories.com/post/show-stackoverflow-stats-on-github/"> Blog </a>
  .
  <a href="https://medium.com/kurt/show-your-stack-overflow-stats-on-github-profile-7624bc434db4"> Medium </a>
</p>

# Table of contents
1. [Usage](#usage)
2. [Optional](#optional)
    1. [Hide info](#hide-info)
    2. [Themes](#themes)
    3. [Random theme](#random-theme)
    4. [Locale](#locale)
    5. [Cache](#use-cache)
3. [Deploy](#deploy-your-own-)

## Usage

Easy to use! 🅲🆃🆁🅻+🅲 & 🅲🆃🆁🅻+🆅 into your readme markdown.

1. Find your Stack Overflow user id

2. Change the `?user=` value to your Stack Overflow user id.

```md
[![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571)](https://github.com/kurt-liao/so-stats)
```

[![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571)](https://github.com/kurt-liao/so-stats)

or

```html
<a href="https://github.com/kurt-liao/so-stats">
  <img
    height="200"
    src="https://so-stats.vercel.app/api?user=10389571"
  />
</a>
```

<a href="https://github.com/kurt-liao/so-stats"> 
  <img height="200" src="https://so-stats.vercel.app/api?user=10389571"/>
</a>

Also you can see an example [here](https://github.com/kurt-liao/kurt-liao)

## Optional

### Hide info

You can pass a `&hide=` parameter with comma-seperated values.

> `&hide=title,logo,badges`

```md
![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571&hide=title,logo)
```

![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571&hide=title,logo)

### Themes

Finally, we have some inbuilt themes. Use `&theme=THEME_NAME` like:

```md
![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571&theme=greenery)
```

> Themes name we have: `greenery`, `forest`, `malt`, `azure` (Default theme don't need to assign).

#### All inbuilt themes

|  default   | greenery  | forest |
|  ----  | ----  | ---- |
| ![Default](https://so-stats.vercel.app/api?user=10389571) | ![Greenery](https://so-stats.vercel.app/api?user=10389571&theme=greenery) | ![Forest](https://so-stats.vercel.app/api?user=10389571&theme=forest) |

|  malt   | azure  |
|  ----  | ----  |
| ![Malt](https://so-stats.vercel.app/api?user=10389571&theme=malt)  | ![Azure](https://so-stats.vercel.app/api?user=10389571&theme=azure) |



### Random theme

You can pass a `&random=true` parameter to get different color style every time.

```md
![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571&random=true)
```

![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571&random=true)

### Locale

Support multi-language, use `&locale=` to set the locale you want.

At this moment, we support `en`, `cn`, `kr`, `zh-tw`. Default language is `en`.

### Use cache

You can pass a `&cache=true` parameter to set cache.

```md
![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571&cache=true)
```

## Deploy your own 🚀

<details>
  <summary> <strong>Guide</strong> </summary>

- Fork this repo
- Sign up and log in into [Vercel](https://vercel.com/)
- Go to Vercel [dashboard](https://vercel.com/dashboard)
- Click `New Project`
- Click `Import Git Respository`(Of course you need to authorize the repo first, then you can see the repo in the list)
![2022-06-30_10-28](https://user-images.githubusercontent.com/32745146/176579816-2a28f1d5-2fd2-4218-8367-01a53dfcc09a.png)

- Click `delpoy`, and done. Find out your domain and start to use it!
- Add following command to prevent deploying on irrelevant changes.
![2022-06-30_10-17](https://user-images.githubusercontent.com/32745146/176579415-23ac711e-c695-4bad-aa85-1faf4ef67c67.png)


</details>

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkurt-liao%2Fso-stats"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

---

<h3>Contributions welcome! Also ⭐ </h3>
