package proyectos.spring.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyectos.spring.model.Curso;
import proyectos.spring.model.Profesor;
import proyectos.spring.model.Tema;
@Repository
public interface TemaRepository extends JpaRepository<Tema, Long> {
}
