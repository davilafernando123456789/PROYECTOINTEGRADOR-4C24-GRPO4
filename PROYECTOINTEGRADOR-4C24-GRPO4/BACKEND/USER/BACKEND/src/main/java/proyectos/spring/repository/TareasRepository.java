package proyectos.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyectos.spring.model.Tarea;


@Repository
public interface TareasRepository extends JpaRepository<Tarea, Long> {
}