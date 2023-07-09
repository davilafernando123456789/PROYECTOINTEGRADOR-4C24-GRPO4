package proyectos.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import proyectos.spring.model.Comentario;
import proyectos.spring.model.Tarea;
import proyectos.spring.repository.ComentarioRepository;
@Service
public class ComentarioService {
    private final ComentarioRepository comentarioRepository;

    public ComentarioService(ComentarioRepository comentarioRepository) {
        this.comentarioRepository = comentarioRepository;
    }

    public Comentario getComentarioById(Long id) {
        Optional<Comentario> optionalComentario = comentarioRepository.findById(id);
        return optionalComentario.orElse(null);
    }

    public Comentario createComentario(Comentario comentario) {
        return comentarioRepository.save(comentario);
    }

    public Comentario updateComentario(Long id, Comentario comentario) {
        if (comentarioRepository.existsById(id)) {
            comentario.setIdComentario(id);
            return comentarioRepository.save(comentario);
        } else {
            return null;
        }
    }

    public boolean deleteComentario(Long id) {
        if (comentarioRepository.existsById(id)) {
            comentarioRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    public List<Comentario> getAllComentarios() {
        return comentarioRepository.findAll();
    }
}

