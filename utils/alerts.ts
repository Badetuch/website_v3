// alerts.ts

import Swal from 'sweetalert2';

// Function to handle the connect click alert
export const handleConnectClick = () => {
  Swal.fire({
    title: 'WARNING',
    html: `
      <div style="font-weight: Normal">
          By connecting, you are accepting our <a href="/terms" target="_blank" style='color:#F5284A;'>Terms of Service</a> and <a href="/privacy" target="_blank" style='color:#F5284A;'>Privacy Policy</a>.
      </div>
  `,
    icon: 'info',
    color: '#fff',
    showCancelButton: true,
    denyButtonText: 'Abort',
    confirmButtonText: 'CONNECT',
    confirmButtonColor: '#F5284A', 
    background: '#1A1A1B',
    customClass: {
      title: 'custom-title',
    }
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = 'ts3server://badespeak.net?port=9987';
      Swal.fire({
        title: "CONNECTED!",
        color: '#fff',
        text: "Please confirm the connection popup in your browser. Have fun!",
        icon: "success",
        confirmButtonColor: '#F5284A', 
        background: '#1A1A1B',
        customClass: {
          title: 'custom-title',
        }
      });
    }
  });
};

// Function to handle the live viewer click alert
export const handleLiveViewerClick = () => {
  const div = document.createElement("div");
  div.setAttribute("class", "ts3index-viewer");
  div.setAttribute("data-serverid", "303672");
  div.setAttribute("data-autoreload", "true");
  div.setAttribute("data-style", "bgcolor=1A1A1B&font=Verdana&color=FFFFFF");

  const link = document.createElement("a");
  link.href = "#"; // Set a dummy href to prevent default behavior
  link.textContent = "Please Refresh";
  link.style.color = "#F5284A"; // Optional: Style the link color
  link.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.reload(); // Reload the page when clicked
  });

  div.appendChild(link);

  const c = document.createElement("script");
  c.type = "text/javascript";
  c.async = true;
  c.src = "https://ts3index.com/viewer/script.js";

  const s = document.getElementsByTagName("script")[0];
  if (s && s.parentNode) {
    s.parentNode.insertBefore(c, s);
  }

  Swal.fire({
    html: div.outerHTML, // Use outerHTML to include the entire div structure
    customClass: {
      popup: 'salert'
    },
    confirmButtonColor: '#F5284A',
    background: '#1A1A1B',
    confirmButtonText: 'Close',
  });
};
