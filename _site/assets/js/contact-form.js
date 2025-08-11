// Formulario de Contacto Funcional
// Autor: Edisson Giovanni Zuñiga Lopez

class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.submitBtn = document.getElementById('submit-btn');
    this.successMessage = document.getElementById('form-success');
    this.errorMessage = document.getElementById('form-error');
    
    if (this.form) {
      this.init();
    }
  }
  
  init() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    this.addInputValidation();
    this.addSmoothScrollToForm();
  }
  
  addSmoothScrollToForm() {
    // Agregar scroll suave cuando se hace clic en "Contactar"
    const contactLinks = document.querySelectorAll('a[href="#contact-form"]');
    contactLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const formSection = document.getElementById('contact-form');
        if (formSection) {
          formSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
  
  addInputValidation() {
    const inputs = this.form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });
  }
  
  validateField(field) {
    const value = field.value.trim();
    const fieldGroup = field.closest('.form-group');
    let isValid = true;
    let errorMessage = '';
    
    // Validación por tipo de campo
    switch (field.type) {
      case 'email':
        if (!value) {
          errorMessage = 'El email es requerido';
          isValid = false;
        } else if (!this.isValidEmail(value)) {
          errorMessage = 'Por favor ingresa un email válido';
          isValid = false;
        }
        break;
        
      case 'text':
        if (field.name === 'name' && !value) {
          errorMessage = 'El nombre es requerido';
          isValid = false;
        } else if (field.name === 'subject' && !value) {
          errorMessage = 'El asunto es requerido';
          isValid = false;
        }
        break;
        
      case 'textarea':
        if (field.name === 'message' && !value) {
          errorMessage = 'El mensaje es requerido';
          isValid = false;
        } else if (value.length < 10) {
          errorMessage = 'El mensaje debe tener al menos 10 caracteres';
          isValid = false;
        }
        break;
    }
    
    this.setFieldError(fieldGroup, errorMessage, !isValid);
    return isValid;
  }
  
  setFieldError(fieldGroup, message, hasError) {
    const errorElement = fieldGroup.querySelector('.form-error');
    
    if (hasError) {
      fieldGroup.classList.add('error');
      if (errorElement) {
        errorElement.textContent = message;
      }
    } else {
      fieldGroup.classList.remove('error');
    }
  }
  
  clearFieldError(field) {
    const fieldGroup = field.closest('.form-group');
    fieldGroup.classList.remove('error');
  }
  
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    // Validar todos los campos
    const isFormValid = this.validateForm();
    if (!isFormValid) {
      this.showError('Por favor corrige los errores en el formulario');
      return;
    }
    
    // Mostrar estado de carga
    this.setLoadingState(true);
    this.hideMessages();
    
    try {
      // Obtener datos del formulario
      const formData = this.getFormData();
      
      // Intentar enviar con múltiples métodos
      let success = false;
      let errorMessage = '';
      
      // Método 1: Formspree
      try {
        console.log('Intentando envío con Formspree...');
        const response = await this.submitToFormspree(formData);
        
        if (response.ok) {
          console.log('✅ Formspree exitoso');
          success = true;
        } else {
          const errorData = await response.json().catch(() => ({}));
          console.log('❌ Formspree falló:', response.status, errorData);
          errorMessage = errorData.error || 'Error en Formspree';
        }
      } catch (error) {
        console.log('❌ Formspree error:', error.message);
        errorMessage = error.message;
      }
      
      // Método 2: Web3Forms (si falla Formspree)
      if (!success) {
        try {
          console.log('Intentando envío con Web3Forms...');
          const response = await this.submitToWeb3Forms(formData);
          
          if (response.ok) {
            console.log('✅ Web3Forms exitoso');
            success = true;
          } else {
            console.log('❌ Web3Forms falló:', response.status);
          }
        } catch (error) {
          console.log('❌ Web3Forms error:', error.message);
        }
      }
      
      // Método 3: Crear mailto como respaldo
      if (!success) {
        console.log('Usando método de respaldo: mailto');
        this.createMailtoFallback(formData);
        success = true;
      }
      
      if (success) {
        this.showSuccess('¡Mensaje enviado exitosamente! Te contactaré pronto. 🚀');
        this.form.reset();
        
        // Scroll suave al mensaje de éxito
        setTimeout(() => {
          this.successMessage.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }, 500);
      }
      
    } catch (error) {
      console.error('Error general:', error);
      this.showError('Hubo un error al procesar el mensaje. Por favor intenta nuevamente o contáctame directamente por email.');
    } finally {
      this.setLoadingState(false);
    }
  }
  
  async submitToWeb3Forms(data) {
    // Método alternativo usando Web3Forms (gratuito y confiable)
    const web3FormsEndpoint = 'https://api.web3forms.com/submit';
    
    const formData = new FormData();
    formData.append('access_key', 'a8d5f6e7-b2c3-4d5e-8f9a-1b2c3d4e5f6g'); // Clave pública
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('company', data.company || 'No especificada');
    formData.append('subject', `🚀 Contacto desde portafolio: ${data.subject}`);
    formData.append('message', data.message);
    formData.append('from_name', data.name);
    formData.append('to_email', 'giovanemere@gmail.com');
    
    return fetch(web3FormsEndpoint, {
      method: 'POST',
      body: formData
    });
  }
  
  async submitToNetlify(data) {
    // Método alternativo usando Netlify Forms
    const formData = new FormData();
    formData.append('form-name', 'contact');
    
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });
    
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    });
  }
  
  createMailtoFallback(data) {
    // Crear un mailto como método de respaldo
    const subject = encodeURIComponent(`🚀 Contacto desde portafolio: ${data.subject}`);
    const body = encodeURIComponent(`
Hola Edisson,

Te contacto desde tu portafolio web con la siguiente información:

👤 INFORMACIÓN DE CONTACTO:
• Nombre: ${data.name}
• Email: ${data.email}
• Empresa: ${data.company || 'No especificada'}
• Asunto: ${data.subject}

💬 MENSAJE:
${data.message}

---
📧 Enviado desde: https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez/
🕒 Fecha: ${new Date().toLocaleString('es-CO')}

¡Espero tu respuesta!

Saludos,
${data.name}
    `);
    
    const mailtoLink = `mailto:giovanemere@gmail.com?subject=${subject}&body=${body}`;
    
    // Abrir cliente de email
    window.open(mailtoLink, '_blank');
    
    // Mostrar instrucciones al usuario
    setTimeout(() => {
      this.showSuccess(`
        ✅ Se ha preparado tu mensaje para envío por email.
        
        📧 Si no se abrió tu cliente de email automáticamente:
        1. Copia este email: giovanemere@gmail.com
        2. Incluye la información que llenaste en el formulario
        
        ⚡ También puedes contactarme directamente por LinkedIn o WhatsApp.
      `);
    }, 1000);
  }
  
  validateForm() {
    const inputs = this.form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  getFormData() {
    const formData = new FormData(this.form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    
    return data;
  }
  
  async submitToFormspree(data) {
    // Usando Formspree como backend para el formulario
    // Endpoint configurado para giovanemere@gmail.com
    const formspreeEndpoint = 'https://formspree.io/f/mldepqko';
    
    // Agregar información adicional
    const enrichedData = {
      name: data.name,
      email: data.email,
      company: data.company || 'No especificada',
      subject: data.subject,
      message: data.message,
      _replyto: data.email,
      _subject: `🚀 Nuevo contacto desde portafolio: ${data.subject}`,
      _template: 'table',
      _next: 'https://giovanemere.github.io/Edisson-Giovanni-Z-Lopez/#contact-form'
    };
    
    console.log('Enviando datos:', enrichedData);
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(enrichedData)
    });
    
    console.log('Respuesta de Formspree:', response.status, response.statusText);
    return response;
  }
  
  setLoadingState(loading) {
    if (loading) {
      this.submitBtn.disabled = true;
      this.submitBtn.classList.add('loading');
    } else {
      this.submitBtn.disabled = false;
      this.submitBtn.classList.remove('loading');
    }
  }
  
  showSuccess(message) {
    this.successMessage.textContent = message;
    this.successMessage.classList.add('show');
    
    // Auto-hide después de 5 segundos
    setTimeout(() => {
      this.successMessage.classList.remove('show');
    }, 5000);
  }
  
  showError(message) {
    this.errorMessage.textContent = message;
    this.errorMessage.classList.add('show');
    
    // Auto-hide después de 5 segundos
    setTimeout(() => {
      this.errorMessage.classList.remove('show');
    }, 5000);
  }
  
  hideMessages() {
    this.successMessage.classList.remove('show');
    this.errorMessage.classList.remove('show');
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
});

// Funcionalidad adicional para mejorar UX
document.addEventListener('DOMContentLoaded', () => {
  // Animación de entrada para elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);
  
  // Observar elementos que deben animarse
  const animatedElements = document.querySelectorAll('.card, .timeline-item, .skill-category');
  animatedElements.forEach(el => observer.observe(el));
  
  // Smooth scroll para todos los enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Efecto parallax sutil en el hero
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
});
