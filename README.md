# ZivverTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.
Includes components from Bootstrap's SCSS files.

Created by [Goran Blazevic](mailto:goran.blazevic@typeqast.com).

## Assignment

> Write an Angular application that uses jsonplaceholder API to fetch 100 posts and render them
> all where each post in a separate component and show them as squares, 10 rows x 10 columns
>
> By default, show the post id,
> When clicking on a square: replace the id with the userId for all posts
>
> - When clicking again show the id and so on...
> - Impress us with your design taste (but we do have a designer at Zivver ;)).
> - Don’t use RxJS to make shared state (this will be the bonuses question)
>
> Did you finish early? (bonus)
> Then branch out your code and do exactly the same thing but with a shared state-like made by RxJS only

## Explanation

As this is a very simple project, my idea was to utilize minimum of code to satisfy requirements, make the app easy to overview, and provide insight into my way of thinking.

### Angular CLI

Angular app is generated using the CLI, without routing and using SCSS as styling choice.

### Styling

I used components of Bootstrap's SCSS to provide normalization across browsers (Reboot component), as well as Bootstrap's flexbox grid. Reason for this is my familitarity with the Bootstrap's codebase and ease of use (as well as a lot of people who review and improve Bootstrap's code), though this could have been written without Bootstrap all together (for example, using [Normalize.css](https://necolas.github.io/normalize.css/) for normalization across browsers and simple CSS flexbox properties to define the grid).

Color scheme is very basic and used only to provide difference between post IDs and user IDs in general. Colors are defined in the `scss/_variables.scss` file and included into components' stylesheets using the `@use` rule.
