import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Named;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PointBean implements Serializable {

    // генератор id для бд
    /*  @SequenceGenerator(name = "sequence", sequenceName = "SEQUENCE", allocationSize = 1, initialValue = 1)
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="sequence")
        private int id;*/
    @Inject
    @Named("pointDB")
    PointsDB pointsDB;

    private PointEntity point = new PointEntity();
    private List<PointEntity> points = new ArrayList<>();

/*
    @PostConstruct
    public void init(){
        point = new PointEntity();
        points = new ArrayList<>(pointsDB.getPoints());
    }
*/

    public PointBean() {}

    public void addPoint() {
        if (point.validate()) {
            point.setDate(new Date());
            point.setResult(point.check(point.getX(), point.getY(), point.getR()));
            System.out.println(point.toString());
            addToDB(point);
            points = pointsDB.getPoints();
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

    private void addToDB(PointEntity p) {
        pointsDB.addNewPoint(p);
    }
}
