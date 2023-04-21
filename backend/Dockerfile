FROM gcr.io/distroless/java17:latest
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

ENV H2_FILE_PATH=/app/cook_data/database
ENTRYPOINT ["java","-XX:+StartAttachListener", "-jar","/app.jar"]