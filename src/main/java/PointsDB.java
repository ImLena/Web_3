import javax.annotation.Resource;
import javax.inject.Named;
import javax.transaction.*;
import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Named("pointDB")
public class PointsDB implements Serializable {
    @PersistenceUnit(unitName="Web_3")
    private EntityManagerFactory entityManagerFactory;
    @Resource
    private UserTransaction ut;

    public void addNewPoint(PointEntity point)  {
        EntityManager em = entityManagerFactory.createEntityManager();
        try {
            ut.begin();
            em.persist(point);
            ut.commit();
        } catch (Exception e) {
            try {
                ut.rollback();
            }  catch (SystemException ex) {
                throw new RuntimeException(ex);
            }
            throw new RuntimeException(e);
        }


      /*  SessionFactory sessionFactory = Hibernateutil.getSeeionFactory();
        Session session = sessionFactory.openSession();
        session.beginTransaction();
        Student student = new Student();
        student.setFirstName("Bob");
        student.setAge(26);
        session.save(student);
        session.getTransaction().commit();*/

    }

    public List<PointEntity> getPoints(){
        EntityManager em = entityManagerFactory.createEntityManager();
        List<PointEntity> points = em.createQuery("SELECT point from pointEntity point").getResultList();
        return points;
    }
}