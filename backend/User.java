public class User {

    private String name;
    private String userId;

    public User(String name, String userId) {
        this.name = name;
        this.userId = userId;
    }

    public void displayUser() {
        System.out.println("Name: " + name);
        System.out.println("User ID: " + userId);
    }

    public void displayRole() {
        System.out.println("Role: User");
    }
}