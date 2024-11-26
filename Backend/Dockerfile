FROM openjdk:21
WORKDIR /hpsdf
ENV PORT 8080
EXPOSE 8080
COPY target/HPSDF.jar /hpsdf/HPSDF.jar
CMD ["java", "-jar", "HPSDF.jar"]