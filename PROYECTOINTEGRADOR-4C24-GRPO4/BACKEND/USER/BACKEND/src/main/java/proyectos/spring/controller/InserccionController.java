package proyectos.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import proyectos.spring.model.Inserccion;
import proyectos.spring.service.InserccionService;

@RestController
@RequestMapping("/insercciones")
public class InserccionController {
    private final InserccionService inserccionService;

    @Autowired
    public InserccionController(InserccionService inserccionService) {
        this.inserccionService = inserccionService;
    }
    @GetMapping("/{id}")
    public ResponseEntity<Inserccion> getInserccionById(@PathVariable("id") Long id) {
        Inserccion inserccion = inserccionService.getInserccionById(id);
        if (inserccion != null) {
            return ResponseEntity.ok(inserccion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/alumno/{idAlumno}")
    public ResponseEntity<List<Inserccion>> getInserccionesByAlumnoId(@PathVariable("idAlumno") Long idAlumno) {
        List<Inserccion> insercciones = inserccionService.getInserccionesByAlumnoId(idAlumno);
        return ResponseEntity.ok(insercciones);
    }

    @GetMapping("/curso/{idCurso}")
    public ResponseEntity<List<Inserccion>> getInserccionesByCursoId(@PathVariable("idCurso") Long idCurso) {
        List<Inserccion> insercciones = inserccionService.getInserccionesByCursoId(idCurso);
        return ResponseEntity.ok(insercciones);
    }

    @PostMapping
    public ResponseEntity<Inserccion> createInserccion(@RequestBody Inserccion inserccion) {
        Inserccion createdInserccion = inserccionService.createInserccion(inserccion);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdInserccion);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Inserccion> updateInserccion(
            @PathVariable("id") Long id,
            @RequestBody Inserccion inserccion
    ) {
        Inserccion updatedInserccion = inserccionService.updateInserccion(id, inserccion);
        if (updatedInserccion != null) {
            return ResponseEntity.ok(updatedInserccion);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}