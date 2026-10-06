public class Location {

    private String placeName;
    private String building;
    private String description;

    public Location(String placeName, String building,
                    String description) {

        this.placeName = placeName;
        this.building = building;
        this.description = description;
    }

    public void displayLocation() {

        System.out.println("Place: " + placeName);
        System.out.println("Building: " + building);
        System.out.println("Description: " + description);

        System.out.println("-------------------------");
    }
}