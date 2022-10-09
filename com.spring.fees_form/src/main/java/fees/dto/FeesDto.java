package fees.dto;

import lombok.Data;

@Data
public class FeesDto {
	private Long feeId;
	private Double addmissionFee;
	private Double activityFee;
	private Double annualFee;
	private Double examFee;
	private Double monthlyFee;
	private Double transportFee;
}
