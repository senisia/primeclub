from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



app = FastAPI()


SQLALCHEMY_DATABASE_URL = "sqlite:///./primecell.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    price = Column(Float)
    url = Column(String)

Base.metadata.create_all(bind=engine)

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


@app.get("/get_products")
async def read_products():
    db = SessionLocal()
    products = db.query(Product).all()
    db.close()
    return products



@app.get("/get_file/{product_name}")
async def get_file(product_name: str):
    db = SessionLocal()
    product = db.query(Product).filter(Product.name == product_name).first()
    db.close()

    return product.url