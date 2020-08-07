# WCAG Kurztest

Der Basiskurs WCAG-Kurztest beinhaltet nur einen Ausschnitt der Prüfschritte des BIK WCAG-Selbsttests für interne Projekte.

Die Auswahl richtet sich nach der Gewichtung der Prüfschritte. Die betreffenden Prüfschritte werden im Basiskurs gelernt, um am Ende des Kurses WCAG-Kurztests für interne Projekte durchzuführen.

- Prüfschritte für den WCAG-Kurztest
    - Prüfschritte mit hohem Gewicht
      - Prüfschritt 1.1.1a - Alternativtexte für Bedienelemente
      - Prüfschritt 1.2.2a - Aufgezeichnete Videos mit Untertiteln
      - Prüfschritt 1.3.1a - HTML-Strukturelemente für Überschriften
      - Prüfschritt 1.3.1h - Beschriftung von Formularelementen programmatisch ermittelbar
      - Prüfschritt 1.4.3a - Kontraste von Texten ausreichend
      - Prüfschritt 2.1.1a - Ohne Maus nutzbar
      - Prüfschritt 3.3.2a - Beschriftungen von Formularelementen vorhanden
      - Prüfschritt 4.1.2a - Name, Rolle, Wert verfügbar
    - Prüfschritte mit mittlerem Gewicht
      - Prüfschritt 1.1.1b - Alternativtexte für Grafiken und Objekte
      - Prüfschritt 1.3.1b - HTML-Strukturelemente für Listen
      - Prüfschritt 1.3.1e - Datentabellen richtig aufgebaut
      - Prüfschritt 1.4.3a - Kontraste von Texten ausreichend
      - Prüfschritt 1.4.4a - Text auf 200% vergrößerbar
      - Prüfschritt 2.2.2a - Bewegte Inhalte abschaltbar
      - Prüfschritt 2.4.1a - Bereiche überspringbar
      - Prüfschritt 3.1.1a - Hauptsprache angegeben
      - Prüfschritt 3.3.1a – Fehlererkennung
      - Prüfschritt 4.1.1a - Korrekte Syntax

## Prüfschritte mit hohem Gewicht

> Die Prüfschritte mit **hohem Gewicht** betreffen die Grundlagen der Barrierefreiheit (**Level A**). Wenn diese Prüfschritte nicht erfüllt bzw. nicht konform sind, kann der Kurztest beendet werden und das Projekt geht wieder zurück in die Entwicklung:
>
> - Alternativtexte für Bedienelemente
> - Aufgezeichnete Videos mit Untertitel (wird nur geprüft, falls Videos vorhanden sind)
> - HTML-Strukturelemente für Überschriften
> - Ohne Maus nutzbar
> - Beschriftungen von Formularelementen programmatisch ermittelbar
> - Beschriftungen von Formularelementen vorhanden
> - Name, Rolle und Wert verfügbar (Screenreader-Optimierung)
> - Falls keine Videos zu prüfen sind, wird der Prüfschritt "Kontraste von Texten ausreichend" geprüft.
>
> Anleitung: Es werden alle Prüfschritte mit hohem Gewicht durchgeführt.

### Prüfschritt 1.1.1a - Alternativtexte für Bedienelemente

https://testen.bitv-test.de/index.php?a=di&iid=64

Grafische Bedienelemente (alle verlinkten / interaktiven Grafiken und Bilder) müssen mit Alternativtexten versehen werden. (Nicht verlinkte bzw. nicht interaktive Grafiken und Bilder werden in Prüfschritt 1.1.1b geprüft.)

Die Alternativtexte für Bedienelemente (z.B. Icons oder Logos) oder Teaserbilder sollen das Ziel des Links bezeichnen. Alternativtexte für grafische Schaltflächen (Buttons) sollen die Aktion bezeichnen, die der Button auslöst. Wenn Image maps eingesetzt werden, sollen deren Bereiche (area-Elemente) sinnvolle Alternativtexte haben.

Thema dieses Prüfschritts sind auch Textlinks, die per CSS durch Hintergrundbilder ersetzt werden sowie Textalternativen für Icon Fonts und SVGs.

#### Werkzeuge

- Web Developer Toolbar: Images > Display Alt Attributes
- Images bookmarklet

#### Herangehensweise

1. Die Seite im Firefox aufrufen.
2. Bedienelemente feststellen (zum Beispiel horizontale oder vertikale Navigationsleisten, Logo, Banner, Teaserbilder, grafische Schaltflächen).
3. In der Web Developer Toolbar das Menü Images > Display Alt Attributes aufrufen und prüfen, ob die Bedienelemente mit äquivalenten Alternativtexten versehen sind (siehe 2.4). Alternativ kann auch das [Images bookmarklet](https://www.bitvtest.de/bitv_test/das_testverfahren_im_detail/werkzeugliste.html) eingesetzt werden.
4. Feststellen, ob die Seite Image maps enthält. Hierfür kann gegebenenfalls der Quelltext nach map durchsucht werden. Ist ein Image map vorhanden, weiter mit 2.2.

#### Prüfschritt erfüllt

- **Grafische** Bedienelemente haben sinnvolle Alternativtexte
  - Verlinkte Bilder (Teaserbilder, Logos, Icons) > das **Linkziel** im Alternativtext, d.h. wohin führt der Link
  - Grafische Schaltflächen (Buttons) > die **Aktion** im Alternativtext, d.h. was löst der Button für eine Aktion aus
- Textlinks
  - die per CSS Hintergrundbilder zu Buttons oder Links gestaltet werden
  - Stichwort: Icon Fonts
  - Auch Icon-Fonts brauchen einen Alternativtext
    - gilt, wenn Icon kein Schmuckelement ist, d.h. Icon allein ohne Text steht
    - bei Icon mit Text, sollte Icon mit `aria-hidden` versteckt werden
- Verlinkte Inline-SVGs
  - brauchen auch einen korrekt implementierten Alternativtext (vgl. Barrierefreie Optimierung)
- **Schriftgrafiken** > der Alternativtext soll den Text auf der Schriftgrafik exakt wiedergeben (das gilt vor allem auch für Logos)
- **Symbole / Icons** > Der Alternativtext soll das Symbol nicht beschreiben, sondern ersetzen, d.h. die Funktion des Symbol / Icons sollte beschrieben werden (z.B. ein Brief-Symbol sollte nicht "Brief" heißen, sondern "Kontakt").
- **Verlinkte Grafiken** - für den Alternativtext gilt: Ist der Inhalt der Grafik selbst wichtig, dann kurz den Inhalt beschreiben **und** Ziel der verlinkten Grafik angeben (z.B. "Großraumbüro mit Angestellten an Schreibtischen. Öffnet Seite: Anspruch auf Brückenteilzeit").

#### Verlinkte Hintergrundgrafiken

Man sollte verlinkte Hintergrundgrafiken vollständig vermeiden.

Hintergrundgrafiken (per CSS eingebundene Grafiken) haben keinen Alternativtext. Falls man keine andere Möglichkeit hat und eine Hintergrundgrafik einsetzen muss, muss ein Alternativtext dafür in HTML vorhanden sein.

Mögliche Technik auch hier: einen per CSS versteckten Alternativtext für die Grafik setzen (aus dem Viewport schieben).


### Prüfschritt 1.2.2a - Aufgezeichnete Videos mit Untertiteln

https://testen.bitv-test.de/index.php?a=di&iid=67&s=n

Wenn die Tonspur eines aufgezeichneten Videos Informationen enthält, müssen Untertitel als Alternative bereitgestellt werden.

#### Herangehensweise

1. Das Video wird im auf der Website eingebundenen Player oder in einem externen, vom Format abhängigen Video-Player abgespielt.
2. Es wird geprüft, ob parallel zum Video Untertitel automatisch angezeigt werden oder zugeschaltet werden können.
3. Wenn Untertitel vorhanden sind, wird eine kurze Sequenz des Videos mit Untertiteln angesehen, um stichprobenartig festzustellen, ob die Untertitel dem hörbaren Inhalt entsprechen. Dies betrifft auch akustische Ereignisse, die für das Verständnis des Inhalts wichtig sind.

#### Prüfschritt erfüllt

Untertitel werden für alle aufgezeichneten Audioinhalte in synchronisierten Medien bereitgestellt, außer die Medien sind eine Medienalternative für Text und als solche deutlich gekennzeichnet. (Stufe A).

Aufgezeichnete Videos mit synchroner Bild- und Tonspur haben erweiterte Untertitel, die alle Informationen der Tonspur enthalten. Dazu gehört gegebenenfalls die Anzeige, wer spricht, und bedeutungstragende Tonereignisse (etwa informationstragende Geräusche, Lachen, oder Applaus).

Für Kriterien einer teilweisen oder nicht vollen Erfüllung siehe https://testen.bitv-test.de/index.php?a=di&iid=67&s=n

### Prüfschritt 1.3.1a - HTML-Strukturelemente für Überschriften

https://testen.bitv-test.de/index.php?a=di&iid=72&s=n

Überschriften müssen korrekt mit den HTML-Strukturelementen H1 bis H6 ausgezeichnet sein und die Inhalte der Seite erschließen.

#### Werkzeuge

- [Web Developer Toolbar](http://www.bitvtest.de/bitvtest/das_testverfahren_im_detail/werkzeugliste.html#webdeveloper): Seite ohne CSS anzeigen: CSS > Stile deaktivieren > Alle Stile deaktivieren
- [Bookmarklet "Inhalte gegliedert"](http://www.bitvtest.de/bitvtest/das_testverfahren_im_detail/werkzeugliste.html#gegliedert): Die Struktur der Überschriften auf der Webseite kontrollieren
- [HeadingsMap Browser-Plugin](http://www.bitvtest.de/bitvtest/das_testverfahren_im_detail/werkzeugliste.html): Überschriften-Hierarchie für jede Webseite anzeigen und kontrollieren, keine Hierarchiebrüche

#### Herangehensweise

1. Seite im Firefox aufrufen.
2. Über die [Web Developer Toolbar](http://www.bitvtest.de/bitvtest/das_testverfahren_im_detail/werkzeugliste.html#webdeveloper) die Seite ohne Stylesheets anzeigen (CSS > Stile deaktivieren > Alle Stile deaktivieren wählen), dann das [Bookmarklet "Inhalte gegliedert"](http://www.bitvtest.de/bitvtest/das_testverfahren_im_detail/werkzeugliste.html#gegliedert) aufrufen.
3. Alternativ das [HeadingsMap Browser-Plugin](http://www.bitvtest.de/bitvtest/das_testverfahren_im_detail/werkzeugliste.html) nutzen, um die Überschriften-Hierarchie anzuzeigen.
4. Prüfen, ob Inhalte, die visuell als Überschriften zu erkennen sind, mittels der HTML-Strukturelemente H1 bis H6 als Überschriften ausgezeichnet sind. Die Hierarchie der eingesetzten HTML-Überschriftselemente soll der Gliederung der Inhalte entsprechen.
5. Prüfen, ob HTML-Strukturelemente H1 bis H6 lediglich zur Erzeugung unterschiedlicher Schriftgrößen eingesetzt werden

#### Prüfschritt erfüllt

- Alle Inhalte der Webseite sind mithilfe von Überschriften korrekt strukturiert
- Die Überschriften-Hierarchie ist korrekt geschachtelt von H1 - H6
- Es wird nicht **strong** oder **bold** verwendet, um überschriftenähnliche Hervorhebungen zu erzeugen (Kontaktseiten, z.B. `[STRONG]Geschäftsführer[/STRONG]`)
  - Prüfen, ob visuell hervorgehobene Inhalte keine Überschriften sind - mit bold oder strong ausgezeichnet sind.
  - Sichtprüfung vornehmen
  - ggf. das Bookmarklet "Inhalte gegliedert" nutzen

### Prüfschritt 1.3.1h - Beschriftung von Formularelementen programmatisch ermittelbar

https://testen.bitv-test.de/index.php?a=di&iid=79&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 1.4.3a - Kontraste von Texten ausreichend

https://testen.bitv-test.de/index.php?a=di&iid=86&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 2.1.1a - Ohne Maus nutzbar

https://testen.bitv-test.de/index.php?a=di&iid=88&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 3.3.2a - Beschriftungen von Formularelementen vorhanden

https://testen.bitv-test.de/index.php?a=di&iid=81&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 4.1.2a - Name, Rolle, Wert verfügbar

https://testen.bitv-test.de/index.php?a=di&iid=100&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

## Prüfschritte mit mittlerem Gewicht

<!-- https://extranet.powerofone.de/confluence/display/PORTALBF/Basiskurs%3A+WCAG-Kurztest -->

> Alle Prüfschritte mit **mittlerem** Gewicht (**Level A und AA**) bzw. **hohem** Gewicht (**Level AA**) werden im Kurztest dann geprüft, wenn die Prüfschritte mit hohem Gewicht erfüllt bzw. konform sind.
Gibt es nicht konforme Prüfschritte mittleren Gewichts, geht das Projekt wieder zurück in die Entwicklung.
>
> Achtung: es werden alle Prüfschritte mit mittlerem Gewicht durchgeführt.
>
> Sind alle Prüfschritte hohen und mittleren Gewichts erfüllt bzw. konform, kann ein vollständiger WCAG 2.1 Selbsttest durchgeführt werden.

### Prüfschritt 1.1.1b - Alternativtexte für Grafiken und Objekte

https://testen.bitv-test.de/index.php?a=di&iid=65&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 1.3.1b - HTML-Strukturelemente für Listen

https://testen.bitv-test.de/index.php?a=di&iid=74&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 1.3.1e - Datentabellen richtig aufgebaut

https://testen.bitv-test.de/index.php?a=di&iid=77&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 1.4.3a - Kontraste von Texten ausreichend

https://testen.bitv-test.de/index.php?a=di&iid=86&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 1.4.4a - Text auf 200% vergrößerbar

https://testen.bitv-test.de/index.php?a=di&iid=87&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 2.2.2a - Bewegte Inhalte abschaltbar

https://testen.bitv-test.de/index.php?a=di&iid=20&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 2.4.1a - Bereiche überspringbar

https://testen.bitv-test.de/index.php?a=di&iid=73&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 3.1.1a - Hauptsprache angegeben

https://testen.bitv-test.de/index.php?a=di&iid=92&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 3.3.1a – Fehlererkennung

https://testen.bitv-test.de/index.php?a=di&iid=103&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt

### Prüfschritt 4.1.1a - Korrekte Syntax

https://testen.bitv-test.de/index.php?a=di&iid=99&s=n

<!-- TODO -->

#### Werkzeuge
#### Herangehensweise
#### Prüfschritt erfüllt




# Barrierefreie Optimierung

Best-Practices und Pflichten zur Erfüllung einer barrierefreien Optimierung.

## Überschriften-Hierarchie

- Wenn möglich immer mit einer H1 die Überschriften-Hierarchie starten (z.B. Logo der Webseite)
- Die Überschrift des Hauptinhalts beginnt dann mit der H2

## Inline SVG

Wird ein SVG **allein verlinkt** ohne zusätzliche Texte (vgl. Button mit Text und Icon), so muss im SVG-Tag unmittelbar ein TITLE-Tag an erster Stelle folgen und mit einer ID versehen sein (siehe Beispiel). Als Grafik (nicht für ein interaktives Diagramm) muss das Attribut role="img" enthalten sein. Ist das SVG eine Infografik, muss eine Langbeschreibung integriert werden (kein Fließtext im DESC-Element).

Sind Text **und** Inline SVG vorhanden, sollte das SVG mit aria-hidden für Screenreader entfernt werden.

```HTML
<svg aria-labelledby="LoginIconTitle" role="img" focusable="false">
    <title id="LoginIconTitle">Anmelden</title>
    <desc>A longer, more complete description for complex graphics.</desc>
    <defs>...</defs>
    <path>...</path>
</svg>
```

## Icon Font

Das Muster von Font Awesome anwenden.

ohne Verlinkung:

```HTML
<i aria-hidden="true" class="fas fa-car" title="Time to destination by car"></i>
<span class="sr-only">Time to destination by car:</span>
<span>4 minutes</span>
```

mit Verlinkung:

```HTML
<a href="path/to/shopping/cart" aria-label="View 3 items in your shopping cart">
  <i aria-hidden="true" class="fas fa-shopping-cart"></i>
</a>
```

# Quellen

- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [BITV-Selbstbewertung](https://testen.bitv-test.de/selbstbewertung/test.php)
- [Werkzeugliste](https://www.bitvtest.de/bitv_test/das_testverfahren_im_detail/werkzeugliste.html)
- [Web Developer Toolbar](http://www.bitvtest.de/bitvtest/das_testverfahren_im_detail/werkzeugliste.html#webdeveloper)
- [Font Awesome - Accessibility](https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility)

- [Accessibility: Image Alt text best practices](https://support.siteimprove.com/hc/en-gb/articles/115000013031-Accessibility-Image-Alt-text-best-practices)
