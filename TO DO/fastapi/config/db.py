from sqlalchemy import create_engine, MetaData

# Correct the password by URL-encoding the '@' character
engine = create_engine("mysql+pymysql://root:Mine%40123456789@localhost:3306/test")
meta = MetaData()
conn = engine.connect()
