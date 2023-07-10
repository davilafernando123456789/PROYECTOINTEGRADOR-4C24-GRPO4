package proyectos.spring.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "profesorusuario")
public class ProfesorUsuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idProfesorUsuario")
    private Long idUsuarioProfesor;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password", length = 100)
    private String password;

    @ManyToOne
    @JoinColumn(name = "idProfesor")
    private Profesor profesor;

    // Constructor

    public ProfesorUsuario() {
    }

    // Getters y Setters

    public Long getIdUsuarioProfesor() {
        return idUsuarioProfesor;
    }

    public void setIdUsuarioProfesor(Long idUsuarioProfesor) {
        this.idUsuarioProfesor = idUsuarioProfesor;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Profesor getProfesor() {
        return profesor;
    }

    public void setProfesor(Profesor profesor) {
        this.profesor = profesor;
    }
}
