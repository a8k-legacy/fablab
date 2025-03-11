# gohugo

## What is gohugo

`Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again.`

## how to install

- `brew install hugo`
- Prerequisite Tools
    - http://git-scm.com/
    - https://golang.org/dl/
- install hugo  
`sudo apt-get install hugo`
- To verify your new install  
`hugo version`

## how to work

- Create a New Site  
`hugo new site quickstart`
- Add a Theme from a website https://themes.gohugo.io/
- This quickstart uses the beautiful [Ananke theme](https://themes.gohugo.io/gohugo-theme-ananke/)  
`cd quickstart`  
`git init`  
`git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke`  
echo 'theme = "ananke"' >> config.toml
- Submodule :
    - Let’s say you’re working on a project called Slingshot. You’ve got code for y-shaped stick and a rubber-band
    - At the same time, in another repository, you’ve got another project called Rock—it’s just a generic rock library, but you think it’d be perfect for Slingshot
    - You can add rock as a submodule of slingshot. In the slingshot repository
    - `git submodule add https://github.com/<user>/rock rock`
    - At this point, you’ll have a rock folder inside slingshot, but if you were to peek inside that folder, depending on your version of Git, you might see … nothing
    - Newer versions of Git will do this automatically, but older versions will require you to explicitly tell Git to download the contents of rock
    - If everything looks good, you can commit this change and you’ll have a rock folder in the slingshot repository with all the content from the rock repository
    - On GitHub, the rock folder icon will have a little indicator showing that it is a submodule
    And clicking on the rock folder will take you over to the rock repository
- Add Some Content  
`hugo new posts/my-first-post.md`
- Start the Hugo server
`hugo server -D`
- i used another theme called learn, after making the page now i want to customize it, using this website https://learn.netlify.com/en/
- install hugo
- install go
    - `sudo apt-get update`
    - `sudo apt-get -y upgrade`
    - `wget https://dl.google.com/go/go1.12.6.linux-amd64.tar.gz`
    - `sudo tar -xvf go1.12.6.linux-amd64.tar.gz`
    - `sudo mv go /usr/local`
    - `export GOROOT=/usr/local/go`
    - `export GOPATH=$HOME/Projects/Proj1`
    - `export PATH=$GOPATH/bin:$GOROOT/bin:$PATH`
    - All the above environment will be set for your current session only. To make it permanent add above commands in ~/.profile file.
    - `go version`
    - `go env`
    - the website https://t ecadmin.net/install-go-on-ubuntu/
- Front matter
    - Hugo allows you to add front matter in yaml, toml, or json to your content files
    - Front matter allows you to keep metadata attached to an instance of a content type—i.e., embedded inside a content file—and is one of the many features that gives Hugo its strength
    Front Matter Formats
    - Hugo supports four formats for front matter, each with their own identifying tokens.
    - TOML
        - identified by opening and closing +++.
    - YAML
        - identified by opening and closing ---.
    - JSON
        - a single JSON object surrounded by ‘{’ and ‘}’, followed by a new line
    - Front Matter Variables
        - Predefined
        - aliases
        - audio
        - date
        - description
        - draft
        - expiryDate
        - headless
        - images
    - https://gohugo.io/content-management/front-matter/
- https://gohugo.io/getting-started/usage/
- deploy your website : https://gohugo.io/getting-started/usage/
- hosting on github : https://gohugo.io/hosting-and-deployment/hosting-on-github/