# Barrierefreiheit - eine Einführung

> Barrierefreiheit ist die Praxis, Websites für möglichst viele Menschen nutzbar zu machen. Dies bedeutet, dass Sie alles versuchen sollten, um Personen nicht daran zu hindern, auf Informationen zuzugreifen, weil sie eine Behinderung haben oder andere persönliche Umstände sie einschränken wie das von ihnen verwendete Gerät, die Geschwindigkeit ihrer Netzwerkverbindung oder ihre geografische Position oder ihr Gebietsschema.

↪ Anbieten mehrerer alternativer Zugangsmöglichkeiten:

* Bedienung mit der Maus
* Tastatureingabe
* Screenreader

## Wie funktioniert der Zugriff?

> Rollen und andere Informationen, die von Browser-APIs zur Verfügung gestellt werden, werden in einer hierarchischen Struktur namens Zugänglichkeitsbaum dargestellt. Ähnlich wie der DOM-Baum, außer dass er eine begrenzte Anzahl von Elementen und etwas andere Informationen über sie enthält.

## Grundlagen der Barrierefreiheit (Level A)

* Alternativtexte für Bedienelemente [Test](https://testen.bitv-test.de/index.php?a=di&iid=64)
* Aufgezeichnete Videos mit Untertiteln [Test](https://testen.bitv-test.de/index.php?a=di&iid=67&s=n)
* HTML-Strukturelemente für Überschriften [Test](https://testen.bitv-test.de/index.php?a=di&iid=72&s=n)
* Beschriftungen von Formularelementen programmatisch ermittelbar [Test](https://testen.bitv-test.de/index.php?a=di&iid=79&s=n)
* Kontraste von Texten ausreichend [Test](https://testen.bitv-test.de/index.php?a=di&iid=86&s=n)
* Ohne Maus nutzbar [Test](https://testen.bitv-test.de/index.php?a=di&iid=88&s=n)
* Beschriftungen von Formularelementen vorhanden [Test](https://testen.bitv-test.de/index.php?a=di&iid=81&s=n)
* Name, Rolle und Wert für interaktive Bedienelemente verfügbar [Test](https://testen.bitv-test.de/index.php?a=di&iid=100&s=n)

## Prüfschritte mit mittlerem Gewicht (Level A und AA) bzw. hohem Gewicht (Level AA)

* Alternativtexte für Grafiken und Objekte [Test](https://testen.bitv-test.de/index.php?a=di&iid=65&s=n)
* HTML-Strukturelemente für Listen [Test](https://testen.bitv-test.de/index.php?a=di&iid=74&s=n)
* Datentabellen richtig aufgebaut [Test](https://testen.bitv-test.de/index.php?a=di&iid=77&s=n)
* Text auf 200% vergrößerbar [Test](https://testen.bitv-test.de/index.php?a=di&iid=87&s=n)
* Bewegte Inhalte abschaltbar [Test](https://testen.bitv-test.de/index.php?a=di&iid=20&s=n)
* Bereiche überspringbar [Test](https://testen.bitv-test.de/index.php?a=di&iid=73&s=n)
* Hauptsprache angegeben [Test](https://testen.bitv-test.de/index.php?a=di&iid=92&s=n)
* Fehlererkennung [Test](https://testen.bitv-test.de/index.php?a=di&iid=103&s=n)
* Korrekte Syntax [Test](https://testen.bitv-test.de/index.php?a=di&iid=99&s=n)

## Ein erster Eindruck mit Easy Checks

Die Easy Checks wurden von der Web Accessibility Initiative (W3C) entwickelt und sind bewusst reduziert gehalten. Aufgenommen sind Prüfpunkte, die einfach zu testen sind. Auch wenn diese ersten Tests erfolgreich sind, können Barrieren bestehen, die Menschen mit Behinderung den Zugang verwehren.

* https://bik-fuer-alle.de/easy-checks.html

## BITV / WCAG Selbstbewertung

Für alle, die barrierefreie Webangebote entwickeln, bietet BIK ein kostenloses webbasiertes Werkzeug an: [Die BITV / WCAG Selbstbewertung](http://testen.bitv-test.de/selbstbewertung/index.php). Auf Basis eines Online-Fragebogens mit 60 Prüfschritten kann der Stand der Barrierefreiheit eines Webangebots eingeschätzt werden. Sämtliche Prüfschritte sind mit ausführlichen Verfahrensbeschreibungen versehen. Auch eine [Demoversion der Selbstbewertung](http://testen.bitv-test.de/selbstbewertung/test.php) steht zur Verfügung.

Die Selbstbewertung baut auf dem [BITV- und WCAG-Test](http://www.bitvtest.de/bitvtest.html) auf. Die Prüfschritte sind identisch mit den [Prüfschritten der Expertentests](http://www.bitvtest.de/bitvtest/das_testverfahren_im_detail/pruefschritte.html) und auch eine Gesamtbewertung in Punkten ist möglich.

Das eigentliche [Prüfverfahren](https://www.bitvtest.de/bitv_test/das_testverfahren_im_detail/verfahren.html) ist aufwendig.

↪ __Prüfen mit dem WCAG-Kurztest__

## Werkzeugliste

Im BITV-Test werden Webseiten unter unterschiedlichen Bedingungen betrachtet: in verschiedenen Browsern, mit bestimmten Einstellungen und mit bestimmten Tools, die besondere Merkmale hervorheben. In der Regel sind alle Werkzeuge im Web frei verfügbar. Dieser Text beschreibt die vorgesehene Prüfumgebung und die einzusetzenden Prüfwerkzeuge.

* Mozilla Firefox, Chrome, Internet Explorer
* Web Developer Toolbar für Firefox und Chrome
* HeadingsMap für Firefox und Chrome
* [NVDA](https://www.nvaccess.org/download/), Open-Source Screenreader für Windows
* W3C-Validator, http://validator.w3.org/
* [Online-Duden-Suche](http://www.duden.de/index_duden_suche.php)
* [Bookmarklets](https://www.bitvtest.de/bitv_test/das_testverfahren_im_detail/werkzeugliste.html) zum Testen von: Inhaltsgliederung, Error Parsing, Tabellen, Bildern, Listen, Sprachauszeichnung, Farben etc.
* [Color Contrast Analyser (CCA)](https://www.paciellogroup.com/resources/contrastanalyser/)
* [PDF Accessibility Checker (PAC 3)](https://www.access-for-all.ch/ch/pdf-werkstatt/pdf-accessibility-checker-pac.html)

## Prüfschritte im Überblick

Sind alle Prüfschritte hohen und mittleren Gewichts erfüllt bzw. konform, kann ein vollständiger WCAG 2.1 Selbsttest durchgeführt werden.

### Prüfschritte mit hohem Gewicht

#### Prüfschritt 1.1.1a - Alternativtexte für Bedienelemente

> Grafische Bedienelemente haben sinnvolle Alternativtexte.

Grafische Bedienelemente (alle verlinkten / interaktiven Grafiken und Bilder) müssen mit Alternativtexten versehen werden. (Nicht verlinkte bzw. nicht interaktive Grafiken und Bilder werden in Prüfschritt 1.1.1b geprüft.)

Die Alternativtexte für Bedienelemente (z.B. Icons oder Logos) oder Teaserbilder sollen das *Ziel* des Links bezeichnen. Alternativtexte für grafische Schaltflächen (Buttons) sollen die *Aktion* bezeichnen, die der Button auslöst. Wenn Image maps eingesetzt werden, sollen deren Bereiche (area-Elemente) sinnvolle Alternativtexte haben.

Thema dieses Prüfschritts sind auch Textlinks, die per CSS durch Hintergrundbilder ersetzt werden sowie Textalternativen für Icon Fonts und SVGs.

https://testen.bitv-test.de/index.php?a=di&iid=64

#### Prüfschritt 1.2.2a - Aufgezeichnete Videos mit Untertiteln

> Aufgezeichnete Videos haben synchrone Untertitel.

Wenn die Tonspur eines aufgezeichneten Videos Informationen enthält, müssen Untertitel als Alternative bereitgestellt werden.

Gibt es keine Videos zu testen, wird dieser Prüfschritt nicht geprüft.

https://testen.bitv-test.de/index.php?a=di&iid=67&s=n

#### Prüfschritt 1.3.1a - HTML-Strukturelemente für Überschriften

> Seiteninhalte sind durch Überschriften erschlossen.

Überschriften müssen korrekt mit den HTML-Strukturelementen h1 bis h6 ausgezeichnet sein und die Inhalte der Seite erschließen.

https://testen.bitv-test.de/index.php?a=di&iid=72&s=n

#### Prüfschritt 1.3.1h - Beschriftung von Formularelementen programmatisch ermittelbar

> Beschriftungen von Formularfeldern sind richtig verknüpft.

Beschriftungen sollen über Markup mit den Formularelementen, die sie beschriften, verknüpft sein.

Bei label-Elementen geschieht das über das for-Attribut oder den Einschluss des beschrifteten Formularelements in das label-Element. Sind Beschriftungen nicht mit dem label-Element ausgezeichnet, soll eine Beschriftung des zugehörigen Formularelements auf anderem Weg (etwa über das aria-labelledby-Attribut) sichergestellt sein.

Ist bei Gruppen von Formularelementen eine Gruppenbeschriftung für das Verständnis der Beschriftung der einzelnen Formularelemente nötig, sollte die Verfügbarkeit sichergestellt werden (z.B. mit Hilfe von fieldset mit legend).

Visuell voneinander abgesetzte oder logisch miteinander verbundene Gruppen von Formularelementen sollten mit fieldset oder mithilfe von Überschriften sinnvoll strukturiert sein.

https://testen.bitv-test.de/index.php?a=di&iid=79&s=n

#### Prüfschritt 1.4.3a - Kontraste von Texten ausreichend

> Texte haben ausreichende Helligkeitskontraste.

Alle Texte der Seite sollen ausreichende Helligkeitskontraste haben. Sie sollen auch für farbfehlsichtige Benutzer wahrnehmbar sein. Bei Seiten, die eine ausreichend kontrastreiche Version über einen Styleswitcher anbieten, wird auch geprüft, ob der Ausgangszustand Mindestanforderungen an Schriftkontraste erfüllt.

Gibt es keine Videos zu testen, wird dieser Prüfschritt geprüft.

https://testen.bitv-test.de/index.php?a=di&iid=86&s=n

#### Prüfschritt 2.1.1a - Ohne Maus nutzbar

> Auch ohne Maus können alle wesentlichen Funktionen und Inhalte genutzt werden.

Die Webseite soll auch ohne Maus - also ausschließlich mit der Tastatur - zu benutzen sein.

https://testen.bitv-test.de/index.php?a=di&iid=88&s=n

#### Prüfschritt 3.3.2a - Beschriftungen von Formularelementen vorhanden

> Beschriftungen von Formularfeldern stehen vor den Eingabefeldern.

Beschriftungen von Formularelementen sind vorhanden.

Die Beschriftung von Formularelementen soll vor (das heißt links neben oder über) dem zugehörigen Eingabefeld angeordnet werden. Nur die Beschriftung von Checkboxes und Radiobuttons kann (und sollte normalerweise) rechts neben dem zugehörigen Eingabefeld angeordnet werden.

Wenn für die Eingabe ein bestimmtes Format verlangt wird, so sind die Anweisungen für alle Benutzer lesbar.

https://testen.bitv-test.de/index.php?a=di&iid=81&s=n

#### Prüfschritt 4.1.2a - Name, Rolle, Wert verfügbar

> Interaktive Bedienelemente wie Links und Schaltflächen haben programmatisch ermittelbare Namen und Rollen.

Alle selbst gestalteten Komponenten einer Website (also Elemente oder Widgets, die nicht auf interaktiven HTML-Elementen beruhen) sind so umgesetzt, dass die semantischen Informationen (Name, Rolle, Eigenschaften) vorhanden sind. Werden nicht semantische Elemente (etwa div oder span) eingesetzt und mithilfe von JavaScript zu Bedienelmenten umfunktioniert, wird die Semantik mithilfe von WAI-ARIA bereitgestellt.

Die wechselnden Zustände der Bedienelemente werden nicht nur visuell über CSS und Javascript abgebildet, sondern auch über scriptgesteuerte Änderung der Werte der ARIA-Attriubte, damit die Semantik auch bei nicht-visueller Nutzung verfügbar ist.

https://testen.bitv-test.de/index.php?a=di&iid=100&s=n

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles

https://www.w3.org/TR/wai-aria-practices-1.1/

### Prüfschritte mit mittlerem Gewicht

#### Prüfschritt 1.1.1b - Alternativtexte für Grafiken und Objekte

> Informative Grafiken und Bilder haben sinnvolle Textalternativen. Objekte wie Video- und Audio-Dateien sowie Applets haben zumindest kurze beschreibende Textalternativen.

Nicht verlinkte informationsorientierte Grafiken und Bilder müssen mit Alternativtexten versehen werden. (Verlinkte Grafiken werden in Prüfschritt 1.1.1a geprüft.) Die Alternativtexte ersetzen das Bild, sie sollen also (wenn möglich) dieselbe Aufgabe erfüllen wie das Bild.

Bei eingebundenen Multimedia-Objekten, Video- beziehungsweise Audio-Dateien oder Applets soll der Alternativtext zumindest eine beschreibende Identifizierung des Inhalts ermöglichen.

Thema dieses Prüfschritts sind auch Textalternativen für Hintergrundbilder, Icon Fonts und SVGs, sofern diese nicht verlinkt sind.

https://testen.bitv-test.de/index.php?a=di&iid=65&s=n

#### Prüfschritt 1.3.1b - HTML-Strukturelemente für Listen

> Listen (einschließlich Menüs) sind mit den vorgesehenen HTML-Strukturelementen ausgezeichnet.

Zur Auszeichnung von Listen auf der Seite sollen HTML-Strukturelemente für Listen (ul, ol und so weiter) genutzt werden.

https://testen.bitv-test.de/index.php?a=di&iid=74&s=n

#### Prüfschritt 1.3.1e - Datentabellen richtig aufgebaut

> Datentabellen sind richtig aufgebaut und ausgezeichnet.

Datentabellen sind strukturell richtig aufgebaut, Zeilen- und Spaltenüberschriften sind mit th ausgezeichnet.

https://testen.bitv-test.de/index.php?a=di&iid=77&s=n

#### Prüfschritt 1.4.3a - Kontraste von Texten ausreichend

Gibt es keine Videos zu testen, wurde dieser Prüfschritt bereits in den Prüfschritten mit hohem Gewicht geprüft.

#### Prüfschritt 1.4.4a - Text auf 200% vergrößerbar

> Text kann um bis zu 200 Prozent geändert werden, ohne dass dabei Inhalt oder Funktionalität verloren geht.

Text soll um bis zu 200 Prozent geändert werden können, ohne dass dabei Inhalt oder Funktionalität verloren geht. Eine der folgenden Voraussetzung soll erfüllt sein:

* Mit der Zoom-Funktion des Browsers kann das gesamte Layout proportional zur Schriftgröße vergrößert werden.
* Mit der Nur-Text-Vergrößerung im Browser kann der Text vergrößert werden.
* Über ein Bedienelement der Seite kann die Schriftgröße vergrößert werden.

https://testen.bitv-test.de/index.php?a=di&iid=87&s=n

#### Prüfschritt 2.2.2a - Bewegte Inhalte abschaltbar

> Bewegte oder blinkende Inhalte sind nicht vorhanden, stoppen spätestens nach 5 Sekunden, oder es gibt eine Möglichkeit, die Bewegung/das Blinken anzuhalten, zu beeenden oder auszublenden.

Ablenkung durch blinkende oder sich bewegende Elemente soll vermieden werden, auf 5 Sekunden begrenzt sein oder abschaltbar sein.

Bewegte oder automatisch aktualisierte Inhalte, z.B. periodisch wechselnde Nachrichten-Aufmacher (Teaser) sollen zum Lesen anhaltbar sein.

https://testen.bitv-test.de/index.php?a=di&iid=20&s=n

#### Prüfschritt 2.4.1a - Bereiche überspringbar

> Seitenbereiche sind durch Überschriften, Sprunglinks oder WAI ARIA document landmarks erschlossen, Frames und Iframes haben sinnvolle Titel.

Verschiedenen Inhaltsbereiche wie Navigation, Suche oder Seiteninhalt können von Nutzern assistiver Technologien übersprungen werden. Der Seitenaufbau soll unabhängig von der Darstellung deutlich werden. Eine der folgenden Voraussetzungen soll erfüllt sein:

* Es werden sinnvolle Bereichsüberschriften (HTML-Strukturelemente h1 bis h6) eingesetzt
* Es sind Sprunglinks vorhanden.
* HTML5 Elemente zur Auszeichnung von Bereichen (header, nav, main, aside, footer) erschließen den Seitenaufbau s sinnvoll.
* WAI-ARIA document landmarks strukturieren die Seitenbereiche sinnvoll.

Frames und Iframes brauchen ein sinnvolles title-Attribut.

https://testen.bitv-test.de/index.php?a=di&iid=73&s=n

#### Prüfschritt 3.1.1a - Hauptsprache angegeben

> Die Hauptsprache der Webseite(n) ist angegeben.

https://testen.bitv-test.de/index.php?a=di&iid=92&s=n

#### Prüfschritt 3.3.1a – Fehlererkennung

> Wird ein Eingabefehler automatisch festgestellt, wird das fehlerhafte Element aufgezeigt und der Fehler wird in Textform beschrieben.

Wenn ein Formular Fehlermeldungen erzeugt, sollen die fehlerhaft ausgefüllten Felder identifiziert und in Textform beschrieben werden.

https://testen.bitv-test.de/index.php?a=di&iid=103&s=n

#### Prüfschritt 4.1.1a - Korrekte Syntax

> Das Prüfergebnis des W3C-HTML-Validators ist positiv.

Die verwendete Markup-Sprache HTML muss korrekt eingesetzt werden. Dabei muss für jedes Element folgendes gewährleistet sein:

* Sie besitzen vollständige Start- und Endtags,
* sie sind gemäß Spezifikation korrekt verschachtelt
* sie enthalten keine doppelten Attribute
* alle ihre IDs sind eindeutig, außer dort wo die Spezifikationen etwas anderes erlauben

https://testen.bitv-test.de/index.php?a=di&iid=99&s=n


## Barrierefreiheit im e-Commerce

* Wahrnehmung für Sehende priorisiert Content, Screenreader liest von links nach rechts und oben nach unten
* Formulare häufig ohne Labels, Fehlermeldungen werden nicht vorgelesen
* keine Tastaturbedienung möglich
* doppelt vorgelesene Links (Produkt-Bild und -Titel)
* "durchschnittliche Bewertung 4,5 Sterne, 22 Bewertungen"
* Preise und andere Inhalte werden häufig nicht mit Tabstop vorgelesen
* falsch vorgelesene Preise "<del><sup>\$</sup>160<sup>00</sup></del> <sup>\$</sup>99<sup>98</sup>" => "16000 Dollars"
* Streichpreise erfordern versteckte Texte: "war £160.00, ist £99.98"
* fehlende Dezimalstellen bedeuten eine völlig andere Zahl
* Preis-Markup erfordert Punkt als Dezimaltrenner

https://medium.com/@lsnrae/the-state-of-accessibility-in-e-commerce-fc97b9bad3a2


## Links

* http://bik-fuer-alle.de/easy-checks.html
* https://testen.bitv-test.de/selbstbewertung/index.php
* https://developer.mozilla.org/de/docs/Tools/Barrierefreiheits_inspektor
* https://support.mozilla.org/de/kb/Eingabehilfen 
* https://www.bitvtest.de/bitv_test/das_testverfahren_im_detail/werkzeugliste.html
* https://testen.bitv-test.de/bookmarklets.html
* http://www.bitvtest.de/bitvtest/das_testverfahren_im_detail/pruefschritte.html
* https://www.bitvtest.de/bitv_test/einfuehrung/3_varianten/abschliessend.html
* https://bik-fuer-alle.de/selbstbewertung.html
* https://bik-fuer-alle.de/easy-checks.html
* https://www.smashingmagazine.com/2015/03/web-accessibility-with-accessibility-api/
* https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics
* https://www.w3.org/TR/using-aria/
* https://webaim.org/techniques/keyboard/
* https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility
* https://developer.mozilla.org/de/docs/Tools/Barrierefreiheits_inspektor
* https://support.mozilla.org/de/kb/Eingabehilfen
* https://developers.google.com/web/fundamentals/accessibility/accessible-styles
* https://ttt.studio/blog/making-accessibility-design-accessible/
* https://www.w3.org/TR/WCAG21/#keyboard-accessible