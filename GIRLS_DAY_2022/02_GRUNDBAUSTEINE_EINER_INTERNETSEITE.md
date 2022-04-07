# Grundbausteine einer Internetseite

((Einführung in HTML-Strukturen, Elemente, CSS))

((gemeinsam mit Rosari))

Für Arbeiten am Code eignet sich am besten ein Programm, das sich auf Code spezialisiert und deshalb damit gut umgehen kann. Es unterstützt beim Schreiben durch Vorschläge, es erlaubt, von einer zur anderen Stelle zu springen. Es hilft beim Analysieren von Code.

Code an sich ist Text und damit natürlich auch mit jedem einfachen Texteditor bearbeitbar. Dennoch schätzen viele Entwickler die Möglichkeiten einer Entwicklungsumgebung.

Wir verwenden dafür heute einmal Codesandbox, das ganz einfach online funktioniert und ohne Installationsaufwand ganz einfach in einem Browser funktioniert, solange der nicht gerade zu alt ist.

> https://codesandbox.io/ -- create sandbox -- static

Wer von euch jetzt bereits gerne einmal selbst aktiv werden möchte, kann den Code-Editor in seinem Browser aufrufen und all das, was ich jetzt gleich zeigen werde, direkt mitmachen.

Später brauchen wir sowieso alle diesen Editor.

Wenn ihr etwas nicht versteht, nicht weiter kommt oder Fragen habt, redet am besten direkt einfach rein. Ansonsten kann es sein, dass ich eure Meldung gar nicht bemerke und ihr zu kurz kommt.

## Einführung in HTML-Strukturen

Von "HTML" haben wir heute schon ein paar mal gehört.

*Frage:* Was ist denn aber dieses HTML? Wofür steht "HTML"?

HTML steht für "Hypertext Markup Language", also eine Beschreibungssprache für Hypertexte.

Das sind im Prinzip strukturierte Texte, die über Links miteinander verknüpft werden können und so einen gewissen Grad an Gestaltung und Interaktivität ermöglichen.

Eine HTML-Seite, die im Browser dargestellt werden soll, ist -- wie so vieles bei Computern -- zunächst einmal eine Datei. Dass dies ein HTML-Dokument ist, erkennt der Browser an deren Endung *.html

Geben wir dieser Datei den Namen `index.html`, erleichtert das den Aufruf bei Verzeichnissen (also bei der Verwendung von Ordnern). Strukturieren wir bspw. alle unsere HTML-Dokumente in Ordnern, reicht es dann allein den Ordnernamen in der Internet-Adresse anzugeben. Fehlt hier der Dateiname versucht der Browser von sich aus, ob eine `index.html` vorhanden ist und ruft diese auf.

> `index.html`

Das einfachste HTML-Dokument sieht nun so aus:

> `Hallo Welt`

Der Browser erkennt ja bereits an der Dateiendung, dass es sich um ein HTML-Dokument handelt und zeigt dieses an. Trotzdem reicht uns das natürlich nicht.

Bisher fehlt uns schließlich jegliche Struktur: Ein neuer Textabsatz wird nicht so dargestellt, wie wir uns das vorstellen. Ohne Struktur haben wir keine Möglichkeit, die Gestaltung zu beeinflussen oder gar Verlinkungen anzulegen.

Damit der Browser nicht nur über die (nicht immer vorhandene) Dateiendung, auf ein HTML-Dokument schließt, sagen wir ihm das deshalb auch noch einmal im Dateiinhalt.

Mit einem Attribut sagen wir dem Browser außerdem, welche Hauptsprache unser Dokument verwendet. Lässt sich jemand die Seite vorlesen, wird diese Angabe besonders wichtig.

> `<html lang="de">`

Zudem trennen wir Kopfangaben vom eigentlich darzustellenden "Körper" ab, indem wir zwei weitere HTML-Elemente in dem HTML-Dokument definieren.

> `<head>` + `<body>`

Im Kopfbereich wird zum Beispiel der Seitentitel festgelegt, der dem Browser-Tab den Namen gibt und auch bei Suchmaschinen, wie Google, eine wichtige Rolle spielt.

> `<title>GirlsDay</title>`

Wir geben hier auch gleich noch die Art der Schriftzeichen an, die in diesem Dokument verwendet wird, damit bestimmte Zeichen wie Umlaute "ä", "ö" "ü" usw. korrekt angezeigt werden.

> `<meta charset="UTF-8">`

Im Hauptteil können wir nun unseren Inhalt formatieren.

Unsere Absätze verpacken wir zunächst in HTML-Elemente, die sie als Absätze auszeichnen: `p` für paragraph.

Und dann geben wir auch gleich noch eine Überschrift an, die auf der Seite zu sehen sein soll.

Das HTML-Element oder auch Tag genannt, dafür heißt `h`. Dieses wird allerdings noch um eine Ziffer zwischen 1 und 6 ergänzt, um die Wichtigkeit der Überschrift anzugeben. `h1` ist also eine Überschrift erster Ordnung, `h2` eine zweiter Ordnung usw.

Standardmäßig wenden Browser dann bereits unterschiedliche Darstellungen an.

Auch den sichtbaren Inhalt im Body können wir noch einmal in einen Kopf, einen Hauptinhalt und einen Fußbereich gliedern: `header`, `main`, `footer`.

Bisher geschriebener Code:

```
<html lang="de">
    <head>
        <title>GirlsDay</title>
        <meta charset="UTF-8" />
    </head>
    <body>
        <header></header>
        <main>
            <h1>GirlsDay</h1>
            <h2>Einführung</h2>
            <p>Am 28.4. ist GirlsDay! Sei dabei, wenn du bei Pixelpark, HTML lernen möchtest.</p>
            <p>Melde dich einfach unten an.</p>
            <h2>Voraussetzung</h2>
            <p>Ein eigener Computer wird vorausgesetzt.</p>
        </main>
        <footer></footer>
    </body>
</html>
```

Gibt es bis hierher Fragen?

## Wichtige HTML-Elemente

Nun ergänzen wir unser Dokument um einige andere wichtige HTML-Elemente.

Zunächst einmal eine Textauszeichnung als fett und einen Link, um das Dokument interaktiv werden zu lassen.

```
<p>Am 28.4. ist <a href="https://www.girls-day.de">GirlsDay</a>! Sei dabei, wenn du bei Pixelpark, <b>HTML lernen</b> möchtest.</p>
```

```
<img src="../mvp/unicorn.png" alt="Einhorn">
```

```
<h3>Bringe bitte mit</h3>
<ul>
    <li>einen eigenen Computer</li>
    <li>ein sauberes Taschentuch</li>
</ul>
<h3>Inhalte</h3>
<ol>
    <li>HTML, Styling mit CSS</li>
    <li>Javascript</li>
    <li>und mehr</li>
</ol>
```

## Interaktion mit dem Backend

Bevor wir uns an die Gestaltung machen, legen wir noch ein Formular an, damit wir eine Anmeldung entgegennehmen können.

```
<form action="./bestaetigung.html">
    <label for="name">Dein Name</label>
    <input id="name" name="name" value="">
    <br>
    <input id="bestaetigung" type="checkbox" name="bestaetigung" value="ja">
    <label for="bestaetigung">Die Anmeldebedingungen akzeptiere ich</label>
    <br>
    <label for="einhorn">Magst du Einhörner?</label>
    <select id="einhorn" name="einhorn" >
        <option value="nein">Nein</option>
        <option value="ja">Ja</option>
    </select>
    <br>
    <button type="submit">Jetzt anmelden</button>
</form>
```

Das Formular hat ein Attribut `action`, das angibt, wohin die Formularinhalte geschickt werden.

Normalerweise kommt an dieser Stelle das Backend ins Spiel, das dafür etwas programmiert, was diese Formularinhalte entgegennimmt und weiterverarbeitet. Üblicherweise baut das Backend dann auch den HTML-Inhalt zusammen, der nach dem Absenden des Formulars im Browser angezeigt werden soll. Der Benutzer bekommt so eine Rückmeldung, ob die Verarbeitung erfolgreich war oder nicht.

Für uns ist das heute zu kompliziert. Wir legen deshalb einfach nur eine zweite HTML-Seite an, die so heißt, wie im Attribut angegeben `bestaetigung.html`.

Die neue Seite bekommt wieder einen Titel, eine Überschrift und einen Text mit einer Erfolgsmeldung.

(Coden)

Außerdem fügen wir noch ein kleines Video hinzu, das die Teilnehmerin für ihre Anmeldung belohnt.

```
<html lang="de">
    <head>
        <title>Bestätigung</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <main>
            <h1>Anmeldebestätigung</h1>
            <p>Toll, dass du dich angemeldet hast!</p>

            <video controls
                src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"
            ></video>
        </main>
    </body>
</html>
```

## Styling der Überschrift

An diesem Punkt gefällt uns das kleine Projekt doch schon ganz gut und ich denke, wir sollten die Seite noch ein wenig aufhübschen.

Dafür gibt es das HTML-Element `<style>`, das wir im Head unserer Seite ergänzen.

Wollen wir die Überschrift bspw. rot erscheinen lassen, so geht das nun ganz einfach.

```
<style>
    h1 {
        color: red;
    }
</style>
```

Leider stellen wir aber auch fest, dass die Überschrift auf der Bestätigungsseite nicht gestylt wurde. Ganz so einfach geht es also nicht. Oder ist unser Ansatz falsch?

Wie wir das gewünschte Ergebnis erreichen und welche Möglichkeiten der Gestaltung wir noch haben, das zeigt uns jetzt Rosari.

## Grundlagen des Stylings mit CSS

```
html {
    font-family: sans-serif;
    font-size: 16px;
}

a {
    color: red;
}
  
body {
  background-color: rgb(241, 181, 221);
}

button {
  border: 2px solid rgb(172, 9, 117);
  color: white;
  cursor: pointer;
  padding: 4px;
}

button:hover {
  border-color: red;
}
  
h1 {
  color: red;
}

img {
  margin: 1rem auto;
  display: block;
}

button, input {
  line-height: 32px;
}

.info {
  padding-bottom: 1rem;
}

.spalten {
    display: flex;
}

.innenabstand {
    padding: 1rem;
}

.grauer-hintergrund {
    background-color: rgb(172, 9, 117);
    color: white;
}
```