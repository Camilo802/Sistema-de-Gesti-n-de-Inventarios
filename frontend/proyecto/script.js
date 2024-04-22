
document.addEventListener('DOMContentLoaded', function() {
  // Obtener el botón de proveedores
  const proveedoresButton = document.querySelector('.proveedoresButton');
  // Verificar si el botón de proveedores existe
  if (proveedoresButton) {
    // Agregar evento de clic al botón de proveedores
    proveedoresButton.addEventListener('click', function() {
      // Redireccionar a la página de proveedores.html
      window.location.href = 'proveedores.html';
    });
  }

  // Obtener el botón de productos
  const productosButton = document.getElementById('productosButton');

  // Verificar si el botón de productos existe
  if (productosButton) {
    // Agregar evento de clic al botón de productos
    productosButton.addEventListener('click', function() {
      // Redireccionar a la página productos.html
      window.location.href = 'productos.html';
    });
  }
    // Obtener el botón de compras
    const compraButton = document.getElementById('compraButton');

    // Verificar si el botón de compras existe
    if (compraButton) {
      // Agregar evento de clic al botón de compras
      compraButton.addEventListener('click', function() {
        // Redireccionar a la página compras.html
        window.location.href = 'ordenes_compra.html';
      });
    }

        // Obtener el botón de devoluciones
        const devolucionesButton = document.getElementById('devolucionesButton');

        // Verificar si el botón de devoluciones existe
        if (devolucionesButton) {
          // Agregar evento de clic al botón de devoluciones
          devolucionesButton.addEventListener('click', function() {
            // Redireccionar a la página devoluciones.html
            window.location.href = 'devoluciones.html';
          });
        }
        // Obtener el botón de recibidos
        const recibidosButton = document.getElementById('recibidosButton');

        // Verificar si el botón de recibidos existe
        if (recibidosButton) {
          // Agregar evento de clic al botón de recibidos
          recibidosButton.addEventListener('click', function() {
            // Redireccionar a la página recibidos.html
            window.location.href = 'recibidos.html';
          });
        }

        // Obtener el botón de ventas
        const ventasButton = document.getElementById('ventasButton');

        // Verificar si el botón de ventas existe
        if (ventasButton) {
          // Agregar evento de clic al botón de ventas
          ventasButton.addEventListener('click', function() {
            // Redireccionar a la página ventas.html
            window.location.href = 'ventas.html';
          });
        }
        

     // Agregar evento de clic al botón de inicio en el menú lateral
  const inicioButton = document.getElementById('inicioButton');
  if (inicioButton) {
    inicioButton.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  }

    // Obtener el botón de proveedores en el menú lateral
    const proveedoresSidebarButton = document.getElementById('proveedoresSidebarButton');
  
    // Agregar evento de clic al botón de proveedores en el menú lateral
    if (proveedoresSidebarButton) {
      proveedoresSidebarButton.addEventListener('click', function() {
        // Redirigir a la página proveedores.html
        window.location.href = 'proveedores.html';
      });
    }

    
    // Obtener el botón de ventas en el menú lateral
    const VentasSidebarButton = document.getElementById('VentasSidebarButton');
  
    // Agregar evento de clic al botón de ventas en el menú lateral
    if (VentasSidebarButton) {
      VentasSidebarButton.addEventListener('click', function() {
        // Redirigir a la página ventas.html
        window.location.href = 'ventas.html';
      });
    }


    
    // Obtener el botón de Devoluciones en el menú lateral
    const DevolucionesSidebarButton = document.getElementById('DevolucionesSidebarButton');
  
    // Agregar evento de clic al botón de Devoluciones en el menú lateral
    if (DevolucionesSidebarButton) {
      DevolucionesSidebarButton.addEventListener('click', function() {
        // Redirigir a la página devoluciones.html
        window.location.href = 'devoluciones.html';
      });
    }

    
    // Obtener el botón de stocks en el menú lateral
    const StocksSidebarButton = document.getElementById('StocksSidebarButton');
  
    // Agregar evento de clic al botón de stocks en el menú lateral
    if (StocksSidebarButton) {
      StocksSidebarButton.addEventListener('click', function() {
        // Redirigir a la página stocks.html
        window.location.href = 'stocks.html';
      });
    }

        // Obtener el botón de Recibidos en el menú lateral
        const RecibidosSidebarButton = document.getElementById('RecibidosSidebarButton');
  
        // Agregar evento de clic al botón de Recibidos en el menú lateral
        if (RecibidosSidebarButton) {
          RecibidosSidebarButton.addEventListener('click', function() {
            // Redirigir a la página recibidos.html
            window.location.href = 'recibidos.html';
          });
        }

        // Obtener el botón de proveedores en el menú lateral
        const comprasSidebarButton = document.getElementById('comprasSidebarButton');
  
        // Agregar evento de clic al botón de proveedores en el menú lateral
        if (comprasSidebarButton) {
          comprasSidebarButton.addEventListener('click', function() {
            // Redirigir a la página proveedores.html
            window.location.href = 'ordenes_compra.html';
          });
    }

    // Obtener el botón de productos en el menú lateral
    const productosSidebarButton = document.getElementById('productosSidebarButton');
  
    // Agregar evento de clic al botón de productos en el menú lateral
    if (productosSidebarButton) {
      productosSidebarButton.addEventListener('click', function() {
        // Redirigir a la página productos.html
        window.location.href = 'productos.html';
      });
    }

       const DevolucionesButton = document.getElementById('DevolucionesButton');
         if (DevolucionesButton) {
          DevolucionesButton.addEventListener('click', function() {
           window.location.href = 'devolucionNueva.html';
         });
       }

       const ordenes_compraButton = document.getElementById('ordenes_compraButton');
       if (ordenes_compraButton) {
      ordenes_compraButton.addEventListener('click', function() {
         window.location.href = 'ordenNueva.html';
       });
     }
  

     const VenButton = document.getElementById('VenButton');
     if (VenButton) {
      VenButton.addEventListener('click', function() {
       window.location.href = 'ventaNueva.html';
     });
   }
  

  // Agregar evento de clic al botón de menú
  const menuButton = document.getElementById('menuButton');
  const sidebar = document.getElementById('sidebar');
  if (menuButton && sidebar) {
    menuButton.addEventListener('click', function() {
      sidebar.style.left = sidebar.style.left === '0px' ? '-200px' : '0px';
    });
  }
   // Agregar evento de clic al documento para cerrar el menú al hacer clic fuera de él
   document.addEventListener('click', function(event) {
    if (sidebar && event.target !== menuButton && !sidebar.contains(event.target)) {
      sidebar.style.left = '-200px';
    }
  });

    const nuevoButton = document.getElementById('nuevoButton');
    const modalAgregarProveedor = document.getElementById('modalAgregarProveedor');
    const closeButton = modalAgregarProveedor.querySelector('.close');
  
    nuevoButton.addEventListener('click', function() {
      modalAgregarProveedor.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function() {
      modalAgregarProveedor.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modalAgregarProveedor) {
        modalAgregarProveedor.style.display = 'none';
      }
    });
  
    const formularioProveedor = document.getElementById('formularioProveedor');
  
    formularioProveedor.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Aquí puedes manejar la lógica para guardar los datos del nuevo proveedor
      // Por ejemplo, puedes obtener los valores de los campos del formulario
      const nombre = document.getElementById('nombre').value;
      const direccion = document.getElementById('direccion').value;
      const contacto = document.getElementById('contacto').value;
      const numero = document.getElementById('numero').value;
      const estado = document.getElementById('estado').value;
  
      // Luego puedes hacer algo con esos valores, como enviarlos a un servidor o guardarlos localmente
      // Aquí puedes agregar la lógica para guardar los datos del proveedor
      // Por ejemplo, puedes mostrarlos en la tabla de proveedores o enviarlos a través de una solicitud HTTP
      console.log('Nombre:', nombre);
      console.log('Dirección:', direccion);
      console.log('Persona de Contacto:', contacto);
      console.log('Número de Contacto:', numero);
      console.log('Estado:', estado);
  
      // Cierra el modal después de guardar los datos
      modalAgregarProveedor.style.display = 'none';
      // Aquí podrías realizar alguna acción adicional, como actualizar la tabla de proveedores
    });
    const cancelarButton = document.getElementById('cancelarButton');
    cancelarButton.addEventListener('click', function() {
      modalAgregarProveedor.style.display = 'none';
    });
    });
    