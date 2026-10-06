public class ParkingSlot {

    private String slotNumber;
    private String type;
    private boolean occupied;
    private String vehicleNumber;

    public ParkingSlot(String slotNumber, String type,
                       boolean occupied, String vehicleNumber) {

        this.slotNumber = slotNumber;
        this.type = type;
        this.occupied = occupied;
        this.vehicleNumber = vehicleNumber;
    }

    public void displayParkingSlot() {

        System.out.println("Slot Number: " + slotNumber);
        System.out.println("Parking Type: " + type);

        if (occupied) {
            System.out.println("Status: OCCUPIED");
            System.out.println("Vehicle Number: " + vehicleNumber);
        } else {
            System.out.println("Status: FREE");
        }

        System.out.println("-------------------------");
    }
}