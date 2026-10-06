public class Student extends User {

    private String branch;

    public Student(String name, String userId, String branch) {
        super(name, userId);
        this.branch = branch;
    }

    public void displayStudent() {
        displayUser();
        System.out.println("Branch: " + branch);
    }

    @Override
    public void displayRole() {
        System.out.println("Role: Student");
    }
}