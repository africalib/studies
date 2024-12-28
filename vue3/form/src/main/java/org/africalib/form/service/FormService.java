package org.africalib.form.service;

import org.africalib.form.dto.FormRead;

import java.util.List;

public interface FormService {

    List<FormRead> findAll();

    FormRead find(Long id);
}
