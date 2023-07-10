package proyectos.spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "RealizacionTarea")
public class RealizacionTarea {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idRealizacionTarea")
    private Long idRealizacionTarea;

    @ManyToOne
    @JoinColumn(name = "idAlumno")
    private Alumno alumno;

    @ManyToOne
    @JoinColumn(name = "idTarea")
    private Tarea tarea;

    @Column(name = "realizada")
    private boolean realizada;

    @Column(name = "calificacion", length = 10, nullable = true)
    private String calificacion;

	public RealizacionTarea(Long idRealizacionTarea, Alumno alumno, Tarea tarea, boolean realizada,
			String calificacion) {
		super();
		this.idRealizacionTarea = idRealizacionTarea;
		this.alumno = alumno;
		this.tarea = tarea;
		this.realizada = realizada;
		this.calificacion = calificacion;
	}

	public RealizacionTarea() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getIdRealizacionTarea() {
		return idRealizacionTarea;
	}

	public void setIdRealizacionTarea(Long idRealizacionTarea) {
		this.idRealizacionTarea = idRealizacionTarea;
	}

	public Alumno getAlumno() {
		return alumno;
	}

	public void setAlumno(Alumno alumno) {
		this.alumno = alumno;
	}

	public Tarea getTarea() {
		return tarea;
	}

	public void setTarea(Tarea tarea) {
		this.tarea = tarea;
	}

	public boolean isRealizada() {
		return realizada;
	}

	public void setRealizada(boolean realizada) {
		this.realizada = realizada;
	}

	public String getCalificacion() {
		return calificacion;
	}

	public void setCalificacion(String calificacion) {
		this.calificacion = calificacion;
	}
    
    
}