<div align = "center">

<h1><a href="https://2kabhishek.github.io/links">links</a></h1>

<a href="https://github.com/2KAbhishek/links/blob/main/LICENSE">
<img alt="License" src="https://img.shields.io/github/license/2kabhishek/links?style=flat&color=eee&label="> </a>

<a href="https://github.com/2KAbhishek/links/graphs/contributors">
<img alt="People" src="https://img.shields.io/github/contributors/2kabhishek/links?style=flat&color=ffaaf2&label=People"> </a>

<a href="https://github.com/2KAbhishek/links/stargazers">
<img alt="Stars" src="https://img.shields.io/github/stars/2kabhishek/links?style=flat&color=98c379&label=Stars"></a>

<a href="https://github.com/2KAbhishek/links/network/members">
<img alt="Forks" src="https://img.shields.io/github/forks/2kabhishek/links?style=flat&color=66a8e0&label=Forks"> </a>

<a href="https://github.com/2KAbhishek/links/watchers">
<img alt="Watches" src="https://img.shields.io/github/watchers/2kabhishek/links?style=flat&color=f5d08b&label=Watches"> </a>

<a href="https://github.com/2KAbhishek/links/pulse">
<img alt="Last Updated" src="https://img.shields.io/github/last-commit/2kabhishek/links?style=flat&color=e06c75&label="> </a>

<h3>Present your links in style 🔗🔮</h3>

<figure>
  <img src= "images/screenshot.png" alt="links screenshot" style="width:100%">
  <br/>
  <figcaption>links screenshot</figcaption>
</figure>

</div>

Have you ever wanted a place that can make all your profiles and links nicely organized, easily searchable and with super customizability?

Well, now you can!

## Introducing links

Present all your links in style with an easily accessible and highly customizable web app! ✨

## Inspiration

Needed a place to display all my profiles, used my [project's repo](https://2kabhishek.github.io/projects) as inspiration.

## Getting links

To get links, follow these steps:

```bash
git clone https://github.com/2kabhishek/links
cd links
```

## Setup Your Own links

You can easily set up links to show your own profiles.

-   Fork the repo
-   Clone it
-   Open up `script.js` and update the `username` variable to your internet username.
-   Edit the `links` JSON array in `script.js`, add/remove link elements as required.
-   Open up `index.html` and update the `title` tag to make it your username.
-   You may also want to update the favicon, update the `link` tag in `index.html`
-   Push your changes
-   Go to repo settings on GitHub and enable GitHub Pages.

The site should be live on `https://<your-username>.github.io/links`

### JSON Schema

Every link has the following properties:

-   `name`: The name of the link
-   `description`: Brief description about the link
-   `url`: The URL to open when clicked on the link
-   `icon`: The icon of the link, font awesome classes in use
-   `color`: The color of the link icon, hex code in use

### Overriding URL Logic

If your username is different across sites, or you want to add a custom URL as a link just add the entire URL in the `url` field.
Presence of `http` in the URL string will override the URL building logic and present your link as is.

### Order Of Links

The order of links presented will be the same as their order in the `links` array in `scrip.js`.

### Themes

Comes with a dark and light theme by default, depends upon your system configs.
Edit the varialbles under `:root` in `styles.css` to modify colorscheme.

### Brand Icons

This project uses [Font Awesome Brand](https://fontawesome.com/v6/icons?s=brands) for adding icons, if the icon you are looking for is not available, try using the full version of [Font Awesome](https://fontawesome.com/v6/icons/).

## Use Cases

Although, the original purpose of links is to create a web app for your profiles, it can also be used in some other scenarios.

-   **Portfolio Replacement**: Adding just a little bit of information about yourself to the `index.htnl` can convert links to your full fledged Portfolio.
-   **Link.tree Replacement**: Combined with some basic tracking and metrics, links can easily be used as an alternative to link.tree.
-   **Custom Home Page**: You can create a custom home page with your favourite links, just add the page's complete URL to `links` in `script.js` and set your live website's link as your browser homepage.
-   **Sharing Resources**: Links with overridden URLs can be easily used to share resources after talks and presentations.

## Viewing links

Open `index.html` in your favorite browser or visit [2kabhishek.github.io/links](https://2kabhishek.github.io/links).

## How it was built

links was built using `HTML` `CSS` & `JavaScript`.
It was built on `neovim` and the node `live-server`.
Uses font awesome for icons.

## What I learned

-   Learned new use cases for `JSON Arrays`

## What's next

You tell me!

Hit the ⭐ button if you found this useful.

## More Info

<div align="center">

<a href="https://github.com/2KAbhishek/links">Source</a> | <a href="https://2kabhishek.github.io/links">Website</a>

</div>
