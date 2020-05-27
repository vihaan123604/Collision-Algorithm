function isTouching(object1,object2){
    if (object1.x - object2.x <=(object1.width+object2.width)/2 &&
    object2.x - object1.x <=(object1.width+object2.width)/2 &&
    object1.y - object2.y <=(object1.height+object2.height)/2 &&
    object2.y - object1.y <=(object1.height+object2.height)/2 )  {
      object2.shapeColor="red"
      object1.shapeColor="red"
    } else {
      object2.shapeColor="green"
      object1.shapeColor="green"
    }
  }