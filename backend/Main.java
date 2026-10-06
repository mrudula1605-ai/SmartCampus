import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {

        ArrayList<Classroom> classrooms = new ArrayList<>();

        classrooms.add(new Classroom("1001", 1, 0, "CS", false));
        classrooms.add(new Classroom("1002", 1, 0, "CS", true));
        classrooms.add(new Classroom("1003", 1, 0, "IT", false));
        classrooms.add(new Classroom("1004", 1, 0, "IT", false));

        for (Classroom room : classrooms) {
            room.displayClassroom();
        }
    }
}