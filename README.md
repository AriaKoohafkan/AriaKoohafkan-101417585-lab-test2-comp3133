# Harry Potter Character List (Standalone Angular App)

This is a **standalone Angular** application that displays a list of **Harry Potter characters** along with their images and house details. The application fetches data from a service and displays the characters in a **responsive grid layout**.

---

## Features

✅ **Standalone Angular Application** (No NgModule required)  
✅ Fetches Harry Potter characters from an API  
✅ Displays character images and house information  
✅ Responsive grid layout.  
✅ Uses Angular Material for UI styling  
✅ **Deployable on Vercel**  

---

## Installation (Local Development)

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/harry-potter-app.git
   cd harry-potter-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   ng serve
   ```

4. Open your browser and visit:  
   ```
   http://localhost:4200/
   ```

---

## Deployment on Vercel 🌍

You can deploy this Angular application **for free** on [Vercel](https://vercel.com/). Follow these steps:

### **1. Install Vercel CLI (if not installed)**
```bash
npm install -g vercel
```

### **2. Build the Angular Project**
```bash
ng build --configuration=production
```
This will generate a `dist/` folder with your production-ready files.

### **3. Deploy to Vercel**
Run the following command inside your project folder:
```bash
vercel
```
Follow the on-screen instructions to set up your deployment.

### **4. Get Your Live URL**
After deployment, Vercel will provide a live URL. Mine was  https://101417585-lab-test2-comp3133-14y52n690-arias-projects-8f8d6d1b.vercel.app

---

## File Structure

```
src/
│-- app/
│   │-- services/
│   │   ├── harry-potter.service.ts
│   │-- components/
│   │   ├── characterlist/
│   │   │   ├── characterlist.component.ts
│   │   │   ├── characterlist.component.html
│   │   │   ├── characterlist.component.scss
│   │-- models/
│   │   ├── character.ts
│-- assets/
│-- styles.scss
│-- main.ts
│-- index.html
```

---

## Components

### **Character List Component**
- Displays a **list of characters** in a grid format.
- Uses **Angular Material** for styling.
- Shows **images, names, and house information**.

#### **HTML Code (characterlist.component.html)**

```html
<div class="character-container">
  <mat-card *ngFor="let character of characters" class="character-card">
    <img [src]="character.image" alt="{{ character.name }}" class="character-image">
    <mat-card-title>{{ character.name }}</mat-card-title>
    <mat-card-content>House: {{ character.house }}</mat-card-content>
  </mat-card>
</div>
```

#### **SCSS Code (characterlist.component.scss)**

```scss
.character-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.character-card {
  width: 250px;
  text-align: center;
  padding: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.character-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
```

---

## API Integration

The **HarryPotterService** fetches character data from an API:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }
}
```

---

## Technologies Used

- **Angular** (Standalone Components)
- **Angular Material** (UI Styling)
- **TypeScript**
- **SCSS**
- **RxJS** (For API calls)
- **Vercel** (Deployment)

---

## Author

📌 Developed by **Aria koohafkan**  
---

## License

📜 MIT License. Feel free to use and modify this project.
```

---
