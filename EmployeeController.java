package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeRepository repo;

    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee emp) {
        return repo.save(emp);
    }

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return repo.findAll();
    }

    @GetMapping("/employees/{id}")
    public Optional<Employee> getEmployee(@PathVariable int id) {
        return repo.findById(id);
    }

    @PutMapping("/employees/{id}")
    public Employee updateEmployee(@PathVariable int id,
                                   @RequestBody Employee emp) {
        emp.setId(id);
        return repo.save(emp);
    }

    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable int id) {
        repo.deleteById(id);
        return "Employee Deleted Successfully";
    }
}