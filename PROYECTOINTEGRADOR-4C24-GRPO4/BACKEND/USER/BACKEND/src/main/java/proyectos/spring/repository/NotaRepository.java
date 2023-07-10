package proyectos.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyectos.spring.model.Nota;
@Repository
public interface NotaRepository extends JpaRepository<Nota, Long> {
    // Método para filtrar notas por id del alumno
    List<Nota> findByAlumnoIdAlumno(Long idAlumno);
}