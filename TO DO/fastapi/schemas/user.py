from pydantic import BaseModel

class User(BaseModel):
    id: int    
    name: str
    email: str
    full_name: str
    disabled: bool = None