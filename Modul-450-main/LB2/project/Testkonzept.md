# Kleines Testkonzept – Modul 450 (LB2)

## 1. Ziel

Ziel dieses Projekts ist die Entwicklung einer kleinen Applikation nach dem Test-Driven-Development-Konzept (TDD).
Der Fokus liegt auf der Business-Logik, automatisierten Unit-Tests, Mocking von Schnittstellen sowie einer ausreichenden Testabdeckung.

---

## 2. Software-Architektur (Skizze)

```
Controller / Application
          ↓
     UserService
          ↓
     UserRepository (Mock)
```

* Die Business-Logik befindet sich im `UserService`
* Der Datenzugriff erfolgt über ein `UserRepository`, welches in den Tests **gemockt** wird
* Externe Abhängigkeiten werden vollständig isoliert

---

## 3. Zu testende Komponente

* `UserService`

Diese Komponente enthält die komplette Business-Logik und ist daher optimal für Unit-Tests geeignet.

---

## 4. Zu testende Features

* Validierung, dass der Benutzername nicht leer ist
* Validierung des E-Mail-Formats
* Erfolgreiches Erstellen eines Benutzers bei gültigen Daten
* Verhindern von doppelten Benutzern (gleiche E-Mail-Adresse)
* Korrekte Fehlerbehandlung bei ungültigen Eingaben
* Korrekte Interaktion mit dem Repository (Mocking)

---

## 5. Gewählte Testumgebung

* Programmiersprache: **JavaScript (Node.js)**
* Testframework: **Jest**
* Mocking: **Jest Mocks**
* Testart: **Unit-Tests**
* Automatisierung: **npm test**, vorbereitet für CI/CD

---

## 6. Planung / Vorgehen

1. Definition der fachlichen Anforderungen
2. Schreiben der Testfälle vor der Implementierung (TDD)
3. Implementierung der Business-Logik
4. Refactoring unter Beibehaltung grüner Tests
5. Sicherstellen einer Testabdeckung von mindestens 80 %
6. Vorbereitung für automatisierte Testausführung (CI/CD)

---

## 7. Separates Testen von Units (Unit-Test-Strategie)

Die Applikation ist so aufgebaut, dass **jede Business-Regel separat getestet werden kann**.
Dazu werden im `UserService` einzelne Methoden definiert, die jeweils **eine klar abgegrenzte Aufgabe** übernehmen.

### Separat testbare Units

* `validateUsername()`
  → prüft ausschließlich, ob der Benutzername gültig ist
* `validateEmail()`
  → prüft ausschließlich das E-Mail-Format
* `createUser()`
  → enthält die Geschäftslogik zur Benutzererstellung

### Umsetzung der separaten Tests

* Jede Methode wird in **eigenen Unit-Tests** geprüft
* Die Tests sind in getrennten `describe`-Blöcken organisiert
* Abhängigkeiten (Repository) werden vollständig **gemockt**
* Jeder Test ist unabhängig und besitzt einen eigenen Setup-Zustand (`beforeEach`)

### Vorteil

* Jede Unit kann **isoliert ausgeführt und überprüft** werden
* Fehler können eindeutig einer einzelnen Business-Regel zugeordnet werden
* Die Tests entsprechen dem **klassischen Unit-Test-Verständnis**

---


## 8. Automatisierung (CI/CD)

Zur Sicherstellung der Softwarequalität wird eine **Continuous-Integration-Pipeline (CI)** verwendet.

Bei jedem Push oder Pull Request in das Repository werden die Tests **automatisch ausgeführt**.
Dabei werden:

* alle Unit-Tests gestartet
* die Testabdeckung (Coverage) berechnet
* Fehler sofort erkannt

Die Automatisierung stellt sicher, dass fehlerhafter Code nicht unbemerkt integriert wird und entspricht gängigen CI/CD-Praktiken.

Die Pipeline basiert auf **GitHub Actions** und führt den Befehl `npm test` automatisiert aus.
