import { handleSubmit } from './js/formHandler';
import { checkForUrl } from './js/nameChecker';
import './styles/base.scss';
import './styles/header.scss';
import './styles/form.scss';
import './styles/footer.scss';

document.getElementById('urlForm').addEventListener('submit', handleSubmit);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}