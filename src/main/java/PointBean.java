import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Named;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

public class PointBean implements Serializable {

    @Inject
    @Named("pointDB")
    PointsDB pointsDB;

    private PointEntity point = new PointEntity();
    private List<PointEntity> points = new ArrayList<>();
    private Double[] Vals = {1.0, 2.0, 3.0, 4.0, 5.0};

    public PointBean() {}

    public void addPoint() {
        if (validate()) {
            point.setDate(new Date());
            point.setResult(point.check(point.getX(), point.getY(), point.getR()));
            System.out.println(point.toString());
            addToDB(point);
            points = pointsDB.getPoints();
            System.out.println("works: " + point.toString());
            point = new PointEntity();
        }
    }

    private boolean validate(){
        return (point.getX()<3&&point.getX()>-3)&&(Arrays.asList(Vals).contains(point.getR()));
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