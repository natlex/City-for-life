# City-for-life


FRONTEND:

набор команд для локального запуска React приложения

cd frontend
cd city-for-life
npm install
npm start

=======

BACKEND:

1. Установка Python (последняя версия - 3.9.0): https://www.python.org/downloads/

2. Установка виртуального окружения:
Выбрать директорию для создания виртуального окружения.
В выбранной директории, в командной строке (VS Code) прописать: 

	python -m venv env
	source env/Scripts/activate 

В командной строке должен появиться префикс (env)

3. Установка Django:
Скопировать файлы из backend в директорию
В командной строке:

	python -m pip install --upgrade pip
	pip install -r requirements.txt

4. Находясь в директории city_for_life (в данной директории должен находиться файл manage.py) в командной строке прописать:
	
	python manage.py runserver

В браузере зайти на сайт http://127.0.0.1:8000/
При успешном запуске должно вывестись 'Установка прошла успешно! Поздравляем!'

5. Для завершения выполнения предыдущей команды нажать Ctrl+C

6. Для завершения работы в виртуальном окружении в командной строке:

	deactivate

