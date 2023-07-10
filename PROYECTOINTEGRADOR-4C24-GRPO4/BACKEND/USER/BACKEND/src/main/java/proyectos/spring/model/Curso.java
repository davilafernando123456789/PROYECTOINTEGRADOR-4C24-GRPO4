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

    @Column(name = "descripcion", length = 45)
    private String descripcion;

    @ManyToOne
    @JoinColumn(name = "idProfesor")
    private Profesor idProfesor;

    @ManyToOne
    @JoinColumn(name = "idTema")
    private Tema idTema;

    @ManyToOne
    @JoinColumn(name = "idBimestre")
    private Bimestre idBimestre;

    // Constructor, getters y setters

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

    public Profesor getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(Profesor idProfesor) {
        this.idProfesor = idProfesor;
    }

    public Tema getIdTema() {
        return idTema;
    }

    public void setIdTema(Tema idTema) {
        this.idTema = idTema;
    }

    public Bimestre getIdBimestre() {
        return idBimestre;
    }

    public void setIdBimestre(Bimestre idBimestre) {
        this.idBimestre = idBimestre;
    }
}