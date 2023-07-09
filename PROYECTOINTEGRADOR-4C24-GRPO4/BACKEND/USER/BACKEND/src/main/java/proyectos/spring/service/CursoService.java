package proyectos.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proyectos.spring.model.Comentario;
import proyectos.spring.model.Curso;
import proyectos.spring.model.Profesor;
import proyectos.spring.repository.CursoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CursoService {
    private final CursoRepository cursoRepository;

    public CursoService(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    public Curso getCursoById(Long id) {
        Optional<Curso> optionalCurso = cursoRepository.findById(id);
        return optionalCurso.orElse(null);
    }

    public Curso createCurso(Curso curso) {
        return cursoRepository.save(curso);
    }

    public Curso updateCurso(Long id, Curso curso) {
        if (cursoRepository.existsById(id)) {
            curso.setIdCurso(id);
            return cursoRepository.save(curso);
        } else {
            return null;
        }
    }

    public boolean deleteCurso(Long id) {
        if (cursoRepository.existsById(id)) {
            cursoRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    public List<Curso> getAllCursos() {
        return cursoRepository.findAll();
    }
}
