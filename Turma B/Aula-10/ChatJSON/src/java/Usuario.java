public class Usuario {
    
    protected String username;
    
    protected String status;
    
    protected String image;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Usuario(String username) {
        this.username = username;
    }
    
    
}
