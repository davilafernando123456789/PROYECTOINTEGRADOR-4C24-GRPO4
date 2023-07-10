package proyectos.spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bimestre")
public class Bimestre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idBimestre")
    private Long idBimestre;

    @Column(name = "nombre", length = 45)
    private String nombre;


	public Long getIdBimestre() {
		return idBimestre;
	}

	public void setIdBimestre(Long idBimestre) {
		this.idBimestre = idBimestre;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

}

