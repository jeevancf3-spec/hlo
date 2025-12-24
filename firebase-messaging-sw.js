importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Ninte Firebase configuration (index.html-il kodutha athe pole)
firebase.initializeApp({
    messagingSenderId: "777421869874" 
});

const messaging = firebase.messaging();

// Background notification handle cheyyan
messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
