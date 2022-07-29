package org.africalib.gallery.backend.repository;

import org.africalib.gallery.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Integer> {
}
