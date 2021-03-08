# Assignment

-Steps to configure:
  1) Run the SQL script named "Createtable.sql" inside TSQL folder.
  2) Change connection string inside "src/dbConfig/dbConnector.ts".

-Start Project command: "npm run start"


Tested API's:

1) http://localhost:4000/albums : Get List of Albums from "https://jsonplaceholder.typicode.com/albums". 
2) http://localhost:4000/photos?albumId=1 : Get List of photos in album from "https://jsonplaceholder.typicode.com/photos?albumId=1"
3) http://localhost:4000/save?albumId=1&id=3 : Saves photo details in database for albumid 1 and id 3.
4) http://localhost:4000/getrecords : Get photo records saved in database.




