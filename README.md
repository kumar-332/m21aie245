## Docker Application Deployment - Roll Number- M21AIE245 
# Steps Followed for Creation of Custom Image for Web Application.
     1.create a web application using HTML, CSS, JavaScript 
     2.Selected Ubuntu Base Images for our application.
     3.Update base Image and install NGINX server.
     4.Copied the all configuration file to the required location.
     5.Copied the Web application to the NGINX Default location.
     6.Export the Port:80 for application and started the NGINX server.
     7.After Followed the above steps, Images created.

# Steps Followed for the application Exeuition.
     1.For execiting the application, we are using Docker Compose.
        - docker-compose.yml is created for the same.it is using the previously created the dockerfile for the container spinup.
     2.Mapping the port:80 to the local port:8080
     3.command exceuited for docker compose 
        -docker compose up -d 
     4.Now, application can be accessible by http://localhost:8080.

# Please find the below screenshot image for application.

![homepage](https://github.com/kumar-332/m21aie245/blob/main/data/homepage.PNG)
![homepage](./data/homepage.PNG)