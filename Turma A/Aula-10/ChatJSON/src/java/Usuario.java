public class Usuario {

    protected String username = "";
    
    protected String imageUrl = "";
    
    protected String status = "";
    
    public String getJson(){
       String json = "{";
       json += "\"username\":\""+this.username+"\", ";
       json += "\"imageUrl\":\""+this.imageUrl+"\", ";
       json += "\"status\":\""+this.status+"\"";
       json += "}";
       return json;
    }
    
    public Usuario(String username, String imageUrl){
        this.username = username;
        this.imageUrl = imageUrl;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    
    
}
