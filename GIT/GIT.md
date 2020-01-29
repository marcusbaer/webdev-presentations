# GIT

## Zurück zum letzten Stand des Origin

```
git fetch --all
git reset --hard origin/master
```

## Dateien aus Repo und Arbeitsverzeichnung löschen

```
git rm *.txt
git rm -r <dirname>

# remove from repo but keep on disk, as we forgot to add to .gitignore
git rm <filename> --cache
```

## Remove from stage

```
git reset HEAD <file>
git checkout -- <file>
```
