
import org.json.simple.JSONObject;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author daniel.psavoy
 */
public class Paciente {
    
    protected String nome;
    protected float peso;
    protected int idade;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public Paciente(String nome, float peso, int idade) {
        this.nome = nome;
        this.peso = peso;
        this.idade = idade;
    }
    
    public JSONObject toJSON(){
        JSONObject json = new JSONObject();
        json.put("nome", this.nome);
        json.put("idade", this.idade);
        json.put("peso", this.peso);
        return json;
    }
    
}
