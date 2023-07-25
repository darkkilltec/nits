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

### Erstellen Sie ein Label in der navbar, die, die aktuelle Fenstergröße darstellt. Verwenden Sie dazu einen Event Listener, der die Fenstergröße bei Änderungen aktualisiert.

1. Erstellen Sie ein Label in der Navbar Komponente, welches die aktuelle Fenstergröße als "Höhe x Breite" formatiert.

2. Fügen Sie einen Event Listener für das "resize" Event hinzu, um das Label mit der aktualisierten Fenstergrößen darzustellen.

3. Stellen Sie sicher, dass das Label bei Änderungen der Fenstergröße automatisch aktualisiert wird.

4. Fügen Sie eine Funktion hinzu, um die Fenstergröße auch bei Initialisierung der Seite anzuzeigen.

Hinweise:

Verwenden Sie die Litelement-Bibliothek, um die Komponente zu erstellen.
Achten Sie auf die korrekte Datenverarbeitung und Fehlerbehandlung bei dem API-Abruf.
Sorgen Sie für eine ansprechende Gestaltung der neuen Komponente und des Input-Felds.
Stylen Sie das Label, um es ansprechend darzustellen.
Wir freuen uns auf Ihre kreative Umsetzung und die Integration der neuen Funktionalität in das bestehende Projekt! Viel Erfolg!

# Test Project

Create a new LitElement component that fetches user data from an API and displays it in a list. Add an input field to filter the loaded user data. Integrate the new component into the existing routing and create a new button in the navbar that displays this component with the loaded user data.

## Implementation Steps:

### Backend Service:

1. Implement a method that fetches user data from the following API using async/await fetch: "https://reqres.in/api/users"

### New List Component:

1. Create a new LitElement component (e.g., user-list.component.ts) to display the loaded user data in a list.
2. Implement an input field in the component to filter the user data.

### Routing:

1. Add the new component to the existing routing.

### Navbar:

1. Create a new button in the navbar.
2. Link the button to the new component, so clicking it displays the component with the loaded user data.

## Label with Event to Display Current Window Size

### Create a label in the navbar that displays the current window size. Use an event listener to update the window size on changes.

1. Create a label in the Navbar component that formats the current window size as "Height x Width."

2. Add an event listener for the "resize" event to display the label with the updated window size.

3. Ensure the label automatically updates on changes to the window size.

4. Add a function to display the window size on page initialization.

Notes:

Use the Litelement library to create the component.
Pay attention to proper data processing and error handling during the API fetch.
Design the new component and input field to be visually appealing.
Style the label to make it visually appealing.
We look forward to seeing your creative implementation and the integration of new functionality into the existing project! Good luck!
