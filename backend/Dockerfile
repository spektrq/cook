FROM openjdk:17-jdk-slim AS jdk

FROM gcr.io/distroless/java17:latest
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar

COPY --from=jdk --chmod=755 /bin/cat usr/local/openjdk-17/bin/jstack usr/local/openjdk-17/bin/jmap usr/lib/jvm/java-17-openjdk-amd64/bin/
ENV PATH="$PATH:/usr/lib/jvm/java-17-openjdk-amd64/bin/"

ENV H2_FILE_PATH=/app/cook_data/database
ENTRYPOINT ["java","-XX:+StartAttachListener", "-jar","/app.jar"]