public class LostItem {

    private int itemId;
    private String itemName;
    private String location;
    private String status;

    public LostItem(int itemId, String itemName,
                    String location, String status) {

        this.itemId = itemId;
        this.itemName = itemName;
        this.location = location;
        this.status = status;
    }

    public void displayItem() {

        System.out.println("Item ID: " + itemId);
        System.out.println("Item: " + itemName);
        System.out.println("Location: " + location);
        System.out.println("Status: " + status);

        System.out.println("-------------------------");
    }
}