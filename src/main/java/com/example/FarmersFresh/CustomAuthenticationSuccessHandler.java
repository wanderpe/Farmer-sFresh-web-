package com.example.FarmersFresh;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Collection;
@Component
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {


    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

        if (authorities.contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
            response.sendRedirect("/users");
        } else if (authorities.contains(new SimpleGrantedAuthority("ROLE_USER"))) {
            response.sendRedirect("/user-dashboard");
        } else if (authorities.contains(new SimpleGrantedAuthority("ROLE_FARMER"))) {
            response.sendRedirect("/farmer-dashboard");
        } else {
            throw new IllegalStateException("Unexpected role: " + authorities);
        }
    }
}
