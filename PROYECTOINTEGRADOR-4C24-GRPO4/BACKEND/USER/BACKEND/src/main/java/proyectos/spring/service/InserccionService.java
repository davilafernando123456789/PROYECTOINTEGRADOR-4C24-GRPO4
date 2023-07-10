package proyectos.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proyectos.spring.model.Inserccion;
import proyectos.spring.repository.InserccionRepository;

@Service
public class InserccionService {
    private final InserccionRepository inserccionRepository;

    @Autowired
    public InserccionService(InserccionRepository inserccionRepository) {
        this.inserccionRepository = inserccionRepository;
    }

    public Inserccion getInserccionById(Long id) {
        return inserccionRepository.findById(id).orElse(null);
    }

    public List<Inserccion> getInserccionesByAlumnoId(Long alumnoId) {
        return inserccionRepository.findByAlumno_IdAlumno(alumnoId);
    }

    public List<Inserccion> getInserccionesByCursoId(Long cursoId) {
        return inserccionRepository.findByCurso_IdCurso(cursoId);
    }

    public Inserccion createInserccion(Inserccion inserccion) {
        return inserccionRepository.save(inserccion);
    }

    public Inserccion updateInserccion(Long id, Inserccion inserccion) {
        Inserccion existingInserccion = inserccionRepository.findById(id).orElse(null);
        if (existingInserccion != null) {
            inserccion.setIdInserccion(existingInserccion.getIdInserccion());
            return inserccionRepository.save(inserccion);
        } else {
            return null;
        }
    }
}
