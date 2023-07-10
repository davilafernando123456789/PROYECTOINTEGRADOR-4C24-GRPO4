package proyectos.spring.controller;

import java.util.List;

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

import proyectos.spring.model.RealizacionTarea;
import proyectos.spring.service.RealizacionTareaService;

@RestController
@RequestMapping("/Realizartareas")
public class RealizacionTareaController {
    private final RealizacionTareaService realizacionTareaService;

    @Autowired
    public RealizacionTareaController(RealizacionTareaService realizacionTareaService) {
        this.realizacionTareaService = realizacionTareaService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<RealizacionTarea> getRealizacionTareaById(@PathVariable("id") Long id) {
        RealizacionTarea realizacionTarea = realizacionTareaService.getRealizacionTareaById(id);
        if (realizacionTarea != null) {
            return ResponseEntity.ok(realizacionTarea);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/alumno/{idAlumno}")
    public ResponseEntity<List<RealizacionTarea>> getRealizacionTareasByAlumnoId(@PathVariable("idAlumno") Long idAlumno) {
        List<RealizacionTarea> realizacionTareas = realizacionTareaService.getRealizacionTareasByAlumnoId(idAlumno);
        return ResponseEntity.ok(realizacionTareas);
    }

    @GetMapping("/tarea/{idTarea}")
    public ResponseEntity<List<RealizacionTarea>> getRealizacionTareasByTareaId(@PathVariable("idTarea") Long idTarea) {
        List<RealizacionTarea> realizacionTareas = realizacionTareaService.getRealizacionTareasByTareaId(idTarea);
        return ResponseEntity.ok(realizacionTareas);
    }

    @PostMapping
    public ResponseEntity<RealizacionTarea> createRealizacionTarea(@RequestBody RealizacionTarea realizacionTarea) {
        RealizacionTarea createdRealizacionTarea = realizacionTareaService.createRealizacionTarea(realizacionTarea);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRealizacionTarea);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RealizacionTarea> updateRealizacionTarea(
            @PathVariable("id") Long id,
            @RequestBody RealizacionTarea realizacionTarea
    ) {
        RealizacionTarea updatedRealizacionTarea = realizacionTareaService.updateRealizacionTarea(id, realizacionTarea);
        if (updatedRealizacionTarea != null) {
            return ResponseEntity.ok(updatedRealizacionTarea);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
