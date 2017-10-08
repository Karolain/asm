import { ScheduleUiPage } from './app.po';

describe('schedule-ui App', () => {
  let page: ScheduleUiPage;

  beforeEach(() => {
    page = new ScheduleUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
