# Расширения для работы с Azure Devops Pipeline

## Скачать

[Releases](https://gitlab.com/Classik/azp_helper/-/releases)

## Возможности 

Скопировать Пайплайн с сохранением всех настроек.

Открываем нужный пайплайн. Вправом вверхнем углу теперь доступна кнопка "Copy"(Если не отбражается обновите страницу).
![](/src/img/Screenshot_2.png)

![](/src/img/Screenshot_1.png)


# Перед использованием
В расширении необходимо указать свой Personal Access Tokens из TFS.

# Загрузка расширения в браузер
1. Открыть страницу расширений Chrome в вашем браузере
2. Переключть переключатель режима разработчика в правом верхнем углу
3. Выберать опцию ЗАГРУЗИТЬ РАСПАКОВАННОЕ РАСШИРЕНИЕ
4. Найти папку dist и выберите ее


# Сборка из исходников

### Для сборки нехобходим Node.js ###

### Перед сборкой проекта установите переменную NODE_OPTIONS

Linux and macOS (Windows Git Bash)
```
export NODE_OPTIONS=--openssl-legacy-provider
````
Windows command prompt
```
set NODE_OPTIONS=--openssl-legacy-provider
```

Windows PowerShell
```
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

## Сборка проекта
1. Установите все необходимые зависимости
```
$ npm install
```

2. Сборка production mode
```
$ npm run build
```

3. Сборка development mode (позволяет изменять код "на лету" без пересборки)
```
$ npm run dev
```

