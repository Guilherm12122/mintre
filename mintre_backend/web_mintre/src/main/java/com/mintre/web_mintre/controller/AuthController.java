package com.mintre.web_mintre.controller;

import com.mintre.web_mintre.entities.auth.AuthResponse;
import com.mintre.web_mintre.entities.usuario.Usuario;
import com.mintre.web_mintre.entities.usuario.UsuarioDto;
import com.mintre.web_mintre.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UsuarioDto usuario) {
        String token = authService.returnToken(usuario.getEmail(), usuario.getSenha());
        return (!token.isEmpty()) ? ResponseEntity.ok(new AuthResponse(token)) : ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha inválida");
    }
}
