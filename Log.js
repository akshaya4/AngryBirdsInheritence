class Log extends BaseClass
{
  constructor(x,y,height,angle)
  {
    super(x,y,20,height,angle)
    this.image=loadImage("/Users/anurulla/Downloads/angryBirdsStage2StudentActivity-master/sprites/wood2.png")
    Matter.Body.setAngle(this.body,angle)
  }
}