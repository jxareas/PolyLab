<a name="readme-top"></a>
<br />

<div align="center">
  <a href="#">
   <!-- Replace this logo for a custom official logo -->
    <img src="./readme-assets/logos/official_logo.jpg" alt="Logo" width="180" height="150">
  </a>

<h1 align = "center">
<b><i>PolyLab</i></b>
</h1>
    <!-- Add/Remove categories depending on your project -->
  <p align="center">
    A sample Angular micro front-end for a LIMS
    <br />
    <!-- IMPORTANT NOTE: If you want to append emojis you'll need to add the '-' sign before and after the header, as shown below:  -->
    <a href="#-screenshots-">Screenshots</a>
    ·
    <a href="#-requirements-">Requirements</a>
    ·
    <a href="#-architecture-">Architecture</a>
    ·
     <a href="#-technologies-">Technologies</a>
    ·
    <a href="#-license-">License</a>
  </p>
</div>

<!-- Here goes the project description -->

**PolyLab** is a sample Angular micro front-end for a Laboratory Information Management System (LIMS). It provides a user-friendly interface for managing laboratory data and workflows.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📷 Screenshots 📷

[Insert screenshots here]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 Requirements 📝

PolyLab has the following requirements:

- Node.js 18.16.0 or higher, as specified by the [`.nvmrc`](/.nvmrc) file.
- Angular CLI 16.0 or higher
- [PolyLab API](<(https://github.com/jxareas/PolyLab-API)>) to connect to

Here are the instructions on how to setup the project locally:

1. Install and run the [PolyLab-API](https://github.com/jxareas/PolyLab-API).
2. Clone the repo

```bash
git clone https://github.com/jxareas/PolyLab.git
```

3. Install NPM packages

```bash
yarn install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🛠 Architecture 🛠

**PolyLab** follows a micro front-end architecture, using Angular as the front-end
framework.
It is designed to be integrated with a [backend API](https://github.com/jxareas/PolyLab-API) that provides the necessary data and functionality for managing laboratory information.

This project is built using a modular approach, with each module encapsulating a specific set of features.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🦾 Technologies 🦾

The project uses the following frameworks & libraries:

- **Angular**: a comprehensive framework that allows for the development of dynamic, high-performance web applications.
- **TypeScript**: a strongly-typed superset of JavaScript that provides features such as type checking, interfaces, and classes.
- **RxJs**: a reactive programming library for JavaScript. It is used extensively in PolyLab for handling asynchronous operations, such as HTTP requests and event handling.
- **PrimeNG**: a set of open-source UI components for Angular.
- **Angular Material**: a UI component library built by the Angular team that provides a rich set of pre-built UI components based on Google's Material Design guidelines.
- **ESLint**: a static code analysis tool for identifying problematic patterns found in JavaScript code.
- **Lint-staged**: a tool that allows you to run linters on specific files before they are committed, following the conventional commits standard.
- **Husky**: a tool that allows you to set up git hooks easily.
- **Prettier**: a code formatter that ensures consistent code formatting across the project.
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📜 License 📜

<!-- Change this license for the one used in your project -->

PolyLab is licensed under the [GNU Affero GPL v3.0](https://github.com/jxareas/PolyLab/blob/master/LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- This is a custom version of the Read-My-README template, by Jon Areas,
found at: https://github.com/jxareas/read-my-readme -->
