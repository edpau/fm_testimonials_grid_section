# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

<img src="./src/assets/images/screenshot.png" alt="Screenshot" width="300"/>

### Links

- [Solution URL](https://github.com/edpau/fm_testimonials_grid_section)
- [Live Site URL](https://edpau.github.io/fm_testimonials_grid_section/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- React
- Tailwind CSS


### What I learned

##### Using a switch case for grid layout customisation
- Using a switch case for grid layout customisation is effective when different grid areas need unique positioning based on index or other dynamic factors. It allows me to conditionally assign CSS grid classes to components, enhancing flexibility. 
- Each testimonial requires a distinct placement, so using a switch statement makes it easy to control the layout by assigning specific Tailwind CSS classes to each element based on its index. This method keeps the logic clear, avoids redundancy, and ensures that I can handle changes dynamically with minimal code repetition.

#### Dynamic styling or conditional class application
- Dynamically applying styles like ${bgColor} based on the specific properties of each testimonial. This approach allows each card to have its own unique look while keeping the component reusable.

- I pass style-related properties like bgColor, textColorPrimary, and blockQuotePadding from the graduate data to the Testimonial component. These variables modify the styles of each testimonial card, making each one visually distinct while still using the same component structure.

- For example:
    - ${bgColor} dynamically applies the background color to each card.
    - ${imageBorder ?? ""} ensures an optional border is applied based on the graduate object.
    - Conditional classes like ${blockQuotePaddingMarginTopExtra ? "mt-10" : "mt-4"} adjust margin values depending on the presence of specific data.

- This allows for flexible styling, where each testimonial can have its own background color, text color, and layout variations while reusing a common structure.

## Author

- Website - [Edward Pau](https://www.edpau.me)
- Frontend Mentor - [@edpau](https://www.frontendmentor.io/profile/edpau)

