## Website Performance Optimization portfolio project
##### FEND5: Website Optimization

This is a [Udacity](http://www.udacity.com) project for _[Front-End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001)_ nanodegree.
In this project I applied technics to measure the performance and optimize a given portfolio.

### Getting started

#### Online version
Check the obfuscated and indented online versions
- Open your browser and check the following links
    - Obfuscated: [http://gabu-lartiga.github.io/cam-mobile-portfolio/dist/](http://gabu-lartiga.github.io/cam-mobile-portfolio/dist/)
    - Indented: [http://gabu-lartiga.github.io/cam-mobile-portfolio/src/](http://gabu-lartiga.github.io/cam-mobile-portfolio/src/)

#### GitHub version
Check the code of the obfuscated and indented versions in the following repository:
- [gabu-lartiga/cam-mobile-portfolio](https://github.com/gabu-lartiga/cam-mobile-portfolio), this repository contains 2 folders
    - `dist` contains the obfuscated code
    - `src` contains the indented code

The online version is a `git submodule` of a different repository but the structure is the same.

- [gabu-lartiga/gabu-lartiga.github.io](https://github.com/gabu-lartiga/gabu-lartiga.github.io) > `cam-mobile-portfolio @ 47ed2db`

## Tools
Through the project you can find content that has `.min.` or `.beautified.` before the extension file.
- `.min.` means the code is obfuscated
- `.beautified.` means the code is indented

To do this I used:
- [Sublime Text 2](https://www.sublimetext.com/) as a text and code editor.
- [Package Control](https://packagecontrol.io/) to install necessary tools.
- [Minify](https://packagecontrol.io/packages/Minify) to minify and beautify the code.

## Mesure Optimization

- To meassure the portfolio optimization go to [PageSpeed Insight](https://developers.google.com/speed/pagespeed/insights/) and paste the site you want to measure
- The main difference between optimized and non-optimized portfolio is in the pizzeria section
- Also you can messure it using *Google DevTools Timeline*.
	- Windows `F12`, `CTRL + SHIFT + i`, `CTRL + SHIFT + j`
	- Mac `CMD + OPT + i`

For more information about *Google DevTools Timeline* you can check this [site](https://developers.google.com/web/tools/chrome-devtools/).
