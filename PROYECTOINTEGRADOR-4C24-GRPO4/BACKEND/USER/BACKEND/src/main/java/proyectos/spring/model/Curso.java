package proyectos.spring.model;

import java.util.List;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "curso")
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCurso")
    private Long idCurso;

    @Column(name = "nombre", length = 45)
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "nota1", length = 45, nullable = true)
    private String nota1;

    @Column(name = "nota2", length = 45, nullable = true)
    private String nota2;

    @Column(name = "nota3", length = 45, nullable = true)
    private String nota3;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idTema")
    private Tema idTema;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "idTarea")
    private Tarea idTarea;

    @ManyToMany(mappedBy = "cursos")
    private List<Profesor> profesores;

	public Long getIdCurso() {
		return idCurso;
	}

	public void setIdCurso(Long idCurso) {
		this.idCurso = idCurso;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public String getNota1() {
		return nota1;
	}

	public void setNota1(String nota1) {
		this.nota1 = nota1;
	}

	public String getNota2() {
		return nota2;
	}

	public void setNota2(String nota2) {
		this.nota2 = nota2;
	}

	public String getNota3() {
		return nota3;
	}

	public void setNota3(String nota3) {
		this.nota3 = nota3;
	}

	public Tema getIdTema() {
		return idTema;
	}

	public void setIdTema(Tema idTema) {
		this.idTema = idTema;
	}

	public Tarea getIdTarea() {
		return idTarea;
	}

	public void setIdTarea(Tarea idTarea) {
		this.idTarea = idTarea;
	}

	public List<Profesor> getProfesores() {
		return profesores;
	}

	public void setProfesores(List<Profesor> profesores) {
		this.profesores = profesores;
	}

    // Getters and Setters
}
