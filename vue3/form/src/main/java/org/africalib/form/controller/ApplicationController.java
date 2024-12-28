package org.africalib.form.controller;

import lombok.RequiredArgsConstructor;
import org.africalib.form.dto.ApplicationRequest;
import org.africalib.form.service.ApplicationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1")
public class ApplicationController {

    private final ApplicationService applicationService;

    @PostMapping("/api/applications")
    public ResponseEntity<String> add(@RequestBody ApplicationRequest applicationRequest) {
        applicationService.save(applicationRequest);
        return new ResponseEntity<>("OKAY", HttpStatus.CREATED);
    }
}