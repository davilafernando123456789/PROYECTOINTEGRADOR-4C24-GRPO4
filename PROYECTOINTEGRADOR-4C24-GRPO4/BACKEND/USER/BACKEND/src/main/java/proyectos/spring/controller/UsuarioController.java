package proyectos.spring.controller;

import java.util.List;
import java.util.Optional;

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
import proyectos.spring.model.Usuario;
import proyectos.spring.response.LoginResponseUser;
import proyectos.spring.service.UsuarioService;


@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private final UsuarioService usuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }
    @GetMapping
    public ResponseEntity<List<Usuario>> getAllUsuarios() {
        List<Usuario> usuarios = usuarioService.getAllUsuarios();
        if (!usuarios.isEmpty()) {
            return ResponseEntity.ok(usuarios);
        } else {
            return ResponseEntity.noContent().build();
        }
    }
    @GetMapping("/id/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id) {
        Optional<Usuario> usuarioOptional = usuarioService.findById(id);
        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            return ResponseEntity.ok(usuario);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/registrar")
    public Usuario registerUser(@RequestBody Usuario usuario) {
        return usuarioService.registerUser(usuario);
    }

    @GetMapping("/{email}")
    public Usuario getUserByEmail(@PathVariable String email) {
        return usuarioService.findByEmail(email);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseUser> login(@RequestParam("email") String email, @RequestParam("password") String password) {

        boolean loginSuccessful = usuarioService.login(email, password);

        if (loginSuccessful) {
            return ResponseEntity.ok(new LoginResponseUser(true, "Login successful"));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new LoginResponseUser(false, "Invalid credentials"));
        }
    }
}