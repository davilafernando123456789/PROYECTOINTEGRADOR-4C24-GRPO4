package proyectos.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proyectos.spring.model.Nota;
import proyectos.spring.repository.NotaRepository;

@Service
public class NotaService {
    private final NotaRepository notaRepository;

    @Autowired
    public NotaService(NotaRepository notaRepository) {
        this.notaRepository = notaRepository;
    }

    public List<Nota> getAllNotas() {
        return notaRepository.findAll();
    }

    public Nota getNotaById(Long id) {
        return notaRepository.findById(id).orElse(null);
    }
    public List<Nota> filtrarNotasPorIdAlumno(Long idAlumno) {
        return notaRepository.findByAlumnoIdAlumno(idAlumno);
    }

    //public List<Nota> getNotasByCursoId(Long cursoId) {
   ///     return notaRepository.findByCursoId(cursoId);
   /// }

    ///public List<Nota> getNotasByAlumnoId(Long alumnoId) {
     ///   return notaRepository.findByAlumnoId(alumnoId);
    ///}

    public Nota saveNota(Nota nota) {
        return notaRepository.save(nota);
    }

    public void deleteNota(Long id) {
        notaRepository.deleteById(id);
    }
}