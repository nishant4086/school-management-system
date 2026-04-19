# School Management System - ER Diagram

```
┌─────────────┐
│   Admin     │
├─────────────┤
│ id (PK)     │
│ username    │
└─────────────┘

┌──────────────────────────────────────────────┐
│            Teacher                           │
├──────────────────────────────────────────────┤
│ id (PK)                                      │
│ username (UNIQUE)                            │
│ name                                         │
│ surname                                      │
│ email (UNIQUE)                               │
│ phone (UNIQUE)                               │
│ address                                      │
│ img                                          │
│ bloodType                                    │
│ sex (MALE | FEMALE)                          │
│ createdAt                                    │
│ birthday                                     │
└──────────────────────────────────────────────┘
        │                    │
        │ supervises         │ teaches
        │                    │
┌──────────────────────────────────────────────┐         ┌─────────────┐
│            Class                             │◄────────┤  Subject    │
├──────────────────────────────────────────────┤         ├─────────────┤
│ id (PK)                                      │         │ id (PK)     │
│ name (UNIQUE)                                │         │ name        │
│ capacity                                     │         └─────────────┘
│ supervisorId (FK → Teacher)                  │
│ gradeId (FK → Grade)                         │
└──────────────────────────────────────────────┘
        │                    │
        │ belongs to         │ has
        │                    │
┌──────────────────────────────────────────────┐         ┌─────────────┐
│            Grade                             │         │  Lesson     │
├──────────────────────────────────────────────┤         ├─────────────┤
│ id (PK)                                      │         │ id (PK)     │
│ level (UNIQUE)                               │         │ name        │
└──────────────────────────────────────────────┘         │ day         │
        │                                                │ startTime   │
        │ assigned to                                    │ endTime     │
        │                                                │ subjectId FK│
        │                                                │ classId FK  │
        │                                                │ teacherId FK│
        │                                                └─────────────┘
        │                                                     │     │
        │                                                     │     │
        │                                                     │     │
┌──────────────────────────────────────────────┐             │     │
│            Student                           │             │     │
├──────────────────────────────────────────────┤             │     │
│ id (PK)                                      │             │     │
│ username (UNIQUE)                            │             │     │
│ name                                         │             │     │
│ surname                                      │             │     │
│ email (UNIQUE)                               │    ┌────────┴─┬──┴─────┐
│ phone (UNIQUE)                               │    │          │        │
│ address                                      │    │          │        │
│ img                                          │    │          │        │
│ bloodType                                    │    │          │        │
│ sex (MALE | FEMALE)                          │    │          │        │
│ createdAt                                    │┌────────────────────────┐
│ birthday                                     ││        Exam            │
│ parentId (FK → Parent)                       │├────────────────────────┤
│ classId (FK → Class)                         ││ id (PK)                │
│ gradeId (FK → Grade)                         ││ title                  │
└──────────────────────────────────────────────┘│ startTime              │
        │                                        │ endTime                │
        │ has                                    │ lessonId (FK → Lesson)│
        │                                        └────────────────────────┘
        │                                                 │
        │ completes    ┌────────────────────────┐         │
        ├────────────►│      Attendance        │         │
        │             ├────────────────────────┤         │
        │             │ id (PK)                │         │
        │             │ date                   │         │
        │             │ present                │    ┌────┴──┬────────────────┐
        │             │ studentId (FK)         │    │       │                │
        │             │ lessonId (FK)          │┌───┴──────────────────────┐ │
        │             └────────────────────────┘│      Result             │ │
        │                                        ├──────────────────────────┤ │
        │ participates in  ┌────────────────────┤ id (PK)                  │ │
        └─────────────────►│  Assignment        │ score                    │ │
                           ├────────────────────┤ examId (FK) ────────────┐ │ │
                           │ id (PK)            │ assignmentId (FK) ──────┼─┼─┘
                           │ title              │ studentId (FK → Student)│ │
                           │ startDate          │                         │ │
                           │ dueDate            │ (Many to One: Student→ │ │
                           │ lessonId (FK)      │  Result ← Exam/Assign)  │ │
                           └────────────────────┘                         │ │
                                                                          │ │
                                    └─────────────────────────────────────┘ │
                                                                            │
                                    ┌───────────────────────────────────────┘
                                    │
┌──────────────────────────────────────────────┐
│            Parent                            │
├──────────────────────────────────────────────┤
│ id (PK)                                      │
│ username (UNIQUE)                            │
│ name                                         │
│ surname                                      │
│ email (UNIQUE)                               │
│ phone (UNIQUE)                               │
│ address                                      │
│ createdAt                                    │
│ ◄─── has many Students                       │
└──────────────────────────────────────────────┘


┌──────────────────────────────────────────────┐
│            Event                             │
├──────────────────────────────────────────────┤
│ id (PK)                                      │
│ title                                        │
│ description                                  │
│ startTime                                    │
│ endTime                                      │
│ classId (FK → Class) [nullable]              │
└──────────────────────────────────────────────┘


┌──────────────────────────────────────────────┐
│        Announcement                          │
├──────────────────────────────────────────────┤
│ id (PK)                                      │
│ title                                        │
│ description                                  │
│ date                                         │
│ classId (FK → Class) [nullable]              │
└──────────────────────────────────────────────┘
```

## Relationships Summary

| From | To | Type | Description |
|------|-----|------|------------|
| Teacher | Subject | Many-to-Many | Teachers teach multiple subjects |
| Teacher | Lesson | One-to-Many | Teacher teaches many lessons |
| Teacher | Class | One-to-Many | Teacher supervises a class |
| Class | Grade | Many-to-One | Classes belong to grades |
| Class | Student | One-to-Many | A class has many students |
| Class | Lesson | One-to-Many | A class has many lessons |
| Class | Event | One-to-Many | Class has events |
| Class | Announcement | One-to-Many | Class has announcements |
| Subject | Lesson | One-to-Many | Subject has many lessons |
| Lesson | Exam | One-to-Many | Lesson has exams |
| Lesson | Assignment | One-to-Many | Lesson has assignments |
| Lesson | Attendance | One-to-Many | Lesson tracks attendance |
| Student | Parent | Many-to-One | Student has one parent |
| Student | Grade | Many-to-One | Student belongs to a grade |
| Student | Class | Many-to-One | Student belongs to a class |
| Student | Attendance | One-to-Many | Student has attendance records |
| Student | Result | One-to-Many | Student has exam/assignment results |
| Exam | Result | One-to-Many | Exam has many results |
| Assignment | Result | One-to-Many | Assignment has many results |
