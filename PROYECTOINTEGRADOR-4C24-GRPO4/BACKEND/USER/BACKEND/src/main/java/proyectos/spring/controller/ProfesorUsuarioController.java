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
import proyectos.spring.model.ProfesorUsuario;
import proyectos.spring.response.LoginResponseProfesor;
import proyectos.spring.response.LoginResponseUser;
import proyectos.spring.service.CursoService;
import proyectos.spring.service.ProfesorUsuarioService;

@RestController
@RequestMapping("/api/profesores")
public class ProfesorUsuarioController {
    private final ProfesorUsuarioService profesorUsuarioService;
    private final CursoService cursoService;

    @Autowired
    public ProfesorUsuarioController(ProfesorUsuarioService profesorUsuarioService, CursoService cursoService) {
        this.profesorUsuarioService = profesorUsuarioService;
        this.cursoService = cursoService;
    }
    @GetMapping
    public ResponseEntity<List<ProfesorUsuario>> getAllProfesores() {
        List<ProfesorUsuario> profesores = profesorUsuarioService.getAllProfesores();
        if (!profesores.isEmpty()) {
            return ResponseEntity.ok(profesores);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping("/registrar")
    public ProfesorUsuario registerProfesor(@RequestBody ProfesorUsuario profesorUusario) {
        return profesorUsuarioService.registerProfesor(profesorUusario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProfesorUsuario> getProfesorById(@PathVariable Long id) {
    	ProfesorUsuario profesorUusario = profesorUsuarioService.findById(id);
        if (profesorUusario != null) {
            return ResponseEntity.ok(profesorUusario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponseProfesor> login(@RequestParam("email") String email, @RequestParam("password") String password) {
        boolean loginSuccessful = profesorUsuarioService.login(email, password);

        if (loginSuccessful) {
            ProfesorUsuario profesorUsuario = profesorUsuarioService.findByEmail(email);
            Profesor profesor = profesorUsuario.getProfesor(); // Obtén el objeto Profesor después de la autenticación
            return ResponseEntity.ok(new LoginResponseProfesor(true, "Login successful", profesorUsuario.getIdUsuarioProfesor(), profesor.getNombres()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponseProfesor(false, "Invalid credentials", null, null));
        }
    }

}
