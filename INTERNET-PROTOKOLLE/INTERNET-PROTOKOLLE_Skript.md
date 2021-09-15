---
title: "Internetprotokolle"
author: "Marcus Baer"
date: "`r format(Sys.time(), '%d %B, %Y')`"
# output: pdf_document
output:
  html_document:
    # keep_md: yes
    toc: true
    theme: readable
#   pdf_document: default
---

<!--
- [X] Wie funktioniert das Internet?, https://www.youtube.com/watch?v=fpqhjEtznVk&list=PLK6HUpk49AJyfacpJ9SUOpCh8sWJerbvn&index=36
- [X] https://de.wikipedia.org/wiki/Internetprotokollfamilie#TCP/IP-Referenzmodell
- [X] TCP/IP, https://www.elektronik-kompendium.de/sites/net/0606251.htm
- [X] UDP - User Datagram Protocol, https://www.elektronik-kompendium.de/sites/net/0812281.htm
- [X] IP-Routing, https://www.elektronik-kompendium.de/sites/net/0903151.htm
- [X] Routing, https://www.elektronik-kompendium.de/sites/net/0810101.htm
- [X] https://de.wikipedia.org/wiki/WebSocket
- [X] https://t3n.de/news/http3-erklaert-hyper-text-transport-protocol-1398125
-->

# Internetprotokolle

## http://

- **[SLIDE]** nach gut 5 Jahren Entwicklungszeit steht nun das neue HTTP/3 Protokoll kurz vor seiner Verabschiedung
- auch wenn es noch eine Weile dauern wird, bis wir dessen Auswirkungen spüren werden, ist das Grund genug, dass wir uns ein wenig mit Hintergründen und der Geschichte der Protokolle auseinandersetzen

<table border="0" cellpadding="5" cellspacing="0" bordercolor="#000000">
  <tbody><tr>
    <th align="left" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC" scope="row">DoD</th>
    <th align="center" nowrap="nowrap" bgcolor="#CCCCCC">Schichtenmodelle</th>
    <th align="right" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC">OSI</th>
  </tr>
  <tr>
    <th rowspan="3" align="left" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC" scope="row">4. Anwendung</th>
    <td rowspan="3" align="center" nowrap="nowrap">HTTP, FTP, <br>
      SMTP, POP, IMAP, ...</td>
    <th align="right" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC">7. Anwendung</th>
  </tr>
  <tr>
    <th align="right" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC">6. Darstellung</th>
  </tr>
  <tr>
    <th align="right" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC">5. Kommunikation</th>
  </tr>
  <tr>
    <th align="left" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC" scope="row">3. Transport</th>
    <td align="center" nowrap="nowrap">TCP / UDP</td>
    <th align="right" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC">4. Transport</th>
  </tr>
  <tr>
    <th align="left" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC" scope="row">2. Vermittlung</th>
    <td align="center" nowrap="nowrap">IPv4 / IPv6</td>
    <th align="right" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC">3. Vermittlung</th>
  </tr>
  <tr>
    <th rowspan="2" align="left" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC" scope="row">1. Netzzugang</th>
    <td rowspan="2" align="center" nowrap="nowrap">IEEE 802.3 (Ethernet), <br>
      IEEE 802.11 (WLAN), ...</td>
    <th align="right" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC">2. Sicherung</th>
  </tr>
  <tr>
    <th align="right" valign="middle" nowrap="nowrap" bgcolor="#CCCCCC">1. Bitübertragung</th>
  </tr>
</tbody></table>

### HTTP/1.1

- **[SLIDE]** das Hypertext Transfer Protocol (HTTP) nutzen wir alle täglich
- Protokoll dient der Dateiübertragung und wird vor allem dafür eingesetzt, Websites an unsere Browser zu schicken
- eingeführt wurde HTTP 1991 (also vor 30 Jahren), standardisiert erst 1996
- im Jahr 2015 kam HTTP/2
- HTTP/2 brachte Server Push, Multiplexing (parallele Streams) und Priorisierung
- mehrere Datenströme können so über die gleiche (physische) Verbindung übertragen werden, was die Anzahl der aufzubauenden Verbindungen reduziert
- inzwischen Erkenntnis:
- [Server Push funktioniert nicht](https://www.ctrl.blog/entry/http2-push-chromium-deprecation.html)
- Server kann zwar nun Initiative bei Auslieferung der Ressourcen übernehmen und wartet nicht erst auf Client-Anfragen
- aber Server müssen dafür konfiguriert werden (teilweise durch Machine Learning automatisiert)
- Chrome Analyse: [nur 0,05% aller HTTP/2 Sessions](https://groups.google.com/a/chromium.org/g/blink-dev/c/K3rYLvmQUBY/m/vOWBKZGoAQAJ?pli=1) verwendet tatsächlich Server Push
- das rechtfertigt eine weitere Unterstützung nicht, findet Chrome und hat angekündigt [Server Push abzuschalten](https://www.chromestatus.com/feature/6302414934114304)
- `<link rel=preload>` sollte alternativ verwendet werden
- damit hat man 1 RTT (round trip time) mehr als push, vermeidet aber auch Anfragen des Clients für Ressourcen, die bereits gecached sind
- parallele Streams und Priorisierung sind in Servern und Clients [nur unzureichend implementiert](https://github.com/andydavies/http2-prioritization-issues)
- bei den Streams macht sich zudem noch die Kombination mit TCP negativ bemerkbar, auf welches HTTP/1.1 und HTTP/2 setzen

### TCP

- HTTP allein reicht nicht aus
- vielmehr benötigt es für die Vermittlung von Verbindungen IP (Internet Protokoll) und den für Datentransport TCP (Transmission Control Protocol)
- während IP für die logische Adressierung von Netzwerken und deren Teilnehmer, sowie die Wegfindung (Routing) im Internet zuständig ist, kümmert sich TCP um Fehlerbehandlung und Flussteuerung, sowie um die Anwendungsunterstützung ((Ports))
- TCP ermöglicht anderen Protokollen (wie HTTP) eine zuverlässige und in korrekter Reihenfolge ablaufende Auslieferung von Daten
- und es ist einer der Gründe, warum wir das Internet gemeinsam mit vielen anderen Nutzern gemeinsam nutzen können: über gleichrangig behandelte Pakete limitiert es die Bandbreite einzelner Nutzer und ermöglicht so eine faire Aufteilung ("Netzneutralität")
- der schichtweise Aufbau der Protokolle macht es einfach, ihre jeweiligen Features miteinander zu kombinieren und deren komplexe Mechanismen nicht neu erfinden zu müssen
- TCP ist die Grundlage für sehr viele Anwendungen des Internets, weshalb ihm eine fundamentale Bedeutung zukommt
- allerdings wurde TCP während der Anfänge des Internets nicht gerade mit Fokus auf maximale Effizienz erschaffen
- TCP erfordert z.B. [Handshake](https://developer.mozilla.org/en-US/docs/Glossary/TCP_handshake) beim Verbindungsaufbau - damit sicher ist, dass Server und Client existieren und beide gewillt sind, miteinander Daten auszutauschen - man braucht einen ganzen Netzwerk Round Trip
- bevor etwas auf der Verbindung passiert, können über 100ms vergehen (abhängig von geografischer Distanz)
- der Verwaltungsanteil von mindestens 40 Byte pro TCP/IP-Datenpaket ist nicht gerade klein
- und dann sieht TCP alle zu transportierenden Daten als eine Datei bzw. Bytestream an (auch wenn man mehrere Dateien gleichzeitig überträgt)
- aber dazu gleich noch etwas mehr
- es gab einige Verbesserungen, z.B. TCP Fast Open, das Handshake-Overhead abschaffen wollte oder MultiPath TCP, das aktive parallele Verbindungen über WLAN und mobile Daten ausnutzen wollte
- Schwierigkeit dabei ist aber das Verbreiten dieser TCP Erweiterungen
- weil TCP so populär ist, besitzt jedes Netzwerkgerät seine eigene Implementierung des Protokolls
- sind diese zu alt, nicht regelmäßig aktualisiert oder fehlerhaft, können TCP Erweiterungen nicht verwendet werden
- bei Endgeräten (Client und Server) weniger ein Problem als bei Geräten dazwischen: Firewalls, Load Balancer, Router, Caching Server, Proxies usw
- so kann eine Firewall konfiguriert sein, alle (unbekannten) Erweiterungen zu blockieren
- in der Praxis basieren durchaus eine Menge dieser sogenannten "Middleboxes" auf Annahmen über TCP, die für neue Erweiterungen nicht gelten
- es kann daher durchaus mehr als 10 Jahre dauern, bis genügend Geräte an Updates von TCP angepasst sind

### HTTP/3 + QUIC Grundprinzip

![Vergleich der Protokollstacks](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6ef36d1e-d91e-43e0-8732-f3e66ba9ea64/protocol-stack-h2-h3.png)

- **[SLIDE]** daher war klar, dass TCP einen von Grund auf neuen Nachfolger benötigt
- das wurde als monumentales Vorhaben bewertet und daher in den frühen 2010er Jahren aufgeschoben
- hinzu kamen die genannten Probleme mit HTTP/1.1, die zunächst in HTTP/2 behoben werden sollten
- Google arbeitet seit 2012 an Alternative: QUIC
- ursprünglich sollte QUIC einfach nur TCP ersetzen und in Kombination mit HTTP/2 alle bisherigen Probleme lösen
- nachdem aber einige Anpassungen von HTTP/2 an QUIC erforderlich waren, entschied man sich für einen neuen Namen: "HTTP/3"
- außerdem weicht der QUIC Standard in einigen Teilen von Googles ursprünglicher Version ab
- die entscheidenden Verbesserungen bei HTTP/3 kommen allesamt aus QUIC, dem zweiten TCP und nicht aus der Anwendungsschicht (HTTP)
- QUIC ist ein generisches Transportprotokoll, welches für viele Anwendungen (DNS, SSH, HTTP, SMB, RTP) verwendet wird: alle können darauf aufsetzen
- QUIC selbst ist wiederum auf UDP (User Datagram Protocol) aufgesetzt
- UDP ist ein verbindungsloses Protokoll, im Gegensatz zu TCP, welches ständig Informationen über die Verbindung zwischen Client und Server austauscht
- Paketverlust wird bei UDP als unwichtig betrachtet
- es ist auf Geschwindigkeit ausgelegt
- gehen Pakete verloren, ist das nicht schlimm, wie etwa beim Video-Streaming
- QUIC verwendet UDP nicht wegen Performance, sondern wegen Kompatibilität
- ideal wäre ein völlig unabhängiges neues Transportprotokoll, der erforderliche Geräteaustausch würde aber zu ähnlichen Problemen führen wie bei Updates von TCP
- daher baut QUIC auf UDP als ein neben TCP ebenfalls weit verbreitetes Protokoll der Transportschicht auf
- ansonsten reimplementiert QUIC nahezu alle wesentlichen Features von TCP
- es muss auch eine Verbindung aufbauen und ein recht komplexes Handshake durchführen
- wie bei TCP gibt es Mechanismen zur Kontrolle des Datenflusses, um [Überforderung des Empfängers](https://www.rfc-editor.org/rfc/rfc9000.html#name-flow-control) und [Datenstau](https://www.rfc-editor.org/rfc/rfc9002.html) zu vermeiden
- diese werden allerdings performanter umgesetzt

### QUIC Features

1. TLS als fester Bestandteil
2. Unterstützung mehrerer unabhängiger Datenströme
3. Connection IDs
4. Frames

- **[SLIDE]** die wesentlichen Veränderungen gegenüber TCP lassen sich in vier Punkten zusammenfassen
- TLS als fester Bestandteil, Unterstützung mehrerer unabhängiger Bytestreams, Connection IDs, Frames

### QUIC + TLS 1.3

![Handshake Dauer](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/f2240cb4-eb62-4054-ad19-0e72190e0a4f/connection-setup.png)

- **[SLIDE]** das TLS ([Transport Layer Security Protokoll](https://www.cloudflare.com/en-gb/learning/ssl/transport-layer-security-tls/)) ist verantwortlich für die Verschlüsselung von Daten über das Internet
- wenn wir HTTPS verwenden, werden HTTP Daten zunächst verschlüsselt, bevor sie per TCP transportiert werden
- vor ein paar Jahren war Verschlüsselung eine sehr rechenintensive Angelegenheit, aber auch nicht überall erforderlich
- TLS wurde deshalb ein separates Protokoll, welches optional auf TCP angewandt werden kann
- inzwischen ist Verschlüsselung der Normalfall, HTTP/2 ohne TLS wird von keinem gängigen aktuellen Browser mehr unterstützt
- bei QUIC wurde die Verschlüsselung nun tief integriert
- der QUIC Standard verwendet dafür TLS 1.3
- TLS 1.3 reduziert bereits die Auswahl der möglichen Verschlüsselungsalgorithmen auf die wenigen, die am sichersten sind und spart dabei einen Roundtrip, indem der Client direkt vermutet, welchen Algorithmus der Server unterstützen wird
- QUIC ist immer verschlüsselt und verschlüsselt auch fast alle Paketheaderfelder
- QUIC kombiniert zudem die Handshakes für Datentransport und -verschlüsselung zu einem einzigen und spart somit erneut einen Roundtrip

![QUIC Paketverschlüsselung](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/fbf86b42-8f20-4b27-aea5-f1fc164b2683/tcp-vs-quic-packetization.png)

- **[SLIDE]** und dann: weil es vollständig verschlüsselt, können die Boxen dazwischen keine Daten mehr überwachen und auswerten und blockieren auch im Fall einer neuen Version von QUIC keine Pakete
- lediglich die Endgeräte müssen dann Up-To-Date sein

### Multiplexing und HoL

![Multiplexing](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/900ea8f0-3782-4505-b1b6-99ca2954bbce/multiplexing-basic.png)

- **[SLIDE]** der zweite Vorteil: das Multiplexing
- jede noch so einfache Website besteht in der Regel aus mehreren voneinander unabhängigen Ressourcen: HTML, CSS, JS, Bilder usw.
- jede dieser Dateien kann als Abfolge binärer Informationen gesehen werden, die vom Browser in irgendeiner Weise interpretiert werden
- statt die Dateien komplett zu übertragen, werden von TCP daraus kleinere individuelle Pakete von etwa 1400 Byte Größe gemacht
- deren Übertragung kann man als Byte-Stream verstehen
- bei HTTP/1.1 hat jede Datei ihre eigene TCP Verbindung
- die Dateien A, B und C verursachen einen Datenstrom AAAA, BBBB, CCCC (ineffizient, Connection-Overhead)
- Browser laden typischerweise 6-30 Ressourcen gleichzeitig, trotzdem dauert ein Seitenaufbau
- HTTP/2 kam daher mit Multiplexing
- mehrere Ressourcen laufen über eine TCP Verbindung
- einzelne Pakete werden gemischt im Stream übertragen: AABBCCAABBCC
- für TCP als Protokoll handelt es sich dabei jedoch um die Übertragung einer einzelnen Datei
- kein Problem, solange kein Paketverlust

![head-of-line blocking](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/7981cb82-395c-4484-8873-46fd92804b4d/hol-blocking-basic.png)

- **[SLIDE]** geht aber ein Paket verloren, fordert TCP eine erneute Übertragung der Daten an und hält alle restlichen Pakete so lange von deren Verarbeitung zurück (obwohl z.B. A und C bereits da wären)
- Problem nennt man "[head-of-line (HoL) blocking](https://calendar.perfplanet.com/2020/head-of-line-blocking-in-quic-and-http-3-the-details/)" 
- eines der Hauptziele von QUIC ist es, dieses Problem zu lösen
- auch QUIC kennt den Inhalt nicht, kann aber die Daten einzelner Streams unterscheiden und würde daher nur auf Daten des unvollständigen Streams warten

### Connection IDs

![parking-lot problem](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/9413b221-47e9-427b-b958-b0e62fe7f681/1-migration-tcp.png)

- **[SLIDE]** eine andere wesentliche Verbesserung mit QUIC ist, dass Verbindungen länger aktiv bleiben
- über IP Adressen werden Pakete zwischen 2 Geräten geroutet
- damit bei beiden aber auch zeitgleich andere Programme über das Netzwerk bedient werden können, gibt es die Portnummern
- bei TCP wird eine eindeutige Verbindung, über Geräte und Anwendungen hinweg, durch das 4-Tupel charakterisiert (lokale Addresse, lokaler Port, Zieladdresse, Zielport)
- ändert sich einer dieser Parameter, wird die Verbindung ungültig und muss mit einem neuen Handshake wieder hergestellt werden
- verwendet ein Smartphone beispielsweise innerhalb eines Hauses WLAN, wird eine IP-Adresse aus diesem Netzwerk verwendet
- bewegt sich das Gerät nach Außen, verbindet es sich über das Mobilfunknetz, und bekommt dabei eine völlig andere IP-Adresse
- der Server empfängt nun TCP Pakete von einer ihm unbekannten lokalen Addresse und ist nicht in der Lage zu erkennen, dass es sich eigentlich um ein ihm bekanntes Endgerät handelt
- TCP wurde erfunden, als noch keiner an Mobilfunknetze dachte
- daher gibt es keinen Mechanismus, mit dem der Server über einen Netzwerkwechsel informiert werden kann
- und auch ein Schließen der Verbindung ist nicht möglich, da derartige Befehle an das alte 4-Tupel den Client nicht mehr erreichen würden
- mit jedem Netzwerkwechsel können also alle bestehenden TCP Verbindungen nicht mehr benutzt werden und es müssen wieder neue aufgebaut werden
- laufende Prozesse und Aktionen, wie etwa (größere) Downloads, müssen erneut gestartet werden und Videokonferenzen werden unterbrochen
- QUIC führt deshalb die Connection ID ein (CID)

![CID in QUIC](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e6ae0ec1-3b85-49a9-9707-ee21ce5b02b3/2-migration-single-cid.png)

- **[SLIDE]** zusätzlich zum 4-Tupel gibt es eine Nummer, die eine Verbindung zwischen zwei Endpunkten eindeutig identifiziert
- diese ändert sich auch bei einem Wechsel des Netzwerks nicht
- die CID ist Teil eines jeden QUIC Pakets und einer der wenigen unverschlüsselten Teile darin
- neue Handshakes usw. sind überflüssig, Anwendungen müssen ihre Verbindungen nicht neu starten
- weil das für Hacker aber eine extrem einfache Möglichkeit bietet, die CID auszunutzen, wechselt die CID jedesmal, wenn ein neues Netzwerk verwendet wird

![multiple negotiated connection identifiers](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/715f189e-4ae6-4c4c-8db8-9fd8170049d8/3-migration-multi-cid.png)

- **[SLIDE]** damit wird es also dann doch etwas komplizierter
- Server und Client verständigen sich dafür zuvor auf eine Liste zufälliger CIDs, die alle zur gleichen Verbindung gehören
- das geschieht natürlich verschlüsselt

![uses separate client and server CIDs](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/6a0b9339-6976-458d-afc2-4a0cb97a7291/4-migration-src-dst-cid.png)

- **[SLIDE]** und in Wirklichkeit ist es sogar noch komplizierter
- Server und Client verwenden unterschiedliche CIDs, um z.B. Konflikten mit anderen Verbindungen aus dem Weg zu gehen
- ((Pause))

### Frames

![Frames](https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/88c76a7a-2752-4e5b-a829-290cd4951af3/quic-framing.png)

- **[SLIDE]** als letzter Aspekt bei QUIC sei noch erwähnt, dass es einfach ist, dieses weiterzuentwickeln
- durch die fast vollständige Verschlüsselung bleiben Änderungen am Protokoll den Endpunkten vorbehalten und betreffen nicht alle möglichen Geräte dazwischen
- eine Weiterentwicklung ist damit innerhalb einiger Monate denkbar, anstatt bisher über viele Jahre hinweg
- zudem gibt es bei QUIC keine festen Paketheader
- stattdessen setzt es auf Frames, die innerhalb des Paket-Payloads extra Informationen übermitteln können
- ihre Reihenfolge spielt dabei keine Rolle
- hauptsächlich lässt sich mit diesem Konzept eine Übertragung überflüssiger Headerdaten vermeiden
- gleichzeitig vereinfacht es aber auch die Definition zukünftiger Frametypen

### Abschlussbemerkung

- HTTP, in Verbindung mit TCP/IP, hat sich als solide Architektur erwiesen
- HTTP/3 greift aber nun die wesentlichen Probleme des in die Jahre gekommenen Stacks auf, die zwischenzeitlich nicht ordentlich gelöst werden konnten
- HTTP/3 bereits von allen großen Browsern unterstützt, aber noch nicht in allen standardmäßig aktiv
- Server: Litespeed, Nginx u.a. arbeiten an Unterstützung
- bis zum flächendeckenden Einsatz wird es wohl aber noch ein paar Jahre dauern
