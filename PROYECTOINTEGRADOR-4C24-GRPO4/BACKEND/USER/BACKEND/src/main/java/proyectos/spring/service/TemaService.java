package proyectos.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import proyectos.spring.model.Comentario;
import proyectos.spring.model.Curso;
import proyectos.spring.model.Tema;

import proyectos.spring.repository.TemaRepository;

@Service
public class TemaService {
    private final TemaRepository temaRepository;

    public TemaService(TemaRepository temaRepository) {
        this.temaRepository = temaRepository;
    }

    public Tema getTemaById(Long id) {
        Optional<Tema> optionalTema = temaRepository.findById(id);
        return optionalTema.orElse(null);
    }

    public Tema createTema(Tema tema) {
        return temaRepository.save(tema);
    }

    public Tema updateTema(Long id, Tema tema) {
        if (temaRepository.existsById(id)) {
            tema.setIdTema(id);
            return temaRepository.save(tema);
        } else {
            return null;
        }
    }

    public boolean deleteTema(Long id) {
        if (temaRepository.existsById(id)) {
            temaRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    public List<Tema> getAllTemas() {
        return temaRepository.findAll();
    }
}
