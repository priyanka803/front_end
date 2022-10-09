package fees.repository;

import org.springframework.data.repository.CrudRepository;

import fees.entity.FeesEntity;

public interface FeesRepository extends CrudRepository<FeesEntity, Long> {

}
