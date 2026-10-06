public class Classroom {

    private String roomNumber;
    private int building;
    private int floor;
    private String branch;
    private boolean occupied;

    // Constructor
    public Classroom(String roomNumber, int building, int floor,
                     String branch, boolean occupied) {

        this.roomNumber = roomNumber;
        this.building = building;
        this.floor = floor;
        this.branch = branch;
        this.occupied = occupied;
    }

    // Display classroom information
    public void displayClassroom() {

        System.out.println("Room Number: " + roomNumber);
        System.out.println("Building: " + building);
        System.out.println("Floor: " + floor);
        System.out.println("Branch: " + branch);

        if (occupied) {
            System.out.println("Status: OCCUPIED");
        } else {
            System.out.println("Status: FREE");
        }

        System.out.println("-------------------------");
    }
}