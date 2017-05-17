
import java.util.Date;

public class Mensagem {
    
    protected String text;
    
    protected Date time;
    
    protected Usuario usuario;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Mensagem(String text, Usuario usuario) {
        this.time = new Date();
        this.text = text;
        this.usuario = usuario;
    }
    
    
    
}
