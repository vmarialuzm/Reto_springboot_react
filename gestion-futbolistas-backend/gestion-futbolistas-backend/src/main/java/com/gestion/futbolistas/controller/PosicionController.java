package com.gestion.futbolistas.controller;

import com.gestion.futbolistas.exception.ResourceNotFoundException;
import com.gestion.futbolistas.model.Posicion;
import com.gestion.futbolistas.repository.PosicionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1")
public class PosicionController {

    @Autowired
    private PosicionRepository posicionRepository;

    @GetMapping("/posiciones")
    public List<Posicion> listarPosiciones(){
        return posicionRepository.findAll();
    }

    @PostMapping("/posiciones")
    public ResponseEntity<Posicion> guardarPosicion(@RequestBody Posicion posicion){
        Posicion nuevaPosicion = posicionRepository.save(posicion);
        return new ResponseEntity<>(nuevaPosicion, HttpStatus.CREATED);
    }

    @GetMapping("/posicion/{id}")
    public ResponseEntity<Posicion> listarPosicionPorId(@PathVariable Long id){
        Posicion posicion = posicionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("La posición con ese id no existe: "+id));
        return ResponseEntity.ok(posicion);
    }
}

