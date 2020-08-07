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

Beschriftungen sollen über Markup mit den Formularelementen, die sie beschriften, verknüpft sein.

Bei label-Elementen geschieht das über das for-Attribut oder den Einschluss des beschrifteten Formularelements in das label-Element. Sind Beschriftungen nicht mit dem label-Element ausgezeichnet, soll eine Beschriftung des zugehörigen Formularelements auf anderem Weg (etwa über das aria-labelledby-Attribut) sichergestellt sein.

Ist bei Gruppen von Formularelementen eine Gruppenbeschriftung für das Verständnis der Beschriftung der einzelnen Formularelemente nötig, sollte die Verfügbarkeit sichergestellt werden (z.B. mit Hilfe von fieldset mit legend).

Visuell voneinander abgesetzte oder logisch miteinander verbundene Gruppen von Formularelementen sollten mit fieldset oder mithilfe von Überschriften sinnvoll strukturiert sein.

#### Werkzeuge

- Web Developer Toolbar: Miscellaneous > Linearize page

#### Herangehensweise

Web Developer Toolbar die Funktion Miscellaneous > Linearize page

1. Sind Formularfelder beschriftet
2. Wenn ja
   - Steht das Label / Beschriftung bei Textfeldern vor oder über dem Feld
   - Steht das Label / Beschriftung bei Checkboxen und Radios rechts neben (oder nach) dem Feld
3. Ist das Label pflichtig
   - z.B. mit Sternchen *
   - Gibt es einen **allgemeinen Pflichtfeldhinweis vor dem Formular** (z.B. "* Pflichtfeld")
4. Gibt es **spezielle Eingabefelder** wie Datumsfelder
   - Gibt es eine genaue Information im oder am Feld, die erkärt, wie das Feld befüllt werden soll

Hinweis: auch hier wird noch einmal geprüft, wenn es gängige Formularkombinationen wie Suche oder Datum gibt, dass diese korrekt ausgezeichnet sind.

- Sind Beschriftungen und Formular-Elemente verküpft?
  1. Mit der Maus auf die Beschriftung von Formular-Elementen klicken und prüfen, ob der Cursor dadurch auf das Formular-Element gesetzt wird.
  2. Ist das nicht der Fall, prüfen, ob Beschriftung und Formular-Element mit aria-labelledby verknüpft sind oder ein Name für das Formular-Element auf andere Weise programmatisch bereitgestellt wird

- Prüfung von Gruppen von Formular-Elementen
  1. Prüfen, ob visuell voneinander abgesetzte oder logisch miteinander verbundene Gruppen von Formular-Elementen mithilfe fieldset oder Überschriften sinnvoll strukturiert sind.
  2. Falls eine Gruppenbeschriftung für das Verständnis der Beschriftung der einzelnen Formularelemente nötig sind, prüfen, ob die Gruppenbeschriftung mit dem legend-Element eines fieldset oder über eine ausreichend unterstützte Alternative (etwa role="group") ausgezeichnet ist.

- Gliederung von Auswahllisten
  - Wenn Auswahllisten (select) voneinander abgesetzte Gruppen von Optionen enthalten, sind diese mit optgroup ausgezeichnet (mit der Web Developer Toolbar > Informationen > Elementinformationen einblenden > Kindelemente überprüfen)

#### Prüfschritt erfüllt

Wenn der Inhalt eine Eingabe durch den Benutzer verlangt werden Beschriftungen (Labels) oder Anweisungen bereitgestellt. (Stufe A)

### Prüfschritt 1.4.3a - Kontraste von Texten ausreichend

https://testen.bitv-test.de/index.php?a=di&iid=86&s=n

Alle Texte der Seite sollen ausreichende Helligkeitskontraste haben. Sie sollen auch für farbfehlsichtige Benutzer wahrnehmbar sein.

#### Werkzeuge

- Colour Contrast Analyzer (CCA)
- Web Developer Toolbar: Informationen > Elementinformationen einblenden
- [Firefox Addons Stylus](https://addons.mozilla.org/de/firefox/addon/styl-us/)

#### Herangehensweise

Mit dem Contrast Analyzer prüfen, wo man trotz Sichtprüfung nicht sicher ist

- Mit der Pipette Vorder- und Hintergrund des zu untersuchenden Elements anwählen
  - Kontrastverhältnis **mindestens**
    - Schriftgrößen **unter 24px** bzw. 18,7px bei fetter Schrift: 4,5:1
    - Schriftgrößen **über 24px** bzw. über 18,7px bei fetter Schrift: 3:1
  - Für **Fliesstextlinks** ohne sonstige Kennzeichnung mindestens
    - also z.B. ohne Unterstreichung, Icon oder Fettung etc.
    - Kontrastverhältnis: 3:1
  - Die Kontrastanforderung gilt auch für Textvorbelegungen von Formularfeldern (**Placeholder**): 4,5:1

> Hinweis: In der Firefox Erweiterung "Stylus" erstellen
>
> - Styles > Verwalten > Neuen Style hinzufügen
> - Neuen Namen für den Style vergeben z.B. "Kontrastcheck"
> - CSS rechts in den Editor eingeben: html {background-color:black;color:white}
> - speichern
> - Der neue Style steht nun im Layer von Stylus zum An- und Abhaken zur Verfügung

1. Prüfung nicht festgelegter Farben. Über das Bookmarklet "Vorder-und Hintergrundfarbe definiert" oder ein User Stylesheet (html {background-color:black;color:white}) prüfen, ob für jedes Element, für das eine Vordergrundfarbe festgelegt wurde, auch eine Hintergrundfarbe festgelegt ist und umgekehrt.
2. Sichtpüfung. Sind die Schriftkontraste stark genug?
3. Im Zweifel den Contrast Analyser öffen. Schriftfarbe und Hintergrundfarbe auswählen und Kontrastverhältnis prüfen.
4. In der Web Developer Toolbar die Funktion Informationen > Elementinformationen einblenden aktivieren.
5. Text, der überprüft werden soll, anklicken. Im eingeblendeten Fenster "Elementinformationen" im Bereich "Text" wird die jeweilige Schriftgröße in Pixeln angegeben.
6. Mit Hilfe des Contrast Analysers im Bereich Vordergrund mit der Pipette die Vordergrundfarbe auswählen, dann im Bereich Hintergrund die Hintergrundfarbe. Für Schriftgrößen unter 24 px (beziehungsweise 18,7 px bei fetter Schrift) prüfen, ob das Kontrastverhältnis bei 4,5:1 oder größer liegt. Für große Schriften prüfen, ob das Kontrastverhältnis bei 3:1 oder größer liegt.
7. Bei andersfarbigen Fließtextlinks ohne sonstige Unterschiede in der Auszeichung, wie etwa Unterstreichung, prüfen, ob das Kontrastverhältnis zum Standardfließtext mindestens 3:1 beträgt.

#### Prüfschritt erfüllt

Die visuelle Darstellung von Text und Bildern von Text hat ein Kontrastverhältnis von mindestens 4,5:1 mit folgenden Ausnahmen: (Stufe AA)

### Prüfschritt 2.1.1a - Ohne Maus nutzbar

https://testen.bitv-test.de/index.php?a=di&iid=88&s=n

Die Webseite soll auch ohne Maus - also ausschließlich mit der Tastatur - zu benutzen sein.

#### Werkzeuge
#### Herangehensweise

1. Seite im Firefox Browser aufrufen.
2. Mit der Tabulatortaste die Links und Formularelemente durchgehen.
3. Prüfen, ob alle wesentlichen Links und Formularelemente erreicht und benutzt werden können.
4. Falls die Seite Elemente enthält, die wie Bedienelemente aussehen, jedoch nicht mit der Tabulatortaste angesteuert werden, prüfen, ob diese Elemente auf die Maus reagieren (zum Beispiel mit Bewegung, Vergrößerung, Einblenden von weiteren Inhalten).
5. Falls die Seite scrollbare Bereiche enthält, sollen nicht sichtbare Inhalte dieser Bereiche auch über die Tastatur erreichbar sein.
6. Seite im Chrome Browser aufrufen und Schritte 2 bis 5 wiederholen.

#### Prüfschritt erfüllt

Alle Funktionalitäten des Inhalts sind durch eine Tastaturschnittstelle bedienbar, ohne dass eine bestimmte Zeiteinteilung für einzelne Tastenanschläge erforderlich ist, außer wenn die zugrunde liegende Funktion Eingaben verlangt, die vom Pfad der Bewegung des Benutzers und nicht nur von den Endpunkten abhängig sind. (Stufe A)

- Mit der Tabulator-Taste alle Links, Formularelemente und interaktive Elemente durchgehen
- Alles muss mit Tastatur erreich- und bedienbar sein
- die Nutzung mit der Tastatur muss nicht der Mouse-Nutzung entsprechen
- Der Prüfschritt ist bestanden, wenn alle Links, Formularelemente und interaktive Elemente mit Tastatur erreicht werden.

- Sprunglink zum Hauptinhalt vorhanden?

#### Abgrenzung zu anderen Prüfschritten

- Dieser Prüfschritt betrifft die **Auslösbarkeit** von Funktionen und Links auch über die Tastatur.
- **Tastaturfallen** sind Gegenstand von [Prüfschritt 2.1.2a](https://testen.bitv-test.de/index.php?a=di&iid=89&s=n).
- Bei skriptgenerierten oder über Skripts eingeblendeten Elementen (etwa ausklappenden Texten oder Lightboxen) ist die **sinnvolle Reihenfolge** im Quellcode Gegenstand von [Prüfschritt 1.3.2b](https://testen.bitv-test.de/index.php?a=di&iid=37&s=n).
- Die Fokus**hervorhebung** ist Gegenstand von [Prüfschritt 2.4.7a](https://testen.bitv-test.de/index.php?a=di&iid=102&s=n) "Aktuelle Position des Fokus deutlich"
- Die Sinnvolle Fokus**reihenfolge** wird in [2.4.3a](https://testen.bitv-test.de/index.php?a=di&iid=91&s=n) "Schlüssige Reihenfolge bei Tastaturbedienung" bewertet.


### Prüfschritt 3.3.2a - Beschriftungen von Formularelementen vorhanden

https://testen.bitv-test.de/index.php?a=di&iid=81&s=n

> Abgrenzung zu Prüfschritt 1.3.1h klären!!

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
- [Color Contrast Analyzer](https://developer.paciellogroup.com/resources/contrastanalyser/)
- [Font Awesome - Accessibility](https://fontawesome.com/how-to-use/on-the-web/other-topics/accessibility)

- [Accessibility: Image Alt text best practices](https://support.siteimprove.com/hc/en-gb/articles/115000013031-Accessibility-Image-Alt-text-best-practices)
- [WebAIM Contrast and Color Accessibility](https://webaim.org/articles/contrast/)
- [The Basics and Importance of Color Contrast for Web Accessibility](https://www.boia.org/blog/the-basics-and-importance-of-color-contrast-for-web-accessibility)
- [W3C WAI Colors with Good Contrast](https://www.w3.org/WAI/perspective-videos/contrast/)