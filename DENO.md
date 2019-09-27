# Kritik an NodeJS

* Design Mistakes in Node, Ryan Dahl @ JS Conf Berlin 2018
	* Promises
	* Geringe Sicherheit
		* V8 Engine ist sicher, Node nicht
		* automatisch Zugriff auf Dateien, Systemaufrufe, Scripts starten
		* Build-System (GYP) ist nicht gut (Chrome hat es ausgetauscht)
	* package.json und NPM
		* NPM mittlerweile fast unverzichtbarer Bestandteil von Projekten
		* zentrales Repository unter privater (kommerzieller) Kontrolle schränkt Freiheit der Entwickler ein
	* extreme Komplexität der Modulauflösung

# Was ist Deno?

* Projekt im Mai 2018 gestartet 
* „A secure JavaScript/TypeScript runtime built with V8, Rust and Tokio“
* basiert auf V8
* in Rust geschrieben (NodeJS in C und C++), verspricht viel Leistung
* Asynchronität mit Tokio, [Tokio - The asynchronous run-time for the Rust programming language.](https://tokio.rs/)
* intensive Weiterentwicklung im letzten Jahr

# Was ist anders?

* keine package.json, kein node_modules
* keine Abhängigkeiten und Auflösungen dieser
* Top-level Await-Support
* ES-Module als alleiniges Modulsystem (kein require mehr)
* Kein Zugriff auf Festplatten-, Netzwerk- oder Systemvorgänge
* native Unterstützung von TypeScript
* Browser kompatibel
* hilfreiche Tools out of the box (bundle, test, lint, ..)
* Deno ist eigenständiges ausführbares Programm ohne externe Abhängigkeiten
* und weitere Unterschiede… [Deno Manual](https://deno.land/manual.html#goals)

# Get started

```
curl -fsSL https://deno.land/x/install/install.sh | sh
brew install deno

```

Ein einfaches Programm direkt aus dem Internet:

> deno https://deno.land/welcome.ts

Dateien/Module werden heruntergeladen und lokal gecached. Aktualisieren mit:

> deno myprogram.ts --reload

# Server

```
# myserver.ts

import { serve } from "https://deno.land/std@v0.12/http/server.ts";

const body = new TextEncoder().encode("Hello World\n");
const s = serve(":8000");

window.onload = async () => {
  console.log("http://localhost:8000/");

  for await (const req of s) {
    req.respond({ body });
  }
};
```

Programm ausführen...

> deno myserver.ts

# Dateien

```
(async () => {
  const now = new Date();

  const encoder = new TextEncoder();
  const data = encoder.encode('Hello world\n\nIt's ${now}');

  await Deno.writeFile('hello.txt', data);
  await Deno.writeFile('hello2.txt', data);
})();
```

# Module verwenden

### direkte Angabe einer URL im Import

```
import { serve } from "https://deno.land/std@v0.12/http/server.ts";
```

### Module-Map

> deno run --importmap=map.json myserver.ts

```
# map.json

{
  "imports": {
    "http/": "https://deno.land/std@v0.12/http/",
    "liltest": "https://unpkg.com/liltest@0.0.5/dist/liltest.js"
  }
}
```

```
# myserver.ts

import { serve } from "http/server.ts";

...
```

### Referenzieren durch eigenes Modul

```
# utils.ts

export { test } from "https://deno.land/std/testing/mod.ts";

export { default as Vue } from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.min.js';

export { default as Vuex } from 'https://cdn.jsdelivr.net/npm/vuex@3.1.1/dist/vuex.esm.browser.js';

export const PI = Math.PI;

export const upperCase = str => str.toUpperCase();

export default 42;
```

# Werkzeuge - out of the box

* dependency inspector (deno info)
* code formatter (deno fmt)
* bundling (deno bundle)
* runtime type info (deno types)
* test runner (deno test) not yet
* command-line debugger (--debug) not yet
* linter (deno lint) not yet

<!--

# Resources

* [C J Silverio: The economics of open source](https://2019.jsconf.eu/c-j-silverio/the-economics-of-open-source.html)
* [Deno](https://deno.land/)
* [Deno: Ryan Dahl präsentiert mögliche Alternative zu Node.js](https://entwickler.de/online/javascript/deno-ryan-dahl-node-579846561.html)
* [Deno: Was hat sich bei der kommenden Alternative zu Node.js getan?](https://entwickler.de/online/javascript/deno-node-alternative-579867114.html)
* https://tinyclouds.org/jsconf2018.pdf
* https://www.youtube.com/watch?v=M3BM9TB-8yA
* https://github.com/denoland/deno
* https://github.com/denolib/awesome-deno
* https://deno.land/manual.html
* [Ryan Dahl: Designfehler von Node.js und sein neues Projekt | heise online](https://www.heise.de/developer/meldung/Ryan-Dahl-Designfehler-von-Node-js-und-sein-neues-Projekt-4075557.html)
* [Open Source: NPM-Chef geht schon nach wenigen Monaten wieder - Golem.de](https://www.golem.de/news/open-source-npm-chef-geht-schon-nach-wenigen-monaten-wieder-1909-144007.html)
* [Deno : le nouveau NodeJS ? - Je suis un dev](https://www.jesuisundev.com/deno-le-nouveau-nodejs/)
* [Deno Manual](https://deno.land/manual.html#goals)
* https://medium.com/lean-mind/deno-node-js-killer-718c8969770b
* https://flaviocopes.com/es-modules/
* https://blog.logrocket.com/what-is-deno/

-->