FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy only index.html and styles.css
COPY /site-content/index.html /usr/share/nginx/html/
COPY /site-content/styles.css /usr/share/nginx/html/

# Copy fruits folder
COPY /site-content/fruits/ /usr/share/nginx/html/fruits/

# Copy vegetables folder
COPY /site-content/vegetables/ /usr/share/nginx/html/vegetables/