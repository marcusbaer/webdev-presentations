# Nachhaltiges Internet

## „Hungriges Web“

> PAGE 12.19

## 830 Millionen Tonnen CO₂

> versacht das Internet im Jahr - mehr als der gesamte globale Flugverkehr

## 300 Millionen Tonnen CO₂

> sind durch das Ansehen von Onlinevideos im Jahr 2018 entstanden

Das ist 1 Prozent der gesamten globalen Treibhausgasemissionen - in etwa so viel, wie das gesamte Land Spanien produziert.

## 7 Prozent des globalen Energieverbrauchs gehen auf das Internet zurück

Und der Strombedarf steigt jährlich um 8 Prozent.

## Das Training einer auf Spracherkennung spezialisierten KI-Software

> verursacht 5 Mal so viel CO₂ wie ein Auto in seinem gesamten Lebenszyklus.

## Checkliste für ein grüneres Internet

Diese Tipps und Tools sparen beim Webdesign Daten und Energie

### Stromquellen und CO₂-Ausstoß messen

Checke mit _The-Green-Web-Foundation-Site_, ob eine Website mit erneuerbaren Energien betrieben wird.
Informiere dich dort über grüne Hoster.

> www.thegreenwebfoundation.org

### Stromquellen und CO₂-Ausstoß messen

_Ecograder_ macht Angaben über die Nachhaltigkeit einer Website und gibt Tipps, an welchen Schrauben man drehen kann.

> ecograder.com

### Stromquellen und CO₂-Ausstoß messen

_WebsiteCarbon_ berechnet, wieviel CO₂ eine Website pro Aufruf und geschätzt im Jahr verursacht.

> www.websitecarbon.com

### _WebsiteCarbon_ für roller.de

![Ergebnis für roller.de](../sustainability.png)

### Performance kalkulieren, tracken und optimieren

Mit dem _Performance Budget Calculator_ kann man sich ein Ziel setzen - zum Beispiel eine Ladezeit von 3 Sekunden - und berechnen, wie groß eine Website dafür sein darf.

> www.performancebudget.io

Performance-Optimierung mit Tools, wie z.B. Google Page Speed

### Contentstrategie überdenken

Es müssen nicht immer Hintergrundvideos oder großformatige Bilder sein.

> Vektorgrafiken, Icons oder typografische Details sind visuell manchmal sogar spannender und setzen Akzente.

### Contentstrategie überdenken

Werbeanzeigen, Tracking von Drittanbietern oder Social-Media-Buttons verursachen viel Daten-Load und sind nicht immer sinnvoll oder notwendig.
Gute SEO hilft zudem bei der Auffindbarkeit der Inhalte.

### Bilder komprimieren

Bilder mit komprimieren (WebP) und lazy loaden...

### Fonts und Typografie optimieren

Systemschriften liegen auf dem Rechner und verbrauchen am wenigsten Energie, schränken aber die Designoptionen stark ein.

Webfonts bieten mehr gestalterische Freiheit, werden aber extern gehostet, sodass die Zahl der Requests und mit ihnen Ladezeit und Energieverbrauch steigen.

### Fonts und Typografie optimieren

Man kann sie aber „subsetten“. Lade nur die Glyphen, die tatsächlich gebraucht werden.

Zwischen Systemschriften und Webfonts liegt in Sachen Dateigröße das Variable-Fonts-Format. Embedded Fonts mache die Seite "schwerer", reduzieren dafür aber die Requests.

## Beispiel Low-Tech Magazine

1. **Statische Website:** es wird keine kontinuierliche Rechenleistung für das Rendering benötigt - also weniger Energie
2. **Dithered Images:** mit dem alten Komprimierungsverfahren wird die Dateigröße enorm reduziert. Graustufenbilder werden nachcoloriert.
3. **Default Typeface und kein Logo:** Requests und Energie für Datenspeicherung können eingespart werden
4. **Kein Tracking von Drittanbietern, keine Werbung, keine Cookies:** Hosting auf eigenem Server ermöglicht Verzicht auf Analysesoftware, Nutzerverhalten aus Serverdaten ersichtlich

## Beispiel Low-Tech Magazine

Website wird mit Solarstrom betrieben. Scheint längere Zeit keine Sonne, ist die Seite offline.

> [solar.lowtechmagazine.com](http://solar.lowtechmagazine.com)

## Tipps aus einem Blog

„17 ways to make your website more energy efficient“

> https://www.wholegraindigital.com/blog/website-energy-efficiency/

### Design & Content

- **SEO:** When optimising a website for search engine rankings, we are helping people find the information they want quickly and easily.
- **Copy writing:** It has an impact on website efficiency because it affects the amount of time people spend browsing websites.
- **User Experience (UX):** One of the core elements of good user experience is reducing friction in user journeys.

### Design & Content

- **Reduce images:** Regardless of any technical optimisations, designers and content creators should think carefully about their use of images.
- **Reduce video:** If video is necessary, see if you can reduce the amount of video streamed by removing auto-play from videos and by keeping video content short.
- **Choose fonts carefully:** Use system fonts where possible. Use less font variations.

### Development

- **Write clean code:** Keep code clean and simple, avoid duplication and write efficient queries. Keep in mind existing frameworks and libraries, avoid unnecessary plugins.

### Development

- **Use less JavaScript:** impacts website efficiency in two ways:
    1. adds file weight to the page
    2. increases amount of processing required by the users device
    
> Use more efficient technologies like CSS, or at least use JS efficiently.

> Tracking and advertising scripts (no user value but often large files) cause significant CPU usage, slow websites down and invade their privacy. Checkout https://webtest.app to measure impact.

### Development

- **Optimise images:** Load images at the correct scale, compress image files without visible loss of quality. Use the most efficient file format for each image, such as WebP.
- **Optimise fonts:** Stick to modern web font file formats like WOFF and WOFF2, which use higher compression. Subset fonts to only include the characters needed.
- **Use Accelerated Mobile Pages (AMP):** AMP can be a useful tool to strip out the fast and deliver a more lightweight and energy efficient version to mobile users.

### Development

- **Build static web pages:** web server has to do work thinking about what information to send back to the user each time someone tries to load a page...
- **Use Progressive Web App technology (PWA):** cache files on the users device

### Web Hosting

- **Use server caching:** This significantly reduces server energy consumption.
- **Choose hosts with a high PUE rating:** Data centres are generally rated for energy efficiency using a metric called Power Usage Efficiency, or PUE. The typical PUE for a data centre is around 1.67, meaning that for every 1.67 watts going into the data centre, only 1 watt is being used to power the computing systems. High efficency data centres have 1.11

### Web Hosting

- **Use a data centre close to your users:** A lot of the energy used by the internet is used to transmit data through the telecoms networks.
- **Use a CDN:** Content delivery networks (CDN’s) provide a great solution to this, serving assets such as image files from a network of data centres around the world. This means that in most cases, the largest files will be loaded from the CDN location in the users own region, reducing the distance that data is moving each time a page is loaded.

### Bonus tips

- **Block bots:** Bots often use up 50% of resources such as processing and bandwidth.
- **Dark Mode:** Dark websites were one of the first techniques popularised for saving energy on websites many years ago...
- **Use the latest PHP version:** Newer versions of PHP are not only faster but also use fewer server resources and therefore less energy.
