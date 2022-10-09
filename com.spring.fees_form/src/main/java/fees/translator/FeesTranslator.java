package fees.translator;

import org.springframework.stereotype.Component;

import fees.dto.FeesDto;
import fees.entity.FeesEntity;
@Component
public class FeesTranslator {
	
	
		public FeesEntity translateRequestToEntity(FeesDto FeesDto) {
			FeesEntity entity=new FeesEntity();
			entity.setFeeId(FeesDto.getFeeId());
			entity.setAddmissionFee(FeesDto.getAddmissionFee());
			entity.setActivityFee(FeesDto.getActivityFee());
			entity.setAnnualFee(FeesDto.getAnnualFee());
			entity.setExamFee(FeesDto.getExamFee());
			entity.setMonthlyFee(FeesDto.getMonthlyFee());
			entity.setTransportFee(FeesDto.getTransportFee());
			return entity;
		}
		
		
		public FeesDto translateEntityToRequest(FeesEntity entity) {
			FeesDto feesDto=new FeesDto();
			feesDto.setFeeId(entity.getFeeId());
			feesDto.setAddmissionFee(entity.getAddmissionFee());
			feesDto.setActivityFee(entity.getActivityFee());
			feesDto.setAnnualFee(entity.getAnnualFee());
			feesDto.setExamFee(entity.getExamFee());
			feesDto.setMonthlyFee(entity.getMonthlyFee());
			feesDto.setTransportFee(entity.getTransportFee());
			return feesDto;
		}
}
