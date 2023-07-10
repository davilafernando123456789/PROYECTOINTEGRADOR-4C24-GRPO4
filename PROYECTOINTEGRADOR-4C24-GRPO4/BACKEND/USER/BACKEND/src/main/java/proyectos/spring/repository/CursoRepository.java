package proyectos.spring.repository;

import java.util.List;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import proyectos.spring.model.Curso;
import proyectos.spring.model.Profesor;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Long> {
}