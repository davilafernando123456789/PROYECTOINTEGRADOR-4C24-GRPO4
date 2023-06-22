package proyectos.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proyectos.spring.model.Curso;
import proyectos.spring.repository.CursoRepository;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {
    private final CursoRepository cursoRepository;

    @Autowired
    public CursoController(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    @GetMapping
    public List<Curso> obtenerCursos() {
        return cursoRepository.findAll();
    }
    @GetMapping("/{idCurso}")
    public Curso obtenerCursoPorId(@PathVariable("idCurso") Long idCurso) {
        return cursoRepository.findById(idCurso)
                .orElseThrow(() -> new RuntimeException("Curso no encontrado con id: " + idCurso));
    }

    @PostMapping
    public Curso crearCurso(@RequestBody Curso curso) {
        return cursoRepository.save(curso);
    }

    @PutMapping("/{idCurso}")
    public Curso actualizarCurso(@PathVariable("idCurso") Long idCurso, @RequestBody Curso cursoActualizado) {
        return cursoRepository.findById(idCurso)
                .map(curso -> {
                    curso.setNombre(cursoActualizado.getNombre());
                    curso.setDescripcion(cursoActualizado.getDescripcion());
                    return cursoRepository.save(curso);
                })
                .orElseThrow(() -> new RuntimeException("Curso no encontrado con idCurso: " + idCurso));
    }

    @DeleteMapping("/{idCurso}")
    public void eliminarCurso(@PathVariable("idCurso") Long idCurso) {
        cursoRepository.deleteById(idCurso);
    }
}