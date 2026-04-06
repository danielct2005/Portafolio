---
title: "Sistema de Citas Médicas"
description: "Aplicación web completa para gestión de citas médicas con panel administrativo, agenda de doctores y reserva de citas por pacientes. Frontend desarrollado en React."
technologies: 
  - "React 19"
  - "Material UI"
  - "Axios"
  - "React Router"
  - "SweetAlert2"
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60"
order: 4
tags: 
  - "React"
  - "Frontend"
  - "Citas Médicas"
---

## Descripción del Proyecto

Sistema de gestión de citas médicas desarrollado en React con Material UI. Permite a los pacientes reservar citas con doctores específicos, mientras el panel administrativo gestiona horarios, pacientes y médicos.

## Características Principales

- 📅 **Agenda de Citas** - Visualización de disponibilidad de doctores en tiempo real
- 👨‍⚕️ **Gestión de Médicos** - Panel para administrar doctores y sus horarios
- 👤 **Portal de Pacientes** - Los pacientes pueden ver sus citas y historial
- 🔔 **Notificaciones** - Alertas con SweetAlert2 para confirmaciones y recordatorios
- 📊 **Dashboard** - Estadísticas de citas diarias, semanales y mensuales
- 🔐 **Autenticación** - Sistema de login con roles (admin, doctor, paciente)

## Arquitectura

- **Frontend:** React 19 con Create React App
- **UI Framework:** Material UI (MUI)
- **Navegación:** React Router DOM
- **HTTP Client:** Axios
- **Notificaciones:** SweetAlert2

## Detalles Técnicos

- Componentes reutilizables con Material UI
- Diseño responsivo (mobile-first)
- Integración con backend vía API REST
- Validación de formularios
- Estados de carga y error