import mysql.connector as msc
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
# Configure CORS
# Update origins to match the URL where your JavaScript is running (e.g., "http://localhost:5500")
origins = [
    "http://localhost",
    "http://127.0.0.1",
    "http://localhost:8000",
    "http://127.0.0.1:8000"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
    acc_num: int
    pin: int
    # Here define a Pydantic model for incoming data
    #necessary for using post

@app.post("/submit_item/")
def submit_item(item: Item):
    mycon = msc.connect( user="root", passwd="password", host="localhost",database="fraud_detection" )

    mycur = mycon.cursor(dictionary=True)

    mycur.execute("SELECT * FROM user_account WHERE ACCOUNT_NUMBER=%s AND PIN=%s", (item.acc_num, item.pin))

    result=mycur.fetchone()

    if result:
        response = {"message": "Login successful"}
    else:
        response = {"message": "Invalid credentials"}

    mycur.close()
    mycon.close()
    return response