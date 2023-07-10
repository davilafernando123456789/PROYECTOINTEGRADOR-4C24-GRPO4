package proyectos.spring.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proyectos.spring.model.ProfesorUsuario;

@Repository
public interface ProfesorUsuarioRepository extends JpaRepository<ProfesorUsuario, Long> {
	ProfesorUsuario findByEmail(String email);
    Optional<ProfesorUsuario> findById(Long idProfesor);
}
