# My Previous Author Website
My old writing [website](http://lukasz-drobnik.herokuapp.com/) showcasing pieces of fiction in English and my native Polish. It is a single-page app built with **Node.js**, **Express.js** and **Angular 4**.

## Main features
* Responsive design based on **Bootstrap 3** and **ngx-bootstrap**
* Styling based on the **LESS** preprocessor
* Dynamically changed page titles and colour themes
* ‘Bio’ page with an easily expandable list of publications in the form of a timeline

## App Structure
As there is no need for user authentication or any similar features, **Node.js-based back-end** is minimal, most of the app made up by **Angular 4-based front-end**.

### The Nav component
The heart of the application, containing most of the code. Main features:
* The **navigation bar**. Its colour changes depending on the current theme (theme information is contained in each route) and language (Polish or English – the Nav component checks the language of the current page based on the presence or absence of the ‘/en’ bit in its path).
* If the user types in a non-existing path or chooses the ‘random text’ menu item, the app **redirects them to a random page**. Rather than choosing a completely random text, this feature is closer the *shuffle* function in audio players as it remembers visited pages. This way the user is not redirected to a recently read piece when choosing the ‘random text’ option.
* When the user changes the language (by clicking the ‘en’ or ‘pl’ option on the navigation bar), the Nav component checks whether there is **an equivalent of the current page in the other language**. If not, a random text in the chosen language is displayed.
* The Nav app component controls **routing** – it updates the theme and page title based on information contained in each route and, if the user accesses a random page, overwrites the ‘random’ or ‘random/en’ path so that browser navigation works as expected.
* The component uses the **local storage** feature to keep such details as the language chosen by the user or visited pages.
* A **splash screen** with a prompt to choose the language if it hasn’t been selected yet.

### The Bio component
A simple page containing my biographical statement and **a list publication in the form of a timeline**. The timeline is built dynamically from an array of objects containing such information as the publication title, English and Polish descriptions (displayed based on the currently set language), publication year or an URL pointing to a given magazine/publishing house website.

### The Text components
The meat of the app: **pieces of fiction in Polish and English**. Every text component has a similar structure, with a jumbotron displaying a video relevant to a given theme as a background, the text (sometimes using decorative text separators matching the theme) and a footer with copyright information. At the end there is a button which prompts the user to read another text.

## Acknowledgements
The app is based on a modified seed project from **Maximillian Schwarzmüller’s** course [Angular (Angular 2+) & NodeJS - The MEAN Stack Guide](https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/).

The timeline, which I later modified to my needs, comes from the [Agency]( https://blackrockdigital.github.io/startbootstrap-agency/) theme by **Blackrock Digital**.
