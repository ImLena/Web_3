import javax.ejb.Stateless;
import javax.persistence.*;
import java.util.Date;

@Entity(name="pointEntity")
@Table(name="points")
public class PointEntity {

  /*  @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)  */


    @SequenceGenerator(name = "sequence", sequenceName = "SEQUENCE", allocationSize = 1, initialValue = 1)
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator="sequence")
    private long id;

    private double x;
    private double y;
    private double r;
    private boolean result;
    private Date date;

    public void setResult(boolean result) {
        this.result = result;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setX(double x) {
        this.x = x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public void setR(double r) {
        this.r = r;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public double getR() {
        return r;
    }

    public boolean isResult() {
        return result;
    }

    public Date getDate() {
        return date;
    }

    public long getId() {
        return this.id;
    }

    public boolean check(double x, double y, double r) {
        return (x >= 0 && y >= 0 && x <= r && y <= r) || (x <= 0 && y >= 0 && y <= (x - r/2) * (-2)) ||
                (x >= 0 && y <= 0 && x * x + y * y <= Math.pow(r, 2));
    }


    @Override
    public String toString(){
        return id+" "+x+" "+y+" "+r+" "+date+" "+result;
    }
}
