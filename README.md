Practical 14 — CC Cloud-Based To-Do List Manager (MERN)
Step 1 — Clone Repository
git clone https://github.com/YOUR_USERNAME/todo-app.git

Go inside:

cd todo-app

Check folders:

ls

You should see:

backend  frontend
Step 2 — Install MongoDB
sudo apt update
sudo apt install mongodb -y

Start MongoDB:

sudo systemctl start mongod

Enable MongoDB:

sudo systemctl enable mongod
Step 3 — Backend Setup

Go to backend:

cd backend

Install packages:

npm install

Create .env:

nano .env

Add:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todoapp
JWT_SECRET=mysecretkey

Save:

Ctrl + O
Enter
Ctrl + X

Run backend:

node server.js

OR

npm start
Step 4 — Open Backend Port

AWS → Security Groups → Add Rule

Type	Port
Custom TCP	5000

Source:

0.0.0.0/0
Step 5 — Open New Terminal

Go to frontend:

cd ~/todo-app/frontend

Install packages:

npm install

Run frontend:

npm run dev -- --host

OR

npm start
Step 6 — Open Frontend Port

Add rule:

Type	Port
Custom TCP	5173

Source:

0.0.0.0/0
Step 7 — Open Website
http://YOUR_PUBLIC_IP:5173
Practical 15 — CC Online Event Registration System (MERN)
Step 1 — Clone Repository
git clone https://github.com/YOUR_USERNAME/event-registration-system.git

Go inside:

cd event-registration-system

Check folders:

ls

You should see:

backend  frontend
Step 2 — Install MongoDB
sudo apt update
sudo apt install mongodb -y

Start MongoDB:

sudo systemctl start mongod

Enable MongoDB:

sudo systemctl enable mongod
Step 3 — Backend Setup

Go to backend:

cd backend

Install packages:

npm install

Create .env:

nano .env

Add:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/eventdb
JWT_SECRET=mysecretkey

Save:

Ctrl + O
Enter
Ctrl + X

Run backend:

node server.js

OR

npm start
Step 4 — Open Backend Port

AWS → Security Groups → Add Rule

Type	Port
Custom TCP	5000

Source:

0.0.0.0/0
Step 5 — Open New Terminal

Go to frontend:

cd ~/event-registration-system/frontend

Install packages:

npm install

Run frontend:

npm run dev -- --host

OR

npm start
Step 6 — Open Frontend Port

Add rule:

Type	Port
Custom TCP	5173

Source:

0.0.0.0/0
Step 7 — Open Website
http://YOUR_PUBLIC_IP:5173



