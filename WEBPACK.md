# Webpack - eine Einführung

## Warum ein Build-Tool verwenden?

* HTML, JS, CSS
* Preprocessing, um Entwicklung von Styles zu vereinfachen (SCSS)
* Einführung moderner JS-Standards: ECMAScript, Promises, Arrow-Functions, async/await, module imports
* ...trifft auf alte Browser
* Build-Prozesse, zur Konvertierung moderner Dinge in das, was Browser verstehen
* zusätzlich größere Ökosysteme:
  * CSS braucht Frameworks (Bootstrap etc.)
  * JS setzt diverse Bibliotheken und Frameworks ein (Underscore, Backbone, React, Vue)
* Optimierung auf Ladezeiten
  * Pakete
  * Minifizierung, Uglifying
* zusätzlich moderne Anforderungen an Entwicklungsumgebung
  * Entwickler-Server
  * automatisches Laden nach Code-Änderung, Hot Module Replacement
* Build-Tools: Grunt, gulp, Webpack, ...

## Was ist ein Module Bundler?

* Build-Tools sind Module Bundler und Task Runner
* Task Runner führen Aufgaben aus
  * kann auch Bundling sein
  * npm scripts, gulp, Grunt
* Module Bundler
  * können auch Aufgaben einbinden
  * Webpack, Parcel, Rollup

## Geht es nicht doch ohne?

* type=module, CSS variables, @apply, calc(), nesting?
* HTTP/2, fetch
* Minifizierung, Unit Tests, Code Style Linting, Entwicklungsumgebung?

## Webpack ohne Konfiguration

* Webpack ist ein "statischer Module Bundler für moderne JS Anwendungen"
* baut alle Abhängigkeiten in ein Modul
* löst Abhängigkeiten auf
* entry point  = src/index
* output = dist/main.js (minifiziert und optimiert für Produktion)
* Konzept: Entry, Output, Loaders, Plugins, Modus

[Guides | webpack](https://webpack.js.org/guides/)

[Configuration | webpack](https://webpack.js.org/configuration/)

### Webpack erweitern

* CSS im JS? Extract CSS?
* Babel für ES6+ Transpilation?
* Source Maps (inline oder separat)?
* Versionskontrolle?
* Code Splitting?
* Build-Performance?
* Code-Qualität?
* Unit-Tests?
* Translations?
* PWA, Vue, Svelte?

[Plugins | webpack](https://webpack.js.org/plugins/)
