import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PointBean {

// генератор id для бд
    /*  @SequenceGenerator(name = "sequence", sequenceName = "SEQUENCE", allocationSize = 1, initialValue = 1)
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="sequence")
        private int id;*/

    private PointEntity point = new PointEntity();
    private List<PointEntity> points = new ArrayList<>();

    public PointBean() {
    }

    public void addPoint(){
        if (point.validate()) {
            point.setDate(new Date());
           // point.setResult(point.check(point.getX(), point.getY(), point.getR()));
            System.out.println(point.toString());
            points.add(point);
            System.out.println("works: " + point.toString());
            point = new PointEntity();
        }
    }

    public PointEntity getPoint() {
        return point;
    }

    public List<PointEntity> getPoints() {
        return points;
    }
}
