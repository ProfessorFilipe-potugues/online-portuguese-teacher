// firebase-config.js

// 1. Importe as funções necessárias dos SDKs do Firebase (via CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 2. A sua configuração do Firebase (Substitua pelos seus dados reais)
const firebaseConfig = {
    apiKey: "SUA_API_KEY_AQUI",
    authDomain: "SEU_AUTH_DOMAIN_AQUI",
    projectId: "SEU_PROJECT_ID_AQUI",
    storageBucket: "SEU_STORAGE_BUCKET_AQUI",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID_AQUI",
    appId: "SEU_APP_ID_AQUI"
};

// 3. Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// 4. Inicialize os serviços que você usa
const auth = getAuth(app);
const db = getFirestore(app);

// 5. EXPORTE as instâncias para que outros arquivos possam usar
export { auth, db };
