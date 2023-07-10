package proyectos.spring.response;


public class LoginResponseProfesor {
    private boolean success;
    private String message;
    private Long idProfesor;
    private String nombres;

    public LoginResponseProfesor(boolean success, String message, Long idProfesor, String nombres) {
        this.success = success;
        this.message = message;
        this.idProfesor = idProfesor;
        this.nombres = nombres;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getIdProfesor() {
        return idProfesor;
    }

    public void setIdProfesor(Long idProfesor) {
        this.idProfesor = idProfesor;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }
}
