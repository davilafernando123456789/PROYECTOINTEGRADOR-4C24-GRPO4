package proyectos.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import proyectos.spring.model.Comentario;
import proyectos.spring.model.ProfesorUsuario;
import proyectos.spring.repository.ProfesorUsuarioRepository;

@Service
public class ProfesorUsuarioService {
    private final ProfesorUsuarioRepository profesorUsuarioRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ProfesorUsuarioService(ProfesorUsuarioRepository profesorUsuarioRepository, PasswordEncoder passwordEncoder) {
        this.profesorUsuarioRepository = profesorUsuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public ProfesorUsuario registerProfesor(ProfesorUsuario profesorUusario) {
        String encodedPassword = passwordEncoder.encode(profesorUusario.getPassword());
        profesorUusario.setPassword(encodedPassword);
        return profesorUsuarioRepository.save(profesorUusario);
    }

    public ProfesorUsuario findById(Long id) {
        return profesorUsuarioRepository.findById(id).orElse(null);
    }

    public boolean login(String email, String password) {
    	ProfesorUsuario profesorUusario = profesorUsuarioRepository.findByEmail(email);
        return profesorUusario != null && passwordEncoder.matches(password, profesorUusario.getPassword());
    }

    public ProfesorUsuario findByEmail(String email) {
        return profesorUsuarioRepository.findByEmail(email);
    }
    public List<ProfesorUsuario> getAllProfesores() {
        return profesorUsuarioRepository.findAll();
    }
}
