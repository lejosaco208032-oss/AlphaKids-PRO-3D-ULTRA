# AlphaKids PRO 3D ULTRA 📚✨

¡Bienvenido a **AlphaKids PRO 3D ULTRA**! Una aplicación web progresiva (PWA) de vanguardia diseñada específicamente para el aprendizaje de la lectoescritura y la fonética infantil de manera interactiva, visual y fluida.

---

## 🚀 Características Clave

* **Motor Visual 3D Nativo:** Interfaz inmersiva con giroscopio simulado e inercias físicas utilizando únicamente capas avanzadas de CSS 3D (sin librerías pesadas como Three.js).
* **Tipografía Escolar Flexible:** Soporte instantáneo en tres variantes esenciales para el desarrollo pedagógico:
    * MAYÚSCULAS
    * minúsculas
    * *Cursiva Escolar* (Simulación de trazo continuo mediante fuentes optimizadas).
* **Fonética Humana Integrada:** Motor de voz configurado en español con velocidades y tonos adaptados para la correcta asimilación de fonemas, letras y sílabas directas.
* **Módulo de Juego Interactivo:** Sistema de arrastrar y soltar (*Drag and Drop*) con físicas de colisión y burbujas diseñado para pantallas táctiles.
* **Tutoriales Guiados:** Asistentes visuales automatizados con punteros animados para facilitar el autoaprendizaje del niño.
* **Arquitectura PWA Pura:** Preparado con manifiesto y Service Worker para una instalación inmediata en dispositivos iOS y Android, garantizando un rendimiento óptimo de 60 FPS.

---

## 🛠️ Estructura del Proyecto

El despliegue está optimizado para **GitHub Pages** con un árbol de archivos limpio y directo:

```text
├── index.html          # Código fuente principal (UI, Estilos y Lógica)
├── manifest.json       # Configuración PWA e instalación en dispositivos
├── register-sw.js      # Registro del Service Worker
└── sw.js               # Service Worker para almacenamiento en caché local