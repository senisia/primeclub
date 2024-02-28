from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
from io import BytesIO
from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



app = FastAPI(docs_url=None, redoc_url=None)


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



@app.get("/get_products/")
async def read_products():
    db = SessionLocal()
    products = db.query(Product).all()
    db.close()
    return products



@app.get("/get_file/{product_name}/")
async def get_file(product_name: str):
    db = SessionLocal()
    product = await db.query(Product).filter(Product.name == product_name).first()
    db.close()

    return product.url


@app.get("/products/{product_id}/image/")
async def get_product_image(product_id: int):
    db = SessionLocal()
    product = db.query(Product).filter(Product.id == product_id).first()
    image_path = f"images/{product.id}.jpg"  # Example path construction
    return FileResponse(path=image_path, media_type="image/jpeg")