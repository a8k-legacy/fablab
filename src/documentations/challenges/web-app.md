# Web application development

## [Web Development Tutorial for Beginners 1](https://www.youtube.com/watch?v=3JluqTojuME)

- install code editor called [sublime](https://www.sublimetext.com/docs/3/linux_repositories.html#apt)
- dealing with tags
  - `<html>` , `<head>` ,`<title>` , `<body>`
  - [hello world](/src/imgs/documontations/challenges/hello-world.html)
  - [item list](/src/imgs/documontations/challenges/item-list.html)
  - [paragraph](/src/imgs/documontations/challenges/paragraph.html)
  - [header](/src/imgs/documontations/challenges/header.html)
- dealing with attributes
  - `<a ></a>
  - [hyper link](/src/imgs/documontations/challenges/hyper-link.html)
  - [image](/src/imgs/documontations/challenges/image.html)

## [Web Development Tutorial for Beginners 2](https://www.youtube.com/watch?v=gBi8Obib0tw)

- use `<!Doctype html>` in all of the files
- `index.html` is the first file the browser looking for it at the beginning
- adding style to webpage
  - create new file named `main.css` (css : Cascading style sheets)
    ```
    body {
        background : red ;
    }
    ```
  - the file contains a selector `body` : where we pick something we add syle to
  - rule contains : property `background` and a value `red`
- there are two ways to add style to your webpage

  - put the style lines inside the `html` file itself

  ```
      <style type="text/css">
          body
          {
              background: blue;
          }
      </style>
  ```

  - this method is not effictive if we want to style too many files
  - `OR` we can put them in a separate file and link them to the created file `main.css`

  ```
  h1
  {
      color: brown;
  }
  h2
  {
      background: darkkhaki;
  }
              <link href="main.css" rel="stylesheet" type="text/css">
  ```

- to change the font : `font-family: 'Courier New';`
- to change another part
  ```
  h1
  {
      color: brown;
  }
  h2
  {
      background: darkkhaki;
  }
  ```
- i can also do that
  ```
  h1,h2
  {
     color: brown;
  }
  ```
- if i have more than one paragraph for example and i want just one of them to change its style, i should use `class`
  - first in the file that i want to specify its style
    - `<p class="first">The content of machines page</p>`
  - in `main.css` files :
    ```
    .first
    {
        background: rgb(36, 36, 92);
    }
    ```
  - i can give the class to any other selector to use
- if there are two different styles for one paragraph for example the last one will override, that why it called css (cascading style sheets)
- `note` if there is a class and there is a new selector the one which has the class will dominate the other
- there is another method called `id` i can use to identify specific style
  - `<p id="first">The content of machines page</p>`
  - in `main.css` files :
    ```
    #first
    {
        background: rgb(36, 36, 92);
    }
    ```
- the difference between `class` and `id` is the class can be used more than one in the same page, while id cannot, it just used by only one selector

## [How to create CSS Layouts - Web Development Tutorial for Beginners (#3) - with HTML & CSS](https://www.youtube.com/watch?v=9tzyJEwO9Os)
