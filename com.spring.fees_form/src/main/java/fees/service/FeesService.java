package fees.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fees.dao.FeesDao;
import fees.dto.FeesDto;
import fees.entity.FeesEntity;
import fees.translator.FeesTranslator;


@Service
public class FeesService {
	@Autowired
	private FeesDao feesDao;
	
	@Autowired
	private FeesTranslator feesTranslator;
	
	public FeesDto saveFee(FeesDto feesDto) {
		FeesEntity entity= feesTranslator.translateRequestToEntity(feesDto);
		FeesEntity saveEntity=feesDao.save(entity);
		FeesDto response=feesTranslator.translateEntityToRequest(saveEntity);
		return response;
	}
	public Optional<FeesEntity> findFee(Long id) {
		return feesDao.findById(id);
	}
	
	public void deleteFee(Long id) {
		feesDao.deleteById(id);
	}
	
	public Optional<FeesEntity> updateFee(Long id, FeesEntity entity) {
		return feesDao.updateById(id, entity);
	}
}
