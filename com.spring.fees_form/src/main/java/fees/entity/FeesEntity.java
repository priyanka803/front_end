package fees.entity;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import org.springframework.beans.factory.annotation.Autowired;

import lombok.Data;

@Data
@Entity
public class FeesEntity {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Long feeId;

private Double addmissionFee;
private Double activityFee;
private Double annualFee;
private Double examFee;
private Double monthlyFee;
private Double transportFee;

//@Autowired
//@OneToOne(cascade=CascadeType.ALL)
//@JoinColumn(name = "id",referencedColumnName = "student_id")
//private StudentEntity studentEntity;


}
