package com.gestion.futbolistas.controller;

import com.gestion.futbolistas.exception.ResourceNotFoundException;
import com.gestion.futbolistas.model.Futbolista;
import com.gestion.futbolistas.repository.FutbolistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/v1")
public class FutbolistaController {

    @Autowired
    private FutbolistaRepository futbolistaRepository;

    @GetMapping("/futbolistas")
    public ResponseEntity<Page<Futbolista>> listarFutbolistas(@PageableDefault(size = 10) Pageable pageable){
        Page<Futbolista> paginaFutbolistas = futbolistaRepository.findAll(pageable);
        return ResponseEntity.ok(paginaFutbolistas);
    }

    @PostMapping("/futbolistas")
    public ResponseEntity<Futbolista> guardarFutbolista(@RequestBody Futbolista futbolista){
        Futbolista nuevoFutbolista = futbolistaRepository.save(futbolista);
        return new ResponseEntity<>(nuevoFutbolista, HttpStatus.CREATED);
    }

    @GetMapping("/futbolista/{id}")
    public ResponseEntity<Futbolista> listarFutbolistaPorId(@PathVariable Long id){
        Futbolista futbolista = futbolistaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("El futbolista con ese id no existe: "+id));
        return ResponseEntity.ok(futbolista);
    }
}
