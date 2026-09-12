const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }));
}

const orderForm = document.getElementById('order-form');
const formStatus = document.getElementById('form-status');
if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!orderForm.reportValidity()) return;
    const data = new FormData(orderForm);
    const message = [
      'Hi Pravalika, I would like to enquire about a custom resin piece.',
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Preserving: ${data.get('product')}`,
      `Timeline: ${data.get('timeline') || 'Not specified'}`,
      `Idea: ${data.get('notes') || 'Not specified'}`
    ].join('\n');
    const emailSubject = encodeURIComponent('New Resin Studio enquiry');
    const emailBody = encodeURIComponent(message);
    window.location.href = `mailto:resinstudiobypravalika@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    if (formStatus) formStatus.textContent = 'Your email app should open with the enquiry prepared. Please send it to complete the enquiry.';
  });
}
