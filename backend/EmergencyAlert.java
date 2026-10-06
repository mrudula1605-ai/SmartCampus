public class EmergencyAlert {

    private int alertId;
    private String message;
    private String location;
    private String severity;

    public EmergencyAlert(int alertId, String message,
                          String location, String severity) {

        this.alertId = alertId;
        this.message = message;
        this.location = location;
        this.severity = severity;
    }

    public void displayAlert() {

        System.out.println("Alert ID: " + alertId);
        System.out.println("Message: " + message);
        System.out.println("Location: " + location);
        System.out.println("Severity: " + severity);

        System.out.println("-------------------------");
    }
}