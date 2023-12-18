export class Drawer {
  private ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  drawStep(step: number) {
    switch (step) {
      case 1:
        this.drawStepOne();
        break;
      case 2:
        this.drawStepTwo();
        break;
      case 3:
        this.drawStepThree();
        break;
      case 4:
        this.drawStepFour();
        break;
      case 5:
        this.drawStepFive();
        break;
      case 6:
        this.drawStepSix();
        break;
      default:
        this.clear();
        break;
    }
  }

  drawStepOne() {
    this.ctx.strokeStyle = '#4a6196';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(20, 280);
    this.ctx.lineTo(120, 280);
    this.ctx.stroke();
  }

  drawStepTwo() {
    this.ctx.beginPath();
    this.ctx.moveTo(70, 280);
    this.ctx.lineTo(70, 50);
    this.ctx.stroke();
  }

  drawStepThree() {
    this.ctx.beginPath();
    this.ctx.moveTo(70, 50);
    this.ctx.lineTo(200, 50);
    this.ctx.stroke();
  }

  drawStepFour() {
    this.ctx.beginPath();
    this.ctx.moveTo(200, 50);
    this.ctx.lineTo(200, 80);
    this.ctx.stroke();
  }

  drawStepFive() {
    this.ctx.beginPath();
    this.ctx.arc(200, 100, 20, 0, 2 * Math.PI);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(200, 120);
    this.ctx.lineTo(200, 200);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(200, 140);
    this.ctx.lineTo(170, 170);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(200, 140);
    this.ctx.lineTo(230, 170);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(200, 200);
    this.ctx.lineTo(170, 230);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(200, 200);
    this.ctx.lineTo(230, 230);
    this.ctx.stroke();
  }

  drawStepSix() {
    const sadMouthRadius = 4;
    const sadMouthX = 200;
    const sadMouthY = 108;

    this.ctx.strokeStyle = 'rgb(197 38 10)';
    this.ctx.beginPath();
    this.ctx.arc(sadMouthX, sadMouthY, sadMouthRadius, Math.PI, 2 * Math.PI, false);


    const leftEyeX = 195;
    const rightEyeX = 205;
    const eyeY = 95;
    const eyeRadius = 2;

    this.ctx.strokeStyle = 'rgb(197 38 10)';
    this.ctx.moveTo(leftEyeX - eyeRadius, eyeY);
    this.ctx.arc(leftEyeX, eyeY, eyeRadius, 0, 2 * Math.PI, false);
    this.ctx.moveTo(rightEyeX - eyeRadius, eyeY);
    this.ctx.arc(rightEyeX, eyeY, eyeRadius, 0, 2 * Math.PI, false);

    this.ctx.stroke();
  }

  clear() {
    this.ctx.clearRect(0, 0, 300, 300);
  }
}
