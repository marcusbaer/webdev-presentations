- docker run --name some-lynx -it --rm adamoss/lynx lynx gopher://gopher.floodgap.com:70
- docker run --name some-lynx -it --rm --network="host" adamoss/lynx lynx http://localhost:8080
- docker run --name some-lynx -it --rm --network="host" adamoss/lynx lynx gopher://0.0.0.0:70

- docker run --name some-lynx -it --rm --network="host" adamoss/lynx lynx gopher://localhost:70/content1

Read more:

- https://en.wikipedia.org/wiki/Gopher_(protocol)
- https://dev.to/dotcomboom/the-gopher-protocol-in-brief-1d88
- https://gmap.dotcomboom.repl.co/
- https://datatracker.ietf.org/doc/html/rfc1436
- https://www.elshami.com/Terms/G/gopher.pdf
- https://de.wikipedia.org/wiki/Gopher
- https://github.com/jgoerzen/pygopherd

- [ ] Wikipedia HTTP, https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol
- [ ] Wikipedia Gopher, https://de.wikipedia.org/wiki/Gopher
- [ ] GOPHER (a 15 min ramble!), https://www.youtube.com/watch?v=ORgk-AwD7SQ
- [ ] Exploring Gopher: The Internet's FORGOTTEN alternative to the Web that's STILL AROUND, https://www.youtube.com/watch?v=CmMF8zZg6N4
- [ ] The Web Is Broken Beyond Repair. The Alternative? GOPHER!, https://www.youtube.com/watch?v=lUBhOgK5zQI
- [ ] The technical differences between HTTP and gopher, http://boston.conman.org/2019/01/12.2
- [ ] http://gopherspace.de/start/was.php
- [ ] RFC 1436, https://datatracker.ietf.org/doc/html/rfc1436 + https://www.heise.de/netze/rfc/rfcs/rfc1436.shtml
- [ ] Gopher, https://www.elshami.com/Terms/G/gopher.pdf
- [ ] Firefox Add-On "OverbiteWX"
- [ ] apt install pygopherd + ssh + cd /var/gopher
- [ ] gopherhole (instead of website)
- [ ] gopher://sdf.org/0/users/tfurrows/phlog/2018/aco_gopherVsHttp.txt
- [ ] https://github.com/kieselsteini/cgo
- [ ] Wenn du nur Inhalt ausliefern willst, ist gopher die bessere Alternative
- [ ] Wirklich? Was ist mit Formatierung usw. --> Gemini
- [ ] modern alternative to HTTP is Gemini, https://www.youtube.com/watch?v=Iq1k_FCWPXk + https://gemini.circumlunar.space/ + https://thenewstack.io/souped-up-gopher-project-geminis-plan-to-revolutionize-internet-browsing/ + https://de.wikipedia.org/wiki/Geminispace + https://www.youtube.com/watch?v=DoEI6VzybDk + https://portal.mozz.us/gemini/gemini.circumlunar.space/docs/gemtext.gmi

### PYGOPHERD

docker build -t pygopherd-ubuntu --file=pygopherd-ubuntu.Dockerfile .
docker run --name pygopherd -it --rm -p 70:70 -v ~/gopher:/var/gopher pygopherd-ubuntu