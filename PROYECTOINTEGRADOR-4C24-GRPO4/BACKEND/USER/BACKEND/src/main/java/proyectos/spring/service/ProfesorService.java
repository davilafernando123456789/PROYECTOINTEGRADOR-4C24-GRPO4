package proyectos.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectos.spring.model.Profesor;
import proyectos.spring.repository.ProfesorRepository;

@Service
public class ProfesorService {
    private final ProfesorRepository profesorRepository;

    @Autowired
    public ProfesorService(ProfesorRepository profesorRepository) {
        this.profesorRepository = profesorRepository;
    }

    public List<Profesor> listarTodosLosProfesores() {
        return profesorRepository.findAll();
    }

    public Optional<Profesor> buscarPorId(Long id) {
        return profesorRepository.findById(id);
    }

    public Optional<Profesor> buscarPorCorreo(String correo) {
        return profesorRepository.findByEmail(correo);
    }
}