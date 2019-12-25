# Создание мобильного приложения с использованием vuetify
Текст туториала по адресу: [Creating a Mobile Web App with Vue](https://medium.com/@JonUK/creating-a-mobile-web-app-with-vue-vuetify-typescript-dc69bed4cd2d)
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
   заменить все иконки на иконки [material design icons](https://cdn.materialdesignicons.com/4.7.95/)
   
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
## 4 добавляем страницу логина
###    4.1.  добавляем кнопку логина в приложение
###    4.2. созданем странциу логина
###    4.3. Редактируем в роутере ссылку на логин

## 5 Создание новосной страницы
### 5.1 Создаем шаблон в файле NewsList.vue
### 5.2 Копируем картинки из 
из [репозитория](https://github.com/JonUK/vuetify-mobile-app) копируем папку 
### 5.3 Создаем интерфейс и енюм для новостей
    созадем файл types.ts и определяем типы
    создаем сервис новостей в файле src/services/newsService.ts
    импортируем типы в сервис новостей import { ArticleType, NewsArticle } from '../types';

## Дальнейшее развитие проекта:
Дальнейшее развитие проекта определено в файле [TODO.md](../TODO.md) 
Дальнейшее развитие проекта определено в файле [TODO.md](TODO.md) 

## Патчи и дополнения:
### При возникновении ошибки Could not find a declaration file for module 'vuetify/lib'
    добавить в файл конфигурации tsconfig.json 
    "compilerOptions": {
        "types": ["vuetify"],
### При копировании git clone запуск приложения производится:
        npm install
        npm run serve
        
### При ошибках в путях к картинкам
    прим src="/pictures/picture.png" - работает
    :src"/pictures/picture.png" - не работает, сделать путь полным:
    :src"../pictures/picture.png"        
        
       
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
