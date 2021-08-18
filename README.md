Site at [SPLITTER](https://danielandrew1.github.io/tip-calculator/)


# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- Live Site URL: [SPLITTER](https://danielandrew1.github.io/tip-calculator/)

## My process

### Built with

- Semantic HTML5 markup

- CSS custom properties
- Flexbox
- CSS Grid

- Vanilla JavaScript

### What I learned

I learned how to properly use CSS Grid, setAttribute(), removeAttribute() and removeEventListener(). I also learned how to use Media queries to make a mobile-friendly UI, aswell as how to properly import fonts, and SVGs as psuedo elements. The hardest part I would say was trying to get "Space Mono" font to work, but after actually clicking on the link I was given, I finally understood why it wouldn't work.

To see how you can add code snippets, see below:

```css
  background: url("images/icon-dollar.svg");
  background-repeat: no-repeat;
}

.bill input:focus::placeholder {
  color: transparent;
}


#people-amount-zero input {
  border: solid 2px rgb(255, 0, 0);
  border-radius: 5px;
}


#people-amount-zero:after {
  display: inline-block;
  position: absolute;
  bottom: 36px;
  right: 0px;
  content: "Can't be zero";
  color: red;
  width: 100px;
  height: 10px;
  font-size: 12px;
}

```
```js
  peopleAmount.addEventListener("keydown", () => {
    if (peopleAmountLabel.hasAttribute("id""people-amount-zero")) {
        peopleAmountLabel.removeAttribute("id");
    };
});
}

//===================================================================================================================================================================================
else {
        tipPercentage = parseInt(billAmount.value) / 100 * parseInt(customInput.value) / parseInt(peopleAmount.value);
        tipPerPerson.value = tipPercentage.toFixed(2);

        sum = tipPercentage + parseInt(billAmount.value) / parseInt(peopleAmount.value);
        totalPerPerson.value = sum.toFixed(2);

        resetBtn.setAttribute("id", "reset-button-active");      // Activate Reset Button Color
        resetBtn.addEventListener("click", resetAll);
        };


```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

I want to keep improving my JavaScript skills before branching out to a framework. But I feel like I'm very close. I also need to learn how to work faster. This took many hours to complete

### Useful resources

- [Google](https://www.google.com) - This helped me access the following 2 resource sites, aswell as several others.
- [StackOverflow](https://www.stackoverflow.com) - This helped me during code research.
- [W3Schools](https://www.w3resource.com) - This helped me during code research aswell.

## Author

- Website - [realdma.tech](https://www.realdma.tech)
- Frontend Mentor - [@DanielAndrew1](https://www.frontendmentor.io/profile/DanielAndrew1)
- Twitter - [@Daniel Andrew](https://www.twitter.com/danny21769);
- Instagram - [@dxniel_xndrew](https://www.instagram.com/dxniel_xndrew);
