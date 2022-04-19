# Interaktive Webseiten

((Einführung in JavaScript: Variablen, Arrays, Funktionen, DOM-Manipulation, Vue in 50 Minuten))

Nachdem ihr jetzt bereits die Grundbausteine einer Internetseite, also HTML und CSS kennengelernt habt, möchte ich euch nun zeigen, wie ihr eine Internetseite interaktiv bzw. dynamisch machen könnt.

Nun ja, interaktiv und dynamisch ist unser bisheriges Beispiel ja schon in gewisser Weise. Interaktiv bedeutet ja, dass der Benutzer mit unserer Seite in Aktion treten kann und umgekehrt. Das kann er bereits:

- Er kann die Seite aufrufen
- Er kann durch Bewegen der Computermaus den Zustand von Seitenteilen verändern (Button-Hover)
- Er kann ein Formular ausfüllen und absenden

Viel mehr geht aber noch nicht. Wenn ihr so richtig interaktiv werden wollt, braucht ihr JavaScript dazu. Damit könnt ihr die Webseite wirklich dynamisch machen. Ihr könnt auf den Benutzer und dessen Handeln direkt reagieren und Inhalte daraufhin anpassen.

Der ursprüngliche Gedanke von JavaScript, Webseiten lediglich zu ergänzen ist über die Jahre leider verloren gegangen. Inzwischen kommt kaum noch eine Internetseite ohne JavaScript aus. Ja, vielfach ist es sogar die Grundlage. In der Folge bestehen die Seiten dann aus großen JavaScript-Dateien, die über das Internet geladen und im Browser verarbeitet werden müssen, was oft mit Geschwindigkeitsproblemen verbunden ist.

Über die Zeit haben sich hier und da auch Schreibweisen verändert, Dinge wurden ergänzt, damit das Arbeiten einfacher wird. Die wichtigsten Teile dieser Programmiersprache sind aber geblieben.

Mit Java, von dem ihr vielleicht schon einmal gehört habt, hat JavaScript nicht viel zu tun. Beides sind Programmiersprachen und inzwischen gibt es auch in JavaScript das ein oder andere Ding, was man früher nur aus höheren Sprachen kannte. Im Gegensatz zu Java lässt sich JavaScript aber ganz einfach im Browser ausführen und es gibt von Haus aus auch keine Typisierung von Variablen, was von Vorteil sein kann, aber im Alltag eben auch das ein oder andere Problem mit sich bringt.

## Integration

Variable? Bevor wir klären, was das ist, sollten wir noch wissen, wie wir denn JavaScript überhaupt in unsere Seiten hinein bekommen.

Die einfachste Möglichkeit ist wieder ein HTML-Element: `<script></script>`.

Das kann sowohl im Seitenkopf als auch im Hauptteil der Seite stehen. Setzen in unserem Beispiel an das Ende, so haben wir den Vorteil, dass alles HTML bereits geladen wurde und der Browser das alles schon kennt. Wir müssen deshalb nicht mehr extra sicherstellen, dass wir lange genug mit dem Ausführen unseres JavaScripts warten, um keine Fehler zu erhalten.

Wie auch bei CSS für das Styling der Webseite, kann der Code direkt in der Seite stehen oder aus einer anderen Datei geladen werden. Das werden wir nachher auch noch tun. Schließlich sollte es aus guten Gründen so gehandhabt werden.

Für den Anfang wählen wir aber den einfachsten Weg und schreiben unseren Code direkt in dieses HTML-Element.

## Einfache Variablen und deren Verarbeitung

Nun aber zurück zur Frage.

*Frage:* Was ist eine Variable?

Variablen sind Container mit etwas drin. Wir können uns das ein wenig so vorstellen, wie die großen Container auf Schiffen, die auch mit Lastern oder Zügen durch die Gegend gefahren werden. Da steht etwas drauf, der Container bekommt einen Namen. Irgendwo steht sicher auch, woher und wohin der Container soll. Was drin ist, ist dem Transporteur aber egal. Mitunter kann das ja sehr kurios sein und in die Illegalität abdriften.

Der Inhalt dieses Containers ist flexibel, variabel. So ist das bei JavaScript auch.

Eine Variable definiert ihr mit dem Schlüsselwort `var`, welchem der Name der Variable folgt.

> `var container`

Den Inhalt bestimmen wir nun durch Zuweisung mit einem Ist-Gleich-Zeichen

> `var container = 2.345`

Und wir können den Inhalt auch austauschen:

> `container = 14`

Bei einer Sprache wie Java hätten wir auch angeben müssen, welcher Art der Inhalt ist, also von welchem Typ. Ist es eine Zahl, ein Text oder irgendetwas anderes. In JavaScript ist das egal. So können wir die Variable auch mit einem Text befüllen:

> `container = "Ich bin ein Text"`

Das lässt sich leicht erzählen. Schöner wäre es aber, wenn ihr das selbst ausprobiert. Ergänzt doch eure HTML-Datei um ein Script-Element und probiert es aus, eine Variable anzulegen und zu befüllen.

Wenn ihr sehen wollt, was in der Variable steht, könnt ihr das im Browser am einfachsten über die Log-Funktion in der Browserkonsole.

> `console.log(container)`

Mit so einer Variable kann man natürlich auch etwas tun. Was wir tun können, hängt nun allerdings doch vom Typ des Inhalts ab. Intern kennt JavaScript den aktuellen Variablentyp natürlich doch.

Eine Zahl ließe sich zum Beispiel verdoppeln und ein Text ergänzen. Beides probieren wir jetzt einmal aus, schreiben das Ergebnis in neue Variablen und geben diese in der Browserkonsole aus.

Jede Variablenzuweisung oder -ausgabe, jeder Aufruf ist für sich genommen eine Operation, die in JavaScript mit einem Semikolon beendet werden sollte.
Das ist nicht mehr zwingend erforderlich solange wir jede Operation in einer eigenen Zeile schreiben. Da wir im Prinzip aber auch alles in eine Zeile schreiben könnten, wo der Browser dann nicht mehr sicher versteht, was wir ihm eigentlich sagen wollen und es schnell passieren kann, dass wir Zeilenumbrüche vergessen, sollten wir die Semikolons besser stehts mit anfügen.

> `var zahl = 2.345;`
> `var text = "Ich bin ein Text";`
>
> `// mit Variablen etwas tun`
> `var dasDoppelte = 2 * zahl;`
> `var neuerText = text + " ohne einen Sinn.";`
>
> `console.log(dasDoppelte, neuerText);`

## Funktionen

Mit dem Code, den wir gerade geschrieben haben, können wir zwar eine Variable verarbeiten bzw. ändern, aber das auch nur genau dieses eine Mal.

Mehr Flexibilität gibt uns die Verwendung einer Funktion.

> `function verdoppeln (zahl) {`
> ` var dasDoppelte = 2 * zahl;`
> ` return dasDoppelte;`
> `}`

Wir definieren hier eine Funktion, die wir immer wieder verwenden können. Ihr Name ist `verdoppeln` und sie nimmt einen Wert entgegen, den sie in die Variable `zahl` packt.
Zur Funktion gehört ein Block an Anweisungen, die beim Aufrufen der Funktion ausgeführt werden. Das Ergebnis der Verdoppelung schreiben wir in diesem Anweisungsblock zunächst in eine neue Variable. Anschließend gibt die Funktion den Wert der Variable zurück an den Aufrufer.

Um die Funktion aufzurufen, schreiben wir:

> `verdoppeln(3);`

Unser Beispiel können wir jetzt anpassen, indem wir die Funktion verwenden.

> `var dasDoppelte = verdoppeln(zahl);`

Der Aufruf könnte uns bekannt vorkommen. Auch bei `console.log()` sah das schon so aus. Kein Wunder, ist das doch auch einfach nur eine Funktion, die allerdings vom Browser selbst definiert wird. Davon gibt es natürlich noch eine ganze Menge mehr.


## Andere Variablentypen


Außer Zahlen und Texten gibt es natürlich noch einige andere Arten von Variableninhalten. Ganz klassisch ist da der Boolean, der nur zwei Werte kennt: wahr oder falsch.

> `var darfDasSehen = true;`

In JavaScript kann dieser aber leicht durch das Verwenden der Zahlen 0 und 1 ersetzt werden.

Für uns nachher ist es wichtiger, zu wissen, dass es auch komplexere Variablen gibt.

Als Array wird z.B. eine Liste von Werten bezeichnet, die ganz bunt gemischt aussehen könnte.

> `var liste = [7, "Text", "13", zahl, ["gehen", "to go"]];`

Möchte ich auf einen bestimmten Wert in einer solchen Liste zugreifen, geschiet das unter Angabe der Position in der Liste (Zählung beginnt mit 0).

> `liste[1]`

Wie die Liste, kann auch ein Objekt viele unterschiedliche Werte beinhalten. Allerdings werden diese beim Objekt über Parameternamen angesprochen.

> `var objekt = {`
> `    name: "Peter",`
> `    alter: 16,`
> `    geburtsdatum: new Date(),`
> `    notizen: liste`
> `};`

Peters Namen zeige ich mir also an, indem ich diesen Parameter ausgebe.

> `console.log(objekt.name);`

Wen habe ich jetzt inzwischen verloren?

## Bedingungen (optional)

Nun wollen wir Variablen aber nicht nur verändern, sondern auch auswerten bzw. auf ihre Inhalte reagieren.

Das lässt sich ganz einfach mit einem `if`-Statement umsetzen. Wir prüfen hier also, ob der Wert einer Variable größer, kleiner oder gleich etwas Bestimmtem ist. Wenn das so ist, soll etwas bestimmtes passieren. In unserem Fall eine Ausgabe, wenn der Wert größer gleich 2 ist.

> `if (zahl >= 2) {`
> `  console.log("größer als 2");`
> `}`

In einigen Fällen reicht das `if` nicht aus. Wenn wir komplexere Bedingungen testen müssen, brauchen wir natürlich weitere Mittel, um Fälle abzutesten, bei denen z.B. mehrere Variablen bestimmte Werte haben müssen usw. Für jetzt belassen wir es aber dabei.


## DOM-Manipulation (schnelle Demo)

Schließlich fehlt uns aber noch ein wichtiger Schritt. 

Bisher haben wir noch keine Veränderung des Inhalts einer HTML-Seite vorgenommen. Wie das geht, zeige ich euch der Vollständigkeit halber auch einmal schnell.

Mit der Funktion `querySelector` (u.a.) kann ich mit JS auf HTML-Elemente zugreifen bzw. diese ansprechen. Ich lege mir die Referenz (Verweis) darauf in eine Variable, welche ich anschließend weiter verwende. So kann ich bspw. den HTML-Inhalt des Elements verändern oder erweitern.

Auch auf Ereignisse an diesem HTML-Element kann ich nun hören. Möchte ich auf einen Klick darauf reagieren, so behelfe ich mir mit der Funktion `addEventListener`, die "click" als Bezeichnung für das Ereignis übergeben bekommt. Andere Möglichkeiten wären mouseenter, mouseleave usw. Der zweite Parameter ist eine Funktion, die aufgerufen wird, wenn das Ereignis (also der Klick) eintritt.

Hierin zeige ich gleich noch eine dritte übliche Manipulation an HTML-Elementen, nämlich die Veränderung (Hinzufügen, Entfernen) von CSS-Klassen.

```
// mit meinem HTML interagieren
function mache_interaktiv() {
    const titel = document.querySelector("h1");
    titel.innerHTML += " NEU!";
    titel.addEventListener("click", function(event) {
        event.target.classList.toggle("aktiv");
    });
}

mache_interaktiv();
```

## Interaktiv mit Vue

Nun ist das alles schon ziemlich kompliziert und verwirrend. Genau deshalb ist es gut, dass es Programme (Frameworks) gibt, die uns bei der Entwicklung helfen können und uns die Arbeit erleichtern.

Der erfahrenen IT-Entwicklerin helfen sie, schneller zum Ziel zu kommen und auch wir sind damit in der Lage, viel schneller Interaktivität aufzubauen.

Wir nehmen dafür heute VueJS. Das ist ein Framework, das besonders einfach zu erlernen ist. Mal sehen, ob ihr das am Ende des Tages auch für euch so seht.

Zunächst bauen wir gemeinsam das Grundgerüst der HTML-Seite auf. Bitte benennt dazu eure bisherige `index.html` um und legt eine neue Datei an, in welche die wichtigsten Sachen hineinkommen.

```
<html lang="de">
  <head>
    <title>GirlsDay</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue@3.2.28/dist/vue.global.prod.js"></script>
  </head>
  <body>
    <main>
      <div id="app">
      </div>
    </main>
    <script>
    </script>
  </body>
</html>
```

Für Vue ganz wichtig ist, dass wir es natürlich laden. Das tun wir, indem wir es als JavaScript-Datei von einem anderen Anbieter laden. Natürlich könnten wir das Framework auch bei uns als Datei angelegt haben.

Das neue HTML-Element `<div>` ist im Prinzip ein neutraler Container für diverse HTML-Elemente. Ihm geben wir die `id="app"`, damit wir Vue gleich sagen können, was es interaktiv machen soll.

In das Script-Element kommt schließlich unser JavaScript-Code, mit dem wir unser Programm schreiben.

Das machen wir auch direkt als nächstes:
Wir legen eine Variable `App` an, die ein Objekt ist. Die Schreibweise sieht hier vielleicht etwas komisch aus. Wie bei allen Frameworks, müssen wir uns mit deren Struktur arrangieren und akzeptieren, dass bestimmte Formen einzuhalten sind. Das Objekt bekommt daher einen Parameter `data`. Dieser ist selbst eine Funktion (zu erkennen an der Klammer). Die Funktion `data` gibt wiederum auch ein Objekt zurück.
Dieses Objekt enthält dann Parameternamen, die wir uns selbst aussuchen dürfen und für Ausgabe und Eingabe verwendet werden. Das sind also quasi unsere Variablen.

Nun müssen wir Vue sagen, dass es aus der Variable `App` eine Vue-App machen soll und wohin diese gesteckt werden soll, nähmlich in das HTML-Element mit der ID `app`.

Wollen wir die Überschrift ausgeben, können wir das jetzt innerhalb dieses DIV-Blocks tun.

Auch eine ganze Liste an Namen ist jetzt schnell ausgegeben: `namen`.

```
<html lang="de">
  <head>
    <title>GirlsDay</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue@3.2.28/dist/vue.global.prod.js"></script>
  </head>
  <body>
    <main>
      <div id="app">
        <h2>{{ headline }}</h2>
        <ul>
            <li v-for="(name) in namen" v-bind:key="name">{{ name }}</li>
        </ul>
      </div>
    </main>
    <script>
      const App = {
        data() {
          return {
            headline: "Hallo Welt",
            namen: ["Anja", "Bella", "Chrissy"]
          };
        }
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```