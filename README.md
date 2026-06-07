# Portfolio BTS SIO — DRIDI Abd Errahmane

Site web portfolio personnel pour le BTS SIO option SISR.

---

## Structure des fichiers

```
portfolio-bts-sio/
│
├── index.html                  → Page d'accueil
├── bts-sio.html                → Présentation du BTS SIO (SISR / SLAM)
├── stage-1ere-annee.html       → Rapport de stage de 1ère année
├── stage-2eme-annee.html       → Rapport de stage de 2ème année (GRETA Colmar)
├── veille-technologique.html   → Veille technologique (RustDesk / souveraineté numérique)
├── tableau-competences.html    → Tableau de compétences E4 (Bloc 1)
│
├── css/
│   └── style.css               → Feuille de style principale (thème clair/sombre)
│
├── js/
│   └── main.js                 → Navigation, hamburger mobile, basculement de thème
│
└── README.md                   → Ce fichier
```

---

## Comment ouvrir le site

### Méthode 1 — Ouverture directe (sans serveur)

Double-cliquez sur le fichier `index.html`. Le site s'ouvre dans votre navigateur.

> **Note :** Cette méthode fonctionne pour la navigation et le contenu. Le thème choisi est sauvegardé dans le `localStorage` du navigateur.

---

### Méthode 2 — Serveur local Python (recommandée)

Cette méthode évite les éventuels problèmes de CORS et simule un vrai serveur web.

**Prérequis :** Python 3 installé sur votre machine.

1. Ouvrez un terminal dans le dossier `portfolio-bts-sio/`
2. Lancez la commande suivante :

```bash
python3 -m http.server 8080
```

3. Ouvrez votre navigateur et allez à l'adresse :

```
http://localhost:8080
```

Pour arrêter le serveur : appuyez sur `Ctrl + C` dans le terminal.

---

### Méthode 3 — Serveur local Node.js

**Prérequis :** Node.js installé sur votre machine.

```bash
npx serve .
```

Le terminal affichera l'adresse locale à ouvrir dans le navigateur.

---

### Méthode 4 — Extension VS Code (Live Server)

Si vous utilisez Visual Studio Code :

1. Installez l'extension **Live Server** (Ritwick Dey)
2. Faites un clic droit sur `index.html`
3. Cliquez sur **"Open with Live Server"**

---

## Fonctionnalités

| Fonctionnalité | Description |
|---|---|
| **Thème clair / sombre** | Bouton dans la navigation, préférence sauvegardée automatiquement |
| **Navigation responsive** | Menu hamburger sur mobile, menus déroulants pour les stages |
| **Design sobre et élégant** | Palette bleue marine et blanc, typographie claire |
| **Un fichier HTML par page** | Structure lisible et maintenable facilement |

---

## Personnalisation

### Ajouter le rapport de stage de 1ère année

Ouvrez le fichier `stage-1ere-annee.html` et remplacez les sections marquées `À compléter` par votre contenu réel.

### Modifier les informations personnelles

Les informations (nom, établissement, dates) se trouvent directement dans chaque fichier HTML. Recherchez et remplacez `DRIDI Abd Errahmane` par votre nom si nécessaire.

### Changer les couleurs

Les couleurs sont définies dans `css/style.css` via des variables CSS au début du fichier (`:root` pour le thème clair, `[data-theme="dark"]` pour le thème sombre). Modifiez la variable `--accent` pour changer la couleur principale.

---

## Technologies utilisées

- **HTML5** — Structure sémantique
- **CSS3** — Variables CSS, Flexbox, Grid, Media Queries
- **JavaScript vanilla** — Aucune dépendance externe

---

*Portfolio réalisé dans le cadre du BTS SIO option SISR — 2024–2026*
