package org.africalib.form.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class FormRead {

    private Long id;
    private String title;
    private String description;
    private LocalDateTime createDate;
}
