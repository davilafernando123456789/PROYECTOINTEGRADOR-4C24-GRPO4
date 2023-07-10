package proyectos.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import proyectos.spring.model.RealizacionTarea;
import proyectos.spring.repository.RealizacionTareaRepository;

@Service
public class RealizacionTareaService {
    private final RealizacionTareaRepository realizacionTareaRepository;

    @Autowired
    public RealizacionTareaService(RealizacionTareaRepository realizacionTareaRepository) {
        this.realizacionTareaRepository = realizacionTareaRepository;
    }

    public RealizacionTarea getRealizacionTareaById(Long id) {
        return realizacionTareaRepository.findById(id).orElse(null);
    }

    public List<RealizacionTarea> getRealizacionTareasByAlumnoId(Long alumnoId) {
        return realizacionTareaRepository.findByAlumno_IdAlumno(alumnoId);
    }

    public List<RealizacionTarea> getRealizacionTareasByTareaId(Long tareaId) {
        return realizacionTareaRepository.findByTarea_IdTarea(tareaId);
    }

    public RealizacionTarea createRealizacionTarea(RealizacionTarea realizacionTarea) {
        return realizacionTareaRepository.save(realizacionTarea);
    }

    public RealizacionTarea updateRealizacionTarea(Long id, RealizacionTarea realizacionTarea) {
        RealizacionTarea existingRealizacionTarea = realizacionTareaRepository.findById(id).orElse(null);
        if (existingRealizacionTarea != null) {
            realizacionTarea.setIdRealizacionTarea(existingRealizacionTarea.getIdRealizacionTarea());
            return realizacionTareaRepository.save(realizacionTarea);
        } else {
            return null;
        }
    }
}
