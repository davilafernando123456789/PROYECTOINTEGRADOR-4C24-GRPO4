package proyectos.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proyectos.spring.model.Curso;
import proyectos.spring.model.Tema;
import proyectos.spring.repository.TemaRepository;
import proyectos.spring.service.TemaService;


@RestController
@RequestMapping("/temas")
public class TemaController {
    private final TemaService temaService;

    public TemaController(TemaService temaService) {
        this.temaService = temaService;
    }
    @GetMapping
    public ResponseEntity<List<Tema>> getAllTemas() {
        List<Tema> temas = temaService.getAllTemas();
        if (!temas.isEmpty()) {
            return ResponseEntity.ok(temas);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tema> getTemaById(@PathVariable("id") Long id) {
        Tema tema = temaService.getTemaById(id);
        if (tema != null) {
            return ResponseEntity.ok(tema);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Tema> createTema(@RequestBody Tema tema) {
        Tema createdTema = temaService.createTema(tema);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTema);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tema> updateTema(@PathVariable("id") Long id, @RequestBody Tema tema) {
        Tema updatedTema = temaService.updateTema(id, tema);
        if (updatedTema != null) {
            return ResponseEntity.ok(updatedTema);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTema(@PathVariable("id") Long id) {
        boolean deleted = temaService.deleteTema(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

