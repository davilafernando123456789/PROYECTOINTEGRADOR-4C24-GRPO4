package proyectos.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import proyectos.spring.model.Tema;
import proyectos.spring.model.Usuario;
import proyectos.spring.repository.UsuarioRepository;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Usuario registerUser(Usuario usuario) {
        String encodedPassword = passwordEncoder.encode(usuario.getPassword());
        usuario.setPassword(encodedPassword);
        return usuarioRepository.save(usuario);
    }

    public Usuario findByEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    public boolean login(String email, String password) {
    	Usuario usuario = usuarioRepository.findByEmail(email);
        return usuario != null && passwordEncoder.matches(password, usuario.getPassword());
    }
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
    public Optional<Usuario> findById(Long id) {
        return usuarioRepository.findById(id);
    }
}
