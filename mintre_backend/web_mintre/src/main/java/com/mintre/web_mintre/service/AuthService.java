package com.mintre.web_mintre.service;

import com.mintre.web_mintre.entities.auth.AuthResponse;
import com.mintre.web_mintre.entities.usuario.Usuario;
import com.mintre.web_mintre.repository.UsuarioRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.security.SecureRandom;
import java.util.*;

import io.jsonwebtoken.security.Keys;

@Data
@Service
public class AuthService {

    private static final long EXPIRATION_TIME = 7200000;
    private static final SecureRandom secureRandom = new SecureRandom();
    private AuthResponse response = new AuthResponse();
    private String token = "";

    @Autowired
    private UsuarioRepository usuarioRepository;

    public String returnToken(String email, String senha){
        Optional<Usuario> usuario = usuarioRepository.findByEmail(email);

            if (usuario.isPresent() && usuario.get().getSenha().equals(senha)) {
                setToken(Jwts.builder()
                        .setSubject(email)
                        .setIssuedAt(new Date())
                        .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                        .signWith(generate256Key())
                        .compact());
            }

            return getToken();

    }

    public AuthResponse logOut() {
        String mensage;
        try {
            setToken("");
            mensage = "Deslogado com sucesso";
            SecurityContextHolder.clearContext();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return new AuthResponse(this.token, mensage);
    }

    private Key generate256Key(){
        byte[] random_bytes = new byte[32];
        secureRandom.nextBytes(random_bytes);
        return Keys.hmacShaKeyFor(random_bytes);
    }
}
