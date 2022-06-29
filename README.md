</br>

<div align="center">
  <h1><img src="./assets/image/SoStats.png" alt="So Stats" height="50"/></h1>
  <p>Generate your reputation info in Stack Overflow on your README profile</p>
  
  <img src="https://img.shields.io/github/deployments/kurt-liao/so-stats/production?label=vercel&logo=vercel" />
  <img src="https://img.shields.io/badge/license-MIT-brightgreen" />
  <img src="https://img.shields.io/badge/license-BEERWARE%20%F0%9F%8D%BA-yellowgreen" />
  
</div>

<p align="center">
  <a href="https://github.com/kurt-liao/so-stats/issues"> Issue </a>
  .
  <a href="https://github.com/kurt-liao/so-stats/pulls"> Feature </a>
</p>

# SO Stats Card

Easy to use! 🅲🆃🆁🅻+🅲 & 🅲🆃🆁🅻+🆅 into your readme markdown.

1. Find your Stack Overflow user id

2. Change the `?user=` value to your Stack Overflow user id.

```md
[![My Stack Overflow Stats](https://so-stats-kurt-liao.vercel.app/api?user=10389571)](https://github.com/kurt-liao/so-stats)
```

[![My Stack Overflow Stats](https://so-stats-kurt-liao.vercel.app/api?user=10389571)](https://github.com/kurt-liao/so-stats)

or

```html
<a href="https://github.com/kurt-liao/so-stats">
  <img
    height="200"
    src="https://so-stats-kurt-liao.vercel.app/api?user=10389571"
  />
</a>
```

<a href="https://github.com/kurt-liao/so-stats"> 
  <img height="200" src="https://so-stats-kurt-liao.vercel.app/api?user=10389571"/>
</a>

Also you can see an example [here](https://github.com/kurt-liao/kurt-liao)

### Hide specific info

You can pass a  `&hide=` parameter with comma-seperated values.

> `&hide=title,logo,badges,border`

```md
![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571&hide=title,logo,border)
```

![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571&hide=title,logo,border)


### Random theme

You can pass a `&random=true` parameter to get different color style every time.

```md
![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571&random=true)
```

![My Stack Overflow Stats](https://so-stats.vercel.app/api?user=10389571&random=true)


## Deploy your own 🚀

<details>
  <summary> <strong>Guide</strong> </summary>

- Fork this repo
- Sign up and log in into [Vercel](https://vercel.com/)
- Go to Vercel [dashboard](https://vercel.com/dashboard)
- Click `Import Project`
- Click `Import Git Respository`
- Click `delpoy`, and done. Find out your domain and start to use it!
</details>

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkurt-liao%2Fso-stats"><img src="https://vercel.com/button" alt="Deploy with Vercel"/></a>

---

<h3>Contributions welcome! Also ⭐ </h3>
