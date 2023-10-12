FROM maven:3.8.3-openjdk-17
WORKDIR /back
COPY . /back
RUN mvn package
EXPOSE 8080
CMD ["mvn", "spring-boot:run"]