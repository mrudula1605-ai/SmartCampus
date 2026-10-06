public class AIAssistant {

    public void askQuestion(String question) {

        if (question.equalsIgnoreCase("find classroom")) {
            System.out.println("You can find classrooms using the Classroom Finder.");
        }
        else if (question.equalsIgnoreCase("parking")) {
            System.out.println("You can check available parking slots.");
        }
        else if (question.equalsIgnoreCase("library")) {
            System.out.println("The library is located in Building 2.");
        }
        else if (question.equalsIgnoreCase("canteen")) {
            System.out.println("There are two canteens on campus.");
        }
        else {
            System.out.println("Sorry, I do not have information about that.");
        }
    }
}