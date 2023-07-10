package proyectos.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import proyectos.spring.model.Nota;
import proyectos.spring.service.NotaService;

@RestController
@RequestMapping("/notas")
public class NotaController {
    private final NotaService notaService;

    @Autowired
    public NotaController(NotaService notaService) {
        this.notaService = notaService;
    }

    @GetMapping
    public ResponseEntity<List<Nota>> getAllNotas() {
        List<Nota> notas = notaService.getAllNotas();
        return ResponseEntity.ok(notas);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Nota> getNotaById(@PathVariable("id") Long id) {
        Nota nota = notaService.getNotaById(id);
        if (nota != null) {
            return ResponseEntity.ok(nota);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

   // @GetMapping("/curso/{cursoId}")
   // public ResponseEntity<List<Nota>> getNotasByCursoId(@PathVariable("cursoId") Long cursoId) {
   //     List<Nota> notas = notaService.getNotasByCursoId(cursoId);
    //    return ResponseEntity.ok(notas);
  //  }

   /// @GetMapping("/alumno/{alumnoId}")
   /// public ResponseEntity<List<Nota>> getNotasByAlumnoId(@PathVariable("alumnoId") Long alumnoId) {
  ///      List<Nota> notas = notaService.getNotasByAlumnoId(alumnoId);
   ///     return ResponseEntity.ok(notas);
   /// }
///
    @PostMapping
    public ResponseEntity<Nota> saveNota(@RequestBody Nota nota) {
        Nota savedNota = notaService.saveNota(nota);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedNota);
    }
    @GetMapping("/alumno/{idAlumno}")
    public ResponseEntity<List<Nota>> filtrarNotasPorIdAlumno(@PathVariable Long idAlumno) {
        List<Nota> notas = notaService.filtrarNotasPorIdAlumno(idAlumno);
        return ResponseEntity.ok(notas);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNota(@PathVariable("id") Long id) {
        notaService.deleteNota(id);
        return ResponseEntity.noContent().build();
    }
}