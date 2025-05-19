docker kill mon-container-mongodb
docker rm mon-container-mongodb
rm -rf ./docker_mongo 
mkdir docker_mongo
chmod -R 777 docker_mongo
docker pull mongo
docker run -d \
  -p 27017:27017 \
  --name mon-container-mongodb \
  -v /c/Users/Enzo/Documents/ProjetTechno-Web/docker_mongo:/data/db \
  -v /c/Users/Enzo/Documents/ProjetTechno-Web:/app \
  mongo

# Wait for MongoDB to be ready
until docker exec mon-container-mongodb mongosh --eval "db.runCommand({ connectionStatus: 1 })" &>/dev/null; do
  echo "Waiting for MongoDB to be ready..."
  sleep 1
done

docker exec -it mon-container-mongodb mongosh --file /app/setup/script.js
