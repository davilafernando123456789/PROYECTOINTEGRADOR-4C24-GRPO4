package proyectos.spring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proyectos.spring.model.Profesor;
import proyectos.spring.service.ProfesorService;

@RestController
@RequestMapping("/profesores")
public class ProfesorController {
    private final ProfesorService profesorService;

    @Autowired
    public ProfesorController(ProfesorService profesorService) {
        this.profesorService = profesorService;
    }

    @GetMapping
    public ResponseEntity<List<Profesor>> listarTodosLosProfesores() {
        List<Profesor> profesores = profesorService.listarTodosLosProfesores();
        return ResponseEntity.ok(profesores);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Profesor> buscarPorId(@PathVariable Long id) {
        Optional<Profesor> profesor = profesorService.buscarPorId(id);
        return profesor.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/correo/{correo}")
    public ResponseEntity<Profesor> buscarPorCorreo(@PathVariable String correo) {
        Optional<Profesor> profesor = profesorService.buscarPorCorreo(correo);
        return profesor.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}