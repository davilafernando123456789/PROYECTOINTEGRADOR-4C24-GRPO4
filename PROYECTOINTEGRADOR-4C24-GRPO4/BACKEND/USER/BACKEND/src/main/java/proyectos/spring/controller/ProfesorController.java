package proyectos.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import proyectos.spring.model.Curso;
import proyectos.spring.model.Profesor;
import proyectos.spring.response.LoginResponseProfesor;
import proyectos.spring.response.LoginResponseUser;
import proyectos.spring.service.CursoService;
import proyectos.spring.service.ProfesorService;

@RestController
@RequestMapping("/api/profesores")
public class ProfesorController {
    private final ProfesorService profesorService;
    private final CursoService cursoService;

    @Autowired
    public ProfesorController(ProfesorService profesorService, CursoService cursoService) {
        this.profesorService = profesorService;
        this.cursoService = cursoService;
    }
    @GetMapping
    public ResponseEntity<List<Profesor>> getAllProfesores() {
        List<Profesor> profesores = profesorService.getAllProfesores();
        if (!profesores.isEmpty()) {
            return ResponseEntity.ok(profesores);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping("/registrar")
    public Profesor registerProfesor(@RequestBody Profesor profesor) {
        return profesorService.registerProfesor(profesor);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Profesor> getProfesorById(@PathVariable Long id) {
        Profesor profesor = profesorService.findById(id);
        if (profesor != null) {
            return ResponseEntity.ok(profesor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseProfesor> login(@RequestParam("email") String email, @RequestParam("password") String password) {

        boolean loginSuccessful = profesorService.login(email, password);

        if (loginSuccessful) {
            return ResponseEntity.ok(new LoginResponseProfesor(true, "Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponseProfesor(false, "Invalid credentials"));
        }
    }


}