import { MainController } from './controllers/main';

export class Routes {

  public mainController: MainController = new MainController();

  public routes(app: any): void {
    app.route('/')
      .get(this.mainController.index);
  }
}
