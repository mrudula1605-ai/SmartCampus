import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        System.out.println("===== SMART CAMPUS INTELLIGENCE PLATFORM =====");
        System.out.println();

        // USER DETAILS

        Student student = new Student("Mrudula", "S001", "AIML");
        Admin admin = new Admin("Campus Admin", "A001", "Administrator");

        System.out.println("===== USER DETAILS =====");

        student.displayStudent();
        student.displayRole();

        System.out.println("-------------------------");

        admin.displayAdmin();
        admin.displayRole();

        System.out.println("-------------------------");

        User user1 = student;
        User user2 = admin;

        user1.displayRole();
        user2.displayRole();

        System.out.println();


        // CLASSROOMS

        System.out.println("===== CLASSROOMS =====");

        ArrayList<Classroom> classrooms = new ArrayList<>();

        classrooms.add(new Classroom("1001", 1, 0, "CS", false));
        classrooms.add(new Classroom("1002", 1, 0, "CS", true));
        classrooms.add(new Classroom("1003", 1, 0, "IT", false));
        classrooms.add(new Classroom("2001", 2, 0, "AI & DS", false));

        for (Classroom room : classrooms) {
            room.displayClassroom();
        }


        // PARKING

        System.out.println("===== PARKING =====");

        ParkingSlot slot1 =
                new ParkingSlot("S01", "Student", false, "");

        ParkingSlot slot2 =
                new ParkingSlot("T01", "Staff", true, "MH12AB1234");

        slot1.displayParkingSlot();
        slot2.displayParkingSlot();


        // LOST AND FOUND

        System.out.println("===== LOST AND FOUND =====");

        LostItem item1 =
                new LostItem(1, "Water Bottle",
                        "Building 1", "Found");

        LostItem item2 =
                new LostItem(2, "Notebook",
                        "Library", "Lost");

        item1.displayItem();
        item2.displayItem();


        // CAMPUS NAVIGATION

        System.out.println("===== CAMPUS NAVIGATION =====");

        Location location1 =
                new Location("Library",
                        "Building 2",
                        "Library is located in Building 2.");

        Location location2 =
                new Location("Main Canteen",
                        "Campus Ground",
                        "Main canteen is near the academic buildings.");

        location1.displayLocation();
        location2.displayLocation();


        // EMERGENCY ALERT

        System.out.println("===== EMERGENCY ALERT =====");

        EmergencyAlert alert =
                new EmergencyAlert(
                        1,
                        "Fire emergency reported.",
                        "Building 3",
                        "HIGH"
                );

        alert.displayAlert();


        // AI ASSISTANT

        System.out.println("===== AI ASSISTANT =====");

        AIAssistant assistant = new AIAssistant();

        assistant.askQuestion("library");
        assistant.askQuestion("parking");
        assistant.askQuestion("find classroom");
    }
}