# Создание мобильного приложения с использованием vuetify
## 1. Установка приложения
###    1.1. Установка vue/cli
    npm install -g @vue/cli
### 1.2. Создание приложения:
    vue create vuetify-mobile-app
    Please pic a preset: Manually select features: Babel, TypeScript, Router, Vuex & Unit Testing
    pick a unit-testing solution: Jest
    
### 1.3. Пробный запуск приложения:
    cd vuetify-mobile-app
    npm run serve
    
### 1.4 Установка Vuetify
    vue add vuetify
    
## 2. Создание оболочки приложения
### 2.1 Создание заголовка (Верхней панели)
    создать компонент TopToolbar.vue в src/components   
### 2.2 Создание нижней панели
    создать компонент BottomNav.vue
### 2.3 Установка компоненков в приложении
    отредактировать App.vue
### 2.4 Отредактировать компоненты и иконки
    - f-12 в браузере - заменить все deprecated компоненты
    - заменить все иконки на иконки material design
        https://cdn.materialdesignicons.com/4.7.95/
        пример:
        <v-icon>mdi-wrench</v-icon>
        <v-icon>mdi-help-rhombus-outline</v-icon>
     
## 3. Создание страниц и настройка роутера
### 3.1 Создание страниц
    в папке views создаем  MyFavorites.vue, CodeExamples.vue, TopStories.vue
    настраиваем router/index.ts
### 3.2 Редактирование bottom bar 
    добавить пути в bottom bar:
    <v-btn flat color="primary" :to="{ path: '/'}">
    или по имени6
    <v-btn flat color="primary" :to="{ name: 'code-examples'}">
### 3.3 Помещаем router vue в приложение
    в шаблоне App.cue помещаем     
    <v-content>
       <router-view></router-view>
    </v-content>
## 4 Перезапуск приложения
    при копировании git clone запуск приложения производится:
       npm install
       npm run serve
       
# vuetify-mobile-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
