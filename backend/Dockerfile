FROM openjdk:11
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

ENV H2_FILE_PATH=/app/cook_data
ENTRYPOINT ["java","-jar","/app.jar"]