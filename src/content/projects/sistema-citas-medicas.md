---
title: "Sistema de Citas Médicas - Enterprise Edition"
description: "Sistema completo de gestión de citas médicas con arquitectura moderna monorepo. Backend en Express/TypeScript + frontend en Next.js 14 con validaciones robustas de negocio."
technologies: 
  - "Next.js 14"
  - "Express"
  - "TypeScript"
  - "Prisma"
  - "Zod"
  - "Tailwind CSS"
  - "Zustand"
  - "TanStack Query"
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60"
order: 4
tags: 
  - "Next.js"
  - "Full Stack"
  - "Enterprise"
---

## Descripción del Proyecto

Sistema de gestión de citas médicas desarrollado con arquitectura **monorepo** usando Turborepo. El proyecto cuenta con un backend robusto en Express + TypeScript y un frontend moderno en Next.js 14.

## Arquitectura

El proyecto sigue una arquitectura limpia (Clean Architecture) con separación clara de responsabilidades:

- **Backend (apps/api):**
  - `domain/` - Entidades y repositorios
  - `application/` - Casos de uso
  - `infrastructure/` - Repositorios Prisma
  - `presentation/` - Controllers y rutas
  - `shared/` - Validación y manejo de errores

- **Frontend (apps/web):**
  - App Router de Next.js 14
  - Componentes React con TypeScript
  - Estado global con Zustand
  - Fetching con TanStack Query

## Características Principales

- 📅 **Gestión de Citas** - Crear, modificar y eliminar citas médicas
- 👨‍⚕️ **Administración de Médicos** - CRUD completo de doctores
- 👤 **Portal de Pacientes** - Gestión de pacientes con RUT chileno
- 🔐 **Autenticación JWT** - Sistema de login seguro
- ✅ **Validaciones de Negocio:**
  - Algoritmo de RUT chileno con dígito verificador
  - Previene double booking (mismo médico/paciente)
  - Horario laboral: 09:00 - 18:00
  - Días laborables: Lunes a Viernes
  - Email y teléfono únicos
  - Cancelación con mínimo 2 horas de anticipación
  - Integridad referencial (no eliminar médicos con citas pendientes)

## Tecnologías

### Backend
- **Express** + **TypeScript**
- **Prisma** ORM (SQLite para desarrollo)
- **Zod** para validación de esquemas
- **JWT** para autenticación

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Zustand** (estado global)
- **TanStack Query** (fetching de datos)

### Infraestructura
- **Turborepo** - Orquestación del monorepo
- **GitHub Actions** - CI/CD pipeline
- **Docker** - Contenedores para producción

## Stack Completo

- Express + TypeScript + Prisma + Zod + JWT
- Next.js 14 + TypeScript + Tailwind + Zustand + TanStack Query
- Monorepo con Turborepo
- Validaciones exhaustivas de negocio
- Pipeline de CI/CD con GitHub Actions