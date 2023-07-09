package proyectos.spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "grado")
public class Grado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idGrado")
    private Long idGrado;

    @Column(name = "nombre", length = 45)
    private String nombre;

    @Column(name = "seccion", length = 45)
    private String seccion;

	public Long getIdGrado() {
		return idGrado;
	}

	public void setIdGrado(Long idGrado) {
		this.idGrado = idGrado;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getSeccion() {
		return seccion;
	}

	public void setSeccion(String seccion) {
		this.seccion = seccion;
	}

    
}
