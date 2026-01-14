import mysql.connector as msc
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()
# Configure CORS
# Update origins to match the URL where your JavaScript is running (e.g., "http://localhost:5500")
origins = [
    "http://localhost:5173",
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
    # necessary for using post

@app.post("/submit_item/")
def submit_item(item: Item):
    mycon = msc.connect( user="root", passwd="Techno@blast", host="localhost",database="fraud_detection" )

    mycur = mycon.cursor(dictionary=True)

    mycur.execute("""SELECT users.USER_ID FROM user_account JOIN users ON users.ACCOUNT_NUMBER = user_account.ACCOUNT_NUMBER WHERE user_account.ACCOUNT_NUMBER = %s AND user_account.PIN = %s """, (item.acc_num, item.pin))


    result=mycur.fetchone()

    if result:
        response = {"message": "Login successful...redirecting","user_id": result["USER_ID"],"success":True}
    else:
        response = {"message": "Invalid credentials",'success': False}

    mycur.close()
    mycon.close()
    return response

@app.get("/user/{user_id}")
def get_user(user_id: int):
    mycon = msc.connect( user="root", passwd="Techno@blast", host="localhost",database="fraud_detection" )
    mycur = mycon.cursor(dictionary=True)

    mycur.execute("SELECT USERNAME, users.ACCOUNT_NUMBER FROM user_account JOIN users ON user_account.ACCOUNT_NUMBER = users.ACCOUNT_NUMBER WHERE users.USER_ID=%s", (user_id,))
    user = mycur.fetchone()

    mycur.close()
    mycon.close()
    
    if user:
        return {"success": True, "user": user}
    else:
        return {"success": False, "message": "User not found"}