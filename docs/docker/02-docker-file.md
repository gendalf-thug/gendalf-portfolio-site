# Dockerfile

Dockerfile - это текстовый файл, используемый для создания Docker образов.

## Инструкции Dockerfile

### `FROM`

Инициализирует новый этап сборки и устанавливает базовый образ для последующих инструкций.

Для создания своих Docker образов рекомендуется использовать текущие официальные образы в качестве базовой основы. Docker настоятельно рекомендует использовать образ Alpine, так как он обладает несколькими преимуществами. Во-первых, Alpine образы жестко контролируются и проверяются на безопасность, что повышает надежность. Во-вторых, размер образа Alpine крайне мал и в настоящее время составляет менее 6 МБ, что делает его идеальным выбором для контейнеризации.

### RUN

Инструкция RUN выполнит любые команды и зафиксирует результаты.

Имеет 2 формы:

1. Команда запускается в оболочке, которая по умолчанию является `/bin/sh -c` в Linux или `cmd /S /C` в Windows

```dockerfile
RUN <command>
```

2. Исполнительная форма

```dockerfile
RUN ["executable", "param1", "param2"]
```

Когда исполняется `RUN` создаются новые слои, так что рекомендуется объединять несколько команд в одну, если они идут по очереди:

```dockerfile
# Bad
RUN apt-get -y update
RUN apt-get install -y python
# Good
RUN apt-get -y update && apt-get install -y python
```

Можно разделять длинные инструкции RUN по нескольким строкам, чтобы сделать ваш Dockerfile более читаемым, понятным и поддерживаемым:

```dockerfile
RUN apt-get update && apt-get install -y \
    package-bar \
    package-baz \
    package-foo  \
    && rm -rf /var/lib/apt/lists/*
```