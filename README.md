# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This solution is an opportunity to review the basics from Javascript Vanilla. I am going to do it in HTML5, CSS3 and JS without frameworks.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon
- See how I did the challenge

### Links

- Solution URL: [Github](https://github.com/ROPierre/Front-end_mentor_03)
- Live Site URL: [Github Pages](https://ropierre.github.io/Front-end_mentor_03/)

## My process

First of all, I started doing what I wanted to do, build a script of where all elements should be. This doesn't mean that I can't change if the code asks for it. And then started to code the HTML and the CSS (trying to get the main properties from each element) prioritizing mobile screens.
Secondly, I started the javascript, did the interactions and made adjustments on the elements to respect the layout.
Finally, I tested on deploy.  

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript
- Mobile-first workflow

### What I learned

- JS
* How to position elements getting the X and Y axis from another element 
```javascript
const boundBox = parentElement.getBoundingClientRect();
const x = boundBox.left;
const y = boundBox.top;
element.style.left = `${x - 130}px`;
element.style.top = `${y - 70}px`;
```

* How to toggle a class on pure JS (vanilla). I used to do the hard way and never thought about ClassList having a toggle method there.
  * What I used to do:
  ```javascript
  if(element.classList.contain("class")){
    element.classList.remove("class")
  } else {
    element.classList.add("class")
  }
  ```
  * Using toggle:
  ```javascript
  element.classList.toggle("class");
  ``` 

### Continued development

For next challenge I'll be tempting to do something more complete, maybe a landing page or something focus on JS and the landing page. The next step (after the next challenge), I am going to study more about SASS and CSS GRID, then REACT and VUE (I set my due date to 20/12, hope to archive that)

### Useful resources

- W3Schools
- MDN Mozilla
- Alura (review my studies)
- Stack Overflow

## Author

- Github - [@ROPierre](https://github.com/ROPierre)
- Frontend Mentor - [@ROPierre](https://www.frontendmentor.io/profile/ROPierre)

## Acknowledgments

On Progress
