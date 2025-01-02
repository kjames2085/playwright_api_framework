export const baseurl ={
    "baseurl" : "https://restful-booker.herokuapp.com"
}

export const bodydataforauth = {
    "username": "admin",
    "password": "password123"
}

export const bodyforcreatebooking = {
    "firstname": "Jim",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"
}

export const bodyforupdatebooking = {
        "firstname" : "RAMESH",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
}
