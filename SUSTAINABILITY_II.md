# Sustainable Internet

## Hungry Web

- internet and its usage is consuming a lot of energy
- its energy consumption is about 7% ((in 2021?)) of the global usage per year
- thus it produces a lot of CO₂ (2-3% of the worlds carbon emission), it's about the same as of the global aviation industry
- if internet would be a carbon emitting country, it would be the 6th largest country in the world (Germany)
- Studien hierzu aber schwierig
  - untersuchen nur Datenzentren, aber nicht die ganze Kette vom Endgerät über Zwischenstationen bis zum Server (data centres, transmission network, end user devices)
  - rasanter Technologie-Wandel erschwert Vergleichbarkeit
  - and organizations are hindered by a lack of transparency to get a more clear picture (https://www.bbc.co.uk/programmes/p085rwjs)
- zur Nachhaltigkeit gehört aber auch die Betrachtung der Herstellung der Komponenten (in der Kette) und des damit verbundenen Energiebedarfs, sowie deren Folgen für die Umwelt
- werden diese Faktoren mit einbezogen, zeigt sich das Internet als noch hungriger als die Statistiken angeben

- energy consumption and carbon emission are rising every year
- "the cloud" is something abstractive in the sky, but it is a very earth bound thing, that is requiring a lot of power
- negativer Trend durch KI, 5G-Anwendungen und geändertes Nutzerverhalten (video consumption), das mit der Entwicklung der Endgeräte einhergeht
- politicians and tech companies want to connect everyone with broadband technology and their IoT devices
- allein das Training einer auf Spracherkennung spezialisierten KI-Software verursacht 5 Mal so viel CO₂ wie ein Auto in seinem gesamten Lebenszyklus
- about 20% of energy production will be used in IT industry in the next decade --> more carbon production


## Affecting the nature

- Energiebedarf kann nicht über erneuerbare Energien (Solar, Windkraft) allein gedeckt werden
- es muss auf schmutzige Energieträger zurückgegriffen werden, wie z.B. Kohle, Atomkraft
- neben Ausbeutung der Natur, nur begrenzte Vorkommen
- Folgen für die Umwelt: Zerstörung, Übersäuerung des Bodens?, radioaktiver Abfall
- hoher Beitrag zur Ozon-Problematik and climate change

## Affecting us

As a consumer we can mainly think of reducing our video consumption and avoiding Lüdenscheid to reduce our internet connection dependency to travel around all the traffic jam there.

But we can't distinguish between the good and the bad in digitalization. Many digital transformation is not bad: it reduces car trips, it saves forests by avoiding paper dependency or it requires less energy (e.g. DAB+ is more efficient in radio transmission)

Als Anbieter von Dienstleistungen im Internet stehen wir in der Verantwortung, uns mit dem Thema auf vielfältige Weise auseinanderzusetzen und Maßnahmen zu ergreifen, die dem Trend entgegenwirken und die Natur bewahren.

Die allgemein gewachsene Aufmerksamkeit dieses Themas und damit verbundene Anfragen unserer Kunden fordern uns zusätzlich heraus, zügig zu handeln.

## Energy consumption of the internet

(https://www.youtube.com/watch?v=ebxeXqjesOo)

- energy in manufacture and operation: data centres, transmission networks, end user devices
- we can save energy: reduce server load, reduce data transfer, reduce device energy
- the benefits: reduced energy usage, improved performance (search engine ranking, conversion rate), improved user experience (conventional terms of UX + accessibility + inclusivity)

## Various areas where to save energy

- The way we work, Prozesse
- Content
- Design & UX
- Development   
- Hosting

Auf manche haben wir als (FE) Entwickler weniger Einfluss, andere wiederum können nur von uns kontrolliert werden.

Je größer der Internetauftritt, desto wirksamer sind bereits kleine Änderungen. Each Swipe, each request, each search requires a bit of energy of a power hungry machine.

## The way we work

- Daily mit Video: video daily only once per week?, to stay in bed saves heat :-)
- Präsenz vs. Remote (Standort übergreifende Arbeit, Office)
- Büroausstattung
- Tools (Kollaboration, Dokumentation), Dokumente
- The way we learn: read sth. instead of watching a video course

## Content

- Es müssen nicht immer Hintergrundvideos oder großformatige Bilder sein: Vektorgrafiken, Icons oder typografische Details sind visuell manchmal sogar spannender und setzen Akzente
- Werbeanzeigen, Tracking von Drittanbietern oder Social-Media-Buttons verursachen viel Datenlast und sind nicht immer sinnvoll oder notwendig
- evaluate optional trackers, e.g. Minimal Google Analytics (1.5KB < 17KB, but needs a cookie banner) or [Plausible](https://plausible.io/) (<1KB and no cookies)
- Hosting auf eigenem Server ermöglicht Verzicht auf Analysesoftware, Nutzerverhalten aus Serverdaten ersichtlich
- Gute SEO hilft bei der Auffindbarkeit der Inhalte: When optimising a website for search engine rankings, we are helping people find the information they want quickly and easily.
- Copy writing: It has an impact on website efficiency because it affects the amount of time people spend browsing websites.
- Reduce video: If video is necessary, see if you can reduce the amount of video streamed by removing auto-play from videos and by keeping video content short. optimize compression.

## Design & UX

- streamline user journeys is the foundation of saving energy: if we have to invest time to find things, we waste energy as more pages or more data have to be loaded
- don't drug the user (by accident) and make it hard for the user to leave: use of notifications, infinite scroll, autoplay content, sticky makes it difficult to leave
- darker designs as displays need a lot of energy or at least support darkmode
- low energy colours relevant on OLED screens: white (highest energy), black (no energy), blue (high with ~25% more than red or green)
- efficient images: reduce size to allow space and to let the minds of the people breathe, blur edges (because detail is data and data is energy), black & white (+ dithering?)
- Bilder komprimieren (WebP or AVIF) und lazy loaden...
- Systemschriften liegen auf dem Rechner und verbrauchen am wenigsten Energie, schränken aber die Designoptionen stark ein
- anyway choose fonts carefully: Use system fonts where possible. Accept alternative local fonts. Use fewer font weights (variations).
- Webfonts bieten mehr gestalterische Freiheit, werden aber extern gehostet, sodass die Zahl der Requests und mit ihnen Ladezeit und Energieverbrauch steigen
- Man kann sie aber „subsetten“. Lade nur die Glyphen, die tatsächlich gebraucht werden.
- Zwischen Systemschriften und Webfonts liegt in Sachen Dateigröße das Variable-Fonts-Format. Embedded Fonts mache die Seite "schwerer", reduzieren dafür aber die Requests.
- Dithered Images: mit dem alten Komprimierungsverfahren wird die Dateigröße enorm reduziert. Graustufenbilder werden nachcoloriert.
- One of the core elements of good user experience is reducing friction in user journeys.
- Reduce images: Regardless of any technical optimisations, designers and content creators should think carefully about their use of images.
- Dark Mode: Dark websites were one of the first techniques popularised for saving energy on websites many years ago


## Development

- we can use code to make a website greener
- we can do loading the right things at the right time

- create static websites (SSG) whereever possible: es wird keine kontinuierliche Rechenleistung für das Rendering benötigt - also weniger Energie
- a dynamic website: web server has to do work thinking about what information to send back to the user each time someone tries to load a page
- mix up both to use dynamic rendering only where needed

- Use less JavaScript: impacts website efficiency in two ways:
    1. adds file weight to the page
    2. increases amount of processing required by the users device
- JavaScript must be parsed, compiled, and then finally executed. Byte for byte, this makes JavaScript more expensive than other types of resources.

- Write clean code: Keep code clean and simple, avoid duplication and write efficient queries. 
- sauberes HTML/CSS (Cascading...!) macht barrierefrei und spart Rechenpower --> gute SEO (weniger Schleifen bei der Suche)!
- Use more efficient technologies like CSS, or at least use JS efficiently
- Keep in mind existing frameworks and libraries, avoid unnecessary plugins.
- so choose libraries and frameworks carefully in terms of their sustainability as well
- and maybe prefer native development without frameworks or use lightweight frameworks (Preact, SolidJS)
- make use of dynamic imports that help to load required assets only
- load resources lazily, load them in the right order

- Tracking and advertising scripts (no user value but often large files) cause significant CPU usage, slow websites down and invade their privacy. Checkout https://webtest.app to measure impact.

- Optimise images: Load images at the correct scale, compress image files without visible loss of quality. Use the most efficient file format for each image, such as WebP or AVIF. All of this brings images to only a tenth of the original size.
- Optimise fonts: Stick to modern web font file formats like WOFF and WOFF2, which use higher compression. Subset fonts to only include the characters needed.
- Use Progressive Web App technology (PWA) to cache files on the users device + improve UX (more efficient user journeys)
- Use Accelerated Mobile Pages (AMP): AMP can be a useful tool to strip out the fast and deliver a more lightweight and energy efficient version to mobile users.

- avoid (complex) build processes in terms of modern browsers (TypeScript, minification, Vue Single File Components, styling within JS)
- use no bundler (or an efficient bundler) when developing on your local machine (bundling and maps generation are calculations)
- choose bundling carefully: for me it seems, sometimes we see bundler plugins as normal to solve issues that we would not have without bundlers (simplicity to break dependencies)
- be aware of bundle overhead (1/3), virtualization, build pipelines (npm ci), stages
- use caching of build tools to reduce build times
- prefer JS over PHP as it is 7 times more efficient (Rust is one of the most efficient)
- at least use the latest PHP version: newer versions of PHP are not only faster but also use fewer server resources and therefore less energy

- in contrast to my advice to use the features of modern clients (ES, module imports, CSS): Entwickle ressourcenschonende Applikationen, die auch auf älteren Geräten so lange wie möglich laufen!
- thus the end user won't be forced to always have the latest hardware which means it has to be produced

- check pros and cons for headless: cached app shell vs. microservices (with a lot of requests), more complex bundling, SSR
- support darkmode
- make use of save data mode (header) to opt out for system fonts, to omit non-essential images, to serve low resolution images for high resolution screens, to opt out of server pushes

## Hosting

- servers produce a lot of heat you have to deal with... and have to be cooled (which needs energy)
- grünes Hosting, www.thegreenwebfoundation.org + ecograder.com + www.websitecarbon.com
- Performance-Budget, www.performancebudget.io
- Use server caching: This significantly reduces server energy consumption.
- Choose hosts with a high PUE rating: Data centres are generally rated for energy efficiency using a metric called Power Usage Efficiency, or PUE. The typical PUE for a data centre is around 1.67, meaning that for every 1.67 watts going into the data centre, only 1 watt is being used to power the computing systems. High efficency data centres have 1.11
- Use a data centre close to your users: A lot of the energy used by the internet is used to transmit data through the telecoms networks.
- Use a CDN: Content delivery networks (CDN’s) provide a great solution to this, serving assets such as image files from a network of data centres around the world. This means that in most cases, the largest files will be loaded from the CDN location in the users own region, reducing the distance that data is moving each time a page is loaded.
- Block bots: Bots often use up 50% of resources such as processing and bandwidth.
- scalable cloud services: servers are not only up and running all the time, waiting for a traffic spike (e.g. Cloudflare Workers)

## Berechtigte Interessen

Waagschalen
  - nachhaltige Maßnahmen
  - berechtigte Interessen: Code-Qualität, Produkt-Qualität, TypeScript, Performance

Ein maßvoller Umgang mit berechtigten Interessen ist erforderlich!

environmental health

## After optimizing all of this

Plant trees to reduce your carbon impact

Kein Freikaufen!

Ausblick “Hungry Web“

Energieverbrauch des Internets entspricht in etwa 7% des globalen Strombedarfs (2021) 
damit ist es für eine CO₂-Produktion verantwortlich, die mit jener der globalen Luftfahrt vergleichbar ist (2-3%der weltweiten CO₂-Emission)
wäre das Internet ein eigener Staat, stünde es damit an 6. Stelle  der größten CO₂-Produzenten (Deutschland)

„die Cloud“ ist für uns ein abstraktes Ding weit „oben“, aber sie ist doch sehr erdgebundene Realität, die eine große Menge an Strom benötigt
KI, 5G-Anwendungen und geändertes Nutzerverhalten (Videokonsum) verschärfen die Lage auch in Zukunft
zumal Politiker und Technologieunternehmen daran interessiert sind, jeden mit Breitbandtechnologie zu versorgen und IoT Geräten zu verbinden
allein das Training einer auf Spracherkennung spezialisierten KI-Software verursacht 5 Mal so viel CO₂ wie ein Auto in seinem gesamten Lebenszyklus
voraussichtlich etwa 20% der gesamten Energieproduktion werden im nächsten Jahrzehnt in der IT Industrie gebraucht

Ausblick „Nachhaltigkeit“

Digitalisierung ließ den Energieverbrauch stark steigen, aber die digitale Transformation ist nicht grundsätzlich schlecht
sie macht so manche Autofahrt überflüssig, sie reduziert den Papierbedarf (Holz), sie braucht weniger Energie (DAB+ ist effizienter als UKW) 
Konsumenten sind nicht in der Lage, das Gute und das Schlechte der Digitalisierung zu erkennen und auseinanderzuhalten
Als Anbieter von Dienstleistungen im Internet stehen wir in der Verantwortung, uns mit dem Thema auf vielfältige Weise auseinanderzusetzen und Maßnahmen zu ergreifen, die dem Trend entgegenwirken und die Natur bewahren.

Wir haben viele Möglichkeiten an der Hand, darauf Einfluss zu nehmen:
Wie wir arbeiten (welche Prozesse und Werkzeuge wir verwenden),
welche Inhalte wir wie anbieten,
wie sehr wir die User Experience verbessert und die Gestaltung darauf ausgerichtet haben,
wie performant von uns entwickelte Seiten haben
und ein grünes Hosting

alle diese Faktoren entscheiden wesentlich darüber, ob unsere Produkte so nachhaltig wie möglich sind oder nicht 
Je größer der Internetauftritt, desto wirksamer sind bereits kleine Änderungen
Jedes Wischen, jede Serveranfrage, jede Suchanfrage benötigt wieder ein klein wenig Energie dieses stromhungringen Webs

Wir sollten uns bewusst sein:

Arbeitsprozesse und Werkzeuge zahlen ebenso ins Thema ein wie unsere Produkte selbst
rationalisierte User Journeys sind die Grundlage des Stromsparens
gute SEO hilft bei der Auffindbarkeit der Inhalte und reduziert somit unnötige Schleifen
gute Texte beeinflussen die Effektivität einer Website und entscheiden mit, wie lange Menschen brauchen, bis sie ihre Fragen beantwortet bekommen
ein in Menge, Format und Länge bedacht gewählter Videoeinsatz zahlt in einen der modernen Hauptfaktoren ein
Werbeanzeigen, Tracking von Drittanbietern oder Social-Media-Buttons verursachen viel Datenlast und sind nicht immer sinnvoll oder notwendig
Wir brauchen eine dunklere Gestaltung, effizientere Bilder (needed?, reduce size to let let the minds of the people breathe, blur edges because detail is data, WebP or AVIF, lazy load) und einen sorgfältigen Umgang mit Schriften (Systemfonts, Subsets)
Sauberes HTML/CSS (Cascading...!) machen barrierefrei und SEO freundlich
effizientere Techniken verwenden: prefer CSS over JS
wäge den Einsatz von Frameworks und Bibliotheken hinsichtlich Ladeverhalten, Ausführungszeit und anderen die Performance bestimmenden Parametern sorgfältig ab (React schneidet im Vergleich schlecht ab) und bevorzuge native Ansätze oder Lightweight Frameworks (Preact)
geringe Abhängigkeiten und ~ketten reduzieren die Ladelast (i.B. bei Pipelines)
ein schonender Umgang mit Build-Tools erhöht nicht unnötig Rechenaufwand
optimiere das Ladeverhalten durch dynamische Importe, reduzierten Bundle-Overhead, Lazyloading und eine gute Ladereihenfolge
Nutze PWAs, um Datentransfers mit modernen Caching-Lösungen zu reduzieren und effiziente User Journeys anzubieten
bevorzuge effizientere Sprachen (JS 7x besser als PHP)
nötige den Nutzer nicht, immer die neueste Hardware verwenden zu müssen, sondern entwickle ressourcenschonende Applikationen
Unterstütze den Nutzer dabei, Daten zu sparen, wenn er dies möchte (save data mode)
wähle nahe gelegene grüne Hoster mit einer hohen PUE Bewertung (The typical PUE for a data centre is around 1.67, meaning that for every 1.67 watts going into the data centre, only 1 watt is being used to power the computing systems. High efficency data centres have 1.11)
Verwende Content delivery networks (CDN) um Entfernungen klein zu halten, die Daten nehmen müssen
scalable cloud services: servers are not only up and running all the time, waiting for a traffic spike (e.g. Cloudflare Workers)





## Zusammenfassung

Wir sollten uns bewusst sein:

1. Arbeitsprozesse und Werkzeuge zahlen ebenso ins Thema ein wie unsere Produkte selbst
2. rationalisierte User Journeys sind die Grundlage des Stromsparens
3. gute SEO hilft bei der Auffindbarkeit der Inhalte und reduziert somit unnötige Schleifen
4. gute Texte beeinflussen die Effektivität einer Website und entscheiden mit, wie lange Menschen brauchen, bis sie ihre Fragen beantwortet bekommen
5. ein in Menge, Format und Länge bedacht gewählter Videoeinsatz zahlt in einen der modernen Hauptfaktoren ein
6. Werbeanzeigen, Tracking von Drittanbietern oder Social-Media-Buttons verursachen viel Datenlast und sind nicht immer sinnvoll oder notwendig
7. wir brauchen eine dunklere Gestaltung, effizientere Bilder (needed?, reduce size to let let the minds of the people breathe, blur edges because detail is data, WebP or AVIF, lazy load) und einen sorgfältigen Umgang mit Schriften (Systemfonts, Subsets)
8. sauberes HTML/CSS (Cascading...!) macht barrierefrei und SEO freundlich
9. effizientere Techniken verwenden: prefer CSS over JS
10. wäge den Einsatz von Frameworks und Bibliotheken hinsichtlich Ladeverhalten, Ausführungszeit und anderen die Performance bestimmenden Parametern sorgfältig ab (React schneidet im Vergleich schlecht ab) und bevorzuge native Ansätze oder Lightweight Frameworks (Preact)
11. geringe Abhängigkeiten und ~ketten reduzieren die Ladelast (i.B. bei Pipelines)
12. ein schonender Umgang mit Build-Tools erhöht nicht unnötig Rechenaufwand
13. optimiere das Ladeverhalten durch dynamische Importe, reduzierten Bundle-Overhead, Lazyloading und eine gute Ladereihenfolge
14. Nutze PWAs, um Datentransfers mit modernen Caching-Lösungen zu reduzieren und effiziente User Journeys anzubieten
15. bevorzuge effizientere Sprachen (JS 7x besser als PHP)
16. nötige den Nutzer nicht, immer die neueste Hardware verwenden zu müssen, sondern entwickle ressourcenschonende Applikationen
17. Unterstütze den Nutzer dabei, Daten zu sparen, wenn er dies möchte (save data mode)
18. wähle nahe gelegene grüne Hoster mit einer hohen PUE Bewertung (The typical PUE for a data centre is around 1.67, meaning that for every 1.67 watts going into the data centre, only 1 watt is being used to power the computing systems. High efficency data centres have 1.11)
19. Verwende Content delivery networks (CDN) um Entfernungen klein zu halten, die Daten nehmen müssen
20. scalable cloud services: servers are not only up and running all the time, waiting for a traffic spike (e.g. Cloudflare Workers)

## Read more

- [X] 17 ways to make your website more energy efficient, https://www.wholegraindigital.com/blog/website-energy-efficiency/
- [x] https://page-online.de/tools-technik/so-geht-nachthaltiges-webdesign/
- [x] https://www.conopolist.de/sachbuecher/business-it/nachhaltiges-webdesign/
- [X] https://www.wholegraindigital.com/team/tom-greenwood/
- [X] https://www.bbc.co.uk/programmes/p085rwjs
- [X] https://sustainablewebdesign.org/
- [X] Sustainable Web Initiative 2022, https://www.youtube.com/watch?v=ebxeXqjesOo&t=3s
- [X] https://www.sustainablewebmanifesto.com/
- [X] https://www.cnet.com/how-to/why-you-should-enable-data-saver-in-chrome-for-android-right-now/
- [X] https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/save-data/#detecting_the_save-data_setting
- [X] https://workers.cloudflare.com/
- [X] https://engineering.linecorp.com/en/blog/the-baseline-for-web-development-in-2022/

```
if ("connection" in navigator) {
    if (navigator.connection.saveData === true) {
        // Implement data saving operations here.
    }
}
```

## Kladde

Nils Otto:
Optimierung Versand: Kunde bekommt richtiges Produkt in richtiger Menge und Größe anstatt falschem Artikel der zu Retouren führt.
	
Supply Chain optimieren optimieren inklusive realistischer Lieferzeitangaben
	
Präzise Produktdarstellung mit möglichst genauer Beschreibung und vielseitigen, exakten Produktfotos (Content is King!), ggf. Auch Produktvideos, 360° Darstellung usw.
	
Daten aus Retouren nutzen: Was sind die Gründe der Kunden für die Retoure? Ableitungen und Schlussfolgerungen treffen.
	
Produkte mit gewünschter Passgenauigkeit: virtuelle Anprobe (aber auch z.B. Möbel -> augmented reality), Größenberater, Größenempfehlungen („wenn du bei Marke x Größe y hast, dann wähle Größe z“), Größentabellen (Genauigkeit!), Empfehlungen nach Erfahrung („wenn du normalerweise Größe x hast wähle jetzt eine Nummer kleiner“)
	
Verhindern mehr als x unterschiedliche Größen eines Produktes zu bestellen

Retouren können systematisch erschwert werden (Retourenlabel fehlt im Paket, Retouren kostenpflichtig usw.) - Abwägung zu Kundenzufriedenheit und Convenience
	
Qualitative & ressourcenschonende Verpackung (Eco/Green Label), Recyclingverpackung statt high glossy Materialien
	
Kunden für Thema sensibilisieren und nachhaltig Auswirkungen bekannt machen (ohne erhobenen Zeigefinger)


- bundle overhead analysis:
  - 31% unused in a react bundle + hard to track when uglified
  - web components (14% unused in polsterpowerkonfigurator.roller.de: disconnectedCallback, polyfills, hidden features, result page with redirect)
- im WebDev 2022 je 2 Punkte kleben lassen auf Schwerpunkte?: Animations, Security, React/Typescript, Webcomponents, Unit Tests, GraphQL, Drupal
- use API standards to reduce specific implementations?
  - https://blog.stoplight.io/openapi-json-schema
  - https://json-schema.org/understanding-json-schema/
- https://whatdoesmysitecost.com/

