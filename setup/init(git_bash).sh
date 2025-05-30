mkdir docker_mongo
chmod -R 777 docker_mongo
docker pull mongo
docker run -d -p 27017:27017 --name mon-container-mongodb -u $(id -u) -v /$(pwd)/docker_mongo:/data/db -v /$(pwd):/app mongo

# Wait for MongoDB to be ready
until docker exec mon-container-mongodb mongosh --eval "db.runCommand({ connectionStatus: 1 })" &>/dev/null; do
  echo "Waiting for MongoDB to be ready..."
  sleep 1
done

#docker exec -it mon-container-mongodb mongosh --file /c/Users/Lilo/Documents/Code/Web/ProjetTechno-Web/setup/script.js
docker exec -it mon-container-mongodb mongosh --eval //app/setup/script.js