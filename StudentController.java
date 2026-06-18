package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Student Management REST API";
    }

    @GetMapping("/student")
    public Student getStudent() {
        return new Student(101, "Divyansh", "B.Tech");
    }

    @PostMapping("/student")
    public String addStudent(@RequestBody Student student) {
        return "Student data received successfully: " + student.getName();
    }
}