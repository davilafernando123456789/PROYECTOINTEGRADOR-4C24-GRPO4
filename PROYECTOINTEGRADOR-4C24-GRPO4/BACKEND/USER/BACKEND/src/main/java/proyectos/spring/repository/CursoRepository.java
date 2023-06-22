package proyectos.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import proyectos.spring.model.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {
}