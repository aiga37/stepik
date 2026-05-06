# Команды для обучения (JS/TS)

## Навигация в терминале
- `pwd` — показать текущую папку
- `ls` — показать файлы в папке
- `cd путь_к_папке` — перейти в папку
- `cd ..` — на уровень выше
- `mkdir имя_папки` — создать папку

## Node.js и запуск файлов
- `node my.js` — запустить JavaScript файл
- `node -v` — версия Node.js
- `npm -v` — версия npm

## npm (пакеты)
- `npm init -y` — создать `package.json`
- `npm install <пакет>` — установить пакет в проект
- `npm install -D <пакет>` — установить как dev-зависимость
- `npm uninstall <пакет>` — удалить пакет
- `npm run <script>` — запустить скрипт из `package.json`

## TypeScript (базово)
- `npm install -D typescript` — установить TypeScript в проект
- `npx tsc --init` — создать `tsconfig.json`
- `npx tsc` — скомпилировать `.ts` в `.js`
- `npx tsc --watch` — компиляция в режиме наблюдения
- `npx tsc --noEmit` — только проверка типов без генерации `.js`

## Быстрый запуск TypeScript
- `npm install -D tsx` — установить `tsx`
- `npx tsx my.ts` — запустить `.ts` напрямую

## Полезно на Windows PowerShell
Если ошибка про `npm.ps1` и `ExecutionPolicy`:
- `npm.cmd install -D typescript` — обойти блокировку для npm

Или разрешить скрипты для текущего пользователя:
- `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`

## Git (минимум)
- `git init` — инициализировать репозиторий
- `git status` — состояние файлов
- `git add .` — добавить изменения в индекс
- `git commit -m "message"` — создать коммит
- `git log --oneline` — короткая история коммитов

## Частые учебные сценарии
### 1) Новый JS-проект
1. `mkdir my-project`
2. `cd my-project`
3. `npm init -y`
4. Создать `index.js`
5. `node index.js`

### 2) Новый TS-проект
1. `mkdir my-ts-project`
2. `cd my-ts-project`
3. `npm init -y`
4. `npm install -D typescript`
5. `npx tsc --init`
6. Создать `index.ts`
7. `npx tsc`
8. `node index.js`

## Подсказка
Если не уверены, что делать дальше, начните с:
- `git status`
- `node -v`
- `npm -v`
