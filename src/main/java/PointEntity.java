import java.util.Date;

public class PointEntity {
    private double x;
    private double y;
    private double r;
    private boolean result;
    private Date date;

    public PointEntity() {
    }

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

    public boolean check(double x, double y, double r) {
        return (x >= 0 && y >= 0 && x <= r && y <= r) || (x <= 0 && y >= 0 && y <= (x - r/2) * (-2)) ||
                (x >= 0 && y <= 0 && x * x + y * y <= Math.pow(r, 2));
    }

    public boolean validate(){
        return true;
    }

    @Override
    public String toString(){
        return x+" "+y+" "+r;
    }
}
