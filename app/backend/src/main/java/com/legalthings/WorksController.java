package com.legalthings;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/works")
@CrossOrigin(origins = "http://localhost:4200")
public class WorksController {

    private final WorkRepository repository;

    public WorksController(WorkRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Work> works() {
        return repository.findAll();
    }
}
