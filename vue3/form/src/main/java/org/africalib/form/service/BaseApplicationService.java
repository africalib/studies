package org.africalib.form.service;

import lombok.RequiredArgsConstructor;
import org.africalib.form.dto.ApplicationRequest;
import org.africalib.form.repository.ApplicationRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BaseApplicationService implements ApplicationService {

    private final ApplicationRepository applicationRepository;

    @Override
    public void save(ApplicationRequest applicationRequest) {
        applicationRepository.save(applicationRequest.toEntity());
    }
}
