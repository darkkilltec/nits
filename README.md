# Testprojekt

Erstellen Sie eine neue LitElement-Komponente, die Benutzerdaten von einer API abruft und in einer Liste darstellt. Fügen Sie auch ein Input-Feld hinzu, um die geladenen Benutzerdaten zu filtern. Integrieren Sie die neue Komponente in das vorhandene Routing und erstellen Sie einen neuen Button in der Navbar, der diese Komponente mit den geladenen Benutzerdaten anzeigt.

## Schritte zur Umsetzung:

### Backend-Service:

1. Implementieren Sie eine Methode, die mithilfe von async/await fetch Benutzerdaten von der folgenden API abruft "https://reqres.in/api/users"

### Neue Liste-Komponente:

1. Erstellen Sie eine neue LitElement-Komponente (z. B. user-list.component.ts), die die geladenen Benutzerdaten in einer Liste darstellt.
2. Implementieren Sie ein Input-Feld in der Komponente, um die Benutzerdaten filtern zu können.

### Routing:

1. Fügen Sie die neue Komponente zum bestehenden Routing hinzu.

### Navbar:

1. Erstellen Sie einen neuen Button in der Navbar.
2. Verknüpfen Sie den Button mit der neuen Komponente, sodass beim Klick die Komponente mit den geladenen Benutzerdaten angezeigt wird.

## Label mit Event und Anzeige aktueller Fenstergröße

### Erstellen Sie ein Label in der navbar die, die aktuelle Fenstergröße darstellt. Verwenden Sie dazu einen Event Listener, der die Fenstergröße bei Änderungen aktualisiert.

1. Erstellen sie ein Label in der Navbar komponente, welches die aktuelle Fenstergröße als "Höhe x Breite" formatiert.

2. Fügen Sie einen Event Listener für das "resize" Event hinzu, um das Label mit der aktualisierten Fenstergrößen darzustellen.

3. Stellen Sie sicher, dass das Label bei Änderungen der Fenstergröße automatisch aktualisiert wird.

4. Fügen Sie eine Funktion hinzu, um die Fenstergröße auch bei Initialisierung der Seite anzuzeigen.

Hinweise:

Verwenden Sie die Litelement-Bibliothek, um die Komponente zu erstellen.
Achten Sie auf die korrekte Datenverarbeitung und Fehlerbehandlung bei dem API-Abruf.
Sorgen Sie für eine ansprechende Gestaltung der neuen Komponente und des Input-Felds.
Stylen Sie das Label, um es ansprechend darzustellen.
Wir freuen uns auf Ihre kreative Umsetzung und die Integration der neuen Funktionalität in das bestehende Projekt! Viel Erfolg!
