package fees.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import fees.dto.FeesDto;
import fees.entity.FeesEntity;
import fees.service.FeesService;

@RestController
public class FeesController {
	@Autowired
	private FeesService feesService;

	@PostMapping("/save")
	public ResponseEntity<FeesDto> saveData(@RequestBody FeesDto feesDto) {
		return new ResponseEntity<>(feesService.saveFee(feesDto), HttpStatus.OK);
	}

	@GetMapping("/get/{id}")
	public Optional<FeesEntity> getData(@PathVariable Long id) {
		return feesService.findFee(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteData(@PathVariable Long id) {
		feesService.deleteFee(id);
		System.out.println("Delete successfully");
	}
	
	@PutMapping("/update/{id}")
	public Optional<FeesEntity> updateData(@PathVariable Long id,@RequestBody FeesEntity entity) {
		return feesService.updateFee(id, entity);
	}

}
