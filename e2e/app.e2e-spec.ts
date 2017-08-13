import { ProjectWriteAngularAppPage } from './app.po';

describe('project-write-angular-app App', () => {
  let page: ProjectWriteAngularAppPage;

  beforeEach(() => {
    page = new ProjectWriteAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
