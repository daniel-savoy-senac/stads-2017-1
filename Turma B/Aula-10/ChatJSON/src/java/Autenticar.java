/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author daniel.psavoy
 */
public class Autenticar extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        String username = request.getParameter("username");
        String status = request.getParameter("status");
        String image = request.getParameter("image");
        Usuario eu = (Usuario) request.getSession().getAttribute("eu");
        ArrayList<Usuario> lista = (ArrayList) request.getServletContext().getAttribute("lista");
        
        if(lista == null){ 
            lista = new ArrayList<Usuario>();
            request.getServletContext().setAttribute("lista", lista);
        }
        
        boolean flag = false;
        
        if(username != null && username.length() > 3 && eu == null){
            eu = new Usuario(username);
            if(status != null) eu.setStatus(status);
            if(image != null) eu.setImage(image);
            
            request.getSession().setAttribute("eu", eu);
            
            /* TODO: Verificar usernames duplicados */
            lista.add(eu);
            flag = true;         
        }
        
               
        response.setContentType("text/json;charset=UTF-8");
        
        try (PrintWriter out = response.getWriter()) {
            
            String text = "{";
            text += "\"username\":";
            text += "\""+eu.username+"\",";
            text += "\"status\":";
            text += "\""+eu.status+"\",";
            text += "\"image\":";
            text += "\""+eu.image+"\",";
            text += "\"response\":";
            text += flag ? "true" : "false";
            text += "}";
            
            out.println(text);
        }
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
