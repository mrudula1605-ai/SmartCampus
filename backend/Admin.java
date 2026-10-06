public class Admin extends User {

    private String role;

    public Admin(String name, String userId, String role) {
        super(name, userId);
        this.role = role;
    }

    public void displayAdmin() {
        displayUser();
        System.out.println("Role: " + role);
    }

    @Override
    public void displayRole() {
        System.out.println("Role: Admin");
    }
}