package proyectos.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyectos.spring.model.RealizacionTarea;
@Repository
public interface RealizacionTareaRepository extends JpaRepository<RealizacionTarea, Long> {
    List<RealizacionTarea> findByAlumno_IdAlumno(Long alumnoId);
    List<RealizacionTarea> findByTarea_IdTarea(Long tareaId);
}
