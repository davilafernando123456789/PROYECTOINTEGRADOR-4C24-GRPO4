package proyectos.spring.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proyectos.spring.model.Tarea;
import proyectos.spring.repository.TareaRepository;
import proyectos.spring.repository.TareasRepository;

@Service
public class TareaService {
    private final TareaRepository tareaRepository;

    public TareaService(TareaRepository tareaRepository) {
        this.tareaRepository = tareaRepository;
    }

    public Tarea getTareaById(Long id) {
        Optional<Tarea> optionalTarea = tareaRepository.findById(id);
        return optionalTarea.orElse(null);
    }

    public Tarea createTarea(Tarea tarea) {
        return tareaRepository.save(tarea);
    }

    public Tarea updateTarea(Long id, Tarea tarea) {
        if (tareaRepository.existsById(id)) {
            tarea.setIdTarea(id);
            return tareaRepository.save(tarea);
        } else {
            return null;
        }
    }

    public boolean deleteTarea(Long id) {
        if (tareaRepository.existsById(id)) {
            tareaRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    public List<Tarea> getAllTareas() {
        return tareaRepository.findAll();
    }
}

