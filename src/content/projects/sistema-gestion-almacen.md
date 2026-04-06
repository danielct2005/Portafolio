---
title: "Sistema de Ventas - Gestión de Almacén"
description: "Aplicación de escritorio completa para gestión de ventas y control de inventario de almacén. Desarrollo en Python con interfaz gráfica moderna y base de datos SQLite."
technologies: 
  - "Python"
  - "Tkinter"
  - "SQLite"
  - "POO"
  - "SQL"
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
order: 2
tags: 
  - "Python"
  - "Desktop"
  - "Inventory"
---

## Descripción del Proyecto

Sistema de punto de venta (POS) y gestión de almacén desarrollado en Python con Tkinter. Es una aplicación de escritorio completa para pequeños almacenes y negocios minoristas.

## Características Principales

### 📦 Gestión de Inventario
- **CRUD de Productos** - Crear, leer, actualizar y eliminar productos
- **Código de Barras** - Identificación por código de barras
- **Categorías** - Organización por categorías (Bebidas, Panadería, Lácteos, etc.)
- **Stock Mínimo** - Alertas automáticas cuando el stock está bajo
- **Control de Proveedores** - Gestión de proveedores con联系方式

### 💰 Punto de Venta (Caja)
- **Escaneo de Productos** - Ingreso por código de barras o búsqueda por nombre
- **Formato Flexible** - Soporta formato cantidad*codigo (ej: 5*123)
- **Carrito de Compras** - Acumulación de productos con actualización de totales
- **Cálculo de Vuelto** - Sistema de pago con efectivo, tarjeta y vales
- **Boleta de Venta** - Generación de boleta en consola

### 📊 Reportes y Control
- **Corte de Caja** - Reporte de ventas por turno (efectivo, tarjeta, vales)
- **Reporte de Inventario** - Valoración total del inventario
- **Historial de Ventas** - Registro completo de ventas con detalles
- **Movimientos de Inventario** - Tracking de entradas y salidas

### 🔧 Gestión de Turnos
- **Apertura/Cierre de Turno** - Control de jornadas de trabajo
- **Usuario por Turno** - Registro del cajero responsable
- **Estado de Turnos** - open/cerrado

## Arquitectura de Base de Datos

El sistema utiliza SQLite con las siguientes tablas:

| Tabla | Descripción |
|-------|-------------|
| `productos` | Catálogo de productos con código de barras, precio, stock |
| `proveedores` | Registro de proveedores |
| `clientes` | Datos de clientes |
| `ventas` | Registro de ventas con totales, descuentos, métodos de pago |
| `ventas_detalle` - | Detalle de cada venta (productos vendidos) |
| `turnos` | Control de aperturas y cierres de caja |
| `movimientos` | Historial de cambios en el inventario |

## Funcionalidades Técnicas

- ✅ **POO** - Programación Orientada a Objetos con clases bien estructuradas
- ✅ **SQLite** - Base de datos embebida, sin instalación adicional
- ✅ **Interfaz Gráfica** - UI con Tkinter (tabs, tablas, diálogos)
- ✅ **Validaciones** - Validación de datos de entrada
- ✅ **Manejo de Excepciones** - Try/except en todas las operaciones DB
- ✅ **Transacciones** - Commit y rollback en operaciones críticas

## Estructura del Código

```
src/
├── main.py          # Aplicación principal y UI
├── database.py      # Clase ConexionDB - toda la lógica de datos
├── product.py       # Clase Producto - modelo de datos
└── __init__.py      # Inicialización del módulo
```

## Detalles Técnicos

- **Framework UI:** Tkinter (biblioteca estándar de Python)
- **Base de Datos:** SQLite (archivo `almacen.db`)
- **Métodos de Pago:** Efectivo, Tarjeta, Vales
- **Alertas:** Stock mínimo, productos bajo umbral
- **Datos de Prueba:** Se insertan automáticamente 3 productos demo al iniciar