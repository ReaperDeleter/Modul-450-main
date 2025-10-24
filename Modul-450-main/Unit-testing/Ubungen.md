Aufgabe 2

# Übersicht der gängigsten JUnit Features

JUnit ist ein weit verbreitetes Testframework für Java, das das Schreiben und Ausführen von Unit-Tests erleichtert. Die wichtigsten Features sind:

---

## 1. Testklassen und Testmethoden

- **Feature:** Annotieren von Klassen und Methoden für Tests.
- **Anwendung:** Jede Testmethode wird mit `@Test` markiert.
- **Beispiel:**
```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

class CalculatorTest {

    @Test
    void additionTest() {
        assertEquals(5, 2 + 3, "2 + 3 sollte 5 ergeben");
    }
};
```


## 2. Assertions

Feature: Überprüfen von Bedingungen innerhalb eines Tests.

Anwendung: Vergleich von erwarteten und tatsächlichen Ergebnissen.

Beispiele:
```java
import static org.junit.jupiter.api.Assertions.*;

@Test
void assertionExamples() {
  
    assertEquals(10, 5 + 5, "5 + 5 sollte 10 ergeben");
    
   
    assertNotEquals(10, 5 + 4, "5 + 4 sollte nicht 10 ergeben");
    
   
    assertTrue(7 > 5, "7 sollte größer als 5 sein");
    assertFalse(5 > 7, "5 sollte nicht größer als 7 sein");
    
   
    assertNotNull("JUnit", "String darf nicht null sein");
   
    assertThrows(NumberFormatException.class, () -> Integer.parseInt("abc"));
}
```

3. Setup und Teardown

Feature: Vor- und Nachbereitung von Tests.

Anwendung: Ressourcen initialisieren oder aufräumen.

Beispiel:
```Java
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;

class DatabaseTest {

    @BeforeEach
    void setup() {
        // Verbindung zur DB herstellen
    }

    @AfterEach
    void teardown() {
        // Verbindung schließen
    }
}
```