# Barrierefreiheit - eine Einführung

> Barrierefreiheit ist die Praxis, Ihre Websites für möglichst viele Menschen nutzbar zu machen. Dies bedeutet, dass Sie alles versuchen sollten, um Personen nicht daran zu hindern, auf Informationen zuzugreifen, weil sie eine Behinderung haben oder andere persönliche Umstände sie einschränken wie das von ihnen verwendete Gerät, die Geschwindigkeit ihrer Netzwerkverbindung oder ihre geografische Position oder ihr Gebietsschema.

## TODO VOR PRÄSENTATION

* Gewichtung aus Prüfschritten checken und Gruppierung anpassen

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
* Name, Rolle und Wert verfügbar [Test](https://testen.bitv-test.de/index.php?a=di&iid=100&s=n)

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

Mit diesen einfachen Barrierefreiheits-Tests bekommen Sie eine erste Idee, wie es um die Barrierefreiheit bei Ihrem Webangebot bestellt ist. Die Easy Checks wurden von der Web Accessibility Initiative (W3C) entwickelt und sind bewusst reduziert gehalten. Aufgenommen sind Prüfpunkte, die einfach zu testen sind. Auch wenn diese ersten Tests erfolgreich sind, können Barrieren bestehen, die Menschen mit Behinderung den Zugang verwehren.

* https://bik-fuer-alle.de/easy-checks.html

## BITV / WCAG Selbstbewertung

Für alle, die barrierefreie Webangebote entwickeln, bietet BIK ein kostenloses webbasiertes Werkzeug an: [Die BITV / WCAG Selbstbewertung](http://testen.bitv-test.de/selbstbewertung/index.php). Auf Basis eines Online-Fragebogens mit 60 Prüfschritten kann der Stand der Barrierefreiheit eines Webangebots eingeschätzt werden. Sämtliche Prüfschritte sind mit ausführlichen Verfahrensbeschreibungen versehen. Auch eine [Demoversion der Selbstbewertung](http://testen.bitv-test.de/selbstbewertung/test.php) steht zur Verfügung.

Die Selbstbewertung baut auf dem [BITV- und WCAG-Test](http://www.bitvtest.de/bitvtest.html) auf. Die Prüfschritte sind identisch mit den [Prüfschritten der Expertentests](http://www.bitvtest.de/bitvtest/das_testverfahren_im_detail/pruefschritte.html) und auch eine Gesamtbewertung in Punkten ist möglich.


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

## Links

* http://bik-fuer-alle.de/easy-checks.html
* https://testen.bitv-test.de/selbstbewertung/index.php
* https://developer.mozilla.org/de/docs/Tools/Barrierefreiheits_inspektor
* https://support.mozilla.org/de/kb/Eingabehilfen 
* https://www.bitvtest.de/bitv_test/das_testverfahren_im_detail/werkzeugliste.html
* https://testen.bitv-test.de/bookmarklets.html
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