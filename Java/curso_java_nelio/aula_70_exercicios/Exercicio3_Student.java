public class Exercicio3_Student {
    String name;
    float grade1;
    float grade2;
    float grade3;

    public float sumGrades() {
        return grade1 + grade2 + grade3;
    }

    public String checkAproved() {
        if (sumGrades() >= 60) {
            return "PASS";
        } else {
            String points = Float.toString(60 - sumGrades());
            return "FAILED" + "\nMISSING " + points + " POINTS";

        }
    }

    @Override
    public String toString() {
        return name;
    }

}
