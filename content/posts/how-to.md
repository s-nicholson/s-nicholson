+++ 
date = 2024-07-09T20:00:32+01:00
title = "How to build... this, I guess"
description = "Throwing together a quick outline of how I put this site together in case it helps anyone else"
authors = ["s-nicholson"]
tags = ["hugo", "how-to"]
+++

This will be a short post[^1], I'm basically just signposting to the _many_ great resources I used to pull this site together.

So, what _have_ I "built"[^2]?

- a simple, reasonable looking site with minimal CSS/JS craziness and no real cost,
- a custom domain name and email address to make it look a bit more "professional"[^3],
- a CI/CD pipeline which updates the site every time I commit a change,

... and I'm pretty happy with that result.

Especially since the last time I built a website, I worked really hard on it and ended up with something my lecturer called "novel" and most people would call "unusable".

So, I put off trying to build this because I was sure it would be painful (and because I was scared I'd have to use wordpress).

But, if anything, throwing this site together was _too_ simple - I'd expected it would take a while to get off the ground, but because the skeleton of the site came together so quickly it left me with nothing to do but mess around with content[^4]. :sweat_smile:

{{<note>}}
All the code lives [here on my GitHub](https://github.com/s-nicholson/s-nicholson).
if you find this belpful, feel free to give me a shout. if I've messed something up, likewise! Or better yet, send me a PR!
{{</note>}}

## Hugo 

The site is built by [Hugo](https://gohugo.io/) - [the docs](https://gohugo.io/documentation/) explain Hugo infinitely better than I can, so I won't spend too long on it, effectively a framework that renders markdown as HTML.

> There's a great quick start page [here](https://gohugo.io/getting-started/quick-start/) to get you up and running with Hugo.[^5]

The Hugo CLI is great as well, e.g. adding a new page is just `hugo new content ...` :pinched_fingers:

And I love running the site locally with `hugo server` - I don't do much frontend work in my day job, so having my content hot reloading as I edit feels vaguely magical.

{{<details title="There are a few things in the site which didn't just come out of the box and were instead cobbled together from various resources.">}}

- the [CSS for the "Experience" page](https://github.com/s-nicholson/s-nicholson/blob/main/static/styles/cv.css) is a lightly tweaked version of the ones [here](https://github.com/elipapa/markdown-cv/tree/master) - I'd originally hoped to set the page up as a printable CV, but found it a bit fiddly,
- collapsible sections on the "Experience" page (and here) are handled by [a custom `shortcode`](https://github.com/s-nicholson/s-nicholson/blob/main/layouts/shortcodes/details.html) that wraps the content in an HTML details` tag,
- the wee "note" elements (the small, italic text blocks) are another [custom `shortcode`](https://github.com/s-nicholson/s-nicholson/blob/main/layouts/shortcodes/note.html)
- having links open in new tabs is handled by [a custom `render-link` layout](https://github.com/s-nicholson/s-nicholson/blob/main/layouts/_default/_markup/render-link.html),
- emojis in titles (because why not?) was done by copying the `layouts/partials/page.html` from the theme into my project and [editing it to add `emojify`](https://github.com/s-nicholson/s-nicholson/blob/main/layouts/partials/page.html#L6).

{{</details>}}

### Themes

The `theme` for this is supplied by [hugo-coder](https://github.com/luizdepra/hugo-coder/), but there are [lots to choose from](https://themes.gohugo.io/) - can you believe all these folks just **giving** us these awesome themes so we don't need to fight with CSS?!

## GitHub Pages

The site is hosted on [GitHub Pages](https://docs.github.com/en/pages) - I'd planned to host this site out of an S3 bucket ([as outlined here](https://capgemini.github.io/development/Using-S3-and-Hugo-to-Create-Hosting-Static-Website/)), but Pages turned out to be much simpler.

The static pages are built using [GitHub Actions](https://docs.github.com/en/actions) whenever there's a new commit to `main`.

So that's hosting and CI/CD taken care of for the princely sum of £0. :money_with_wings:

Between this pipeline and running Hugo locally, the workflow is just:

1. new page,
1. edit and preview locally,
1. commit and push,
1. see it live! 

Which is pretty cool, right? Adding pages to Confluence is less straightforward.

> There's another fantastic guide about how to acheive this along with all the necessary GitHub Actions code [here](https://gohugo.io/hosting-and-deployment/hosting-on-github/).

## Custom Domain

I wasn't keen on throwing `https://s-nicholson.github.io/s-nicholson` out there as my URL - so I decided to see if I could do better...

Turns out it's laughably easy to do better. You can add a custom domain name for your site in a matter of minutes.

> There's (yet another) great guide [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) on how to do that.

I got my domain from [CloudFlare](https://www.cloudflare.com/en-gb/) for about $4 and configured all the necessary DNS entries in about 10 minutes, despite never having touched CloudFlare before.

The hardest part was trying to figure out what went wrong when I started getting `TOO_MANY_REDIRECT` issues... and that was resolved by 2 minutes on [StackOverflow](https://stackoverflow.com/a/50182311/1723432).

### Email forwarding

I also spent a few extra minutes setting up [email forwarding for the domain in the CloudFlare console](https://developers.cloudflare.com/email-routing/get-started/enable-email-routing/) - adding a routing rule to forward messages to `hello@s-nicholson.co.uk` to my personal gmail.

And also followed [this guide](https://gist.github.com/irazasyed/a5ca450f1b1b8a01e092b74866e9b2f1) to allow me to send mail from my `hello@s-nicholson.co.uk`, just to keep things consistent if anyone ever emails me.

## Content

The content is just markdown, so that's dead easy to throw together - it's got just enough formatting to be pretty descending into CSS hell.

Hugo's templating gives you the tools to build up _just enough_ stuff on top of the vanilla markdown to make pages a bit nicer.

And as an added bonus, it lives in `git` as plaintext - not in some input box on a CMS somewhere, or Confluence, or wherever else information usually goes to die. That gives me a level of comfort that's hard to express.

Now I just need to come up with some content worth reading...

[^1]: I never intended this site to be a blog but I find myself wanting to write some stuff down and this seems as good a place as any to [keep my keystrokes alive](https://keysleft.com/).
[^2]: I thought "built" was a bit cheeky considering I wrote hardly any code for this but I suppose sticking existing bits together is still building in the Lego sense, so I'm happy with it.
[^3]: At least until folks read the content, I guess.
[^4]: That and a misguided attempt to [generate a PDF CV from my Experience page](https://github.com/s-nicholson/s-nicholson/blob/generate-cv-pdf/static/js/printPdf.js) - not one of my better ideas.
[^5]: I chose not to clone my theme as a submodule - instead I initialised my site as a `go` module and then added the theme at [the top of my `hugo.toml`](https://github.com/s-nicholson/s-nicholson/blob/main/hugo.toml#L4)
