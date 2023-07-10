package proyectos.spring.response;

public class LoginResponseUser {
    private boolean success;
    private String message;
    private Long idAlumno;
    private String nombres;

    public LoginResponseUser(boolean success, String message, Long idAlumno, String nombres) {
        this.success = success;
        this.message = message;
        this.idAlumno = idAlumno;
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

    public Long getIdAlumno() {
        return idAlumno;
    }

    public void setIdAlumno(Long idAlumno) {
        this.idAlumno = idAlumno;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombre(String nombres) {
        this.nombres = nombres;
    }
}
