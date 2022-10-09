package fees.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import fees.entity.FeesEntity;
import fees.repository.FeesRepository;

@Repository
public class FeesDao {
	@Autowired
	private FeesRepository feesRepository;
	public FeesEntity save(FeesEntity entity) {
		return feesRepository.save(entity);
		
	}
	
	public Optional<FeesEntity> findById(Long id) {
		return feesRepository.findById(id);
	}
	public void deleteById(Long id) {
		feesRepository.deleteById(id);
	}
	
	public Optional<FeesEntity> updateById(Long id, FeesEntity entity) {
		return feesRepository.findById(id).map(updatedEntity->{
		//FeesEntity updatedEntity=new FeesEntity();
		updatedEntity.setAddmissionFee(entity.getAddmissionFee());
		updatedEntity.setActivityFee(entity.getActivityFee());
		updatedEntity.setAnnualFee(entity.getAnnualFee());
		updatedEntity.setExamFee(entity.getExamFee());
		updatedEntity.setMonthlyFee(entity.getMonthlyFee());
		updatedEntity.setTransportFee(entity.getTransportFee());
		return feesRepository.save(updatedEntity);
	});
	

}
}
