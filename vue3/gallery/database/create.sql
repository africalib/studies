create table carts
(
    id        int auto_increment
        primary key,
    member_id int not null,
    item_id   int not null
);

create table items
(
    id           int auto_increment
        primary key,
    name         varchar(50)  not null,
    img_path     varchar(100) null,
    price        int          null,
    discount_per int          null
);

create table members
(
    id       int auto_increment
        primary key,
    email    varchar(50)  not null,
    password varchar(100) not null,
    constraint members_email_uindex
        unique (email)
);

create table orders
(
    id          int auto_increment
        primary key,
    member_id   int          not null,
    name        varchar(50)  not null,
    address     varchar(500) not null,
    payment     varchar(10)  not null,
    card_number varchar(16)  null,
    items       varchar(500) not null
);