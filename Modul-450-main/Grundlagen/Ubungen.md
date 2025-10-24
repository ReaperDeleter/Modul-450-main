
# Aufgaben

## Aufgabe 1
Arbeiten Sie zu zweit und erläutern Sie mind. drei Beispiele, die Sie aus der Praxis kennen.
Wie werden die Tests durchgeführt?

##Lösung:
### Unit Test

Ein Unit Test wird gemacht, um einzelne Teile von einem Programm zu pruefen, zum Beispiel eine Funktion oder Methode. Man schaut, ob dieser Teil das richtige Ergebnis liefert. In der Praxis benutzt man dafuer oft Programme wie JUnit bei Java oder pytest bei Python. Der Entwickler schreibt kleine Testfaelle, wo bestimmte Eingaben getestet werden. Zum Beispiel, wenn eine Funktion zwei Zahlen addieren soll, wird getestet ob bei 2 und 3 wirklich 5 rauskommt. Wenn das klappt, ist der Test bestanden. Diese Tests werden meistens automatisch ausgefuehrt und helfen Fehler frueh zu finden, bevor das ganze Programm fertig ist.

### Integrationstest

Beim Integrationstest geht es darum zu pruefen, ob mehrere Teile eines Programms richtig zusammenarbeiten. Auch wenn jede Funktion einzeln funktioniert, kann es passieren, dass beim Zusammenspiel Probleme entstehen. In der Praxis prueft man zum Beispiel, ob ein Login Formular richtig mit der Datenbank verbunden ist. Der Test schaut, ob der Benutzer sich einloggen kann, die Daten im Hintergrund richtig verarbeitet werden und keine Fehler passieren. Manchmal werden dafuer Testdatenbanken benutzt, damit nichts in der echten Datenbank kaputt geht. Der Integrationstest kann automatisch oder auch von Hand gemacht werden.

### Systemtest

Beim Systemtest wird das komplette Programm getestet, so wie es spaeter von den Benutzern genutzt wird. Ziel ist es zu sehen, ob alles zusammen richtig funktioniert und ob das Programm stabil laeuft. In der Praxis prueft man zum Beispiel bei einer Webseite, ob man sich einloggen, Produkte suchen oder Bestellungen abschicken kann. Oft werden Systemtests manuell gemacht, also von jemandem, der die Software wie ein normaler Nutzer benutzt. Es gibt aber auch Programme wie Selenium, die das automatisch testen koennen. Der Systemtest ist meistens der letzte Schritt, bevor die Software wirklich veroeffentlicht wird.


## Aufgabe 2
Nennen Sie ein Beispiel eines SW-Fehlers und eines SW-Mangels.
Nennen Sie ein Beispiel für einen hohen Schaden bei einem SW-Fehler.

## Lösung
### Software-Fehler

Ein Software-Fehler ist, wenn im Programm etwas falsch programmiert wurde, also ein technischer Fehler im Code. Zum Beispiel, wenn ein Taschenrechner-Programm bei einer Division durch null abstürzt, weil der Entwickler vergessen hat, diesen Fall abzufangen. Das Programm macht dann nicht das, was es eigentlich soll, und zeigt vielleicht sogar eine Fehlermeldung oder funktioniert gar nicht mehr.

### Beispiel für einen Software-Mangel

Ein Software-Mangel bedeutet, dass das Programm zwar läuft, aber nicht so funktioniert, wie der Kunde es sich gewünscht oder in der Anforderung beschrieben hat. Zum Beispiel, wenn eine App fürs Bestellen von Essen zwar funktioniert, aber keine Bestellbestätigung per E-Mail schickt, obwohl das so vereinbart war. Das ist kein richtiger Fehler im Code, sondern ein Mangel in der Umsetzung oder Planung.

### Beispiel für hohen Schaden bei einem Software-Fehler

Ein großer Schaden kann entstehen, wenn Software in wichtigen Bereichen Fehler hat. Ein bekanntes Beispiel ist ein Fehler in der Steuerungssoftware eines Raketen- oder Flugzeugsystems. Wenn dort eine Berechnung falsch ist, kann das ganze System versagen und es kann zu einem Absturz kommen. Auch in Banken kann ein Software-Fehler großen Schaden anrichten, zum Beispiel wenn durch einen Rechenfehler Millionenbeträge falsch überwiesen werden. Solche Fehler können also sehr teuer oder sogar lebensgefährlich sein.


## Aufgabe 3
Eine Software gliedert sich in der Regel in eine Reihe von Teilsystemen, die wiederum aus einer Vielzahl elementarer
Komponenten besteht. Wir haben im V-Modell gesehen, dass es verschiedene Teststufen gibt. Wir wollen in diesem
Zusammenhang nun ein Beispiel der untersten Stufe anschauen.

## Lösung
Extra Datei