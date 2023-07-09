package proyectos.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import proyectos.spring.model.Comentario;
import proyectos.spring.model.Profesor;
import proyectos.spring.repository.ProfesorRepository;

@Service
public class ProfesorService {
    private final ProfesorRepository profesorRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ProfesorService(ProfesorRepository profesorRepository, PasswordEncoder passwordEncoder) {
        this.profesorRepository = profesorRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Profesor registerProfesor(Profesor profesor) {
        String encodedPassword = passwordEncoder.encode(profesor.getPassword());
        profesor.setPassword(encodedPassword);
        return profesorRepository.save(profesor);
    }

    public Profesor findById(Long id) {
        return profesorRepository.findById(id).orElse(null);
    }

    public boolean login(String email, String password) {
        Profesor profesor = profesorRepository.findByEmail(email);
        return profesor != null && passwordEncoder.matches(password, profesor.getPassword());
    }

    public Profesor findByEmail(String email) {
        return profesorRepository.findByEmail(email);
   }
    public List<Profesor> getAllProfesores() {
        return profesorRepository.findAll();
    }
}
