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
