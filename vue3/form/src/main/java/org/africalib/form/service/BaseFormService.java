package org.africalib.form.service;

import lombok.RequiredArgsConstructor;
import org.africalib.form.dto.FormRead;
import org.africalib.form.entity.Form;
import org.africalib.form.repository.FormRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BaseFormService implements FormService {

    private final FormRepository formRepository;

    @Override
    public List<FormRead> findAll() {
        List<FormRead> output = new ArrayList<>();
        List<Form> forms = formRepository.findAll();

        for (Form form : forms) {
            output.add(form.toRead());
        }

        return output;
    }

    @Override
    public FormRead find(Long id) {
        Optional<Form> formOptional = formRepository.findById(id);
        return formOptional.map(Form::toRead).orElse(null);
    }
}
