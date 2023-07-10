package proyectos.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyectos.spring.model.Inserccion;
@Repository
public interface InserccionRepository extends JpaRepository<Inserccion, Long> {
    List<Inserccion> findByAlumno_IdAlumno(Long alumnoId);
    List<Inserccion> findByCurso_IdCurso(Long cursoId);
}