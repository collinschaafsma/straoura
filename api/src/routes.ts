import express from 'express';
import { MainController } from './controllers/main';
import { ImportController } from './controllers/import';
import { UserController } from './controllers/user';
import { IntegrationController } from './controllers/integration';
import { MetricController } from './controllers/metric';
import auth from './lib/middlewares/auth';

export class Routes {

  public mainController: MainController = new MainController();
  public importController: ImportController = new ImportController();
  public userController: UserController = new UserController();
  public integrationController: IntegrationController = new IntegrationController();
  public metricController: MetricController = new MetricController();

  public routes(app: express.Application): void {
    app.route('/')
      .get(this.mainController.index);

    app.route('/v1/importer/oura')
      .get((auth), this.importController.oura);

    app.route('/v1/importer/strava')
      .get((auth), this.importController.strava);

    app.route('/v1/user')
      .post((auth), this.userController.create);

    app.route('/v1/integration')
      .post((auth), this.integrationController.create);

    app.route('/v1/integration/:id')
      .put((auth), this.integrationController.update);

    app.route('/v1/metrics')
      .get((auth), this.metricController.fetch);
  }
}
