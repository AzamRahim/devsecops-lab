package com.legalthings;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final WorkRepository repository;

    public DataSeeder(WorkRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... args) {
        if (repository.count() > 0) {
            return;
        }
        repository.saveAll(List.of(
            new Work("The Tailored Still Life", "Fashion Object", "2026",
                "https://picsum.photos/seed/legal1/800/1000"),
            new Work("Evidence of Texture", "Material Study", "2026",
                "https://picsum.photos/seed/legal2/800/1000"),
            new Work("The Pleading in Red", "Editorial", "2025",
                "https://picsum.photos/seed/legal3/800/1000"),
            new Work("Common Law Collage", "Mixed Media", "2025",
                "https://picsum.photos/seed/legal4/800/1000"),
            new Work("Motion Filed", "Kinetic Installation", "2024",
                "https://picsum.photos/seed/legal5/800/1000"),
            new Work("The Verdict", "Design Commission", "2024",
                "https://picsum.photos/seed/legal6/800/1000")
        ));
    }
}
